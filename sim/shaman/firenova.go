package shaman

import (
	"time"

	"github.com/wowsims/cata/sim/core"
)

func (shaman *Shaman) registerFireNovaSpell() {
	shaman.FireNova = shaman.RegisterSpell(core.SpellConfig{
		ActionID:       core.ActionID{SpellID: 1535},
		SpellSchool:    core.SpellSchoolFire,
		ProcMask:       core.ProcMaskSpellDamage,
		Flags:          SpellFlagFocusable | core.SpellFlagAPL,
		ClassSpellMask: SpellMaskFireNova,
		ManaCost: core.ManaCostOptions{
			BaseCost:   0.22,
			Multiplier: 1 - 0.05*float64(shaman.Talents.Convection) - shaman.GetMentalQuicknessBonus(),
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: core.GCDDefault,
			},
			CD: core.Cooldown{
				Timer:    shaman.NewTimer(),
				Duration: time.Second * time.Duration(4),
			},
		},

		DamageMultiplier: 1,
		CritMultiplier:   shaman.DefaultSpellCritMultiplier(),
		ThreatMultiplier: 1,
		BonusCoefficient: 0.164,
		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			results := make([][]*core.SpellResult, shaman.Env.GetNumTargets())
			baseDamage := shaman.ClassSpellScaling * 0.78500002623
			for i, aoeTarget := range sim.Encounter.TargetUnits {
				if shaman.FlameShockDot.Dot(aoeTarget).IsActive() {
					results[i] = make([]*core.SpellResult, shaman.Env.GetNumTargets())
					for j, newTarget := range sim.Encounter.TargetUnits {
						if newTarget != aoeTarget {
							results[i][j] = spell.CalcDamage(sim, newTarget, baseDamage, spell.OutcomeMagicHitAndCrit)
						}
					}
				}
			}
			for i, aoeTarget := range sim.Encounter.TargetUnits {
				if shaman.FlameShockDot.Dot(aoeTarget).IsActive() {
					for j, newTarget := range sim.Encounter.TargetUnits {
						if newTarget != aoeTarget {
							spell.DealDamage(sim, results[i][j])
						}
					}
				}
			}
		},
		ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
			for _, aoeTarget := range sim.Encounter.TargetUnits {
				if shaman.FlameShockDot.Dot(aoeTarget).IsActive() {
					return true
				}
			}
			return false
		},
	})
}
