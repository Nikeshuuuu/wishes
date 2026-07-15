/* =====================================================================
   EDIT ONLY THIS FILE. Everything on the site pulls from here.
   Swap the image paths, names, and text below — nothing else needs
   to change. Keep photos inside the /images folder and just point
   to the new filenames.
===================================================================== */

const CONFIG = {

  // --- Names -----------------------------------------------------------
  girlfriendName: "Priya",       // the name shown on the wax seal + title
  yourName: "Nikesh",            // how you sign the letter at the end

  // --- Hero (the sealed-letter screen) ----------------------------------
  heroEyebrow: "A letter, sealed just for",
  heroInstruction: "break the seal 🕯️",

  // --- Music --------------------------------------------------------------
  // Put an mp3 file in the /audio folder and point to it here.
  // I can't ship a real song file (copyright), so add your own —
  // "her favourite song" or something that means something to you two.
  musicSrc: "audio/Christina_Perri_-_Thousand_years_(mp3.pm).mp3",
  musicLabel: "our song", // shown next to the play/pause button

  // --- The Letter section --------------------------------------------
  letterOpening: "My dearest",
  letterBody: `I wanted to put something into words, because you deserve
    more than just a "happy birthday" text. From the way you laugh at
    your own jokes before you finish telling them, to how you somehow
    make even an ordinary Tuesday feel like something worth remembering —
    you make everything better just by being in it. Today is about you,
    and I hope it's as wonderful as you are.`,
  letterClosing: "Always yours, 🖋️",

  // --- Reasons ("chapters" of the letter) -------------------------------
  // photo is optional — shown when a card is tapped/hovered
  reasons: [
    {
      numeral: "I",
      text: "You make even the smallest moments feel like they matter. 💌",
      photo: "images/gif1.gif"
    },
    {
      numeral: "II",
      text: "Your laugh is, without competition, my favourite sound. 🕊️",
      photo: "images/gif2.gif"
    },
    {
      numeral: "III",
      text: "You have this way of showing up for people that I don't think you even notice you do. 🌹",
      photo: "images/gif1.gif"
    },
    {
      numeral: "IV",
      text: "Every year with you has been better than the one before it. ✨",
      photo: "images/gif2.gif"
    }
  ],

  // --- Gallery ("Our Moments" polaroid wall) ----------------------------
  gallery: [
    { src: "images/d1.jpeg", caption: "that smile, though 🕯️" },
    { src: "images/d2.jpeg", caption: "us, being us 🍷" },
    { src: "images/d3.jpeg", caption: "main character energy ✨" }
  ],

  // --- Cake + candle (this is now the opening screen) -------------------
  cakeEyebrow: "A birthday, waiting for",
  wishGrantedMessage: "Whatever you wished for — I hope it comes true. 🕯️",

  // --- Finale ------------------------------------------------------------
  finalePhoto: "images/d3.jpeg",
  finaleHeadline: "Happy Birthday 🌹",
  finaleMessage: `Here's to another year of you — messy, brilliant, endlessly
    kind, completely irreplaceable. I'm so glad I get to know you.`,
  finaleButtonLabel: "for you, always 🕊️",
  finaleHidden: "📜 P.S. — I mean every word. Every single one."
};