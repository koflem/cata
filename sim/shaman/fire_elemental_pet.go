package shaman

import (
	"math"
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/core/proto"
	"github.com/wowsims/cata/sim/core/stats"
)

type FireElemental struct {
	core.Pet

	FireBlast *core.Spell
	FireNova  *core.Spell

	maxFireBlastCasts int32
	maxFireNovaCasts  int32

	FireShieldAura *core.Aura

	shamanOwner *Shaman
}

func (shaman *Shaman) NewFireElemental(bonusSpellPower float64) *FireElemental {
	fireElemental := &FireElemental{
		Pet:               core.NewPet("Greater Fire Elemental", &shaman.Character, fireElementalPetBaseStats, shaman.fireElementalStatInheritance(), false, true),
		shamanOwner:       shaman,
		maxFireBlastCasts: 15,
		maxFireNovaCasts:  15,
	}
	fireElemental.EnableManaBar()
	fireElemental.AddStatDependency(stats.Intellect, stats.SpellPower, 1.0)
	fireElemental.AddStatDependency(stats.Intellect, stats.AttackPower, 7.0) // 1.0 * 7
	fireElemental.AddStat(stats.SpellPower, -10)
	fireElemental.AddStat(stats.AttackPower, -70) // -10 * 7
	fireElemental.EnableAutoAttacks(fireElemental, core.AutoAttackOptions{
		MainHand: core.Weapon{
			BaseDamageMin:  429, //Estimated from beta testing
			BaseDamageMax:  463, //Estimated from beta testing
			SwingSpeed:     2,
			CritMultiplier: 2.66, //Estimated from beta testing
			SpellSchool:    core.SpellSchoolFire,
		},
		AutoSwingMelee: true,
	})
	fireElemental.AutoAttacks.MHConfig().BonusCoefficient = 0

	if bonusSpellPower > 0 {
		fireElemental.AddStat(stats.SpellPower, float64(bonusSpellPower)*0.5883)
		fireElemental.AddStat(stats.AttackPower, float64(bonusSpellPower)*4.9) // 0.7*7
	}

	if shaman.Race == proto.Race_RaceDraenei {
		fireElemental.AddStats(stats.Stats{
			stats.MeleeHit:  -core.MeleeHitRatingPerHitChance,
			stats.SpellHit:  -core.SpellHitRatingPerHitChance,
			stats.Expertise: math.Floor(-core.SpellHitRatingPerHitChance * 0.79),
		})
	}

	fireElemental.OnPetEnable = fireElemental.enable
	fireElemental.OnPetDisable = fireElemental.disable

	shaman.AddPet(fireElemental)

	return fireElemental
}

func (fireElemental *FireElemental) enable(sim *core.Simulation) {
	fireElemental.FireShieldAura.Activate(sim)
}

func (fireElemental *FireElemental) disable(sim *core.Simulation) {
	fireElemental.FireShieldAura.Deactivate(sim)
}

func (fireElemental *FireElemental) GetPet() *core.Pet {
	return &fireElemental.Pet
}

func (fireElemental *FireElemental) Initialize() {

	fireElemental.registerFireBlast()
	fireElemental.registerFireNova()
	fireElemental.registerFireShieldAura()
}

func (fireElemental *FireElemental) Reset(_ *core.Simulation) {

}

func (fireElemental *FireElemental) ExecuteCustomRotation(sim *core.Simulation) {
	/*
		TODO this is a little dirty, can probably clean this up, the rotation might go through some more overhauls,
		the random AI is hard to emulate.
	*/
	target := fireElemental.CurrentTarget
	fireBlastCasts := fireElemental.FireBlast.SpellMetrics[0].Casts
	fireNovaCasts := fireElemental.FireNova.SpellMetrics[0].Casts

	if fireBlastCasts == fireElemental.maxFireBlastCasts && fireNovaCasts == fireElemental.maxFireNovaCasts {
		return
	}

	if fireElemental.FireNova.DefaultCast.Cost > fireElemental.CurrentMana() {
		return
	}

	random := sim.RandomFloat("Fire Elemental Pet Spell")

	//Melee the other 30%
	if random >= .65 {
		if !fireElemental.TryCast(sim, target, fireElemental.FireNova, fireElemental.maxFireNovaCasts) {
			fireElemental.TryCast(sim, target, fireElemental.FireBlast, fireElemental.maxFireBlastCasts)
		}
	} else if random >= .35 {
		if !fireElemental.TryCast(sim, target, fireElemental.FireBlast, fireElemental.maxFireBlastCasts) {
			fireElemental.TryCast(sim, target, fireElemental.FireNova, fireElemental.maxFireNovaCasts)
		}
	}

	if !fireElemental.GCD.IsReady(sim) {
		return
	}

	fireElemental.ExtendGCDUntil(sim, sim.CurrentTime+time.Second)
}

func (fireElemental *FireElemental) TryCast(sim *core.Simulation, target *core.Unit, spell *core.Spell, maxCastCount int32) bool {
	if maxCastCount == spell.SpellMetrics[0].Casts {
		return false
	}

	if !spell.Cast(sim, target) {
		return false
	}
	// all spell casts reset the elemental's swing timer
	fireElemental.AutoAttacks.StopMeleeUntil(sim, sim.CurrentTime+spell.CurCast.CastTime, false)
	return true
}

var fireElementalPetBaseStats = stats.Stats{
	stats.Mana:        6803,
	stats.Health:      4903, //Estimated from beta testing
	stats.Intellect:   157,
	stats.Stamina:     0,
	stats.SpellPower:  0, //Estimated
	stats.AttackPower: 0, //Estimated

	// TODO : Log digging shows ~2% melee crit chance, and ~2% spell hit chance + 5% spell crit debuff
	stats.MeleeCrit: (5 + 1.8) * core.CritRatingPerCritChance,
	stats.SpellCrit: (5 + 1.8) * core.CritRatingPerCritChance,
}

func (shaman *Shaman) fireElementalStatInheritance() core.PetStatInheritance {
	return func(ownerStats stats.Stats) stats.Stats {
		ownerSpellHitChance := ownerStats[stats.SpellHit] / core.SpellHitRatingPerHitChance
		spellHitRatingFromOwner := ownerSpellHitChance * core.SpellHitRatingPerHitChance
		meleeHitRatingFromOwner := ownerSpellHitChance / 17 * 8 * core.MeleeHitRatingPerHitChance

		return stats.Stats{
			stats.Stamina:     ownerStats[stats.Stamina] * 0.80,      //Estimated from beta testing
			stats.Intellect:   ownerStats[stats.Intellect] * 0.3198,  //Estimated from beta testing
			stats.SpellPower:  ownerStats[stats.SpellPower] * 0.5883, //Estimated from beta testing
			stats.AttackPower: ownerStats[stats.SpellPower] * 4.9,    // 0.7*7 Estimated from beta testing

			stats.MeleeHit: meleeHitRatingFromOwner,
			stats.SpellHit: spellHitRatingFromOwner,

			/*
				TODO working on figuring this out, getting close need more trials. will need to remove specific buffs,
				ie does not gain the benefit from draenei buff.
				Scaled linearly to reach Expertise Soft Cap (26) when Shaman is at 17% Spell Hit Cap
			*/
			stats.Expertise: math.Floor(ownerSpellHitChance / 17 * 26 * core.ExpertisePerQuarterPercentReduction),
		}
	}
}
