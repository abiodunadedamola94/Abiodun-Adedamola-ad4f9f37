import { ReactNode } from "react";

export type ProjectCaseStudy = {
  id: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  client: string;
  industry: string;
  duration: string;
  platform: string;
  description: string;
  icon: ReactNode;
  accentClass: string;
  overview: string;
  problem: string;
  solution: string;
  process: { title: string; detail: string }[];
  outcomes: string[];
  tools: string[];
};

const Icon = ({ children, className }: { children: ReactNode; className: string }) => (
  <div className={`flex h-7 w-7 items-center justify-center rounded-md ${className}`}>{children}</div>
);

export const projects: ProjectCaseStudy[] = [
  {
    id: "leaptra",
    name: "LeapTra AI",
    tagline: "Product & Website Experience for an AI Automation Brand",
    role: "Product Designer",
    year: "2025",
    client: "LeapTra",
    industry: "AI & Automation",
    duration: "10 weeks",
    platform: "Web App + Marketing Site",
    description:
      "A full AI automation platform with a clean, high-clarity website and product interface designed to educate, build trust, and drive conversion with smooth UX and sharp visual hierarchy.",
    icon: (
      <Icon className="bg-gradient-to-br from-[#7b5cff] to-[#4617a9]">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.5 10L6.5 3.5L10.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Icon>
    ),
    accentClass: "from-[#7b5cff] to-[#4617a9]",
    overview:
      "LeapTra needed a unified product + marketing experience that could explain complex AI automation in a way that felt approachable and trustworthy. The goal: turn curiosity into activated users.",
    problem:
      "Prospective users couldn't quickly grasp what LeapTra's agents actually did, and the product UI felt heavy for first-time users exploring agent bundles and pricing.",
    solution:
      "Designed a modular agent library with clear pricing toggles, bundle savings, and demo previews. The marketing site mirrors product clarity—every section answers a buyer question before it's asked.",
    process: [
      { title: "Discovery", detail: "Mapped user mental models around AI agents and reviewed 12 competitor onboarding flows." },
      { title: "Architecture", detail: "Defined a category system (Sales, CRM, Reporting, Marketing, Operations) plus bundle logic." },
      { title: "UI System", detail: "Built a token-based dark UI with gradient accents, reusable card patterns, and a billing toggle." },
      { title: "Validation", detail: "Tested with 6 SMB owners; iterated copy and pricing display based on confusion points." },
    ],
    outcomes: [
      "+38% increase in agent activation rate",
      "Reduced time-to-first-deployment by 4 minutes",
      "Bundle conversion grew 2.1× post-launch",
    ],
    tools: ["Figma", "Framer", "Notion", "Loom"],
  },
  {
    id: "jompal",
    name: "Jompal Handyman Services",
    tagline: "On-demand handyman booking, redesigned",
    role: "UX Designer",
    year: "2024",
    client: "Jompal",
    industry: "Marketplace / Services",
    duration: "8 weeks",
    platform: "Mobile + Web",
    description:
      "A seamless on-demand handyman platform connecting homeowners with trusted local service providers through an intuitive and frictionless booking experience.",
    icon: (
      <Icon className="border border-border bg-card text-[9px] font-bold text-blue-400">Z</Icon>
    ),
    accentClass: "from-blue-500 to-indigo-600",
    overview:
      "Jompal wanted a booking flow that felt as easy as ordering a ride—matched to a vetted local pro in under a minute.",
    problem:
      "The legacy flow had 9 screens to book a single service, and trust signals (reviews, verification) were buried below the fold.",
    solution:
      "Collapsed booking into a 3-step flow with smart defaults, surfaced provider trust signals up front, and added a transparent price estimator before commitment.",
    process: [
      { title: "Field Research", detail: "Shadowed 4 handymen and interviewed 12 homeowners across 3 cities." },
      { title: "Flow Design", detail: "Reduced 9 steps to 3 with progressive disclosure and saved-address logic." },
      { title: "Trust Layer", detail: "Designed verification badges, rating breakdowns, and live ETA." },
    ],
    outcomes: [
      "Booking completion up 54%",
      "Average time-to-book dropped from 4:20 to 1:35",
      "Provider acceptance rate +22%",
    ],
    tools: ["Figma", "Maze", "Miro"],
  },
  {
    id: "ytf",
    name: "Young Titans Foundation",
    tagline: "A bold, reason-driven website for youth development",
    role: "Web Designer",
    year: "2025",
    client: "Young Titans Foundation",
    industry: "Non-profit / Education",
    duration: "5 weeks",
    platform: "Marketing Site",
    description:
      "A bold, reason-driven website for a youth development foundation—clear storytelling, strong visual identity, and purposeful content structure.",
    icon: (
      <Icon className="border border-amber-900/40 bg-amber-950/30 text-[10px] font-semibold text-amber-400">★</Icon>
    ),
    accentClass: "from-amber-500 to-orange-600",
    overview:
      "The foundation needed a digital home that conveyed mission, impact, and credibility to attract donors, partners, and program applicants.",
    problem:
      "Their old site had no clear donation path, scattered program info, and didn't reflect the energy of the work being done on the ground.",
    solution:
      "Built a story-led site with impact metrics up front, a single donation CTA across the experience, and a programs hub that segments audiences.",
    process: [
      { title: "Brand Audit", detail: "Refined the visual language—warm palette, photo-led storytelling, and editorial typography." },
      { title: "Content Strategy", detail: "Restructured content into Mission, Programs, Impact, and Get Involved." },
      { title: "Build", detail: "Shipped a responsive site with CMS-driven program pages and a donation flow." },
    ],
    outcomes: [
      "Donations up 3.4× in the first quarter",
      "Volunteer signups grew 60%",
      "Press mentions across 5 outlets",
    ],
    tools: ["Figma", "Webflow", "Photography direction"],
  },
  {
    id: "saglev",
    name: "Saglev Electric Vehicle",
    tagline: "Premium EV landing experience",
    role: "Web Designer",
    year: "2025",
    client: "Saglev",
    industry: "Automotive / EV",
    duration: "6 weeks",
    platform: "Marketing Site",
    description:
      "A premium EV landing experience with immersive visuals, refined layout, and an automotive feel inspired by global electric car brands.",
    icon: (
      <Icon className="border border-emerald-900/40 bg-emerald-950/30 text-[10px] font-semibold text-emerald-400">≋</Icon>
    ),
    accentClass: "from-emerald-500 to-teal-600",
    overview:
      "Saglev's debut model needed a landing experience that could rival global EV brands and convert demo-drive bookings.",
    problem:
      "As a new entrant, Saglev had to establish premium credibility and explain the model lineup in a single, scrollable narrative.",
    solution:
      "Designed a cinematic hero, modular feature blocks with spec callouts, and a demo-drive booking module embedded throughout the page.",
    process: [
      { title: "Mood & Direction", detail: "Benchmarked Lucid, Polestar, and Voyah; defined the 'understated future' tone." },
      { title: "Layout System", detail: "Created a 12-column rhythm with full-bleed media and tight typographic pairing." },
      { title: "Conversion Design", detail: "Embedded a Demo Drive widget that follows scroll without being intrusive." },
    ],
    outcomes: [
      "Demo drive bookings doubled month-over-month",
      "Average time on page: 3:48",
      "Featured in 2 EV industry roundups",
    ],
    tools: ["Figma", "After Effects", "Framer"],
  },
  {
    id: "dealmate",
    name: "DealMate Escrow System",
    tagline: "Trustworthy escrow for high-value transactions",
    role: "Product Designer",
    year: "2024",
    client: "DealMate",
    industry: "Fintech / Escrow",
    duration: "12 weeks",
    platform: "Web + Mobile",
    description:
      "A secure and transparent escrow system designed to protect both buyers and sellers in high-value transactions with a clear, trustworthy interface.",
    icon: (
      <Icon className="border border-indigo-900/40 bg-indigo-950/30 text-[11px] font-bold text-indigo-400">M</Icon>
    ),
    accentClass: "from-indigo-500 to-violet-600",
    overview:
      "DealMate needed an escrow product where every party always knew exactly what was happening with their money and their deal.",
    problem:
      "Users abandoned mid-transaction because they couldn't tell what stage the deal was in or what action was required next.",
    solution:
      "Designed a deal timeline with status states, party-aware action prompts, and a dispute flow that felt fair to both sides.",
    process: [
      { title: "Risk Mapping", detail: "Workshopped failure modes with legal and ops teams to define every state." },
      { title: "Status System", detail: "Built a visual deal-state model: Created → Funded → Delivered → Released." },
      { title: "Dispute UX", detail: "Designed an evidence-upload flow and mediator dashboard." },
    ],
    outcomes: [
      "Transaction completion up 41%",
      "Support tickets down 28%",
      "NPS climbed from 22 to 51",
    ],
    tools: ["Figma", "Protopie", "Linear"],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
