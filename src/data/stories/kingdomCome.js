import { IMGS } from '../images.js';

export const STORIES = {
  kingdom: {
    id:"kingdom", title:"Dust & Crown", subtitle:"Bohemia, 1403 — A Son's Reckoning",
    category:"adventure", cover:IMGS.medieval_castle,
    synopsis:"Henry of Skalitz — son of a blacksmith, survivor of a massacre — must navigate a war-torn kingdom to avenge his family and discover a truth about his blood that changes everything.",
    player:{ name:"Henry", hp:100, honor:40, survival:60, magic:0, gold:20, inventory:["Father's Sword (Unfinished)","Hunting Knife","Rosary"] },
    start:"k1",
    nodes:{
      k1:{
        id:"k1", title:"Skalitz Falls", location:"Skalitz, Bohemia",
        time:"Dawn, 1403", image:IMGS.village_fire, atm:"fire",
        text:"The riders come at dawn. Sigismund's men — Cumans riding ahead, mercenaries behind. You are seventeen years old and standing outside your father's forge with a sword you've been learning since you were twelve and have never actually used.\n\nYour mother tells you to run. Your father's last expression asks you to make something of it. The village is burning. The gate is thirty yards away.",
        choices:[
          { id:"c1", text:"Fight — buy your family time to escape",                  icon:"⚔️", next:"k2_fight",   cons:{honor:10,survival:-10}, mood:"heroic",  ach:[] },
          { id:"c2", text:"Run — your father's sword is worth nothing unfinished",   icon:"🏃", next:"k2_run",     cons:{survival:10},           mood:"neutral", ach:[] },
          { id:"c3", text:"Get to the armory — any weapon is better than none",      icon:"🗡️", next:"k2_armory",  cons:{survival:5,honor:5},    mood:"danger",  ach:[] },
        ],
      },
      k2_fight:{
        id:"k2_fight", title:"The Last Stand at the Gate", location:"Skalitz Gate",
        time:"Dawn", image:IMGS.village_fire, atm:"combat",
        text:"You hold the gate for eleven minutes. When they finally push through, you're on the ground with a wound in your side.\n\nThe man who pulls you out of the mud is a soldier in colors you don't recognize. 'That was spectacularly stupid,' he says. 'Also the bravest thing I've seen today. Can you walk?'",
        choices:[
          { id:"c1", text:"Get up and walk — ask questions while moving",  icon:"⚔️", next:"k3_rattay", cons:{honor:15,survival:-5}, mood:"heroic", ach:[] },
          { id:"c2", text:"Tell him about your parents — someone needs to know", icon:"🕊️", next:"k3_rattay", cons:{honor:10}, mood:"neutral", ach:[] },
        ],
      },
      k2_run:{
        id:"k2_run", title:"The Road to Talmberg", location:"Skalitz Road",
        time:"Dawn", image:IMGS.mountain_road, atm:"neutral",
        text:"You run. Your father's unfinished sword in your hand, your mother's voice behind you, the sound of Skalitz dying at your back. You don't stop until the village is smoke on the horizon.\n\nOn the road to Talmberg, three other survivors catch up. A miller's apprentice. An elderly woman. A boy who won't give his name but carries bread he somehow kept through everything.",
        choices:[
          { id:"c1", text:"Lead the group toward Talmberg castle", icon:"🛡️", next:"k3_rattay", cons:{honor:10,survival:5}, mood:"heroic", ach:[] },
          { id:"c2", text:"Let them follow without making promises", icon:"👣", next:"k3_rattay", cons:{survival:10}, mood:"neutral", ach:[] },
        ],
      },
      k2_armory:{
        id:"k2_armory", title:"Steel and Smoke", location:"Skalitz Armory",
        time:"Dawn", image:IMGS.village_fire, atm:"combat",
        text:"The armory is already on fire at one end. You get a proper blade and a shield before the roof makes the decision for you. In the yard: a Cuman on horseback, a dozen villagers who've stopped running because they have nowhere left to run to.\n\nYou do something that surprises everyone including yourself.",
        choices:[
          { id:"c1", text:"Stand your ground — sometimes that's enough to shift a moment", icon:"🛡️", next:"k3_rattay", cons:{honor:15,survival:-5}, mood:"heroic", ach:[] },
          { id:"c2", text:"Create a distraction — give the villagers a way out",            icon:"🔥", next:"k3_rattay", cons:{honor:20,survival:-10}, mood:"heroic", ach:[] },
        ],
      },
      k3_rattay:{
        id:"k3_rattay", title:"Rattay", location:"Rattay, Lord Radzig's Seat",
        time:"Several Days Later", image:IMGS.rattay_town, atm:"neutral",
        text:"Lord Radzig Kobyla takes you in. He gives you a bed, a soldier's wage, and a job: garrison work, training, the slow bureaucratic shape of becoming useful. He looks at you in a way you can't quite read.\n\nThe trainer Bernard says you have potential you haven't earned yet. He means this as a diagnosis, not a compliment.",
        choices:[
          { id:"c1", text:"Train seriously — earn your place before you move",         icon:"⚔️", next:"k4_mission", cons:{honor:5,survival:5}, mood:"heroic", ach:[] },
          { id:"c2", text:"Volunteer for the Sigismund intelligence mission immediately",icon:"📜", next:"k4_mission", cons:{honor:10},           mood:"heroic", ach:[] },
          { id:"c3", text:"Search for Skalitz survivors first — before anything else", icon:"🔍", next:"k5_scholar", cons:{honor:15},           mood:"neutral",ach:[] },
        ],
      },
      k4_mission:{
        id:"k4_mission", title:"The Neuhof Assignment", location:"Neuhof, Bohemia",
        time:"Spring", image:IMGS.bohemia_fields, atm:"neutral",
        text:"The assignment: gather intelligence on Sigismund's supply routes through the forest. Two weeks in the field, alone, with a map that was accurate two months ago.\n\nOn day three you find a Cuman patrol not on the map. On day seven, a mass grave also not on the map. On day nine, a letter in a dead scout's pocket that changes what you thought you knew about who's running Sigismund's operation.",
        choices:[
          { id:"c1", text:"Bring back the letter first — Radzig needs to see this",            icon:"📜", next:"k6_truth", cons:{honor:10},           mood:"heroic", ach:[] },
          { id:"c2", text:"Complete the supply route intelligence first — mission before find", icon:"🗺️", next:"k6_truth", cons:{survival:10},        mood:"neutral",ach:[] },
          { id:"c3", text:"Investigate the mass grave — before anyone can erase it",           icon:"🔍", next:"k6_truth", cons:{honor:15,survival:-5},mood:"heroic", ach:["kcd_scholar"] },
        ],
      },
      k5_scholar:{
        id:"k5_scholar", title:"The Search", location:"Bohemia",
        time:"Several Weeks Later", image:IMGS.bohemia_fields, atm:"neutral",
        text:"The weeks teach you things your father's forge never did: how to ride properly, how to read a military map, how to talk to a frightened peasant versus a cautious noble. You find eleven Skalitz survivors across five villages.\n\nIn a burned monastery two days east, you find a letter your father wrote to Lord Radzig four years ago, sealed and never delivered. It rewrites the shape of everything.",
        choices:[
          { id:"c1", text:"Confront Radzig with the letter immediately",                      icon:"📜", next:"k6_truth", cons:{honor:10},           mood:"heroic", ach:["kcd_scholar"] },
          { id:"c2", text:"Keep it secret and gather more evidence before moving",            icon:"☽",  next:"k6_truth", cons:{survival:10},        mood:"stealth",ach:[] },
          { id:"c3", text:"Burn the letter — some truths destroy more than they illuminate", icon:"🔥", next:"k6_truth", cons:{honor:-5,survival:5}, mood:"dark",   ach:[] },
        ],
      },
      k6_truth:{
        id:"k6_truth", title:"What the Letter Said", location:"Rattay, Lord Radzig's Study",
        time:"Evening", image:IMGS.rattay_town, atm:"tense",
        text:"Radzig doesn't deny it. He stands at his window for long enough that the city below completes a small cycle of evening before he speaks.\n\n'Your father was born into nobility. He chose your mother, he chose Skalitz, he chose the forge. By blood and by law, you are my legitimate son. I've known since you were three years old. Your father asked me to wait until you were ready.'",
        choices:[
          { id:"c1", text:"Claim what is yours by blood — step into this new life",       icon:"🏰", next:"k7_final", cons:{honor:10}, mood:"heroic", ach:[] },
          { id:"c2", text:"Reject the title — you are Henry of Skalitz, nothing more",    icon:"⚔️", next:"k7_final", cons:{honor:20}, mood:"heroic", ach:[] },
          { id:"c3", text:"Ask for time — this needs more than an evening to become real", icon:"❓", next:"k7_final", cons:{honor:5},  mood:"neutral",ach:[] },
        ],
      },
      k7_final:{
        id:"k7_final", title:"Pribyslavitz", location:"Pribyslavitz Village",
        time:"Dawn", image:IMGS.village_fire, atm:"combat", isClimax:true,
        text:"Sigismund's remaining force is fortified in Pribyslavitz — a village where you spent three childhood summers. Thirty soldiers. A smart commander. Ground they know better than you do by training, though not by memory.\n\nYou know something Radzig doesn't: a drainage tunnel beneath the south granary.",
        choices:[
          { id:"c1", text:"Lead the tunnel assault yourself — earn this, don't inherit it",    icon:"⚔️", next:"ke_knight",  cons:{honor:20,survival:-10}, mood:"heroic", ach:["kcd_knight"]          },
          { id:"c2", text:"Present the tunnel plan to Radzig — let experienced men execute it",icon:"📜", next:"ke_knight",  cons:{honor:15},              mood:"neutral",ach:["kcd_knight"]          },
          { id:"c3", text:"Challenge the commander to single combat — spare everyone else",    icon:"🕊️", next:"ke_avenger", cons:{honor:25,survival:-20}, mood:"heroic", ach:["kcd_avenger","kcd_knight"] },
        ],
      },
      ke_knight:{
        id:"ke_knight", title:"Henry of Skalitz", location:"Rattay, Midsummer",
        time:"Midsummer", image:IMGS.rattay_town, atm:"victory", isEnding:true, endingLabel:"The Unlikely Knight",
        text:"They call you Sir Henry in the great hall. Half the court is scandalized. The eleven Skalitz survivors you found have been resettled in three villages.\n\nYour father's sword, you finished yourself. It's not a noble's weapon. It has no crest, no inscription. It fits your hand the way something only fits when it was always meant to be yours.",
        choices:[{ id:"r", text:"Begin a new chronicle…", icon:"↺", next:"k1", cons:{} }],
      },
      ke_avenger:{
        id:"ke_avenger", title:"The Son of Skalitz", location:"Pribyslavitz",
        time:"Dawn", image:IMGS.golden_dawn, atm:"victory", isEnding:true, endingLabel:"Son of Skalitz",
        text:"The commander accepts. He's better than you. But he's fighting for a paycheck and you're fighting for something that has your parents' names on it, and that turns out to be the difference.\n\nThe soldiers surrender when their commander falls. Your father's name has been spoken in the same breath as victory.",
        choices:[{ id:"r", text:"Begin a new chronicle…", icon:"↺", next:"k1", cons:{} }],
      },
    },
  },
};
