package druid

import (
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/core/proto"
)

func (druid *Druid) registerShredSpell() {
	flatDamageBonus := (666 +
		core.TernaryFloat64(druid.Ranged().ID == 29390, 88, 0) +
		core.TernaryFloat64(druid.Ranged().ID == 40713, 203, 0)) / 2.25

	hasGlyphofShred := druid.HasPrimeGlyph(proto.DruidPrimeGlyph_GlyphOfBloodletting)
	maxRipTicks := druid.MaxRipTicks()
	rendAndTearMod := []float64{1.0, 1.07, 1.13, 1.2}[druid.Talents.RendAndTear]

	druid.Shred = druid.RegisterSpell(Cat, core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 48572},
		SpellSchool: core.SpellSchoolPhysical,
		ProcMask:    core.ProcMaskMeleeMHSpecial,
		Flags:       core.SpellFlagMeleeMetrics | core.SpellFlagIncludeTargetBonusDamage | core.SpellFlagAPL,

		EnergyCost: core.EnergyCostOptions{
			Cost:   40,
			Refund: 0.8,
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: time.Second,
			},
			IgnoreHaste: true,
		},
		ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
			return !druid.PseudoStats.InFrontOfTarget
		},

		DamageMultiplier: 2.25,
		CritMultiplier:   druid.DefaultMeleeCritMultiplier(),
		ThreatMultiplier: 1,
		BonusCoefficient: 1,

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := flatDamageBonus +
				spell.Unit.MHWeaponDamage(sim, spell.MeleeAttackPower())

			modifier := 1.0
			if druid.BleedCategories.Get(target).AnyActive() {
				modifier += .3
			}

			ripDot := druid.Rip.Dot(target)
			if druid.AssumeBleedActive || ripDot.IsActive() || druid.Rake.Dot(target).IsActive() || druid.Lacerate.Dot(target).IsActive() {
				modifier *= rendAndTearMod
			}
			baseDamage *= modifier

			result := spell.CalcAndDealDamage(sim, target, baseDamage, spell.OutcomeMeleeSpecialHitAndCrit)

			if result.Landed() {
				druid.AddComboPoints(sim, 1, spell.ComboPointMetrics())

				if hasGlyphofShred && ripDot.IsActive() {
					if ripDot.NumberOfTicks < maxRipTicks {
						ripDot.NumberOfTicks += 1
						ripDot.RecomputeAuraDuration()
						ripDot.UpdateExpires(ripDot.ExpiresAt() + time.Second*2)
					}
				}
			} else {
				spell.IssueRefund(sim)
			}
		},
		ExpectedInitialDamage: func(sim *core.Simulation, target *core.Unit, spell *core.Spell, _ bool) *core.SpellResult {
			baseDamage := flatDamageBonus + spell.Unit.AutoAttacks.MH().CalculateAverageWeaponDamage(spell.MeleeAttackPower())

			modifier := 1.0
			if druid.BleedCategories.Get(target).AnyActive() {
				modifier += .3
			}
			if druid.AssumeBleedActive || druid.Rip.Dot(target).IsActive() || druid.Rake.Dot(target).IsActive() || druid.Lacerate.Dot(target).IsActive() {
				modifier *= rendAndTearMod
			}
			baseDamage *= modifier
			baseres := spell.CalcDamage(sim, target, baseDamage, spell.OutcomeExpectedMagicAlwaysHit)

			attackTable := spell.Unit.AttackTables[target.UnitIndex]
			critChance := spell.PhysicalCritChance(attackTable)
			critMod := (critChance * (spell.CritMultiplier - 1))

			baseres.Damage *= (1 + critMod)

			return baseres
		},
	})
}

func (druid *Druid) CanShred() bool {
	return !druid.PseudoStats.InFrontOfTarget && druid.CurrentEnergy() >= druid.CurrentShredCost()
}

func (druid *Druid) CurrentShredCost() float64 {
	return druid.Shred.ApplyCostModifiers(druid.Shred.DefaultCast.Cost)
}
