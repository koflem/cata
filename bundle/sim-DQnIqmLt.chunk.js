import{o as e,q as t,s as a,a4 as s,w as l,T as n,x as o,y as i,z as r,A as c,H as d,D as p,F as S,J as h}from"./preset_utils-BIXRQlRu.chunk.js";import{a2 as u,G as I,bG as m,bH as g,bI as f,fx as A,bK as P,a7 as y,a8 as O,a9 as v,aa as k,b as R,a as w,ac as B,ad as H,ae as M,af as G,ag as b,ah as C,ai as T,S as x,F as D,R as F}from"./detailed_results-CtNpvLCA.chunk.js";import{S as W,a as j,R as E,b as L}from"./inputs-DabVBwo0.chunk.js";const U={type:"TypeAPL",simple:{cooldowns:{}},prepullActions:[{action:{castSpell:{spellId:{spellId:71}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:6673}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:18499}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{schedule:{schedule:"0s",innerAction:{castSpell:{spellId:{spellId:2825,tag:-1}}}}}},{action:{schedule:{schedule:"60s",innerAction:{castSpell:{spellId:{otherId:"OtherActionPotion"}}}}}},{hide:!0,action:{schedule:{schedule:"0",innerAction:{castSpell:{spellId:{spellId:64382}}}}}},{action:{castSpell:{spellId:{spellId:89637}}}},{hide:!0,action:{castSpell:{spellId:{spellId:82176}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{castSpell:{spellId:{spellId:2565}}}},{hide:!0,action:{schedule:{schedule:"0s, 30s",innerAction:{castSpell:{spellId:{spellId:2565}}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"30%"}}}},castSpell:{spellId:{spellId:12975}}}},{hide:!0,action:{schedule:{schedule:"29s, 209s",innerAction:{castSpell:{spellId:{spellId:12975}}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentHealthPercent:{}},rhs:{const:{val:"20%"}}}},castSpell:{spellId:{spellId:871}}}},{hide:!0,action:{schedule:{schedule:"29s, 209s",innerAction:{castSpell:{spellId:{spellId:871}}}}}},{hide:!0,action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{spellId:78}}}},{action:{castSpell:{spellId:{spellId:23922}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:94009}}}}},castSpell:{spellId:{spellId:772}}}},{action:{castSpell:{spellId:{spellId:6572}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:94009}}},rhs:{const:{val:"14s"}}}},castSpell:{spellId:{spellId:6343}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:6343},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:6343}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:1160},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:1160}}}},{action:{castSpell:{spellId:{spellId:12809}}}},{action:{castSpell:{spellId:{spellId:46968}}}},{hide:!0,action:{condition:{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:87096}}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:46968}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Self"},auraId:{spellId:6673},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:6673}}}},{action:{castSpell:{spellId:{spellId:20243}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:71}}}}},castSpell:{spellId:{spellId:71}}}}]},V={items:[{id:65096,enchant:4206,gems:[52293,52231],reforging:128},{id:60227,gems:[52231]},{id:65273,enchant:4198,gems:[52210],reforging:140},{id:62383,enchant:4090},{id:65269,enchant:4103,gems:[52210,52242]},{id:65143,enchant:4189,gems:[0],reforging:128},{id:65270,enchant:4107,gems:[52242,0],reforging:128},{id:65086,gems:[52231,52242]},{id:65272,enchant:4270,gems:[52210,52242],reforging:133},{id:60229,enchant:4104,gems:[52210,52242],reforging:126},{id:60226,gems:[52242],reforging:142},{id:58187},{id:65048},{id:65109},{id:65036,enchant:4098,reforging:128},{id:65023,enchant:4085,reforging:128},{id:65058,enchant:4176,reforging:142}]},z=e("P1 PreRaid Preset",{items:[{id:58103,enchant:4206,gems:[52293,52219]},{id:56319},{id:56452,enchant:4195,gems:[52231]},{id:62383,enchant:4090},{id:56308,enchant:4103,gems:[52210,52231]},{id:62449,enchant:4189,gems:[0]},{id:56428,enchant:4107,gems:[52210,0]},{id:55059,gems:[52231,52219]},{id:56283,enchant:4270,gems:[52219,52210]},{id:62418,enchant:4062,gems:[52219]},{id:58187},{id:56398},{id:56347},{id:63742},{id:56346,enchant:3241},{id:55069,enchant:4085,gems:[52231]},{id:56376,enchant:4176}]}),N=e("P1 BIS Preset",V),_=t("Default APL",U),q={name:"Standard",data:u.create({talentsString:"320003-002-33213201121210212031",glyphs:I.create({prime1:m.GlyphOfRevenge,prime2:m.GlyphOfShieldSlam,prime3:m.GlyphOfDevastate,major1:g.GlyphOfShieldWall,major2:g.GlyphOfShockwave,major3:g.GlyphOfThunderClap,minor1:f.GlyphOfShatteringThrow,minor2:f.GlyphOfDemoralizingShout,minor3:f.GlyphOfCommand})})},J=A.create({classOptions:{shout:P.WarriorShoutCommanding,useShatteringThrow:!1,startingRage:0}}),K=y.create({flask:O.FlaskOfSteelskin,food:v.FoodBeerBasedCrocolisk,defaultPotion:k.EarthenPotion,prepopPotion:k.EarthenPotion}),Q={profession1:R.Leatherworking,profession2:R.Inscription},X=a(x.SpecProtectionWarrior,{cssClass:"protection-warrior-sim-ui",cssScheme:w.getCssClass(w.Warrior),knownIssues:[],epStats:[B.StatStamina,B.StatStrength,B.StatAgility,B.StatAttackPower,B.StatExpertise,B.StatMeleeHit,B.StatMeleeCrit,B.StatMeleeHaste,B.StatArmor,B.StatBonusArmor,B.StatBlock,B.StatDodge,B.StatParry,B.StatNatureResistance,B.StatShadowResistance,B.StatFrostResistance,B.StatMastery],epPseudoStats:[H.PseudoStatMainHandDps],epReferenceStat:B.StatAttackPower,displayStats:[B.StatHealth,B.StatArmor,B.StatBonusArmor,B.StatStamina,B.StatStrength,B.StatAgility,B.StatAttackPower,B.StatExpertise,B.StatMeleeHit,B.StatMeleeCrit,B.StatMeleeHaste,B.StatBlock,B.StatDodge,B.StatParry,B.StatNatureResistance,B.StatShadowResistance,B.StatFrostResistance,B.StatMastery],defaults:{gear:N.gear,epWeights:M.fromMap({[B.StatArmor]:.174,[B.StatBonusArmor]:.155,[B.StatStamina]:2.336,[B.StatStrength]:1.555,[B.StatAgility]:2.771,[B.StatAttackPower]:.32,[B.StatExpertise]:1.44,[B.StatMeleeHit]:1.432,[B.StatMeleeCrit]:.925,[B.StatMeleeHaste]:.431,[B.StatBlock]:1.32,[B.StatDodge]:2.606,[B.StatParry]:2.649,[B.StatMastery]:0},{[H.PseudoStatMainHandDps]:6.081}),other:Q,consumes:K,talents:q.data,specOptions:J,raidBuffs:G.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfMight:!0,communion:!0,devotionAura:!0,retributionAura:!0}),partyBuffs:b.create({}),individualBuffs:C.create({}),debuffs:T.create({sunderArmor:!0,mangle:!0,vindication:!0,bloodFrenzy:!0,judgement:!0,frostFever:!0})},playerIconInputs:[W(),j(),E()],includeBuffDebuffInputs:[s],excludeBuffDebuffInputs:[],otherInputs:{inputs:[l,n,o,i,r,c,d,p,L(),S]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[q,q],rotations:[_,_],gear:[z,N]},autoRotation:e=>_.rotation.rotation,raidSimPresets:[{spec:x.SpecProtectionWarrior,talents:q.data,specOptions:J,consumes:K,defaultFactionRaces:{[D.Unknown]:F.RaceUnknown,[D.Alliance]:F.RaceHuman,[D.Horde]:F.RaceOrc},defaultGear:{[D.Unknown]:{},[D.Alliance]:{1:N.gear,2:z.gear},[D.Horde]:{1:N.gear,2:z.gear}},otherDefaults:Q}]});class Y extends h{constructor(e,t){super(e,t,X)}}export{Y as P};
