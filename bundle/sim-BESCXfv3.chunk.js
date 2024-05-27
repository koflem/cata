import{n as e,X as t,o as a,Z as l,q as s,a5 as n,a2 as o,a3 as i,s as p,a4 as r,t as d,w as c,V as g,T as S,F as u,G as m,J as I}from"./preset_utils-BIXRQlRu.chunk.js";import{aH as h,aI as f,T as v,aJ as A,S as T,a2 as y,G as O,aK as M,aL as P,aM as R,H as k,a7 as w,aa as E,a8 as C,a9 as x,b,ac as H,ad as D,ae as W,ak as G,R as F,aN as J,aO as L,aP as V,af as B,ag as j,ah as N,ai as U,ax as _,ay as q,az as z,F as K}from"./detailed_results-CtNpvLCA.chunk.js";import{s as X}from"./apl_utils-Yl11g1HH.chunk.js";import{P as Z,a as $}from"./inputs-ChMwkNW3.chunk.js";const Q={inputs:[e({fieldName:"type",label:"Type",values:[{name:"Single Target",value:h.SingleTarget},{name:"AOE",value:h.Aoe}]}),e({fieldName:"sting",label:"Sting",labelTooltip:"Maintains the selected Sting on the primary target.",values:[{name:"None",value:f.NoSting},{name:"Scorpid Sting",value:f.ScorpidSting},{name:"Serpent Sting",value:f.SerpentSting}],showWhen:e=>e.getSimpleRotation().type==h.SingleTarget}),t({fieldName:"trapWeave",label:"Trap Weave",labelTooltip:"Uses Explosive Trap at appropriate times. Note that selecting this will disable Black Arrow because they share a CD."}),t({fieldName:"multiDotSerpentSting",label:"Multi-Dot Serpent Sting",labelTooltip:"Casts Serpent Sting on multiple targets",changeEmitter:e=>v.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},Y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:13812}}}},{action:{castSpell:{spellId:{spellId:2643}}}},{action:{castSpell:{spellId:{spellId:56641}}}}]},ee={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:13812}}},doAtValue:{const:{val:"-25s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:13165}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1130}}},doAtValue:{const:{val:"-11s"}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLe",lhs:{spellCastTime:{spellId:{spellId:19434}}},rhs:{const:{val:"1s"}}}},{isExecutePhase:{threshold:"E90"}}]}},castSpell:{spellId:{spellId:19434}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:1978}}}}},{not:{val:{isExecutePhase:{threshold:"E90"}}}}]}},castSpell:{spellId:{spellId:1978}}}},{action:{condition:{and:{vals:[{not:{val:{isExecutePhase:{threshold:"E90"}}}}]}},castSpell:{spellId:{spellId:53209}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:53221,tag:1}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:53221,tag:1}}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:56641}}}},{action:{condition:{spellCanCast:{spellId:{spellId:53351}}},castSpell:{spellId:{spellId:53351}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGe",lhs:{currentFocus:{}},rhs:{const:{val:"66"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:53209}}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:3044}}}},{action:{castSpell:{spellId:{spellId:56641}}}}]},te={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:13812}}},doAtValue:{const:{val:"-25s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:13165}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1130}}},doAtValue:{const:{val:"-11s"}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLe",lhs:{spellCastTime:{spellId:{spellId:19434}}},rhs:{const:{val:"1s"}}}},{isExecutePhase:{threshold:"E90"}}]}},castSpell:{spellId:{spellId:19434}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:1978}}}}},{not:{val:{isExecutePhase:{threshold:"E90"}}}}]}},castSpell:{spellId:{spellId:1978}}}},{action:{condition:{and:{vals:[{not:{val:{isExecutePhase:{threshold:"E90"}}}}]}},castSpell:{spellId:{spellId:53209}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:53221,tag:1}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:53221,tag:1}}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:56641}}}},{action:{condition:{spellCanCast:{spellId:{spellId:53351}}},castSpell:{spellId:{spellId:53351}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGe",lhs:{currentFocus:{}},rhs:{const:{val:"66"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:53209}}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:3044}}}},{action:{castSpell:{spellId:{spellId:56641}}}}]},ae={items:[{id:65206,enchant:4209,gems:[68778,52209],reforging:165},{id:69880,randomSuffix:-135,reforging:151},{id:65208,enchant:4204,gems:[52212],reforging:166},{id:69884,randomSuffix:-135,enchant:1099},{id:65204,enchant:4102,gems:[52212,52220]},{id:65028,enchant:4258,gems:[52212]},{id:65205,enchant:3222,gems:[52212,52212]},{id:65132,gems:[52212,52212]},{id:60230,enchant:3823,gems:[52212,52220,52209]},{id:65063,enchant:4105,gems:[52220]},{id:65082},{id:65367,randomSuffix:-133},{id:65140},{id:65026},{id:65139,enchant:4227,reforging:167},{},{id:65058,enchant:4175,reforging:167}]},le=a("MM PreRaid Preset",{items:[{id:59456,enchant:4209,gems:[68778,59478,59493]},{id:52350,gems:[52212]},{id:64712,enchant:4204,gems:[52212],reforging:152},{id:56315,enchant:1099},{id:56564,enchant:4063,gems:[52258],reforging:152},{id:63479,enchant:4071,gems:[0]},{id:64709,enchant:3222,gems:[52212,0],reforging:137},{id:56539,gems:[52212,52212],reforging:165},{id:56386,enchant:4126,gems:[52258,52258]},{id:62385,enchant:4076,gems:[52212],reforging:166},{id:52348,gems:[52212],reforging:167},{id:62362,reforging:166},{id:68709,reforging:166},{id:56328,reforging:137},{id:55066,enchant:4227,reforging:165},{},{id:59367,enchant:4175,gems:[52212],reforging:151}]}),se=a("MM P1 Preset",ae),ne=A.create({type:h.SingleTarget,sting:f.SerpentSting,trapWeave:!0,multiDotSerpentSting:!0,allowExplosiveShotDownrank:!0}),oe=l("Simple Default",T.SpecMarksmanshipHunter,ne),ie=s("MM",ee),pe=s("MM (Advanced)",te),re=s("AOE",Y),de={name:"Marksman",data:y.create({talentsString:"032002-2302320232120231201-03",glyphs:O.create({prime1:M.GlyphOfArcaneShot,prime2:M.GlyphOfRapidFire,prime3:M.GlyphOfSteadyShot,major1:P.GlyphOfDisengage,major2:P.GlyphOfRaptorStrike,major3:P.GlyphOfTrapLauncher})})},ce=R.create({classOptions:{useHuntersMark:!0,petType:k.Wolf,petTalents:n,petUptime:1}}),ge=w.create({defaultPotion:E.PotionOfTheTolvir,prepopPotion:E.PotionOfTheTolvir,flask:C.FlaskOfTheWinds,defaultConjured:o.value,food:x.FoodSeafoodFeast,tinkerHands:i.value}),Se={distanceFromTarget:24,duration:240,durationVariation:20,profession1:b.Engineering,profession2:b.Jewelcrafting},ue=p(T.SpecMarksmanshipHunter,{cssClass:"marksmanship-hunter-sim-ui",cssScheme:"hunter",knownIssues:[],warnings:[],epStats:[H.StatStamina,H.StatIntellect,H.StatAgility,H.StatRangedAttackPower,H.StatMeleeHit,H.StatMeleeCrit,H.StatMeleeHaste,H.StatMP5,H.StatMastery],epPseudoStats:[D.PseudoStatRangedDps],epReferenceStat:H.StatRangedAttackPower,displayStats:[H.StatHealth,H.StatStamina,H.StatAgility,H.StatRangedAttackPower,H.StatMeleeHit,H.StatMeleeCrit,H.StatMeleeHaste,H.StatMastery],modifyDisplayStats:e=>{let t=new W;const a=e.getEquippedItem(G.ItemSlotRanged);return 3608==a?.enchant?.effectId&&(t=t.addStat(H.StatMeleeCrit,40)),e.getRace()==F.RaceDwarf&&a?.item.rangedWeaponType==J.RangedWeaponTypeGun&&(t=t.addStat(H.StatMeleeCrit,1*L)),e.getRace()==F.RaceTroll&&a?.item.rangedWeaponType==J.RangedWeaponTypeBow&&(t=t.addStat(H.StatMeleeCrit,1*L)),e.getTalents().pathing&&(t=t.addStat(H.StatMeleeHaste,e.getTalents().pathing*V)),{talents:t}},defaults:{gear:se.gear,epWeights:W.fromMap({[H.StatStamina]:.5,[H.StatAgility]:2.65,[H.StatIntellect]:1.1,[H.StatRangedAttackPower]:1,[H.StatMeleeHit]:2,[H.StatMeleeCrit]:1.5,[H.StatMeleeHaste]:1.39},{[D.PseudoStatRangedDps]:6.32}),other:Se,consumes:ge,talents:de.data,specOptions:ce,raidBuffs:B.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:j.create({}),individualBuffs:N.create({vampiricTouch:!0}),debuffs:U.create({sunderArmor:!0,faerieFire:!0,curseOfElements:!0,savageCombat:!0,bloodFrenzy:!0})},playerIconInputs:[Z()],rotationInputs:Q,petConsumeInputs:[],includeBuffDebuffInputs:[r,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[$(),c,g,S,u,m]},encounterPicker:{showExecuteProportion:!0},presets:{talents:[de],rotations:[oe,ie,pe,re],gear:[le,se]},autoRotation:e=>e.sim.encounter.targets.length>=4?re.rotation.rotation:ie.rotation.rotation,simpleRotation:(e,t,a)=>{const[l,s]=X(a),n=_.fromJsonString('{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}}'),o=_.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6s"}}}},"multidot":{"spellId":{"spellId":49001},"maxDots":${t.multiDotSerpentSting?3:1},"maxOverlap":{"const":{"val":"0ms"}}}}`),i=_.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":3043},"maxOverlap":{"const":{"val":"0ms"}}}},"castSpell":{"spellId":{"spellId":3043}}}'),p=_.fromJsonString('{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":49067}}}}},"castSpell":{"spellId":{"tag":1,"spellId":49067}}}'),r=_.fromJsonString('{"castSpell":{"spellId":{"spellId":58434}}}'),d=_.fromJsonString('{"castSpell":{"spellId":{"spellId":61006}}}'),c=_.fromJsonString('{"castSpell":{"spellId":{"spellId":49050}}}'),g=_.fromJsonString('{"castSpell":{"spellId":{"spellId":49048}}}'),S=_.fromJsonString('{"castSpell":{"spellId":{"spellId":49052}}}'),u=_.fromJsonString('{"castSpell":{"spellId":{"spellId":34490}}}'),m=_.fromJsonString('{"castSpell":{"spellId":{"spellId":53209}}}');return t.type==h.Aoe?s.push(...[n,t.sting==f.ScorpidSting?i:null,t.sting==f.SerpentSting?o:null,t.trapWeave?p:null,r].filter((e=>e))):s.push(...[n,u,d,t.sting==f.ScorpidSting?i:null,t.sting==f.SerpentSting?o:null,t.trapWeave?p:null,m,c,g,S].filter((e=>e))),q.create({prepullActions:l,priorityList:s.map((e=>z.create({action:e})))})},raidSimPresets:[{spec:T.SpecMarksmanshipHunter,talents:de.data,specOptions:ce,consumes:ge,defaultFactionRaces:{[K.Unknown]:F.RaceUnknown,[K.Alliance]:F.RaceWorgen,[K.Horde]:F.RaceTroll},defaultGear:{[K.Unknown]:{},[K.Alliance]:{1:le.gear},[K.Horde]:{1:le.gear}},otherDefaults:Se}]});class me extends I{constructor(e,t){super(e,t,ue)}}export{me as M};
