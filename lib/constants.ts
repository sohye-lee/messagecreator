import { MessageType } from "./types";

export const metadata = {
  title: "BlinkMessage",
  tagline: "Blinkless AI Message Generator",
  description:
    // "Elevate your communication with our AI Message Generator. Harness the power of Chat GPT to create engaging, diverse messages across multiple formats instantly. Ideal for emails, chats, social media, and more. Boost your productivity and creativity with our user-friendly web app.",
    "Quick and diverse message creation with just a few taps at your fingertips",
};

export const lengths: string[] = ["Short", "Mid-Long", "Long"];

export const types: string[] = [
  "any message",
  "text message",
  "email",
  "card message",
  "letter",
];

export const purposes: string[] = [
  // "greetings",
  // "thank yous",
  // "congratulations",
  // "apologies",
  // "invitations",
  // "announcements",
  // "reminders",
  // "expressing feelings",
  "send a warm greeting",
  "express heartfelt thanks",
  "offer heartfelt congratulations",
  "extend a sincere apology",
  "extend an inviting hand",
  "share an exciting announcement",
  "drop a friendly reminder",
  "convey deep feelings",
];

export const relationStrings: string[] = [
  "anyone",
  "mother",
  "father",
  "son",
  "daughter",
  "grandchild",
  "grandparent",
  "close friend",
  "best friend",
  "old friend",
  "new friend",
  "classmate",
  "teachers/professor",
  "student",
  "colleague",
  "boss",
  "client",
  "social group",
];

export const tones: string[] = [
  "friendly",
  "formal",
  "humorous",
  "sincere",
  "sympathetic",
  "motivational",
  "cheering",
];

export const occasionStrings: string[] = [
  "regular day",
  "Christmas",
  "New Year's Day",
  "birthday",
  "anniversary",
  "graduation",
  "promotion",
  "retirement",
  "new job",
  "new role",
  "engagement",
  "wedding",
  "new baby",
  "starting school",
  "moving in",
  "moving out",
  "professional recognition",
  "personal achievements",
];

export const urgencies: string[] = [
  "Just Dropping By - No Rush, Whenever The Recipient Has a Moment! 💌",
  "A Little Nudge - The Reply Would Be the Icing on the Cake! 🍩",
  "Kinda Urgent - Hoping for Swift Sprinkle of Attention! 🌟",
  "Urgent! Needs Eyes Now! 🔥",
];

export const steps: string[] = [
  // "Purpose & Occasion",
  // "Relation & Tone",
  // "Details",
  // "Chat to Tune",
  "Kneading the Dough",
  "Frosting the Details",
  "Baking to Perfection",
];

export const initialState = {
  type: types[0],
  purpose: purposes[0],
  occasion: occasionStrings[0],
  relation: relationStrings[0],
  tone: tones[0],
  length: lengths[0],
  urgency: urgencies[0],
  details: "",
};

// ARCHIVE

export const relations: MessageType[] = [
  {
    category: "Family",
    list: [
      "Mother",
      "Father",
      "Son",
      "Daughter",
      "Grandchild",
      "In-Laws",
      "Stepmother",
      "Stepfather",
      "Aunt",
      "Uncle",
      "Niece",
      "Nephew",
      "Cousin",
      "Adoptive Child",
      "Adoptive Parents",
    ],
  },
  {
    category: "Friends",
    list: [
      "Close Friend",
      "Social Friend",
      "Old Friend",
      "New Friend",
      "Best Friend",
      "School Friend",
    ],
  },
  {
    category: "Romantic",
    list: [
      "Boy Friend",
      "Girl Friend",
      "Fiance(e)",
      "Husband",
      "Wife",
      "Recently Separated",
      "Divorced",
    ],
  },
  {
    category: "Educational",
    list: ["Classmate", "Teachers/Professor", "Student", "School Staff"],
  },
  {
    category: "Professional",
    list: ["Colleague", "Boss", "Client"],
  },
  {
    category: "Formal",
    list: ["Authorities", "Senior Management"],
  },
  {
    category: "Casual",
    list: ["Acquaintances", "Social Groups"],
  },
];

export const occasions: MessageType[] = [
  {
    category: "Holidays/Special Day",
    list: [
      "Christmas",
      "New Year's Day",
      "Chinese New Year",
      "Fourth of July for the USA",
      "Easter",
      "Diwaii",
    ],
  },
  {
    category: "Personal Milestones",
    list: ["Birthdays", "Anniversaries", "Graduations"],
  },
  {
    category: "Professional Achievements",
    list: ["Promotions", "Retirements", "New Jobs or Roles"],
  },
  {
    category: "Seasonal Events",
    list: ["Spring", "Summer", "Autumn", "Winter"],
  },
  {
    category: "Life Events",
    list: [
      "Engagements",
      "Weddings",
      "New Baby",
      "Starting School",
      "Moving In",
      "Moving Out",
      "Leaving Abroad",
    ],
  },
  {
    category: "Achievements and Recognition",
    list: [
      "Winning Awards or Competitions",
      "Professional Recognition",
      "Personal Achievements",
    ],
  },
];

// export const themes: string[] = [
//   "Nature",
//   "Technology",
//   "Love",
//   "Art and Culture",
//   "Sports",
//   "Finance",
// ];
