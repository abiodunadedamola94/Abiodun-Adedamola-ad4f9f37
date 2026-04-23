import { ReactNode } from "react";
import jomppaLogo from "@/assets/jomppa-logo.avif";
import dealmateMockup from "@/assets/dealmate-mockup.jpg";
import leaptraWork from "@/assets/work-leaptra.png";
import jomppaBanner from "@/assets/jomppa-banner.png";
import ytfVideo from "@/assets/ytf-video.mp4";
import leaptraProofBanner from "@/assets/leaptra-proof-banner.png";
import leaptraLogo from "@/assets/leaptra-logo.png";

export type ColorSwatch = { name: string; hex: string; usage: string };
export type TypographyEntry = { family: string; usage: string; weights: string };

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
  heroImage?: string;
  heroVideo?: string;
  proofImage?: string;
  liveUrl?: string;
  liveLabel?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  description: string;
  icon: ReactNode;
  accentClass: string;
  overview: string;
  problem: string;
  solution: string;
  designThinking: string;
  typography: TypographyEntry[];
  colorPalette: ColorSwatch[];
  websiteOverview: string[];
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
    heroImage: leaptraWork,
    liveUrl: "https://leaptra.com",
    liveLabel: "leaptra.com",
    secondaryUrl: "https://leaptra.ai",
    secondaryLabel: "leaptra.ai (AI Studio)",
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
      "LeapTra needed a unified product + marketing experience that could explain complex AI automation in a way that felt approachable and trustworthy. The goal: turn curiosity into activated users across both the marketing site (leaptra.com) and the AI Studio product (leaptra.ai).",
    problem:
      "Prospective users couldn't quickly grasp what LeapTra's agents actually did, and the product UI felt heavy for first-time users exploring agent bundles and pricing.",
    solution:
      "Designed a modular agent library with clear pricing toggles, bundle savings, and demo previews. The marketing site mirrors product clarity—every section answers a buyer question before it's asked.",
    designThinking:
      "I treated LeapTra's homepage as a sales conversation. Instead of leading with abstract AI claims, I structured the site around the buyer's actual decision path: What is it? → Who is it for? → How does it work? → What does it cost? → Can I trust it? Each section became a literal answer. For the AI Studio, I leaned into a dense, dark, IDE-like interface that signals power to technical users while keeping the agent library scannable for non-technical buyers. Gradient violets reinforce the 'intelligent system' feel without veering into cliché AI visuals.",
    typography: [
      { family: "Inter", usage: "Body, UI, navigation", weights: "400, 500, 600" },
      { family: "Geist", usage: "Display headings & hero", weights: "500, 600, 700" },
      { family: "JetBrains Mono", usage: "Code blocks, agent IDs, metrics", weights: "400, 500" },
    ],
    colorPalette: [
      { name: "Violet Primary", hex: "#7B5CFF", usage: "Primary CTA, brand accent" },
      { name: "Deep Indigo", hex: "#4617A9", usage: "Gradient base, hover states" },
      { name: "Surface", hex: "#0A0A0F", usage: "App background" },
      { name: "Card", hex: "#13131A", usage: "Cards, modals" },
      { name: "Border", hex: "#262633", usage: "Dividers, outlines" },
      { name: "Text Primary", hex: "#F5F5F7", usage: "Headlines, body" },
    ],
    websiteOverview: [
      "Marketing site (leaptra.com): Hero + value props, agent library showcase, use-case grid by department, transparent pricing with monthly/yearly toggle, social proof, and a final activation CTA.",
      "AI Studio (leaptra.ai): Authenticated dashboard with deployable agent bundles, usage analytics, and team workspace—designed in a dark, console-like aesthetic for power users.",
      "Cross-product consistency through shared tokens, gradient system, and component library.",
    ],
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
    name: "Jomppa Handyman Services",
    tagline: "On-demand handyman booking, redesigned",
    role: "UX Designer",
    year: "2024",
    client: "Jomppa",
    industry: "Marketplace / Services",
    duration: "8 weeks",
    platform: "Mobile + Web",
    liveUrl: "https://jomppa.com",
    liveLabel: "jomppa.com",
    description:
      "A seamless on-demand handyman platform connecting homeowners with trusted local service providers through an intuitive and frictionless booking experience.",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-border bg-card">
        <img src={jomppaLogo} alt="Jomppa logo" className="h-full w-full object-contain" />
      </div>
    ),
    accentClass: "from-blue-500 to-indigo-600",
    overview:
      "Jomppa wanted a booking flow that felt as easy as ordering a ride—matched to a vetted local pro in under a minute. The redesign needed to inspire trust at first glance and remove every unnecessary tap from the booking journey.",
    problem:
      "The legacy flow had 9 screens to book a single service, and trust signals (reviews, verification) were buried below the fold.",
    solution:
      "Collapsed booking into a 3-step flow with smart defaults, surfaced provider trust signals up front, and added a transparent price estimator before commitment.",
    designThinking:
      "Booking a handyman is a high-anxiety decision—someone is coming into your home. So the entire visual language had to feel calm, professional, and human. I leaned into a friendly blue palette to communicate trust (the same psychology used in banking and healthcare) and paired it with rounded geometry and real provider photography. Every screen earns its place: if a step couldn't be defaulted or removed, it had to be justified. The result is a flow where the user feels in control without ever feeling lost.",
    typography: [
      { family: "Satoshi", usage: "Headlines, hero, marketing", weights: "500, 700, 900" },
      { family: "Inter", usage: "Body, forms, UI", weights: "400, 500, 600" },
    ],
    colorPalette: [
      { name: "Trust Blue", hex: "#2563EB", usage: "Primary actions, brand" },
      { name: "Indigo Deep", hex: "#4F46E5", usage: "Gradients, hover" },
      { name: "Soft Sky", hex: "#EFF6FF", usage: "Backgrounds, surfaces" },
      { name: "Ink", hex: "#0F172A", usage: "Headlines, primary text" },
      { name: "Slate", hex: "#475569", usage: "Body copy, secondary" },
      { name: "Success", hex: "#10B981", usage: "Confirmation, ETA badges" },
    ],
    websiteOverview: [
      "Marketing site (jomppa.com): Service categories grid, transparent pricing, 'How it works' in 3 steps, verified-pro testimonials, and a sticky booking CTA.",
      "Booking flow: 3-step funnel — pick service → choose time → confirm address. Smart defaults pre-fill returning users.",
      "Provider profile cards: verification badge, rating breakdown, response time, and price range surfaced above the fold.",
    ],
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
    designThinking:
      "Non-profits often over-explain and under-show. I flipped that—leading with photography of real beneficiaries and impact numbers before any prose. The warm amber palette was chosen to feel hopeful and human (cool blues felt too clinical for this mission). Every page funnels toward one of two actions: donate or apply. Nothing competes.",
    typography: [
      { family: "Fraunces", usage: "Display headlines, editorial moments", weights: "500, 700" },
      { family: "Inter", usage: "Body, navigation, forms", weights: "400, 500, 600" },
    ],
    colorPalette: [
      { name: "Amber Hope", hex: "#F59E0B", usage: "Primary CTA, accents" },
      { name: "Sunset Orange", hex: "#EA580C", usage: "Gradients, hover" },
      { name: "Cream", hex: "#FFFBEB", usage: "Background sections" },
      { name: "Charcoal", hex: "#1C1917", usage: "Headlines, primary text" },
      { name: "Earth", hex: "#78716C", usage: "Body copy" },
    ],
    websiteOverview: [
      "Hero: photo-led mission statement with single primary CTA (Donate).",
      "Impact strip: live metrics (lives reached, programs run, partners).",
      "Programs hub: segmented by audience (students, mentors, partners).",
      "Stories: long-form beneficiary stories with photography.",
      "Get involved: donation, volunteer, and partnership flows on a single page.",
    ],
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
    designThinking:
      "Premium EV brands sell a feeling before they sell a spec sheet. I studied Lucid, Polestar, and Voyah—they all share quiet confidence: generous whitespace, restrained type, and one hero image that does the heavy lifting. I applied the same restraint to Saglev: minimal copy, full-bleed photography, and a deep emerald accent that signals 'electric' without screaming it.",
    typography: [
      { family: "Neue Haas Grotesk", usage: "Display, hero, model names", weights: "400, 500, 700" },
      { family: "Inter", usage: "Body, specs, navigation", weights: "400, 500" },
    ],
    colorPalette: [
      { name: "Electric Emerald", hex: "#10B981", usage: "Accent, EV badge" },
      { name: "Teal Depth", hex: "#0D9488", usage: "Hover, gradient" },
      { name: "Obsidian", hex: "#0A0A0A", usage: "Background, hero" },
      { name: "Pearl", hex: "#FAFAFA", usage: "Light sections, contrast" },
      { name: "Graphite", hex: "#404040", usage: "Body, captions" },
    ],
    websiteOverview: [
      "Cinematic hero with full-bleed model photography and minimal overlay copy.",
      "Model lineup: horizontally scrolling cards with spec highlights.",
      "Feature deep-dives: range, charging, interior, safety—each a full viewport block.",
      "Persistent demo-drive widget that follows scroll without obstructing content.",
      "Configurator entry point and dealership locator in the footer flow.",
    ],
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
    heroImage: dealmateMockup,
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
    designThinking:
      "Escrow design is fundamentally about reducing anxiety. Users are parting with significant money on the promise that a system they don't fully understand will protect them. I made the deal status the hero of every screen—a visible, always-on timeline that answers 'where is my money right now?' before the user even thinks to ask. The dispute flow was designed for symmetry: both parties see the same evidence, the same timeline, the same options. Fairness had to be visually obvious.",
    typography: [
      { family: "Inter", usage: "Entire interface — UI, body, headlines", weights: "400, 500, 600, 700" },
      { family: "IBM Plex Mono", usage: "Transaction IDs, amounts, timestamps", weights: "400, 500" },
    ],
    colorPalette: [
      { name: "Trust Indigo", hex: "#6366F1", usage: "Primary actions, brand" },
      { name: "Violet Depth", hex: "#7C3AED", usage: "Gradient, accents" },
      { name: "Background", hex: "#0B0B12", usage: "App background" },
      { name: "Card", hex: "#15151E", usage: "Cards, modals, panels" },
      { name: "Success", hex: "#22C55E", usage: "Released, confirmed states" },
      { name: "Warning", hex: "#F59E0B", usage: "Pending, action required" },
      { name: "Danger", hex: "#EF4444", usage: "Dispute, declined" },
    ],
    websiteOverview: [
      "Dashboard: all active deals with status timeline and required-action prompts.",
      "Deal detail: created → funded → delivered → released, with party-specific CTAs.",
      "Dispute center: evidence upload, mediator chat, decision log.",
      "Wallet: balance, payouts, and transaction history with monospace amounts.",
    ],
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
