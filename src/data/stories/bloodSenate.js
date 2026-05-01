import { IMGS } from '../images.js';

export const STORIES = {
  rome: {
    id:"rome", title:"Blood and Senate", subtitle:"Rome, 72 BC — The Arena and the Empire",
    category:"epic", cover:IMGS.roman_forum,
    synopsis:"You are Titus Severus — Roman soldier turned slave turned gladiator. The arena can make you legend. The Senate can make you free. Or you can burn both to the ground.",
    player:{ name:"Titus Severus", hp:100, honor:45, survival:55, magic:0, gold:10, inventory:["Gladius (Worn)","Slave Brand","Letter from Wife"] },
    start:"r1",
    nodes:{
      r1:{
        id:"r1", title:"The Ludus at Capua", location:"Capua, Gladiatorial School",
        time:"Dawn, 72 BC", image:IMGS.gladiator_arena, atm:"roman",
        text:"Three years since the cavalry ambush that left you face-down in Thracian mud and woke you in chains. Three years of the ludus. You are good at it. That is the problem. Men who are good at the arena live long enough to want things.\n\nYou want three things: freedom, your wife's address, and to make Lanista Batiatus regret the way he smiles when he counts his share of your prize money. This morning, a senator has arrived at the ludus. He is looking specifically for you.",
        choices:[
          { id:"c1", text:"Meet the senator — powerful men with specific requests are opportunities",icon:"📜", next:"r2_senator", cons:{honor:5,survival:5},   mood:"neutral", ach:[] },
          { id:"c2", text:"Refuse the meeting — trust no one with a toga and an agenda",           icon:"⚔️", next:"r2_refuse",  cons:{honor:10,survival:-5}, mood:"heroic",  ach:[] },
          { id:"c3", text:"Agree to meet but find out why first — through your slave network",    icon:"👣", next:"r2_intel",   cons:{honor:5},              mood:"stealth", ach:[] },
        ],
      },
      r2_senator:{
        id:"r2_senator", title:"Senator Gracchus", location:"Capua Ludus, Private Room",
        time:"Morning", image:IMGS.roman_forum, atm:"roman",
        text:"Senator Gracchus wants you to lose a fight. A specific fight, against a specific opponent, in a way that looks real. He slides a document across the table: a deed of manumission. Your freedom, signed and sealed, contingent on the performance.\n\n'Your wife's name is Valeria,' he adds, as he leaves. 'She lives on the Aventine Hill. I thought you should know that too.'",
        choices:[
          { id:"c1", text:"Accept — freedom is freedom, you'll decide what it costs later",   icon:"📜", next:"r3_choice",  cons:{survival:10,honor:-10}, mood:"dark",    ach:[] },
          { id:"c2", text:"Refuse — you've never thrown a fight and you're not starting now", icon:"⚔️", next:"r3_arena",   cons:{honor:20,survival:-5},  mood:"heroic",  ach:[] },
          { id:"c3", text:"Accept the meeting but plan to double-cross him in the arena",     icon:"🗡️", next:"r3_choice",  cons:{honor:5},               mood:"danger",  ach:[] },
        ],
      },
      r2_refuse:{
        id:"r2_refuse", title:"The Ludus Without Patrons", location:"Capua Ludus",
        time:"Morning", image:IMGS.gladiator_arena, atm:"roman",
        text:"Refusing him has made Batiatus angry. He schedules you for the next games at short notice against an opponent he doesn't introduce. Brennus says eleven words: 'The man they're putting you against has never left the sand alive.'",
        choices:[
          { id:"c1", text:"Fight — win or lose, you fight on your own terms",                   icon:"⚔️", next:"r3_arena",  cons:{honor:20},              mood:"heroic", ach:[] },
          { id:"c2", text:"This is the moment — organize the other gladiators before the games",icon:"✊", next:"r3_revolt", cons:{honor:15,survival:-10}, mood:"heroic", ach:[] },
        ],
      },
      r2_intel:{
        id:"r2_intel", title:"The Underground Intelligence", location:"Capua Ludus, Below",
        time:"Morning", image:IMGS.gladiator_arena, atm:"dark",
        text:"Your network is three people: Crixus who handles the kitchen; a Syrian slave named Nadia who cleans the senator's rooms; and old Jugurtha who has become part of the furniture and therefore invisible.\n\nJugurtha tells you: Gracchus is not acting for himself. The deed of manumission is real. And your wife sent the letter herself. She knows you're alive. She's waiting.",
        choices:[
          { id:"c1", text:"Meet the senator with this knowledge — negotiate from strength",icon:"📜", next:"r3_choice", cons:{honor:10,survival:5},  mood:"neutral", ach:[] },
          { id:"c2", text:"Refuse the senator and use your network differently",          icon:"✊", next:"r3_revolt", cons:{honor:15,survival:-5}, mood:"heroic",  ach:[] },
        ],
      },
      r3_arena:{
        id:"r3_arena", title:"The Sand", location:"Capua Arena",
        time:"Midday", image:IMGS.gladiator_arena, atm:"combat",
        text:"The opponent's name is Draco. He is very large and very fast. You fight for eleven minutes — the hardest eleven minutes of three years. You take two cuts. You give more than you take. Draco falls on the eleventh minute and the crowd decides his fate before you can.\n\nIn the stands, a man in senatorial white is writing something down.",
        choices:[
          { id:"c1", text:"Salute the crowd and accept what comes — you survived the sand", icon:"🦅", next:"r4_politics", cons:{honor:15,survival:10}, mood:"heroic", ach:["rome_glory"] },
          { id:"c2", text:"Look directly at Batiatus in the stands — this isn't over",      icon:"⚔️", next:"r4_revolt",  cons:{honor:20,survival:-5}, mood:"dark",   ach:[] },
        ],
      },
      r3_revolt:{
        id:"r3_revolt", title:"The Spark", location:"Capua Ludus",
        time:"Night Before the Games", image:IMGS.gladiator_arena, atm:"dark",
        text:"Brennus listens to you for three minutes without expression. 'Crixus is already organizing the kitchen workers. We need eighteen people to say yes, and we have twelve.'\n\nHe looks at you with the evaluating quality of a man who has survived by being precise. 'The other six are afraid. They will follow you if you ask. They won't follow me.'",
        choices:[
          { id:"c1", text:"Ask them — stand in front of each one and ask personally",                     icon:"✊", next:"r4_revolt", cons:{honor:20,survival:-5},  mood:"heroic",  ach:["rome_free"] },
          { id:"c2", text:"Go with twelve — smaller, faster, higher chance of surviving the first night",icon:"👣", next:"r4_revolt", cons:{honor:15,survival:5},   mood:"stealth", ach:["rome_free"] },
        ],
      },
      r3_choice:{
        id:"r3_choice", title:"The Fixed Fight", location:"Capua Arena",
        time:"Midday", image:IMGS.gladiator_arena, atm:"combat",
        text:"You fight well enough that the crowd believes the contest and lose well enough that the opponent ends it cleanly. Gracchus watches with a senator's practiced expression of nothing.\n\nIn the changing room, a sealed envelope is waiting on your armor. The manumission deed. And below it: an address on the Aventine Hill, in a handwriting you recognize from a letter you've read five hundred times.",
        choices:[
          { id:"c1", text:"Go to Valeria immediately — everything else can wait",          icon:"♡",  next:"r4_politics", cons:{honor:10,survival:5}, mood:"romance", ach:[] },
          { id:"c2", text:"Find Gracchus first — understand what you just became part of", icon:"📜", next:"r4_politics", cons:{honor:5},             mood:"neutral", ach:[] },
          { id:"c3", text:"Use the freedom to join the revolt you've been watching build", icon:"✊", next:"r4_revolt",   cons:{honor:15,survival:-10},mood:"heroic", ach:["rome_free"] },
        ],
      },
      r4_politics:{
        id:"r4_politics", title:"The Senate's Game", location:"Rome",
        time:"Several Weeks Later", image:IMGS.roman_forum, atm:"roman",
        text:"Gracchus explains Rome over wine in a garden that costs more than most people's entire lives. He wants you as a visible symbol — a man who was Roman and became slave and found a path back through the arena. That story is politically useful.\n\n'I'm not asking for your soul. I'm asking for six months of your time. In return: a house, your wife's safety guaranteed, and enough money to start over.'",
        choices:[
          { id:"c1", text:"Accept and work the Senate's politics from inside",                    icon:"📜", next:"re_emperor", cons:{honor:5,gold:200},      mood:"neutral", ach:["rome_emperor"] },
          { id:"c2", text:"Take the money, take Valeria, and get out of Rome permanently",        icon:"🕊️", next:"re_emperor", cons:{honor:15,gold:100},     mood:"heroic",  ach:["rome_emperor"] },
          { id:"c3", text:"Refuse — no more arrangements, no more being useful to powerful men", icon:"✊", next:"r4_revolt",  cons:{honor:20,survival:-10}, mood:"heroic",  ach:[] },
        ],
      },
      r4_revolt:{
        id:"r4_revolt", title:"Spartacus", location:"Italian Roads",
        time:"The Revolt", image:IMGS.roman_forum, atm:"combat",
        text:"The revolt breaks from Capua with seventy-eight people and grows. Within three months you command six thousand people on the move. The Senate sends three legions. You beat two of them.\n\nThe third — under Crassus, who is wealthy enough to simply replace whatever he loses — begins the encirclement that will take three months to finish.",
        choices:[
          { id:"c1", text:"Fight to the last — some causes are worth dying for completely",          icon:"⚔️", next:"re_free", cons:{honor:30,survival:-30}, mood:"heroic", ach:["rome_free"] },
          { id:"c2", text:"Break through the encirclement — get as many people out as possible",    icon:"🛡️", next:"re_free", cons:{honor:25,survival:-10}, mood:"heroic", ach:["rome_free"] },
        ],
      },
      re_free:{
        id:"re_free", title:"Spartacus", location:"The Open Road",
        time:"After", image:IMGS.golden_dawn, atm:"victory", isEnding:true, endingLabel:"The Revolt's Legacy",
        text:"The revolt ended badly and memorably on terms that history would argue about for centuries. You did not end on a cross. You ended on a hillside in Sicily with forty-three people who made it through the encirclement, watching a sunrise that Rome did not own.\n\nWhat the revolt accomplished takes longer to become visible: the treatment of slaves changes, in small increments.",
        choices:[{ id:"r", text:"Begin again…", icon:"↺", next:"r1", cons:{} }],
      },
      re_emperor:{
        id:"re_emperor", title:"The Shadow Senator", location:"Rome, The Senate",
        time:"Years Later", image:IMGS.roman_forum, atm:"roman", isEnding:true, endingLabel:"Shadows of Power",
        text:"You outlive Gracchus. You become, over eighteen years, the kind of person that powerful men consult before making decisions they can't afford to get wrong. You never hold a title. You never need one.\n\nValeria manages this life with the specific capability of a woman who survived three years in Rome alone waiting for a husband who was supposed to be dead.",
        choices:[{ id:"r", text:"Return to the beginning…", icon:"↺", next:"r1", cons:{} }],
      },
    },
  },
};
