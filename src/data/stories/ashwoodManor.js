import { IMGS } from '../images.js';

export const STORIES = {
  ashwood: {
    id:"ashwood", title:"Ashwood Manor", subtitle:"The English Countryside — Something is Wrong Here",
    category:"horror", cover:IMGS.haunted_manor,
    synopsis:"Your car breaks down outside Ashwood Manor on a stormy night. The owners insist you stay. By midnight you understand why no one ever leaves Ashwood Manor the same way they arrived.",
    player:{ name:"You", hp:90, honor:50, survival:50, magic:0, gold:30, inventory:["Phone (No Signal)","Car Keys","Notebook"] },
    start:"h1",
    nodes:{
      h1:{
        id:"h1", title:"The Manor at Dusk", location:"Ashwood Manor, Front Gate",
        time:"7 PM, October", image:IMGS.haunted_manor, atm:"horror",
        text:"The car dies at 6:47 PM on a road that doesn't appear on any map your GPS recognizes. Through the trees, lit by lightning: a manor house. Large, Edwardian, every window illuminated as if expecting guests.\n\nThe door opens before you knock. The woman in the doorway is perhaps sixty, impeccably dressed. 'We've been hoping someone would come,' she says. 'The house has been waiting. Please, come in out of the cold.'",
        choices:[
          { id:"c1", text:"Go inside — you have no other options and it's only a house",    icon:"🚪", next:"h2_inside",  cons:{survival:-5},          mood:"neutral", ach:[] },
          { id:"c2", text:"Stay on the porch — ask questions before crossing the threshold",icon:"❓", next:"h2_porch",   cons:{honor:5,survival:5},   mood:"neutral", ach:[] },
          { id:"c3", text:"Walk back to the road and wait out the storm in the car",        icon:"👣", next:"h2_car",     cons:{survival:10,honor:-5}, mood:"stealth", ach:[] },
        ],
      },
      h2_inside:{
        id:"h2_inside", title:"The Entrance Hall", location:"Ashwood Manor, Inside",
        time:"7:15 PM", image:IMGS.dark_corridor, atm:"horror",
        text:"The inside is warm and smells of old wood and something floral you can't identify. A man sits by the fire — he doesn't turn around.\n\nAll the clocks in the room have stopped at 11:58. The paintings show the same woman at different ages — but she looks exactly the same in all of them. Through the window, your car has disappeared from the drive.",
        choices:[
          { id:"c1", text:"Ask about the clocks — calmly, as if it might be nothing",          icon:"🕐", next:"h3_investigate", cons:{honor:5},            mood:"neutral", ach:[] },
          { id:"c2", text:"Ask about your car — you need it back, you need to leave now",      icon:"🚗", next:"h3_escape",      cons:{survival:10},         mood:"danger",  ach:[] },
          { id:"c3", text:"Say nothing — explore the house while they think you're comfortable",icon:"👣", next:"h3_explore",   cons:{survival:5,honor:-5}, mood:"stealth", ach:[] },
        ],
      },
      h2_porch:{
        id:"h2_porch", title:"Questions at the Door", location:"Ashwood Manor, Front Steps",
        time:"7 PM", image:IMGS.haunted_manor, atm:"horror",
        text:"You ask for a phone. She says the lines are down. You ask when the rain clears. She says 'not tonight.' You ask whether there's anyone else you could call. She smiles the smile of someone for whom this is a familiar script. 'There's only the house.'\n\nBehind her, something moves. Not the husband — larger than a person, lower to the ground, completely silent.",
        choices:[
          { id:"c1", text:"Go inside anyway — you saw something, which means you need to understand it",icon:"🚪", next:"h3_investigate", cons:{honor:5},    mood:"neutral", ach:[] },
          { id:"c2", text:"Back away from the door and look for another way in",                        icon:"👣", next:"h3_explore",    cons:{survival:10}, mood:"stealth", ach:[] },
        ],
      },
      h2_car:{
        id:"h2_car", title:"The Road Back", location:"Ashwood Drive",
        time:"7:05 PM", image:IMGS.haunted_manor, atm:"horror",
        text:"You make it to the gate. Your car is exactly where you left it — except all four tires are flat with no visible damage. Your phone still shows no signal. The gate, which opened outward when you walked through it, now opens inward only.\n\nSomething at the edge of the tree line is not a tree. It hasn't moved yet. But it is aware of you.",
        choices:[
          { id:"c1", text:"Go back to the house — it's the only shelter",              icon:"🚪", next:"h3_investigate", cons:{survival:-10},        mood:"danger", ach:[] },
          { id:"c2", text:"Run into the forest — any direction away from both threats",icon:"🌲", next:"h3_escape",     cons:{survival:5,honor:-5}, mood:"danger", ach:[] },
        ],
      },
      h3_investigate:{
        id:"h3_investigate", title:"The Truth of the House", location:"Ashwood Manor Library",
        time:"9 PM", image:IMGS.dark_corridor, atm:"horror",
        text:"The library takes an hour to find the right drawer in. The Ashwood family records go back to 1847 — the same two names, again and again. The same two faces in every photograph. Not descendants. The same people.\n\nA letter dated 1923: 'The house requires a visitor every seven years. The visitor does not leave diminished. They leave changed. This has always been the agreement.' The clock says 11:47. When you entered, it was nine PM.",
        choices:[
          { id:"c1", text:"Find another way out — there must be a servant's exit",     icon:"🚪", next:"h4_final",    cons:{survival:10},           mood:"danger",  ach:[] },
          { id:"c2", text:"Confront the Ashwoods — make them explain the agreement",   icon:"❓", next:"h4_confront", cons:{honor:15,survival:-5},  mood:"heroic",  ach:["manor_truth"] },
          { id:"c3", text:"Find out what 'changed' means before you decide",           icon:"📖", next:"h4_confront", cons:{honor:10},               mood:"neutral", ach:["manor_truth"] },
        ],
      },
      h3_explore:{
        id:"h3_explore", title:"The House Reveals Itself", location:"Ashwood Manor, Upper Floors",
        time:"8-10 PM", image:IMGS.dark_corridor, atm:"horror",
        text:"The upper floors are a different geography. Rooms that shouldn't fit inside the building's exterior dimensions. A nursery with toys dated from different decades, all slightly wrong.\n\nIn a locked room on the third floor — you find the key in a vase, placed as if for you — there are seventeen notebooks. Each written in a different hand. Each ending on the same sentence: 'I understood, finally, what the house needed. I gave it willingly. This is my record of choosing.'",
        choices:[
          { id:"c1", text:"Get out of the house immediately — whatever this is, you refuse it",icon:"🏃", next:"h4_final",    cons:{survival:15,honor:-5}, mood:"danger",  ach:[] },
          { id:"c2", text:"Read the last notebook fully before deciding anything",              icon:"📖", next:"h4_confront", cons:{honor:10},             mood:"neutral", ach:["manor_truth"] },
        ],
      },
      h3_escape:{
        id:"h3_escape", title:"Running", location:"Ashwood Estate Grounds",
        time:"8 PM", image:IMGS.haunted_manor, atm:"horror",
        text:"The grounds are larger than they should be. You've been walking twenty minutes in what you're certain was a straight line north when you find yourself back at the manor's east wing.\n\nMrs. Ashwood is waiting on the terrace. 'The grounds return you. They always have. Please come inside. The house would like to make its offer properly.'",
        choices:[
          { id:"c1", text:"Go inside — you don't have a choice, so choose it consciously",      icon:"🚪", next:"h4_confront", cons:{honor:5},   mood:"neutral", ach:[] },
          { id:"c2", text:"Demand to know exactly what the offer is before taking another step",icon:"❓", next:"h4_confront", cons:{honor:10}, mood:"heroic",  ach:[] },
        ],
      },
      h4_final:{
        id:"h4_final", title:"The Offer", location:"Ashwood Manor, The Drawing Room",
        time:"11:50 PM", image:IMGS.dark_corridor, atm:"horror",
        text:"The clocks are all showing 11:58 now. Mrs. Ashwood sits across from you with the patience of someone who has had this conversation seventeen times.\n\n'The house chooses one visitor every seven years. It keeps something small. In return, it gives them clarity — the specific, rare clarity of people who have looked at what frightens them and chosen deliberately. Eleven of seventeen called it the best thing that ever happened to them.'",
        choices:[
          { id:"c1", text:"Accept — you'll take the clarity at whatever cost",           icon:"🕯️", next:"he_cursed", cons:{magic:20,honor:10},   mood:"mystic", ach:["manor_cursed"] },
          { id:"c2", text:"Refuse — find the door that opens and walk through it",       icon:"🚪", next:"he_escape", cons:{survival:20,honor:15}, mood:"heroic", ach:["manor_escape"] },
          { id:"c3", text:"Ask to read the accounts of people who called it worst",      icon:"📖", next:"he_truth",  cons:{honor:20},             mood:"neutral",ach:["manor_truth","manor_escape"] },
        ],
      },
      h4_confront:{
        id:"h4_confront", title:"The House Explains Itself", location:"Ashwood Manor",
        time:"11:55 PM", image:IMGS.dark_corridor, atm:"horror",
        text:"They answer everything. The house is old enough that no one remembers what it was before it became this. It takes one thing from its chosen visitor. Something subjective — a specific fear, a specific regret, a specific way of seeing the world that has stopped serving them.\n\nSeventeen visitors across 150 years. Three left claiming harm. Fourteen left claiming something they didn't have words for but were clearly grateful about.",
        choices:[
          { id:"c1", text:"Accept the house's offer deliberately — you choose this",     icon:"🕯️", next:"he_cursed", cons:{magic:20,honor:10},   mood:"mystic", ach:["manor_cursed","manor_truth"] },
          { id:"c2", text:"Find the door and refuse — you'll keep what's yours intact", icon:"🚪", next:"he_escape", cons:{survival:20,honor:15}, mood:"heroic", ach:["manor_truth","manor_escape"] },
        ],
      },
      he_escape:{
        id:"he_escape", title:"The Survivor", location:"The Road, Dawn",
        time:"Dawn", image:IMGS.golden_dawn, atm:"victory", isEnding:true, endingLabel:"The Survivor",
        text:"The door opens at exactly midnight. It opens to the drive, the road, the rain that has finally stopped, and your car — engine ready — sitting where you left it.\n\nYou drive until the manor is not visible in the mirrors. You're not sure if leaving was a victory or a missed opportunity. You're not sure it matters. You're on the road. The road is yours.",
        choices:[{ id:"r", text:"Find another door…", icon:"↺", next:"h1", cons:{} }],
      },
      he_cursed:{
        id:"he_cursed", title:"The Inheritance", location:"The Road, and Elsewhere",
        time:"After", image:IMGS.cosmos, atm:"mystical", isEnding:true, endingLabel:"What the House Gave",
        text:"The house takes the fear of being seen — the specific, decades-long terror of being looked at directly and found insufficient. You didn't know you were carrying it until it was gone.\n\nYou drive away at dawn, spending twenty minutes identifying what's different. It's not anything you can point to. It's everything you do with your hands, your voice, your face.",
        choices:[{ id:"r", text:"Return to the world…", icon:"↺", next:"h1", cons:{} }],
      },
      he_truth:{
        id:"he_truth", title:"What Lies Beneath", location:"Ashwood Manor Library",
        time:"Midnight", image:IMGS.dark_corridor, atm:"horror", isEnding:true, endingLabel:"The Full Account",
        text:"The three accounts of harm are thorough. One lost their anger. One lost their grief. One lost their certainty — the only thing standing between them and the very large question of who they actually were.\n\nYou find the door and walk through it into the dawn with the specific quality of knowledge that can only come from understanding something completely and choosing not to participate in it.",
        choices:[{ id:"r", text:"Return to the world…", icon:"↺", next:"h1", cons:{} }],
      },
    },
  },
};
