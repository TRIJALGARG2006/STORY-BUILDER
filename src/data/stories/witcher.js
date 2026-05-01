import { IMGS } from '../images.js';




export const STORIES = {
  witcher: {
    id:"witcher", title:"The White Wolf", subtitle:"Velen, 1272 — A Continent Bleeds",
    category:"dark", cover:IMGS.fog_battlefield,
    synopsis:"A witcher wakes on a blood-soaked battlefield. War burns around him. The Wild Hunt is coming. Every choice shapes the fate of the Continent.",
    player:{ name:"Geralt", hp:100, honor:50, survival:50, magic:0, gold:100, inventory:["Steel Sword","Silver Sword","Witcher Medallion"] },
    start:"w1",
    nodes:{
      w1:{
        id:"w1", title:"The Battlefield at Dawn", location:"Velen Outskirts, Battlefield",
        time:"Dawn, 1272", image:IMGS.fog_battlefield, atm:"foggy",
        text:"Crows wake you. The battlefield around you is still — Imperial black and Northern blue tangled in the mud, both sides equally dead. Your Silver Sword is wet. Your medallion vibrates faintly.\n\nThree things pull at your attention: a blood trail leads west into the Whispering Woods. Smoke churns from White Orchard to the east. And on the ridge above you, a cloaked figure stands completely still.",
        choices:[
          { id:"c1", text:"Follow the blood trail into the woods", icon:"🗡️", next:"w2_woods",   cons:{survival:5},           mood:"danger",  ach:[] },
          { id:"c2", text:"Run toward the burning village",         icon:"🔥", next:"w2_village", cons:{honor:5,survival:-5},  mood:"heroic",  ach:[] },
          { id:"c3", text:"Climb the ridge to face the watcher",   icon:"👁️", next:"w2_ridge",   cons:{magic:5},              mood:"mystic",  ach:[] },
        ],
      },
      w2_woods:{
        id:"w2_woods", title:"Camp in the Whispering Woods", location:"Whispering Woods",
        time:"Morning", image:IMGS.dark_forest, atm:"dark",
        text:"The blood trail belongs to a merchant. Fifty paces deeper: a bandit camp. Five men. The merchant is gagged but breathing. On a crate sits an open letter bearing the royal seal of Vizima.\n\nThe leader sees you before you can melt back into the shadows. He grins the grin of a man who has hurt witchers before. 'Bad timing,' he says.",
        choices:[
          { id:"c1", text:"Fight your way through — fast and clean",          icon:"⚔️", next:"w3_fight", cons:{survival:10,honor:-5}, mood:"danger",  ach:[] },
          { id:"c2", text:"Use your reputation — stare them into backing down",icon:"👁️", next:"w3_stare", cons:{honor:10},             mood:"mystic",  ach:[] },
          { id:"c3", text:"Cut the merchant free quietly and slip away",       icon:"👣", next:"w3_sneak", cons:{honor:15,survival:-5}, mood:"stealth", ach:[] },
        ],
      },
      w3_fight:{
        id:"w3_fight", title:"Steel and Silence", location:"Whispering Woods",
        time:"Morning", image:IMGS.dark_forest, atm:"combat",
        text:"Two minutes of controlled violence. The merchant — Aldric — won't stop shaking your hand. Among the camp's belongings you find the Vizima letter. It describes a conspiracy to poison the king.\n\nAldric looks at the letter like it's a live coal. 'That's why they had me. I was the courier. Please — get it to someone who can use it.'",
        choices:[
          { id:"c1", text:"Take the letter north toward Vizima yourself", icon:"📜", next:"w4_road", cons:{honor:5},  mood:"heroic",  ach:[] },
          { id:"c2", text:"Send Aldric with it — you have other business",  icon:"🕊️", next:"w4_road", cons:{honor:10}, mood:"neutral", ach:[] },
        ],
      },
      w3_stare:{
        id:"w3_stare", title:"The Weight of Reputation", location:"Whispering Woods",
        time:"Morning", image:IMGS.dark_forest, atm:"dark",
        text:"You don't speak. You stand at the edge of the firelight and let the stories do the work. A minute passes. The leader's grin fades. Three of his men set down their weapons. He releases Aldric and nods once.\n\nAldric presses the letter into your hands. 'They were selling it to Nilfgaard tonight.'",
        choices:[
          { id:"c1", text:"Head north with the letter — Vizima needs to know", icon:"📜", next:"w4_road", cons:{honor:15}, mood:"heroic", ach:[] },
        ],
      },
      w3_sneak:{
        id:"w3_sneak", title:"The Quiet Path", location:"Whispering Woods",
        time:"Morning", image:IMGS.dark_forest, atm:"dark",
        text:"You wait for the argument to peak — everyone looking at the letter, nobody looking at the prisoner. Thirty seconds. Aldric's bonds are severed. You're both through the treeline before the first shout.\n\n'I was the royal courier. That letter cannot reach Nilfgaard. It describes how to kill the king.'",
        choices:[
          { id:"c1", text:"Ride hard for Vizima with the letter", icon:"📜", next:"w4_road", cons:{honor:20}, mood:"heroic", ach:[] },
        ],
      },
      w2_village:{
        id:"w2_village", title:"White Orchard Burns", location:"White Orchard Village",
        time:"Morning", image:IMGS.village_fire, atm:"fire",
        text:"White Orchard is already half-ash when you arrive. The Nilfgaardian commander sees you emerge from the smoke and raises a hand. The soldiers pause.\n\n'Witcher. The Empire does not forget its allies. Or its enemies. Make a choice that you can live with.'",
        choices:[
          { id:"c1", text:"Charge into the soldiers and drive them out",               icon:"🛡️", next:"w3_v_fight", cons:{honor:15,survival:-10}, mood:"heroic",  ach:[] },
          { id:"c2", text:"Negotiate — offer him something worth more than a village", icon:"🕊️", next:"w3_v_talk",  cons:{honor:10},              mood:"neutral", ach:[] },
          { id:"c3", text:"Accept his offer — fight for the Empire today",             icon:"⚔️", next:"w3_v_join",  cons:{honor:-15,gold:150},    mood:"dark",    ach:[] },
        ],
      },
      w3_v_fight:{
        id:"w3_v_fight", title:"The Stand at White Orchard", location:"White Orchard Village",
        time:"Midday", image:IMGS.village_fire, atm:"combat",
        text:"Four soldiers fall before the rest understand what's happening. The commander throws down his sword.\n\nThe village elder hands you an old silver medallion — a wolf's head, warm. 'My father was a witcher. He said give this to the one who came.'",
        choices:[
          { id:"c1", text:"Take the medallion and head north", icon:"◈",  next:"w4_road", cons:{honor:10,magic:10}, mood:"mystic",  ach:[] },
          { id:"c2", text:"Leave it — you're already carrying enough", icon:"👣", next:"w4_road", cons:{honor:10}, mood:"neutral", ach:[] },
        ],
      },
      w3_v_talk:{
        id:"w3_v_talk", title:"A Price Worth Paying", location:"White Orchard Village",
        time:"Midday", image:IMGS.village_fire, atm:"tense",
        text:"You offer the commander intelligence on a rebel cache. He weighs it against burning one more village. The soldiers are tired.\n\nHe nods. The column turns south. Nobody thanks you. That's not how this works.",
        choices:[
          { id:"c1", text:"Help the villagers before moving north",            icon:"🛡️", next:"w4_road", cons:{honor:20},          mood:"heroic",  ach:[] },
          { id:"c2", text:"Leave immediately — your presence draws attention", icon:"👣", next:"w4_road", cons:{honor:10,survival:5}, mood:"neutral", ach:[] },
        ],
      },
      w3_v_join:{
        id:"w3_v_join", title:"The Black Commission", location:"Nilfgaardian Camp",
        time:"Evening", image:IMGS.ruined_castle, atm:"dark",
        text:"The commander gives you a sealed commission and a purse of imperial gold: find the rebel cell in Velen's southern swamps, eliminate the leadership.\n\nYou walk out into the cold evening with gold in your coat and the sounds of White Orchard dying behind you.",
        choices:[
          { id:"c1", text:"Follow the commission — the swamps, then north",       icon:"📜", next:"w4_road", cons:{gold:100},          mood:"dark",    ach:[] },
          { id:"c2", text:"Take the gold and vanish before dawn — serve no one", icon:"👣", next:"w4_road", cons:{gold:150,honor:-5}, mood:"stealth", ach:[] },
        ],
      },
      w2_ridge:{
        id:"w2_ridge", title:"The Observer", location:"High Ridge, Velen",
        time:"Morning", image:IMGS.mystic_figure, atm:"mystical",
        text:"The figure carries no weapon. Up close: eyes that are two different ages, two different centuries.\n\n'I've watched three versions of this morning. In two you're dead by nightfall. The Wild Hunt has been searching for Elder Blood across six worlds. You carry it. So does someone you haven't found yet.'",
        choices:[
          { id:"c1", text:"Take the shard — you need every advantage",           icon:"✨", next:"w3_r_take",   cons:{magic:15},        mood:"mystic", ach:[] },
          { id:"c2", text:"Question them first — who are they, exactly?",        icon:"❓", next:"w3_r_ask",    cons:{magic:5,honor:5}, mood:"neutral",ach:[] },
          { id:"c3", text:"Draw your sword — this feels like a very clean trap", icon:"🗡️", next:"w3_r_refuse", cons:{survival:5},       mood:"danger", ach:[] },
        ],
      },
      w3_r_take:{
        id:"w3_r_take", title:"The Gift of Knowing", location:"High Ridge",
        time:"Morning", image:IMGS.cosmos, atm:"cosmic",
        text:"The shard dissolves into your palm. For three seconds you see everything: the Wild Hunt not as ghosts but as an army from the void between worlds. When it ends, the stranger is gone.\n\nYou know Eredin is already moving — and he's after someone whose blood can open a door at Kaer Morhen.",
        choices:[
          { id:"c1", text:"Ride immediately for Kaer Morhen — warn everyone", icon:"🐎", next:"w4_kaer", cons:{magic:10,survival:5},  mood:"heroic", ach:[] },
          { id:"c2", text:"Track the Hunt's movements first, then go",        icon:"🔍", next:"w4_road", cons:{magic:15,survival:-5}, mood:"danger", ach:[] },
        ],
      },
      w3_r_ask:{
        id:"w3_r_ask", title:"An Honest Answer", location:"High Ridge",
        time:"Morning", image:IMGS.mystic_figure, atm:"mystical",
        text:"They answer every question directly. The shard is calibrated to Elder Blood — it amplifies what's already there.\n\n'Your blood is a key to a door that, if opened wrong, kills everything on both sides.' They set the shard in the grass and fade.",
        choices:[
          { id:"c1", text:"Take the shard and head for Kaer Morhen", icon:"✨", next:"w4_kaer", cons:{magic:15,honor:5}, mood:"mystic",  ach:[] },
          { id:"c2", text:"Leave the shard and move north without it", icon:"👣", next:"w4_road", cons:{honor:5},         mood:"neutral", ach:[] },
        ],
      },
      w3_r_refuse:{
        id:"w3_r_refuse", title:"Steel Answers Nothing", location:"High Ridge",
        time:"Morning", image:IMGS.mystic_figure, atm:"mystical",
        text:"Your blade passes through them like sunlight through smoke. They step back and set the shard in the grass. 'I'm not here to fight. I'm here because your death costs more than mine.' Then they are simply not there.\n\nYour medallion vibrates near the shard. The two things seem to recognize each other.",
        choices:[
          { id:"c1", text:"Pick up the shard — your medallion is telling you something", icon:"✨", next:"w4_kaer", cons:{magic:10},   mood:"mystic",  ach:[] },
          { id:"c2", text:"Leave it — strange gifts from vanishing strangers are traps", icon:"👣", next:"w4_road", cons:{survival:5}, mood:"neutral", ach:[] },
        ],
      },
      w4_road:{
        id:"w4_road", title:"The Road to Vizima", location:"Velen Road, Day Two",
        time:"Afternoon", image:IMGS.mountain_road, atm:"neutral",
        text:"Two days north. At the crossroads near Bloody Ford, you find a riderless horse and a dead courier with a crossbow bolt in his back. His sealed satchel carries orders: mobilize the city guard, quietly — the king is dying and it isn't illness.",
        choices:[
          { id:"c1", text:"Carry the satchel to Vizima — someone has to",                icon:"📜", next:"w5_vizima", cons:{honor:10},            mood:"heroic", ach:[] },
          { id:"c2", text:"Follow the bolt's trajectory — find the shooter instead",     icon:"🔍", next:"w5_vizima", cons:{honor:5,magic:5},    mood:"danger", ach:[] },
          { id:"c3", text:"Burn the satchel — some orders cause more harm in the open", icon:"🔥", next:"w5_vizima", cons:{survival:5,honor:-5}, mood:"dark",   ach:[] },
        ],
      },
      w4_kaer:{
        id:"w4_kaer", title:"Kaer Morhen", location:"Kaer Morhen",
        time:"Night", image:IMGS.medieval_castle, atm:"dark",
        text:"The fortress is cold and lit and feels like a held breath. They are all here — the last witchers, and someone you have not seen in years who opens the door before you knock.\n\nThe Wild Hunt has been sighted twice on the mountain road. The wards are holding for now.",
        choices:[
          { id:"c1", text:"Reinforce the wards — buy everyone inside more time", icon:"✨", next:"w5_vizima", cons:{magic:20},              mood:"mystic", ach:[] },
          { id:"c2", text:"Draw the Hunt away — lead them off the mountain",     icon:"🗡️", next:"w5_vizima", cons:{honor:15,survival:-10}, mood:"heroic", ach:[] },
        ],
      },
      w5_vizima:{
        id:"w5_vizima", title:"The City of Glass", location:"Vizima, Royal Capital",
        time:"Three Days Later", image:IMGS.rattay_town, atm:"tense", isClimax:true,
        text:"Vizima is a city trying to look normal while everything under it shifts. The king is alive — barely. The Wild Hunt's advance scouts have been spotted in the hills east of the city.\n\nYou have enough information to move. Which target matters most tonight: the poisoner, or the gate?",
        choices:[
          { id:"c1", text:"Go after the poisoner — save the king, end the conspiracy",           icon:"🛡️", next:"we_hero",   cons:{honor:20,survival:-10}, mood:"heroic", ach:["w_hero"]   },
          { id:"c2", text:"Find the Wild Hunt's gate — close it before it opens",                icon:"✨", next:"we_martyr", cons:{magic:20,honor:15},    mood:"mystic", ach:["w_martyr"] },
          { id:"c3", text:"Open the gate yourself — ride with Eredin and end the war differently",icon:"🌑", next:"we_dark",   cons:{magic:15,honor:-20},   mood:"dark",   ach:["w_dark"]   },
        ],
      },
      we_hero:{
        id:"we_hero", title:"The White Wolf", location:"Vizima",
        time:"Dawn", image:IMGS.golden_dawn, atm:"victory", isEnding:true, endingLabel:"The Continent Holds",
        text:"The poisoner is arrested before midnight. The king survives. The Wild Hunt withdraws for the first time in recorded memory.\n\nThey put your name in the official record. Not as a witcher hired for a problem, but as the variable nobody accounted for. You don't attend the ceremony. You're already gone.",
        choices:[{ id:"r", text:"Begin a new path…", icon:"↺", next:"w1", cons:{} }],
      },
      we_martyr:{
        id:"we_martyr", title:"The Eternal Seal", location:"The Gate Between Worlds",
        time:"Midnight", image:IMGS.cosmos, atm:"cosmic", isEnding:true, endingLabel:"The Seal That Held",
        text:"The gate closes permanently, which requires something on this side of it that isn't coming back. You knew that going in. The Wild Hunt passes back through the closing light like a tide going out.\n\nThey build a monument. It says your name and a date. The date is wrong by a day. You would have found that funny.",
        choices:[{ id:"r", text:"Begin again…", icon:"↺", next:"w1", cons:{} }],
      },
      we_dark:{
        id:"we_dark", title:"Rider Eternal", location:"Between Worlds",
        time:"Outside Time", image:IMGS.cosmos, atm:"cosmic", isEnding:true, endingLabel:"The Rider Who Crossed",
        text:"The gate opens and you ride through it into something that isn't any world you know. Eredin keeps his word — the war ends because there's nothing to fight over anymore.\n\nThe Continent survives. You become a story they tell in three different countries with three different endings, all of them wrong.",
        choices:[{ id:"r", text:"Return to the beginning…", icon:"↺", next:"w1", cons:{} }],
      },
    },
  },
};
