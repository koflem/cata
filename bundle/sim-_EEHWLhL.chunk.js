import{o as e,q as l,s,a7 as a,R as t,U as n,N as o,O as p,$ as i,Q as d,af as c,a4 as r,w as I,V as m,G as u,T as S,aa as g,J as h}from"./preset_utils-BIXRQlRu.chunk.js";import{a2 as f,G as y,bz as O,bA as v,bB as T,bE as k,bD as A,a7 as b,aa as P,a8 as w,a9 as q,ab as R,af as C,ah as G,ai as F,b as D,a as H,ac as M,ae as V,ag as B,ak as L,S as x,F as j,R as N}from"./detailed_results-CtNpvLCA.chunk.js";import{P as W,D as U,a as E}from"./inputs-ByyEQaNh.chunk.js";const z={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:30146}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:77801}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{spellId:74434}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{spellId:691}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:59672}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:686}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:348}}},doAtValue:{const:{val:"-0.7s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:74241}}},{auraIsActive:{auraId:{spellId:75170}}},{auraIsActive:{auraId:{spellId:92318}}},{auraIsActive:{auraId:{spellId:89091}}}]}},sequence:{name:"doomguard",actions:[{castSpell:{spellId:{spellId:33697}}},{castSpell:{spellId:{spellId:82174}}},{castSpell:{spellId:{spellId:18540}}}]}}},{action:{condition:{and:{}},sequence:{name:"burst",actions:[{castSpell:{spellId:{spellId:77801}}},{castSpell:{spellId:{spellId:74434}}},{castSpell:{spellId:{spellId:691}}},{castSpell:{spellId:{spellId:59672}}},{castSpell:{spellId:{spellId:603}}},{castSpell:{spellId:{spellId:348}}},{castSpell:{spellId:{spellId:172}}}]}}},{action:{condition:{and:{vals:[{sequenceIsComplete:{sequenceName:"burst"}},{spellCanCast:{spellId:{spellId:77801}}},{spellCanCast:{spellId:{spellId:59672}}}]}},resetSequence:{sequenceName:"burst"}}},{action:{condition:{auraIsActive:{auraId:{spellId:59672}}},castSpell:{spellId:{itemId:58091}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentMana:{}},rhs:{const:{val:"67000"}}}},{cmp:{op:"OpLe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:1454}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{const:{val:"61s"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"60s"}}}}]}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{const:{val:"121s"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"60s"}}}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{spellCastTime:{spellId:{spellId:30146}}}}},{cmp:{op:"OpLe",lhs:{spellCpm:{spellId:{spellId:30146}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:30146}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:348}}},rhs:{dotTickFrequency:{spellId:{spellId:348,tag:1}}}}}}},castSpell:{spellId:{spellId:348}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:172}}},rhs:{dotTickFrequency:{spellId:{spellId:172}}}}},castSpell:{spellId:{spellId:172}}}},{action:{condition:{spellIsReady:{spellId:{spellId:71521}}},castSpell:{spellId:{spellId:71521}}}},{action:{condition:{auraIsActive:{auraId:{spellId:89937}}},castSpell:{spellId:{spellId:77799}}}},{action:{condition:{spellIsReady:{spellId:{spellId:47897}}},castSpell:{spellId:{spellId:47897}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:603}}},rhs:{dotTickFrequency:{spellId:{spellId:603}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{math:{op:"OpMul",lhs:{dotTickFrequency:{spellId:{spellId:603}}},rhs:{const:{val:"2"}}}}}}]}},castSpell:{spellId:{spellId:603}}}},{action:{castSpell:{spellId:{spellId:50589}}}},{action:{condition:{auraIsActive:{auraId:{spellId:17941}}},castSpell:{spellId:{spellId:686}}}},{action:{condition:{auraIsActive:{auraId:{spellId:71165}}},castSpell:{spellId:{spellId:29722}}}},{action:{condition:{auraIsActive:{auraId:{spellId:63167}}},castSpell:{spellId:{spellId:6353}}}},{action:{castSpell:{spellId:{spellId:686}}}},{action:{castSpell:{spellId:{spellId:1454}}}}]},_={items:[{id:60237,enchant:4207,gems:[68780,52217],reforging:151},{id:69882,randomSuffix:-114},{id:65263,enchant:4200,gems:[52207]},{id:60232,enchant:4115,gems:[52208]},{id:65262,enchant:4102,gems:[52207,52217],reforging:144},{id:65138,enchant:4257,gems:[0],reforging:151},{id:65259,enchant:4107,gems:[52207,0],reforging:144},{id:65034,gems:[52207,52207],reforging:147},{id:65261,enchant:4112,gems:[52208,52207],reforging:154},{id:65069,enchant:4104,gems:[52207],reforging:151},{id:65123,reforging:151},{id:65373,randomSuffix:-114,reforging:167},{id:65053,reforging:144},{id:62047,reforging:165},{id:68132,randomSuffix:-114,enchant:4097},{id:65133,enchant:4091},{id:59460}]},J={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50658,gems:[40153]},{id:51234,enchant:3810,gems:[40153]},{id:50668,enchant:3722,gems:[40133]},{id:50717,enchant:1144,gems:[40133,40113,40153]},{id:50686,enchant:2332,gems:[40133,0]},{id:51230,enchant:3604,gems:[40133,0]},{id:50702,gems:[40153,40113,40113]},{id:51232,enchant:3872,gems:[40113,40113]},{id:50699,enchant:4223,gems:[40133,40113]},{id:50398,gems:[40153]},{id:50636,gems:[40153]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50635},{id:50631,gems:[40153]}]},K=e("Pre-raid Preset",{items:[]}),Q=e("P1 Preset",_),Z=e("P4 Wrath",J,{tooltip:"This gear preset is inspired from Zephan's Affliction guide: https://www.warcrafttavern.com/wotlk/guides/pve-affliction-warlock/"}),$=l("Demo",z),X={name:"Demonology",data:f.create({talentsString:"-3312222300310212211-33202",glyphs:y.create({prime1:O.GlyphOfImmolate,prime2:O.GlyphOfCorruption,prime3:O.GlyphOfMetamorphosis,major1:v.GlyphOfShadowBolt,major2:v.GlyphOfLifeTap,major3:v.GlyphOfSoulLink,minor1:T.GlyphOfDrainSoul,minor2:T.GlyphOfRitualOfSouls,minor3:T.GlyphOfUnendingBreath})})},Y=k.create({classOptions:{summon:A.Felguard,detonateSeed:!1,prepullMastery:0}}),ee=b.create({defaultPotion:P.VolcanicPotion,prepopPotion:P.VolcanicPotion,flask:w.FlaskOfTheDraconicMind,food:q.FoodSeafoodFeast,tinkerHands:R.TinkerHandsSynapseSprings,explosiveBigDaddy:!1}),le=C.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),se=G.create({vampiricTouch:!0,darkIntent:!0}),ae=F.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!1,demoralizingShout:!0,frostFever:!0,judgement:!0}),te={distanceFromTarget:25,profession1:D.Engineering,profession2:D.Tailoring,channelClipDelay:150,duration:180,durationVariation:30,darkIntentUptime:90},ne=s(x.SpecDemonologyWarlock,{cssClass:"demonology-warlock-sim-ui",cssScheme:H.getCssClass(H.Warlock),knownIssues:[],epStats:[M.StatIntellect,M.StatSpellPower,M.StatSpellHit,M.StatSpellCrit,M.StatSpellHaste,M.StatMastery],epReferenceStat:M.StatSpellPower,displayStats:[M.StatHealth,M.StatMana,M.StatStamina,M.StatIntellect,M.StatSpellPower,M.StatSpellHit,M.StatSpellCrit,M.StatSpellHaste,M.StatMastery,M.StatMP5],defaults:{gear:Q.gear,epWeights:V.fromMap({[M.StatIntellect]:.18,[M.StatSpellPower]:1,[M.StatSpellHit]:.93,[M.StatSpellCrit]:.53,[M.StatSpellHaste]:.81,[M.StatMastery]:1}),consumes:ee,talents:X.data,specOptions:Y,raidBuffs:le,partyBuffs:B.create({}),individualBuffs:se,debuffs:ae,other:te},playerIconInputs:[W()],includeBuffDebuffInputs:[a,t,n,o,p,i,d,c,r],excludeBuffDebuffInputs:[],petConsumeInputs:[],otherInputs:{inputs:[U(),E,I,m,u,S,g]},itemSwapSlots:[L.ItemSlotMainHand,L.ItemSlotOffHand,L.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{talents:[X],rotations:[$],gear:[K,Q,Z]},autoRotation:e=>$.rotation.rotation,raidSimPresets:[{spec:x.SpecDemonologyWarlock,talents:X.data,specOptions:Y,consumes:ee,defaultFactionRaces:{[j.Unknown]:N.RaceUnknown,[j.Alliance]:N.RaceHuman,[j.Horde]:N.RaceOrc},defaultGear:{[j.Unknown]:{},[j.Alliance]:{1:K.gear,2:Q.gear,3:Z.gear},[j.Horde]:{1:K.gear,2:Q.gear,3:Z.gear}},otherDefaults:te}]});class oe extends h{constructor(e,l){super(e,l,ne)}}export{oe as D};
