import {
  AlertTriangle,
  Bath,
  Droplet,
  Droplets,
  Flame,
  Gauge,
  Hammer,
  PipetteIcon,
  Recycle,
  ShowerHead,
  Siren,
  Toilet,
  Utensils,
  Waves,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  short: string;
  icon: LucideIcon;
  intro: string;
  causes: string[];
  signs: string[];
  help: string[];
  why: string;
  faqs: { q: string; a: string }[];
};

const base = (name: string) => [
  `On-site inspection to confirm exactly where the ${name} is coming from`,
  "A clear explanation of the repair options and the cost before any work starts",
  "Repair or replacement carried out with proper tools and quality parts",
  "Testing after the job so you can see the problem is genuinely resolved",
];

export const services: Service[] = [
  {
    slug: "leaking-pipes",
    title: "Leaking Pipes",
    metaTitle: "Leaking Pipe Repair Singapore | A1PlumberSG",
    short: "Drips, damp patches and hidden pipe leaks traced and repaired properly.",
    icon: Droplet,
    intro:
      "A leaking pipe rarely fixes itself. Even a slow drip inside a wall or ceiling void can soak plaster, lift tiles and push up your water bill month after month. A1PlumberSG traces the leak to its source and repairs the affected section rather than covering up the symptom.",
    causes: [
      "Corroded or aging galvanised pipework in older HDB flats",
      "Loose or worn joints and fittings after years of vibration",
      "High water pressure stressing thin pipe walls",
      "Damage caused during renovation or drilling work",
      "Poorly sealed connections from a previous quick fix",
    ],
    signs: [
      "Damp patches or bubbling paint on walls and ceilings",
      "A musty smell in a cupboard, riser or false ceiling",
      "Water meter still moving when every tap is closed",
      "Unexplained jump in your monthly water bill",
      "Constant dripping sound behind a wall",
    ],
    help: base("leak"),
    why: "Water travelling inside a wall damages far more than the pipe itself. Left alone, a small leak can reach electrical conduits, rot cabinetry and create a dispute with the unit below. A proper repair costs a fraction of the damage it prevents.",
    faqs: [
      {
        q: "Can you find a leak inside a wall or ceiling?",
        a: "Yes. We check pressure, meter movement and moisture patterns to narrow down the location before opening anything up, so the access hole stays as small as possible.",
      },
      {
        q: "Do I need to replace the whole pipe run?",
        a: "Not usually. If the surrounding pipework is sound, we replace only the failed section. If the run is badly corroded, we will tell you honestly and quote for replacement.",
      },
    ],
  },
  {
    slug: "blocked-drain",
    title: "Blocked Drain",
    metaTitle: "Blocked Drain Clearing Singapore | A1PlumberSG",
    short: "Slow or backed-up floor and outdoor drains cleared on site.",
    icon: Waves,
    intro:
      "Drains block gradually. Hair, grease, soap scum and debris build up on the pipe wall until water can no longer pass. A1PlumberSG clears the blockage mechanically and checks the flow afterwards so the drain runs freely again.",
    causes: [
      "Hair and soap build-up inside the drain trap",
      "Cooking grease cooling and hardening in the pipe",
      "Food scraps and rice washed down the sink",
      "Foreign objects dropped into a floor trap",
      "Roots, silt or debris in outdoor drainage",
    ],
    signs: [
      "Water pooling around the floor trap",
      "Gurgling sounds after the water drains away",
      "Slow drainage in more than one fixture",
      "Bad smell rising from the drain",
      "Water backing up when the washing machine empties",
    ],
    help: base("blockage"),
    why: "Chemical drain cleaners often only punch a small hole through the blockage and can damage older pipework. Mechanical clearing removes the build-up itself, so the drain stays clear for much longer.",
    faqs: [
      {
        q: "How long does clearing a blocked drain take?",
        a: "Most household blockages are cleared within an hour once we are on site. Heavier build-up in a shared or outdoor line can take longer.",
      },
      {
        q: "Will clearing the drain make a mess?",
        a: "We work with sheeting and containment around the trap and clean the area before we leave.",
      },
    ],
  },
  {
    slug: "clogged-sink",
    title: "Clogged Sink",
    metaTitle: "Clogged Sink Repair Singapore | A1PlumberSG",
    short: "Bathroom and kitchen sinks draining slowly or not at all.",
    icon: Droplets,
    intro:
      "A sink that empties slowly is telling you the trap or waste pipe is already half blocked. A1PlumberSG opens up the waste, clears the build-up and checks that the trap is correctly sealed when it goes back together.",
    causes: [
      "Hair and toothpaste collecting in the bottle trap",
      "Grease and detergent residue coating the waste pipe",
      "A trap that was never fully tightened after installation",
      "Small objects washed into the waste outlet",
    ],
    signs: [
      "Water sitting in the basin long after you finish",
      "Bubbling or gurgling as the sink empties",
      "Damp inside the vanity cabinet",
      "A sour smell around the plughole",
    ],
    help: base("clog"),
    why: "Repeated pouring of caustic cleaner into a slow sink can soften plastic traps and cause them to leak into the cabinet below. Clearing the trap properly avoids that second problem.",
    faqs: [
      {
        q: "Can a clogged sink be cleared without removing the cabinet?",
        a: "In most cases yes — we work through the plughole and the trap under the basin.",
      },
      {
        q: "How do I keep the sink clear afterwards?",
        a: "Use a strainer, avoid pouring oil down the drain, and flush the waste with hot water weekly.",
      },
    ],
  },
  {
    slug: "toilet-clogged",
    title: "Toilet Clogged",
    metaTitle: "Clogged Toilet Repair Singapore | A1PlumberSG",
    short: "Toilets that overflow, back up or refuse to clear.",
    icon: Toilet,
    intro:
      "A clogged toilet is one of the few plumbing problems that makes a home unusable straight away. A1PlumberSG clears the obstruction from the pan or the soil pipe and checks the flush afterwards to confirm the waste is moving properly.",
    causes: [
      "Wet wipes, sanitary products or paper towels flushed away",
      "Too much toilet paper in a single flush",
      "A foreign object dropped into the pan",
      "A partially blocked soil pipe further down the line",
      "Weak flush volume that never fully clears the trap",
    ],
    signs: [
      "Water rising close to the rim when you flush",
      "The bowl draining very slowly after use",
      "Waste returning into the pan",
      "Gurgling in a nearby floor trap when you flush",
    ],
    help: base("blockage"),
    why: "Repeated flushing of a blocked pan risks an overflow onto the bathroom floor, which can seep into neighbouring rooms and the unit below. Clearing it correctly the first time avoids that.",
    faqs: [
      {
        q: "Do you handle emergency toilet blockages?",
        a: "Yes. Call or WhatsApp us and we will tell you honestly how soon we can be at your door.",
      },
      {
        q: "Can you retrieve something dropped into the toilet?",
        a: "Often yes. Stop flushing immediately and call us — flushing tends to push the object deeper into the soil pipe.",
      },
    ],
  },
  {
    slug: "toilet-not-flushing",
    title: "Toilet Not Flushing",
    metaTitle: "Toilet Not Flushing Repair Singapore | A1PlumberSG",
    short: "Weak, partial or completely dead flush mechanisms repaired.",
    icon: Recycle,
    intro:
      "When a toilet stops flushing properly the fault is usually inside the cistern, not the pan. A1PlumberSG inspects the inlet valve, flush valve and float assembly and replaces the worn part rather than the whole toilet.",
    causes: [
      "A worn flush valve seal letting water bypass",
      "A faulty inlet valve that refills the cistern too slowly",
      "Float set too low so the cistern never fills",
      "Broken push button or lift rod linkage",
      "Mineral build-up restricting the rim holes",
    ],
    signs: [
      "You have to hold the button down for a full flush",
      "The cistern takes several minutes to refill",
      "Only a trickle of water enters the bowl",
      "The flush works only every second attempt",
    ],
    help: base("fault"),
    why: "A toilet that only half flushes leaves waste in the trap and eventually causes a full blockage. Replacing a worn cistern part is far cheaper than clearing a blocked soil pipe later.",
    faqs: [
      {
        q: "Do you carry replacement cistern parts?",
        a: "We carry common inlet and flush valves. For unusual imported models we will source the correct part and confirm the cost with you first.",
      },
      {
        q: "Is it worth repairing an old toilet?",
        a: "Usually yes. If the pan and cistern are sound, a new valve set restores normal flushing.",
      },
    ],
  },
  {
    slug: "water-leakage",
    title: "Water Leakage",
    metaTitle: "Water Leakage Repair Singapore | A1PlumberSG",
    short: "Ceiling, wall, floor and bathroom leakage investigated and stopped.",
    icon: ShowerHead,
    intro:
      "Water leakage in a flat can come from pipework, waterproofing, a failing seal or a neighbouring unit. A1PlumberSG works through the possibilities methodically so you know what is actually leaking before anyone starts hacking tiles.",
    causes: [
      "Failed silicone or grout around a shower area",
      "A concealed pipe joint weeping behind tiles",
      "Degraded waterproofing membrane in a wet area",
      "Overflowing or cracked floor trap",
      "Condensation mistaken for a plumbing leak",
    ],
    signs: [
      "Water stain spreading on a ceiling below a bathroom",
      "Tiles sounding hollow or lifting",
      "Skirting or door frames swelling",
      "Damp that returns after every shower",
    ],
    help: base("leakage"),
    why: "Leakage between units is a common source of neighbour disputes in Singapore. Establishing the real source early keeps the repair small and the conversation civil.",
    faqs: [
      {
        q: "Can you tell if the leak is from my unit or upstairs?",
        a: "In most cases yes. We isolate fixtures and observe how the damp responds, which usually points clearly to one side.",
      },
      {
        q: "Do you do tiling and waterproofing repairs too?",
        a: "We handle the plumbing repair and can advise on the waterproofing works needed to complete the job.",
      },
    ],
  },
  {
    slug: "low-water-pressure",
    title: "Low Water Pressure",
    metaTitle: "Low Water Pressure Repair Singapore | A1PlumberSG",
    short: "Weak taps and showers diagnosed at the fixture, valve or supply.",
    icon: Gauge,
    intro:
      "Low pressure at one tap is a very different problem from low pressure across the whole home. A1PlumberSG tests each point, works back to the stopcock and identifies where the flow is actually being lost.",
    causes: [
      "Clogged aerator or shower head full of scale",
      "Partially closed or seized stopcock",
      "Corrosion narrowing older pipework",
      "A concealed leak reducing supply downstream",
      "Faulty pressure-reducing valve",
    ],
    signs: [
      "Shower flow drops when another tap is opened",
      "One fixture much weaker than the rest",
      "Pressure fluctuating through the day",
      "Water heater struggling to activate",
    ],
    help: base("pressure loss"),
    why: "Low pressure is often the first visible symptom of a hidden leak or advanced corrosion. Diagnosing it early can prevent a burst later.",
    faqs: [
      {
        q: "Is low pressure always a plumbing fault?",
        a: "No — sometimes it is a supply-side issue or a partially closed valve. We check the simple causes before recommending any pipework.",
      },
      {
        q: "Can you improve pressure in an old flat?",
        a: "Often yes, by clearing fixtures, replacing restrictive valves or renewing badly corroded sections.",
      },
    ],
  },
  {
    slug: "burst-pipe",
    title: "Burst Pipe",
    metaTitle: "Burst Pipe Repair Singapore | A1PlumberSG",
    short: "Urgent burst and split pipe repairs to stop water loss fast.",
    icon: Siren,
    intro:
      "A burst pipe releases a lot of water very quickly. Shut the main stopcock, then call A1PlumberSG. We isolate the damaged section, repair or replace it and restore supply as soon as it is safe to do so.",
    causes: [
      "Advanced internal corrosion in old pipework",
      "Accidental impact or drilling during renovation",
      "Excess pressure from a failed regulating valve",
      "Poorly supported pipe run vibrating loose",
    ],
    signs: [
      "Water spraying or pouring from a wall, ceiling or riser",
      "Sudden total loss of pressure",
      "Loud rushing sound inside a wall",
      "Water meter spinning rapidly",
    ],
    help: base("burst"),
    why: "Every minute a burst runs adds to the damage and the clean-up. Fast isolation and a proper permanent repair limit both.",
    faqs: [
      {
        q: "What should I do before the plumber arrives?",
        a: "Close the main stopcock, switch off electrics near the water, and move valuables away from the affected area.",
      },
      {
        q: "Do you handle burst pipes outside office hours?",
        a: "Call or WhatsApp us and we will tell you straight away how quickly we can attend.",
      },
    ],
  },
  {
    slug: "leaking-tap",
    title: "Leaking Tap",
    metaTitle: "Leaking Tap Repair Singapore | A1PlumberSG",
    short: "Dripping kitchen, basin and shower taps repaired or replaced.",
    icon: PipetteIcon,
    intro:
      "A dripping tap is a small job that quietly wastes a large amount of water. A1PlumberSG replaces the cartridge, washer or the tap itself and checks the connections underneath while we are there.",
    causes: [
      "Worn ceramic cartridge or rubber washer",
      "Scale build-up on the valve seat",
      "Loose or damaged spindle",
      "A tap body cracked by over-tightening",
    ],
    signs: [
      "Steady drip after the tap is closed",
      "Water seeping around the base or handle",
      "Handle feeling gritty or stiff to turn",
      "Green or white staining under the spout",
    ],
    help: base("drip"),
    why: "A constant drip stains the fixture, encourages mould in the cabinet and adds up on your water bill. It is one of the cheapest repairs to have done properly.",
    faqs: [
      {
        q: "Can you repair the tap or must it be replaced?",
        a: "Most taps can be repaired with a new cartridge. We only recommend replacement when the body itself is damaged.",
      },
      {
        q: "Can you install a tap I bought myself?",
        a: "Yes, we are happy to fit customer-supplied taps.",
      },
    ],
  },
  {
    slug: "leaking-toilet",
    title: "Leaking Toilet",
    metaTitle: "Leaking Toilet Repair Singapore | A1PlumberSG",
    short: "Water escaping from the cistern, pan or floor connection.",
    icon: Bath,
    intro:
      "A leaking toilet can waste water silently into the pan or visibly onto the floor. A1PlumberSG identifies whether the fault is the cistern seal, the inlet valve or the pan connector and repairs it.",
    causes: [
      "Perished flush valve washer letting water into the pan",
      "Faulty inlet valve running continuously",
      "Cracked cistern or loose tank bolts",
      "Failed wax or rubber pan connector at floor level",
    ],
    signs: [
      "Constant trickle in the bowl between flushes",
      "Water on the floor around the base",
      "Cistern refilling by itself every few minutes",
      "Damp or discoloured grout at the toilet base",
    ],
    help: base("leak"),
    why: "A toilet leaking at floor level can push moisture into the slab and the ceiling of the unit below. Fixing the seal early prevents a much bigger problem.",
    faqs: [
      {
        q: "How do I confirm the toilet is leaking internally?",
        a: "Wipe the pan dry above the water line — if a trickle reappears within a few minutes, water is escaping from the cistern.",
      },
      {
        q: "Do you reseal a toilet that leaks at the base?",
        a: "Yes. We lift the pan, replace the connector and reseal it correctly.",
      },
    ],
  },
  {
    slug: "water-heater-problems",
    title: "Water Heater Problems",
    metaTitle: "Water Heater Repair Singapore | A1PlumberSG",
    short: "No hot water, leaking units and faulty heater plumbing.",
    icon: Flame,
    intro:
      "Storage and instant heaters both rely on sound plumbing around them. A1PlumberSG checks the supply, isolating valves, connections and the unit itself, and advises whether a repair or a replacement makes more sense.",
    causes: [
      "Failed heating element or thermostat",
      "Corroded tank leaking at a seam",
      "Blocked or scaled inlet filter",
      "Leaking connections above the heater",
      "Incorrect installation restricting flow",
    ],
    signs: [
      "Water never gets properly hot",
      "Hot water runs out far quicker than before",
      "Dripping from the heater housing or ceiling",
      "Rusty coloured hot water",
    ],
    help: base("heater fault"),
    why: "A leaking heater sits directly above ceiling boards and electrical fittings. Attending to it early avoids water damage and an unexpected cold-shower morning.",
    faqs: [
      {
        q: "Do you install replacement water heaters?",
        a: "Yes, we handle the plumbing side of the removal and installation and can advise on suitable sizing.",
      },
      {
        q: "Is a leaking storage heater repairable?",
        a: "If the tank itself has corroded through, replacement is the only sound option. We will show you what we find.",
      },
    ],
  },
  {
    slug: "kitchen-sink-blockage",
    title: "Kitchen Sink Blockage",
    metaTitle: "Kitchen Sink Blockage Clearing Singapore | A1PlumberSG",
    short: "Grease-heavy kitchen waste lines cleared and flowing again.",
    icon: Utensils,
    intro:
      "Kitchen blockages are mostly grease. Warm oil goes down as a liquid and sets as a solid layer inside the pipe. A1PlumberSG clears the build-up mechanically so the full pipe diameter is restored.",
    causes: [
      "Cooking oil and fat solidifying in the waste pipe",
      "Rice, flour and food scraps compacting in the trap",
      "Detergent scum bonding with grease",
      "A long horizontal waste run with too little fall",
    ],
    signs: [
      "Sink emptying very slowly after washing up",
      "Standing water in a double sink crossing to the other bowl",
      "Gurgling from the waste outlet",
      "Stale smell from under the counter",
    ],
    help: base("blockage"),
    why: "A neglected kitchen line eventually blocks solid, often on a weekend when you need the kitchen most. Clearing it properly buys back months of trouble-free use.",
    faqs: [
      {
        q: "Can I use boiling water to clear kitchen grease?",
        a: "It may help slightly on a fresh build-up but will not remove an established grease layer, and boiling water can damage plastic traps.",
      },
      {
        q: "How often should a kitchen line be cleared?",
        a: "For a busy household that cooks daily, a clear-out every year or two keeps things flowing.",
      },
    ],
  },
  {
    slug: "bathroom-drain-blockage",
    title: "Bathroom Drain Blockage",
    metaTitle: "Bathroom Drain Blockage Clearing Singapore | A1PlumberSG",
    short: "Shower and floor traps cleared of hair and soap build-up.",
    icon: Droplets,
    intro:
      "Bathroom drains block from hair bound together with soap residue. A1PlumberSG removes the mass from the trap and the pipe behind it, then flushes the line to confirm free flow.",
    causes: [
      "Hair collecting on the trap grating and pipe wall",
      "Soap and shampoo residue forming a sticky film",
      "Sand or grit washed in from outdoors",
      "Damaged or missing floor trap grating",
    ],
    signs: [
      "Water pooling around your feet in the shower",
      "Slow draining floor trap after a shower",
      "Musty smell in the bathroom",
      "Water backing up from the trap when the basin drains",
    ],
    help: base("blockage"),
    why: "A pooling bathroom floor is a slip hazard and keeps the area permanently damp, which encourages mould in grout and silicone.",
    faqs: [
      {
        q: "Will you need to hack the floor?",
        a: "Very rarely. Most bathroom blockages are cleared through the floor trap itself.",
      },
      {
        q: "How can I prevent this recurring?",
        a: "A simple hair catcher over the trap removes most of the cause.",
      },
    ],
  },
  {
    slug: "pipe-repair",
    title: "Pipe Repair",
    metaTitle: "Pipe Repair Services Singapore | A1PlumberSG",
    short: "Cracked joints, weeping seams and damaged sections repaired.",
    icon: Wrench,
    intro:
      "Not every pipe fault needs a full replacement. A1PlumberSG assesses the condition of the run and repairs the damaged section where the surrounding pipework is still sound.",
    causes: [
      "Joint failure from age or movement",
      "Impact damage during renovation works",
      "Thread corrosion on older galvanised fittings",
      "Poor workmanship from a previous repair",
    ],
    signs: [
      "Persistent weeping at a visible joint",
      "Rust staining on a pipe or bracket",
      "Damp appearing at one fixed point",
      "Pipe knocking or moving when taps are used",
    ],
    help: base("damage"),
    why: "A sound repair with the right fittings lasts. Temporary tape and sealant on a pressurised line almost always fails again, usually at a worse moment.",
    faqs: [
      {
        q: "How long does a typical pipe repair take?",
        a: "Accessible repairs are often completed in a single visit of one to two hours.",
      },
      {
        q: "Will you need to cut the wall?",
        a: "Only where the pipe is concealed. We keep any opening as small as possible.",
      },
    ],
  },
  {
    slug: "pipe-replacement",
    title: "Pipe Replacement",
    metaTitle: "Pipe Replacement Services Singapore | A1PlumberSG",
    short: "Old corroded pipework replaced with modern durable materials.",
    icon: Hammer,
    intro:
      "When pipework has corroded through, patching one section only moves the problem along the run. A1PlumberSG replaces failing pipework with modern materials and proper supports.",
    causes: [
      "Decades-old galvanised pipe reaching end of life",
      "Repeated leaks along the same run",
      "Internal scaling severely reducing flow",
      "Pipework damaged by structural or renovation work",
    ],
    signs: [
      "More than one leak in the same area within a year",
      "Discoloured or metallic-tasting water",
      "Falling pressure across the whole home",
      "Visible flaking rust on exposed pipe",
    ],
    help: base("replacement work"),
    why: "Replacing a tired run once is less disruptive and less expensive than a series of emergency repairs and the repainting that follows each of them.",
    faqs: [
      {
        q: "How disruptive is a pipe replacement?",
        a: "It depends on the length and whether the run is concealed. We will walk you through the scope and the expected downtime before starting.",
      },
      {
        q: "Can water stay on during the work?",
        a: "Supply is off only while the affected section is open. We plan the work to keep that period short.",
      },
    ],
  },
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing",
    metaTitle: "Emergency Plumber Singapore | A1PlumberSG",
    short: "Urgent leaks, bursts and blockages that cannot wait.",
    icon: AlertTriangle,
    intro:
      "Some plumbing problems have to be dealt with now. Call or WhatsApp A1PlumberSG, describe what is happening, and we will tell you honestly how quickly we can be there and what to do in the meantime.",
    causes: [
      "Burst or badly leaking pipe",
      "Toilet blocked in a home with only one bathroom",
      "Water entering the unit below",
      "No water supply to the whole home",
      "Water heater leaking onto electrics",
    ],
    signs: [
      "Water you cannot stop with the local valve",
      "Flooding across the floor",
      "Sewage backing up into the home",
      "Any leak near electrical fittings",
    ],
    help: base("emergency"),
    why: "In an emergency the cost of waiting is measured in damaged flooring, ceilings and belongings. Fast isolation limits it.",
    faqs: [
      {
        q: "How fast can you get here?",
        a: "It depends on where you are and what we already have booked. We will give you a realistic time on the phone rather than an optimistic one.",
      },
      {
        q: "What can I do while waiting?",
        a: "Close the main stopcock, keep electrics away from water, and clear the area around the leak.",
      },
    ],
  },
  {
    slug: "foul-smell-from-drain",
    title: "Foul Smell From Drain",
    metaTitle: "Drain Smell Removal Singapore | A1PlumberSG",
    short: "Sewer odours traced to dry traps, blockages or venting faults.",
    icon: Wind,
    intro:
      "A drain smell is usually a sign that the water seal in a trap has been lost or that waste is sitting in the pipe. A1PlumberSG finds which trap or line is responsible instead of masking the smell.",
    causes: [
      "Dry trap in a rarely used floor drain or basin",
      "Partial blockage holding waste in the pipe",
      "Damaged or missing trap seal",
      "Poorly vented waste stack pulling the seal out",
    ],
    signs: [
      "Sewer smell strongest near one particular drain",
      "Smell worse after a hot day or a long absence",
      "Odour returning shortly after cleaning",
      "Gurgling from a drain when another fixture is used",
    ],
    help: base("odour source"),
    why: "Drain gas is unpleasant and can carry bacteria into living areas. Restoring the trap seal properly removes the cause rather than perfuming it.",
    faqs: [
      {
        q: "Why does the smell come back after cleaning?",
        a: "Because cleaning removes the surface residue but not the underlying blockage or broken seal producing the gas.",
      },
      {
        q: "Can a smell mean a bigger drainage fault?",
        a: "Sometimes. Persistent odour with gurgling often points to a partially blocked or badly vented line, which we will check.",
      },
    ],
  },
  {
    slug: "no-water-supply",
    title: "No Water Supply",
    metaTitle: "No Water Supply Plumber Singapore | A1PlumberSG",
    short: "Complete or partial loss of water supply investigated fast.",
    icon: Droplet,
    intro:
      "Losing water entirely is usually a valve, a burst or a supply-side issue. A1PlumberSG checks the stopcock, the incoming supply and the internal pipework in sequence to find where the flow stops.",
    causes: [
      "Main stopcock closed or seized",
      "Burst on the incoming supply line",
      "Scheduled or unplanned supply interruption",
      "Blocked inlet filter or strainer",
      "Faulty pump or pressure system in landed property",
    ],
    signs: [
      "No water at any tap in the home",
      "Air spitting from taps when opened",
      "Water only at ground floor level",
      "Neighbours unaffected while your unit is dry",
    ],
    help: base("supply failure"),
    why: "A total loss of supply can also be the first sign of a major leak elsewhere in the system. Checking it properly rules that out.",
    faqs: [
      {
        q: "Should I call the water utility or a plumber?",
        a: "If neighbours also have no water it is likely a supply-side interruption. If only your unit is affected, it is internal and we can help.",
      },
      {
        q: "Can a seized stopcock be replaced?",
        a: "Yes, and it is worth doing — a working stopcock is what lets you stop a future emergency yourself.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
