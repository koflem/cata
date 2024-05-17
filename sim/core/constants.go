package core

import (
	"time"
)

const CharacterLevel = 85

const GCDMin = time.Second * 1
const GCDDefault = time.Millisecond * 1500
const MaxSpellQueueWindow = time.Millisecond * 400
const MaxMeleeRange = 5.0 // in yards

const DefaultAttackPowerPerDPS = 14.0

// Updated based on formulas supplied by InDebt on WoWSims Discord
const EnemyAutoAttackAPCoefficient = 1.0 / (14.0 * 177.0)

const AverageMagicPartialResistMultiplier = 0.94

// IDs for items used in core
const (
	ItemIDAtieshMage            = 22589
	ItemIDAtieshWarlock         = 22630
	ItemIDBraidedEterniumChain  = 24114
	ItemIDChainOfTheTwilightOwl = 24121
	ItemIDEyeOfTheNight         = 24116
	ItemIDJadePendantOfBlasting = 20966
	ItemIDTheLightningCapacitor = 28785
)

type Hand bool

const MainHand Hand = true
const OffHand Hand = false

const CombatTableCoverageCap = 1.024 // 102.4% chance to avoid an attack
