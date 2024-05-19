package survival

import (
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/hunter"
)

func (svHunter *SurvivalHunter) registerExplosiveShotSpell() {
	actionID := core.ActionID{SpellID: 53301}
	minFlatDamage := 410.708 - (76.8024 / 2)
	maxFlatDamage := 410.708 + (76.8024 / 2)
	svHunter.Hunter.ExplosiveShot = svHunter.Hunter.RegisterSpell(core.SpellConfig{
		ActionID:       actionID,
		SpellSchool:    core.SpellSchoolFire,
		ClassSpellMask: hunter.HunterSpellExplosiveShot,
		ProcMask:       core.ProcMaskRangedSpecial,
		Flags:          core.SpellFlagMeleeMetrics | core.SpellFlagAPL,
		MissileSpeed:   40,
		MinRange:       5,
		MaxRange:       40,
		FocusCost: core.FocusCostOptions{
			Cost: 50,
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: time.Second,
			},
			IgnoreHaste: true,
			CD: core.Cooldown{
				Timer:    svHunter.NewTimer(),
				Duration: time.Second * 6,
			},
		},
		DamageMultiplier: 1,
		CritMultiplier:   svHunter.CritMultiplier(true, false, false),
		ThreatMultiplier: 1,

		Dot: core.DotConfig{
			Aura: core.Aura{
				Label: "Explosive Shot - Dot",
			},
			NumberOfTicks: 2,
			TickLength:    time.Second * 1,
			OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
				rap := dot.Spell.RangedAttackPower(target)
				baseDmg := sim.Roll(minFlatDamage, maxFlatDamage) + (0.273 * rap)
				dot.Spell.CalcAndDealPeriodicDamage(sim, target, baseDmg, dot.OutcomeTickPhysicalCrit)
			},
		},

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			result := spell.CalcOutcome(sim, target, spell.OutcomeRangedHit)

			spell.WaitTravelTime(sim, func(sim *core.Simulation) {
				if result.Landed() {
					spell.SpellMetrics[target.UnitIndex].Hits--
					dot := spell.Dot(target)
					dot.Apply(sim)
					dot.TickOnce(sim)
					spell.DealOutcome(sim, result)
				}
			})
		},
	})
}
