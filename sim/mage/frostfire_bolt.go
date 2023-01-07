package mage

import (
	"strconv"
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (mage *Mage) registerFrostfireBoltSpell() {
	actionID := core.ActionID{SpellID: 47610}
	baseCost := .14 * mage.BaseMana
	spellCoeff := 3.0/3.5 + .05*float64(mage.Talents.EmpoweredFire)

	mage.FrostfireBolt = mage.RegisterSpell(core.SpellConfig{
		ActionID:     actionID,
		SpellSchool:  core.SpellSchoolFire | core.SpellSchoolFrost,
		ProcMask:     core.ProcMaskSpellDamage,
		Flags:        SpellFlagMage | BarrageSpells | HotStreakSpells,
		MissileSpeed: 25,
		ResourceType: stats.Mana,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost:     baseCost,
				GCD:      core.GCDDefault,
				CastTime: time.Second * 3,
			},
		},

		// FFB double-dips the bonus from Precision, so add it again here.
		BonusHitRating: float64(mage.Talents.Precision) * core.SpellHitRatingPerHitChance,
		BonusCritRating: 0 +
			core.TernaryFloat64(mage.HasSetBonus(ItemSetKhadgarsRegalia, 4), 5*core.CritRatingPerCritChance, 0) +
			core.TernaryFloat64(mage.HasMajorGlyph(proto.MageMajorGlyph_GlyphOfFrostfire), 2*core.CritRatingPerCritChance, 0) +
			float64(mage.Talents.CriticalMass)*2*core.CritRatingPerCritChance +
			float64(mage.Talents.ImprovedScorch)*1*core.CritRatingPerCritChance,
		DamageMultiplier: 1 *
			// Need to re-apply these frost talents because FFB only inherits the fire multipliers from core.
			(1 + .02*float64(mage.Talents.PiercingIce)) *
			(1 + .01*float64(mage.Talents.ArcticWinds)) *
			(1 + .04*float64(mage.Talents.TormentTheWeak)),
		DamageMultiplierAdditive: 1 +
			.02*float64(mage.Talents.FirePower) +
			.01*float64(mage.Talents.ChilledToTheBone) +
			core.TernaryFloat64(mage.HasMajorGlyph(proto.MageMajorGlyph_GlyphOfFrostfire), .02, 0),
		CritMultiplier:   mage.SpellCritMultiplier(1, mage.bonusCritDamage+float64(mage.Talents.IceShards)/3),
		ThreatMultiplier: 1 - 0.1*float64(mage.Talents.BurningSoul) - .04*float64(mage.Talents.FrostChanneling),

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := (722+838)/2 + spellCoeff*spell.SpellPower()

			// FFB also double-dips the bonus from debuff crit modifiers:
			//  1) Totem of Wrath / Heart of the Crusader / Master Poisoner
			//  2) Shadow Mastery / Improved Scorch / Winter's Chill
			// Luckily, each of those effects has its own dedicated pseudostat, so we
			// can implement this by modifying the crit of this spell before the calc.
			doubleDipBonus := target.PseudoStats.BonusCritRatingTaken + target.PseudoStats.BonusSpellCritRatingTaken
			spell.BonusCritRating += doubleDipBonus
			result := spell.CalcDamage(sim, target, baseDamage, spell.OutcomeMagicHitAndCrit)
			spell.BonusCritRating -= doubleDipBonus

			spell.WaitTravelTime(sim, func(sim *core.Simulation) {
				if result.Landed() {
					mage.FrostfireDot.Apply(sim)
				}
				spell.DealDamage(sim, result)
			})
		},
	})

	target := mage.CurrentTarget
	mage.FrostfireDot = core.NewDot(core.Dot{
		Spell: mage.RegisterSpell(core.SpellConfig{
			ActionID:    actionID,
			SpellSchool: core.SpellSchoolFire | core.SpellSchoolFrost,
			ProcMask:    core.ProcMaskSpellDamage,
			Flags:       SpellFlagMage | HotStreakSpells,

			DamageMultiplier: mage.FrostfireBolt.DamageMultiplier,
			DamageMultiplierAdditive: mage.FrostfireBolt.DamageMultiplierAdditive -
				core.TernaryFloat64(mage.HasMajorGlyph(proto.MageMajorGlyph_GlyphOfFrostfire), .02, 0),
			ThreatMultiplier: mage.FrostfireBolt.ThreatMultiplier,
		}),
		Aura: target.RegisterAura(core.Aura{
			Label:    "FrostfireBolt-" + strconv.Itoa(int(mage.Index)),
			ActionID: actionID,
		}),
		NumberOfTicks: 3,
		TickLength:    time.Second * 3,
		OnSnapshot: func(sim *core.Simulation, target *core.Unit, dot *core.Dot, _ bool) {
			dot.SnapshotBaseDamage = 90.0 / 3.0
			dot.SnapshotAttackerMultiplier = dot.Spell.AttackerDamageMultiplier(dot.Spell.Unit.AttackTables[target.UnitIndex])
		},
		OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
			dot.CalcAndDealPeriodicSnapshotDamage(sim, target, dot.OutcomeTick)
		},
	})
}
