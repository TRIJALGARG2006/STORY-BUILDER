import { IMGS } from '../images.js';

export const STORIES = {
  crimson: {
    id:"crimson", title:"Crimson Court", subtitle:"Rosenvere — A Palace of Beautiful Lies",
    category:"romance", cover:IMGS.palace_night,
    synopsis:"Your family's name was taken three years ago by a lie. Tonight you've returned to the palace that destroyed you — wearing a mask, carrying a forged invitation, looking for proof. You didn't plan on finding anything else.",
    player:{ name:"The Exile", hp:90, honor:55, survival:45, magic:0, gold:50, inventory:["Forged Invitation","Hidden Knife","Mother's Locket"] },
    start:"cr1",
    nodes:{
      cr1:{
        id:"cr1", title:"The Grand Masquerade", location:"Rosenvere Palace, Grand Hall",
        time:"Midnight", image:IMGS.palace_night, atm:"mystical",
        text:"The masks make honest people of everyone. A thousand candles. Silk and feathers. You are performing a name that isn't yours, mapping the exits out of professional habit.\n\nYour real name was stripped three years ago by a lie the Chancellor built and the Crown believed. Then a gloved hand settles on your arm and a voice says, very quietly: 'I know exactly who you are. Don't move. I'm the only one in this room who does, and I want to keep it that way.'",
        choices:[
          { id:"c1", text:"Let them lead you away — hear what they have to say",     icon:"♡",  next:"cr2_garden",  cons:{honor:5},            mood:"romance", ach:[] },
          { id:"c2", text:"Pull free and vanish back into the crowd",                 icon:"🎭", next:"cr2_alone",   cons:{survival:10},        mood:"stealth", ach:[] },
          { id:"c3", text:"Stay still and whisper: 'Then tell me who you are first'", icon:"❓", next:"cr2_balcony", cons:{honor:5,survival:5}, mood:"neutral", ach:[] },
        ],
      },
      cr2_garden:{
        id:"cr2_garden", title:"The Garden at Midnight", location:"Palace Gardens",
        time:"Midnight", image:IMGS.candlelit_room, atm:"mystical",
        text:"The garden is cold, jasmine-scented. They remove their mask without drama. You know this face — the King's Spymaster.\n\n'Your family was innocent,' they say. 'I've known for two years. I've been building the evidence alone because everyone I trust is compromised. I can't do what comes next without someone who has both the standing to testify and nothing left to lose.'",
        choices:[
          { id:"c1", text:"Ask what they need — listen to the full proposal",          icon:"📜", next:"cr3_together", cons:{honor:5,survival:5}, mood:"neutral", ach:[] },
          { id:"c2", text:"Tell them you came tonight to ruin them, not partner",      icon:"🗡️", next:"cr3_knife",    cons:{honor:5},            mood:"dark",    ach:[] },
        ],
      },
      cr2_alone:{
        id:"cr2_alone", title:"Into the Masquerade", location:"Grand Ballroom",
        time:"After Midnight", image:IMGS.palace_night, atm:"tense",
        text:"You lose yourself in silk and music. The Chancellor's private secretary is magnificently drunk at the east bar. Forty minutes of careful conversation leaves you knowing which antechamber holds his correspondence cabinet.\n\nAs you move toward the east corridor, the person from before appears at your shoulder. 'I know where the cabinet is. Two witnesses are exponentially harder to discredit than one.'",
        choices:[
          { id:"c1", text:"Accept the help — two witnesses are harder to dismiss",            icon:"🤝", next:"cr3_together", cons:{honor:5,survival:5},  mood:"neutral", ach:[] },
          { id:"c2", text:"Keep going alone — you've waited three years, you finish it alone",icon:"☽", next:"cr3_solo",     cons:{survival:15,honor:-5}, mood:"stealth", ach:[] },
        ],
      },
      cr2_balcony:{
        id:"cr2_balcony", title:"Faces on the Balcony", location:"Palace Balcony",
        time:"Midnight", image:IMGS.candlelit_room, atm:"tense",
        text:"The Spymaster unmasks without ceremony. 'Your father wrote six letters to the King in the year before the trial. None of them arrived. I've spent two years finding them. They describe, in your father's own words, exactly what was actually happening — which is nothing criminal.'\n\nThey hold out a sealed folder.",
        choices:[
          { id:"c1", text:"Take the folder — you've wanted this proof for three years", icon:"📜", next:"cr3_together", cons:{honor:10}, mood:"neutral", ach:[] },
          { id:"c2", text:"Make them earn your trust — more before you take anything",   icon:"❓", next:"cr3_together", cons:{honor:15}, mood:"neutral", ach:[] },
        ],
      },
      cr3_together:{
        id:"cr3_together", title:"By Candlelight", location:"Hidden Chambers, East Wing",
        time:"2 AM", image:IMGS.candlelit_room, atm:"tense",
        text:"You work through the small hours side by side — documents spread across a table that officially doesn't exist. They are meticulous. You are relentless.\n\nAround three in the morning you notice a second candle has appeared beside your workspace — placed quietly, because yours was burning low. By four you have enough to destroy the Chancellor comprehensively. By dawn you have an additional problem that has nothing to do with the Chancellor.",
        choices:[
          { id:"c1", text:"Tell them what's been growing — before you talk yourself out of it", icon:"♡",  next:"cr4_love",    cons:{honor:5},  mood:"romance", ach:[] },
          { id:"c2", text:"Stay on mission — expose the Chancellor first, everything else after",icon:"📜", next:"cr4_justice", cons:{honor:15}, mood:"neutral", ach:[] },
        ],
      },
      cr3_knife:{
        id:"cr3_knife", title:"Steel in a Garden", location:"Palace Gardens",
        time:"Midnight", image:IMGS.candlelit_room, atm:"dark",
        text:"Your hand finds the knife. Three years in your chest — your mother's face when they read the charges, your father's expression in the dock. You could end the architect of all of it here.\n\nThey don't move. 'I know. And I know you have every right. But if I die here tonight your family's name stays buried with me.' Your hand doesn't move either.",
        choices:[
          { id:"c1", text:"Lower the knife — choose the harder and more useful thing",icon:"♡",  next:"cr3_together", cons:{honor:20}, mood:"heroic", ach:[] },
          { id:"c2", text:"Walk away from both of them — find another way entirely",   icon:"👣", next:"cr4_alone",    cons:{survival:10},mood:"dark",  ach:[] },
        ],
      },
      cr3_solo:{
        id:"cr3_solo", title:"The Antechamber", location:"Chancellor's Antechamber",
        time:"2 AM", image:IMGS.candlelit_room, atm:"tense",
        text:"The correspondence cabinet is unlocked — arrogance of a man who has never feared consequences. You spend fifteen minutes memorizing it. Thirty years of fabricated treasons. Twelve families. Yours.\n\nIn the corridor, the Spymaster is waiting. 'Two sets of witnesses are exponentially harder to discredit than one.' They aren't blocking your path.",
        choices:[
          { id:"c1", text:"Combine evidence — coordinate one move that can't be dismissed", icon:"🤝", next:"cr4_justice", cons:{honor:10,survival:5}, mood:"neutral", ach:[] },
          { id:"c2", text:"Take your evidence and move on separate parallel timelines",    icon:"📜", next:"cr4_justice", cons:{survival:10},          mood:"neutral", ach:[] },
        ],
      },
      cr4_love:{
        id:"cr4_love", title:"Before the Day Begins", location:"Hidden Chambers",
        time:"Before Dawn", image:IMGS.golden_dawn, atm:"victory",
        text:"You say it badly and honestly, the way things are worth saying. They are quiet long enough that you go through the full experience of regretting it. Then they say something equally badly and equally honestly back.\n\nOutside, the sky does the thing it does between four and five in the morning — that particular rose-grey that exists nowhere else.",
        choices:[
          { id:"c1", text:"Watch the dawn together before the world starts moving", icon:"♡", next:"cre_love", cons:{honor:10}, mood:"romance", ach:["court_love"] },
        ],
      },
      cr4_justice:{
        id:"cr4_justice", title:"The Morning of the Trial", location:"Rosenvere",
        time:"Four Days Later", image:IMGS.rattay_town, atm:"neutral",
        text:"The trial lasts four days. The evidence is, to use the legal term, comprehensive. The Chancellor's thirty years of manufactured treasons unravel in public — slowly at first, then all at once. Twelve families are named.\n\nYou stand in the gallery when the verdict is read and feel something in your chest release.",
        choices:[
          { id:"c1", text:"Walk forward — see where this road leads", icon:"⚖️", next:"cre_just", cons:{honor:15}, mood:"neutral", ach:["court_just"] },
        ],
      },
      cr4_alone:{
        id:"cr4_alone", title:"The Decision Alone", location:"Rosenvere, Pre-Dawn Streets",
        time:"Before Dawn", image:IMGS.palace_night, atm:"dark",
        text:"You transcribe everything you memorized in a tavern two streets from the palace and pay a reliable face to deliver it anonymously to the King's own investigator.\n\nYou leave Rosenvere on the first cart heading north. Whether your family's name clears is something you've decided you can't wait to find out.",
        choices:[
          { id:"c1", text:"Leave — let the truth find its own way home", icon:"👣", next:"cre_hollow", cons:{survival:10}, mood:"dark", ach:["court_hollow"] },
        ],
      },
      cre_love:{
        id:"cre_love", title:"The Garden, Spring", location:"Rosenvere Palace Gardens",
        time:"Spring", image:IMGS.golden_dawn, atm:"victory", isEnding:true, endingLabel:"Hearts Restored",
        text:"The Chancellor was arrested before breakfast. Your family's name was restored by sunset. The Spymaster resigned their position, citing the institution's need for a clean start.\n\nYou sit in the garden where this began — jasmine still in bloom — with two cups of tea and a future that doesn't have a predetermined shape. That turns out to be very good.",
        choices:[{ id:"r", text:"Begin a new love story…", icon:"↺", next:"cr1", cons:{} }],
      },
      cre_just:{
        id:"cre_just", title:"Justice, Imperfect and Real", location:"Rosenvere",
        time:"Summer", image:IMGS.golden_dawn, atm:"victory", isEnding:true, endingLabel:"Justice Served",
        text:"Six months of legal work. Twelve families reviewed; eleven fully restored. The twelfth required an additional appeal that took most of the summer. It is not glorious work. There are no songs about procedural appeals.\n\nBut your family's name is clean now, in writing, in the public record.",
        choices:[{ id:"r", text:"Begin a new story…", icon:"↺", next:"cr1", cons:{} }],
      },
      cre_hollow:{
        id:"cre_hollow", title:"The North Road", location:"Somewhere North of Rosenvere",
        time:"Autumn", image:IMGS.ruined_castle, atm:"dark", isEnding:true, endingLabel:"A Pyrrhic Departure",
        text:"A month later, word reaches you that the Chancellor has been suspended. Two months after: three families have had charges reviewed. Your family is somewhere in that queue.\n\nYou don't go back. The road north is long. Somewhere around the third week, you stop counting the days.",
        choices:[{ id:"r", text:"Begin again…", icon:"↺", next:"cr1", cons:{} }],
      },
    },
  },
};