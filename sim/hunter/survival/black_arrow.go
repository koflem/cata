package survival

import (
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/hunter"
)

func (svHunter *SurvivalHunter) registerBlackArrowSpell(timer *core.Timer) {
	if !svHunter.Talents.BlackArrow {
		return
	}

	actionID := core.ActionID{SpellID: 3674}

	svHunter.Hunter.BlackArrow = svHunter.Hunter.RegisterSpell(core.SpellConfig{
		ActionID:       actionID,
		SpellSchool:    core.SpellSchoolShadow,
		ProcMask:       core.ProcMaskRangedSpecial,
		ClassSpellMask: hunter.HunterSpellBlackArrow,
		Flags:          core.SpellFlagMeleeMetrics | core.SpellFlagAPL,
		FocusCost: core.FocusCostOptions{
			Cost: 35,
		},
		MissileSpeed: 40,
		MinRange:     5,
		MaxRange:     40,
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: time.Second,
			},
			IgnoreHaste: true, // Hunter GCD is locked at 1.5s
			CD: core.Cooldown{
				Timer:    timer,
				Duration: time.Second * 30,
			},
		},
		DamageMultiplier: 1,
		ThreatMultiplier: 1,
		CritMultiplier:   svHunter.DefaultSpellCritMultiplier(),

		Dot: core.DotConfig{
			Aura: core.Aura{
				Label: "Black Arrow Dot",
			},
			NumberOfTicks:       10,
			TickLength:          time.Second * 2,
			AffectedByCastSpeed: false,
			OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
				rap := dot.Spell.RangedAttackPower(target)
				baseDmg := 285.245 + (0.0665 * rap)
				dot.Spell.CalcAndDealPeriodicDamage(sim, target, baseDmg, dot.OutcomeTickPhysicalCrit)
			},
		},

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			result := spell.CalcOutcome(sim, target, spell.OutcomeRangedHit)

			spell.WaitTravelTime(sim, func(sim *core.Simulation) {
				if result.Landed() {
					spell.Dot(target).Apply(sim)
				}
			})
		},
	})
}
