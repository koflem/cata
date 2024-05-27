import{l as e,o as t,q as s,s as a,O as n,a0 as o,t as l,R as i,w as r,J as p}from"./preset_utils-BIXRQlRu.chunk.js";import{a2 as c,G as d,bf as u,bg as m,bk as h,bi as g,a7 as I,aa as S,aC as f,a8 as v,a9 as O,a as y,ac as P,ad as b,ae as C,af as T,ag as A,ah as G,ai as k,S as H,F as M,R,ak as w}from"./detailed_results-CtNpvLCA.chunk.js";import{A as E,M as L,O as D,T as x,a as B}from"./inputs-BW6eC9pa.chunk.js";const F=e({fieldName:"honorAmongThievesCritRate",label:"Honor of Thieves Crit Rate",labelTooltip:"Number of crits other group members generate within 100 seconds",showWhen:e=>e.getTalents().honorAmongThieves>0}),j={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1784}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:5171}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:1943}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:1943}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:1943}}},rhs:{const:{val:"6"}}}}]}},castSpell:{spellId:{spellId:2098}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:73651}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:73651}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:5171}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:2098}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:89775}}}}},{not:{val:{auraIsActive:{auraId:{spellId:51713}}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}}]}}]}}]}},castSpell:{spellId:{spellId:16511}}}},{action:{condition:{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:8676}}}]}},castSpell:{spellId:{spellId:36554}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}}]}},castSpell:{spellId:{spellId:51713}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},{not:{val:{auraIsActive:{auraId:{spellId:51713}}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},castSpell:{spellId:{spellId:14183}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"95"}}}}]}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51713}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:8676}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"95"}}}}]}}]}},castSpell:{spellId:{spellId:53}}}},{action:{condition:{not:{val:{spellIsReady:{spellId:{spellId:1856}}}}},castSpell:{spellId:{spellId:14185}}}}]},U=t("P1 Sub",{items:[{id:65241,enchant:4209,gems:[68778,52220],reforging:145},{id:69880,randomSuffix:-135,reforging:146},{id:65243,enchant:4204,gems:[52220],reforging:146},{id:69884,randomSuffix:-135,enchant:1099,reforging:146},{id:65239,enchant:4102,gems:[52212,52220]},{id:65050,enchant:4258,gems:[0],reforging:167},{id:65240,enchant:3222,gems:[52212,0],reforging:139},{id:60231,gems:[52220,52212,52212],reforging:167},{id:65381,randomSuffix:-200,enchant:4126,gems:[52212,52220],reforging:144},{id:65144,enchant:4105,gems:[52212],reforging:168},{id:65367,randomSuffix:-135,reforging:146},{id:65082,reforging:145},{id:65140},{id:65026},{id:65081,enchant:4099,reforging:167},{id:68600,enchant:4099,reforging:146},{id:65095,reforging:146}]}),W=s("Subtlety",j),q={name:"Subtlety",data:c.create({talentsString:"023003-002-0332031321310012321",glyphs:d.create({prime1:u.GlyphOfBackstab,prime2:u.GlyphOfHemorrhage,prime3:u.GlyphOfSliceAndDice,major1:m.GlyphOfTricksOfTheTrade,major2:m.GlyphOfSprint,major3:m.GlyphOfFeint})})},z=h.create({classOptions:{mhImbue:g.InstantPoison,ohImbue:g.DeadlyPoison,thImbue:g.WoundPoison,applyPoisonsManually:!1,startingOverkillDuration:20,vanishBreakTime:.1},honorAmongThievesCritRate:400}),N=I.create({defaultPotion:S.PotionOfTheTolvir,prepopPotion:S.PotionOfTheTolvir,defaultConjured:f.ConjuredRogueThistleTea,flask:v.FlaskOfTheWinds,food:O.FoodSkeweredEel}),V=a(H.SpecSubtletyRogue,{cssClass:"subtlety-rogue-sim-ui",cssScheme:y.getCssClass(y.Rogue),knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],epStats:[P.StatAgility,P.StatStrength,P.StatAttackPower,P.StatMeleeHit,P.StatMeleeCrit,P.StatSpellHit,P.StatSpellCrit,P.StatMeleeHaste,P.StatMastery,P.StatExpertise],epPseudoStats:[b.PseudoStatMainHandDps,b.PseudoStatOffHandDps],epReferenceStat:P.StatAttackPower,displayStats:[P.StatHealth,P.StatStamina,P.StatAgility,P.StatStrength,P.StatAttackPower,P.StatMeleeHit,P.StatSpellHit,P.StatMeleeCrit,P.StatSpellCrit,P.StatMeleeHaste,P.StatMastery,P.StatExpertise],defaults:{gear:U.gear,epWeights:C.fromMap({[P.StatAgility]:3.7,[P.StatStrength]:1.05,[P.StatAttackPower]:1,[P.StatSpellCrit]:.06,[P.StatSpellHit]:.36,[P.StatMeleeHit]:.77,[P.StatMeleeCrit]:1.04,[P.StatMeleeHaste]:1.27,[P.StatMastery]:.79,[P.StatExpertise]:1.33},{[b.PseudoStatMainHandDps]:7,[b.PseudoStatOffHandDps]:1}),consumes:N,talents:q.data,specOptions:z,raidBuffs:T.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:A.create({}),individualBuffs:G.create({}),debuffs:k.create({mangle:!0,sunderArmor:!0,shadowAndFlame:!0,earthAndMoon:!0,bloodFrenzy:!0})},playerInputs:{inputs:[E()]},playerIconInputs:[L(),D(),x()],includeBuffDebuffInputs:[n,o,l,i],excludeBuffDebuffInputs:[],otherInputs:{inputs:[B(),F,r]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[q],rotations:[W],gear:[U]},autoRotation:e=>{e.sim.encounter.targets.length;return W.rotation.rotation},raidSimPresets:[{spec:H.SpecSubtletyRogue,talents:q.data,specOptions:z,consumes:N,defaultFactionRaces:{[M.Unknown]:R.RaceUnknown,[M.Alliance]:R.RaceHuman,[M.Horde]:R.RaceOrc},defaultGear:{[M.Unknown]:{},[M.Alliance]:{1:U.gear},[M.Horde]:{1:U.gear}}}]});class _ extends p{constructor(e,t){super(e,t,V),this.player.changeEmitter.on((e=>{const t=this.player.getSpecOptions(),s=this.sim.encounter;if(!t.classOptions.applyPoisonsManually){const e=this.player.getGear().getEquippedItem(w.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(w.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===e||void 0===a)return;s.targets.length>3?(t.classOptions.mhImbue=g.InstantPoison,t.classOptions.ohImbue=g.InstantPoison):e<=a?(t.classOptions.mhImbue=g.DeadlyPoison,t.classOptions.ohImbue=g.InstantPoison):(t.classOptions.mhImbue=g.InstantPoison,t.classOptions.ohImbue=g.DeadlyPoison)}this.player.setSpecOptions(e,t)})),this.sim.encounter.changeEmitter.on((e=>{const t=this.player.getSpecOptions(),s=this.sim.encounter;if(!t.classOptions.applyPoisonsManually){const e=this.player.getGear().getEquippedItem(w.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(w.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===e||void 0===a)return;s.targets.length>3?(t.classOptions.mhImbue=g.InstantPoison,t.classOptions.ohImbue=g.InstantPoison):e<=a?(t.classOptions.mhImbue=g.DeadlyPoison,t.classOptions.ohImbue=g.InstantPoison):(t.classOptions.mhImbue=g.InstantPoison,t.classOptions.ohImbue=g.DeadlyPoison)}this.player.setSpecOptions(e,t)}))}}export{_ as S};
