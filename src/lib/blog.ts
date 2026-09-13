export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readTime: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "how-to-prevent-blocked-drains",
    title: "How to Prevent Blocked Drains at Home",
    metaTitle: "How to Prevent Blocked Drains | A1PlumberSG",
    excerpt:
      "Most household blockages build up slowly and are avoidable. Here is what actually keeps a drain clear in a Singapore home.",
    image: "/images/blog-blocked-drain.webp",
    imageAlt: "Bathroom floor trap being cleared of hair and soap build-up",
    readTime: "4 min read",
    sections: [
      {
        heading: "Why drains block in the first place",
        body: [
          "A blockage is almost never a single event. Hair, soap scum, cooking grease and food particles stick to the pipe wall and slowly narrow the opening until water can no longer pass. By the time you notice slow drainage, the pipe is often already half closed.",
        ],
      },
      {
        heading: "Simple habits that make the biggest difference",
        body: ["A few small routines prevent the majority of call-outs we attend."],
        list: [
          "Fit a hair catcher over every shower and floor trap",
          "Pour cooking oil into a container and bin it instead of down the sink",
          "Scrape plates before washing rather than rinsing scraps away",
          "Flush kitchen and bathroom drains with hot water once a week",
          "Never flush wipes, cotton pads or sanitary products",
        ],
      },
      {
        heading: "When prevention is no longer enough",
        body: [
          "If water pools, gurgles or drains slowly in more than one fixture, the build-up has moved beyond what home maintenance can shift. At that point mechanical clearing is the safe option — repeated doses of caustic cleaner can weaken plastic traps and older pipework.",
        ],
      },
    ],
  },
  {
    slug: "common-plumbing-problems",
    title: "The Most Common Plumbing Problems in Singapore Homes",
    metaTitle: "Common Plumbing Problems in Singapore | A1PlumberSG",
    excerpt:
      "From dripping taps to ceiling leaks, these are the faults we are called out to most often — and what usually causes them.",
    image: "/images/blog-common-problems.webp",
    imageAlt: "Plumber inspecting pipework under a kitchen sink",
    readTime: "5 min read",
    sections: [
      {
        heading: "Dripping taps and running toilets",
        body: [
          "Worn cartridges and perished cistern washers account for a surprising share of wasted water. They are cheap to fix and quietly expensive to ignore.",
        ],
      },
      {
        heading: "Blocked sinks, showers and floor traps",
        body: [
          "Grease in kitchens and hair in bathrooms are the two dominant causes. Both build up gradually and both are straightforward to clear when caught early.",
        ],
      },
      {
        heading: "Leaks behind walls and ceilings",
        body: [
          "In older flats, corroded joints and aging pipework weep slowly into the structure. The first sign is usually a damp patch or a water bill that does not match your usage.",
        ],
      },
      {
        heading: "Pressure and supply issues",
        body: [
          "Scaled shower heads, partially closed valves and narrowed pipework all reduce flow. Checking the simple causes first often avoids unnecessary pipework.",
        ],
      },
    ],
  },
  {
    slug: "when-to-call-a-plumber",
    title: "When to Call a Plumber Instead of Fixing It Yourself",
    metaTitle: "When to Call a Plumber | A1PlumberSG",
    excerpt:
      "Some jobs are genuinely DIY. Others turn a small repair into a large one. Here is a practical dividing line.",
    image: "/images/blog-call-plumber.webp",
    imageAlt: "Homeowner turning off a water stopcock valve",
    readTime: "4 min read",
    sections: [
      {
        heading: "Reasonable to try yourself",
        body: ["Low-risk maintenance that does not involve opening a pressurised line."],
        list: [
          "Cleaning a shower head or tap aerator",
          "Removing visible hair from a floor trap",
          "Tightening a loose tap handle",
          "Plunging a lightly blocked toilet",
        ],
      },
      {
        heading: "Call a plumber",
        body: ["Anything where a mistake causes water damage or loss of supply."],
        list: [
          "Any leak inside a wall, ceiling or floor",
          "Burst pipes or water you cannot shut off locally",
          "Toilets leaking at the base",
          "Water heater faults or leaks",
          "Blockages that return within days of clearing",
        ],
      },
      {
        heading: "The cost of waiting",
        body: [
          "Water damage compounds. A joint that weeps for a month can lift tiles, ruin cabinetry and reach the unit below. Getting the diagnosis right early is almost always the cheaper path.",
        ],
      },
    ],
  },
  {
    slug: "how-to-fix-a-leaking-tap",
    title: "What Actually Causes a Leaking Tap",
    metaTitle: "Leaking Tap Causes and Fixes | A1PlumberSG",
    excerpt:
      "A dripping tap has a handful of likely causes. Knowing which one you have tells you whether it is a five-minute job.",
    image: "/images/blog-leaking-tap.webp",
    imageAlt: "Close-up of a dripping chrome kitchen tap",
    readTime: "3 min read",
    sections: [
      {
        heading: "The cartridge or washer",
        body: [
          "In mixer taps a ceramic cartridge controls the flow. Once its surfaces wear, water passes even with the handle closed. Replacement is inexpensive but the cartridge must match the tap model.",
        ],
      },
      {
        heading: "Scale on the valve seat",
        body: [
          "Mineral deposits stop the washer seating cleanly. Cleaning helps temporarily, but a pitted seat will keep dripping until it is resurfaced or the tap is replaced.",
        ],
      },
      {
        heading: "Leaks around the base",
        body: [
          "Water appearing at the base rather than the spout usually means a failed O-ring or a loose connection underneath. Check inside the cabinet before assuming the tap body is at fault.",
        ],
      },
      {
        heading: "When to replace rather than repair",
        body: [
          "If the tap body is cracked, the threads are stripped or parts are no longer available, replacement is the more economical option.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
