import { IMGS } from '../images.js';

export const STORIES = {
  tokyo: {
    id:"tokyo", title:"The Shibuya Files", subtitle:"Tokyo, 2 AM — A City That Knows Your Name",
    category:"mystery", cover:IMGS.tokyo_rain,
    synopsis:"You're a foreign journalist in Tokyo when a source hands you evidence of a conspiracy reaching from city hall to organized crime. By morning, your source is dead and you're the only one with the files.",
    player:{ name:"Mara Voss", hp:85, honor:60, survival:40, magic:0, gold:80, inventory:["Encrypted USB","Press Card","Burner Phone"] },
    start:"t1",
    nodes:{
      t1:{
        id:"t1", title:"The Drop at Shibuya Station", location:"Shibuya Station, Tokyo",
        time:"2 AM, November", image:IMGS.tokyo_rain, atm:"rain",
        text:"Your contact is twenty minutes late. You wait at the designated pillar in the B1 concourse — half-midnight commuters, the hiss of closing doors, rain audible through vents.\n\nHe arrives at 2:23 looking like a man running from something faster than he is. He presses an encrypted USB into your hand. 'Don't look at it here. The files go deep. Deeper than I told you. If I don't call you by seven AM, I'm not going to.'",
        choices:[
          { id:"c1", text:"Open the files immediately — find a safe corner of the station",icon:"💻", next:"t2_open",  cons:{survival:-5,honor:5},  mood:"danger",  ach:[] },
          { id:"c2", text:"Get somewhere private first — your apartment, dark and offline", icon:"🔒", next:"t2_flee",  cons:{survival:10},          mood:"stealth", ach:[] },
          { id:"c3", text:"Call your editor now — you're not carrying this alone",          icon:"📱", next:"t2_call",  cons:{honor:10,survival:-5}, mood:"neutral", ach:[] },
        ],
      },
      t2_open:{
        id:"t2_open", title:"What's on the Drive", location:"Shibuya Station Café",
        time:"2:30 AM", image:IMGS.neon_alley, atm:"rain",
        text:"The files are organized with the precision of someone who expected to die before they finished. Financial records. Meeting transcripts. Surveillance photographs. A thread connecting the Deputy Mayor's office to three organized crime families.\n\nAt the bottom: a witness list. Eleven names. Your contact's name is first. Below it, in a different hand, added recently: your name.",
        choices:[
          { id:"c1", text:"Your name on that list changes everything — run now",         icon:"🏃", next:"t3_run",     cons:{survival:15,honor:-5}, mood:"danger",  ach:[] },
          { id:"c2", text:"Copy the files to three separate locations before moving",   icon:"💾", next:"t3_secure",  cons:{survival:5,honor:5},   mood:"neutral", ach:[] },
          { id:"c3", text:"Call the witness at the top of the list — if they're alive", icon:"📞", next:"t3_witness", cons:{honor:10,survival:-5}, mood:"heroic",  ach:[] },
        ],
      },
      t2_flee:{
        id:"t2_flee", title:"Apartment, Dark", location:"Shinjuku Apartment",
        time:"3 AM", image:IMGS.apartment_dark, atm:"rain",
        text:"Your apartment is on the sixth floor of a building that suits people who need to not be found. You sit in the dark for ten minutes before opening the drive, listening to the rain.\n\nThe files are devastating. Financial routing through four shell companies. Your phone lights up: unknown number. The time is 3:14 AM.",
        choices:[
          { id:"c1", text:"Answer it — if someone has this number, they already know where you are",icon:"📱", next:"t3_witness", cons:{honor:5,survival:-5}, mood:"danger",  ach:[] },
          { id:"c2", text:"Don't answer — secure the files first",                                   icon:"🔒", next:"t3_secure",  cons:{survival:10},        mood:"stealth", ach:[] },
        ],
      },
      t2_call:{
        id:"t2_call", title:"The Editor", location:"Shibuya Station",
        time:"2:30 AM", image:IMGS.tokyo_rain, atm:"rain",
        text:"Your editor answers on the second ring. 'Where are you?' he says first, not hello. He says: 'Your contact was found forty minutes ago in the Sumida River. The police are calling it accidental. Get off public transport and get somewhere offline. The moment you look at those files, you're in this.'\n\nYou're already in it.",
        choices:[
          { id:"c1", text:"Go to the paper's office — safety in a public building",    icon:"📰", next:"t3_secure",  cons:{honor:5},              mood:"neutral", ach:[] },
          { id:"c2", text:"Find somewhere private and open the drive yourself",        icon:"💻", next:"t3_run",     cons:{survival:5,honor:5},   mood:"danger",  ach:[] },
          { id:"c3", text:"Call the police — you have a dead source and a crime drive",icon:"🚔", next:"t3_witness", cons:{honor:15,survival:-10},mood:"heroic",  ach:[] },
        ],
      },
      t3_run:{
        id:"t3_run", title:"Moving Through the Rain", location:"Shibuya Backstreets",
        time:"3 AM", image:IMGS.neon_alley, atm:"rain",
        text:"The rain is useful. Cameras can't read wet faces. You move through Shibuya's back layers. At a 24-hour internet café you secure the files across three different cloud locations. Forty minutes of careful work.\n\nWhen you come out, there's a woman waiting outside who wasn't there when you went in. She's not looking at her phone. She's looking at the door.",
        choices:[
          { id:"c1", text:"Walk past her and assess — don't show that you've noticed",   icon:"👣", next:"t4_network", cons:{survival:10},           mood:"stealth", ach:[] },
          { id:"c2", text:"Approach her directly — if she's waiting for you, find out why",icon:"❓", next:"t4_ally",    cons:{honor:10,survival:-5}, mood:"neutral", ach:[] },
        ],
      },
      t3_secure:{
        id:"t3_secure", title:"Three Copies", location:"Secure Location",
        time:"3-4 AM", image:IMGS.apartment_dark, atm:"rain",
        text:"Three cloud locations, two physical copies, one printed summary sealed in an envelope addressed to a journalist in Berlin. If something happens to you, this doesn't die with you.\n\nThe Deputy Mayor's name appears on forty-seven documents. And there's a name at the top of an org chart — connected to a family untouchable in Japan for thirty years.",
        choices:[
          { id:"c1", text:"Contact the other witnesses on the list — safety in numbers", icon:"📞", next:"t4_network", cons:{honor:10},             mood:"heroic", ach:[] },
          { id:"c2", text:"Go straight to publication — once it's public, you're safer", icon:"📰", next:"t4_publish", cons:{honor:15,survival:-10},mood:"heroic", ach:[] },
        ],
      },
      t3_witness:{
        id:"t3_witness", title:"The Witness", location:"Unknown Location, Tokyo",
        time:"4 AM", image:IMGS.apartment_dark, atm:"rain",
        text:"A woman's voice, controlled, precise, clearly terrified beneath both of those things. She's a forensic accountant who has been building her own parallel record for two years, waiting for someone to bring it to light. She's been in a hotel under a false name since Tuesday.\n\n'I have copies of everything. Meet me. Alone. Somewhere public.'",
        choices:[
          { id:"c1", text:"Meet her — you need allies and she needs to be believed",  icon:"🤝", next:"t4_network", cons:{honor:10,survival:-5}, mood:"heroic",  ach:[] },
          { id:"c2", text:"Don't go — you can't verify who's actually waiting there", icon:"🔒", next:"t4_publish", cons:{survival:10},           mood:"stealth", ach:[] },
        ],
      },
      t4_network:{
        id:"t4_network", title:"The Network", location:"Various, Tokyo",
        time:"Dawn", image:IMGS.tokyo_rain, atm:"rain",
        text:"By dawn you have three witnesses, two journalists, a lawyer who has been waiting for exactly this evidence for four years. At 8:47 AM, someone tries to have your apartment searched using a falsified warrant. By 9:15, your editor publishes the first piece. By noon it has been picked up by fourteen international outlets.",
        choices:[
          { id:"c1", text:"Stay in Tokyo and see this through to the end", icon:"📰", next:"te_exposed", cons:{honor:20,survival:-10},mood:"heroic", ach:["tok_exposed"] },
          { id:"c2", text:"Leave Japan — let the network finish it without you",icon:"✈️", next:"te_vanish",  cons:{survival:20,honor:-5}, mood:"dark",   ach:["tok_vanish"]  },
        ],
      },
      t4_publish:{
        id:"t4_publish", title:"The Story Goes Live", location:"Press Office",
        time:"Dawn", image:IMGS.neon_alley, atm:"neutral",
        text:"Your editor runs it at six AM. The piece names the Deputy Mayor, the construction firm, and three crime family intermediaries by name and documentation.\n\nBy nine AM the Deputy Mayor's press secretary has resigned without explanation. You are, for the first time in twenty hours, theoretically safer.",
        choices:[
          { id:"c1", text:"Keep reporting — there's more to find in those files", icon:"📰", next:"te_exposed", cons:{honor:20}, mood:"heroic", ach:["tok_exposed"] },
          { id:"c2", text:"Disappear — you've done what you came to do",           icon:"🌫️", next:"te_vanish",  cons:{survival:15},mood:"dark",  ach:["tok_vanish"]  },
        ],
      },
      t4_ally:{
        id:"t4_ally", title:"The Unexpected Ally", location:"Shibuya Backstreet",
        time:"4 AM", image:IMGS.neon_alley, atm:"dark",
        text:"Detective Hashimoto, Organized Crime Division. She has been investigating Aoyama Development for three years from inside a police department with two of the crime family's people in mid-level positions.\n\n'We work together,' she says, 'or we both get buried separately. Your call.' She shows you her badge, her case file, a list of compromised officers.",
        choices:[
          { id:"c1", text:"Trust her — this is too big for any one person",     icon:"🤝", next:"te_exposed", cons:{honor:15,survival:5},   mood:"heroic", ach:["tok_exposed"] },
          { id:"c2", text:"Take her information but work in parallel",           icon:"📜", next:"te_exposed", cons:{honor:10,survival:10}, mood:"neutral",ach:["tok_exposed"] },
          { id:"c3", text:"Refuse — she might be exactly who she says, or exactly the opposite",icon:"🔒", next:"te_vanish", cons:{survival:20,honor:-5}, mood:"dark", ach:["tok_vanish"] },
        ],
      },
      te_exposed:{
        id:"te_exposed", title:"The Truth Keeper", location:"Tokyo",
        time:"Six Months Later", image:IMGS.rattay_town, atm:"neutral", isEnding:true, endingLabel:"The Story That Broke It",
        text:"The Deputy Mayor resigns on a Wednesday. Fourteen people are indicted over the following eight months. Aoyama Development's contracts are frozen. Your contact's name is in the published record — not as a victim, but as a source.\n\nThe story runs in twelve languages. It wins an award you accept quietly and don't give a speech at.",
        choices:[{ id:"r", text:"Take another case…", icon:"↺", next:"t1", cons:{} }],
      },
      te_vanish:{
        id:"te_vanish", title:"Ghost in the Rain", location:"Somewhere Not Tokyo",
        time:"Two Months Later", image:IMGS.winter_village, atm:"rain", isEnding:true, endingLabel:"The Ghost",
        text:"You send the files to four journalists you trust absolutely and get on a plane before the story breaks. You watch it unfold from a distance — a foreign country, a laptop, room service, the particular freedom of being responsible for something without being present for its consequences.\n\nYour source's name appears in the reporting. The story is what he needed it to be.",
        choices:[{ id:"r", text:"Find the next case…", icon:"↺", next:"t1", cons:{} }],
      },
    },
  },
};
