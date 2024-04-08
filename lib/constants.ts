import { MessageType } from "./types";

export const metadata = {
  title: "BlinkMessage",
  tagline: "Blinkless AI Message Generator",
  description:
    // "Elevate your communication with our AI Message Generator. Harness the power of Chat GPT to create engaging, diverse messages across multiple formats instantly. Ideal for emails, chats, social media, and more. Boost your productivity and creativity with our user-friendly web app.",
    "Quick and diverse message creation with just a few taps at your fingertips",
};

export const initialState = {
  purpose: "",
  occasion: "",
  relation: "",
  tone: "",
  length: "",
  urgency: "",
  theme: "",
  details: "",
};

export const purposes: string[] = [
  "Greetings",
  "Thank Yous",
  "Congratulations",
  "Apologies",
  "Invitations",
  "Announcements",
  "Reminders",
  "Expressing Feelings",
];

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

export const tones: string[] = [
  "Friendly",
  "Formal",
  "Humorous",
  "Sincere",
  "Sympathetic",
  "Motivational",
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

export const urgencies: string[] = [
  "Immediate",
  "Routine",
  "Whenever Convenient",
];

export const lengths: string[] = ["Short", "Medium", "Long"];

export const themes: string[] = [
  "Nature",
  "Technology",
  "Love",
  "Art and Culture",
  "Sports",
  "Finance",
];

export const steps: string[] = [
  "Purpose & Occasion",
  "Relation & Tone",
  "Details",
  "Chat to Tune",
];
