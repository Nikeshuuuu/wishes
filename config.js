/* =====================================================================
   EDIT ONLY THIS FILE. Everything on the site pulls from here.
   Swap the image paths, names, and text below — nothing else needs
   to change. Keep photos inside the /images folder and just point
   to the new filenames.
===================================================================== */

const CONFIG = {

  // --- Names -----------------------------------------------------------
  girlfriendName: "Darling",       // the name shown on the wax seal + title
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
  letterOpening: "My dearest Darling, 🕊️",
  letterBody: `I wanted to put something into words, because you deserve
    more than just a "happy birthday" text. 💌 From the way you laugh at
    your own jokes before you finish telling them 😂💕, to how you somehow
    make even an ordinary day feel like magic ✨ — you make everything
    better just by being in it. You are my everything. 🥰

    Thank you for choosing me, again and again, every single day. 💑
    We will always be together, no matter how many storms we weather 🌦️➡️☀️,
    because what we have is worth fighting for every time.

    Even today, I'll say it like it's the first time: you are the most
    amazing thing that has ever happened to my life. 🌟 You are the most
    beautiful, kind-hearted, breathtaking girl I have ever known 😍,
    and I am so incredibly proud to call you my life partner. 💍

    Thank you so much for being a part of my life, Darlinggg.... 🥹💖

    Today is all about you, my love,
    and I hope it's every bit as wonderful and radiant as you are. 🎂🌸

    Here's to many more birthdays, and many more memories written
    just for us. 📖💫 Many happy returns of the day, my love. I love you
    more than words can hold. 💞
    Happy Birthday once again, my Darlingggg.... 🎉🥳❤️`,

  letterClosing: "Anything for you, everything for you, and don't forget — I'm always yours. 🖋️💘",

  // --- Reasons ("chapters" of the letter) -------------------------------
  // photo is optional — shown when a card is tapped/hovered
  reasons: [
    {
      numeral: "I",
      text: "You make even the smallest moments feel like they matter. 💌",
      photo: "images/gif0.gif"
    },
    {
      numeral: "II",
      text: "With you, it never feels like work — just two people choosing each other, over and over. 💑",
      photo: "images/gif1.gif"
    },
    {
      numeral: "III",
      text: "You have this way of showing up for people that I don't think you even notice you do. 🌹",
      photo: "images/gif2.gif"
    },
    {
      numeral: "IV",
      text: "Every year with you has been better than the one before it. ✨",
      photo: "images/gif3.gif"
    }
    ,{
      numeral: "V",
      text: "And many more which i can't express. ✨",
      photo: "images/gif4.gif"
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
  finaleHeadline: "Happy Birthday Bangarammm...🌹",
  finaleMessage: `Here's to another year of you — messy, brilliant, endlessly
    kind, completely irreplaceable. I'm so glad I get to know you.`,
  finaleButtonLabel: "for you, always 🕊️",
  finaleHidden: "📜 P.S. — I mean every word. Every single one."
};
