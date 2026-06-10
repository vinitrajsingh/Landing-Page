import {
  Sparkles,
  Boxes,
  Gauge,
  PenTool,
  Workflow,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

// ---- Trust / logos -----------------------------------------------------
export const CLIENT_LOGOS = [
  "Montra",
  "Launchpop",
  "Ratio",
  "CreatorNow",
  "StreetTalk",
  "Nova Labs",
  "Northwind",
  "Pulse",
  "Vaultline",
  "Orbital",
];

export const STATS = [
  { value: 200, suffix: "+", label: "Products shipped", sub: "from zero to launch" },
  { value: 25, prefix: "$", suffix: "M+", label: "Client funding raised", sub: "post-MVP" },
  { value: 80, suffix: "+", label: "Founders trusted us", sub: "across 14 countries" },
  { value: 14, suffix: " days", label: "Average to MVP", sub: "design to deploy" },
];

// ---- Services ----------------------------------------------------------
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Sparkles,
    title: "AI-Native Product",
    description:
      "We bake intelligence into the core — copilots, agents, and reasoning flows that turn your product into a multiplier, not a gimmick.",
    tags: ["LLM apps", "Agents", "RAG"],
  },
  {
    icon: PenTool,
    title: "Product Design",
    description:
      "Interfaces people actually want to use. We obsess over hierarchy, motion and craft so your MVP feels like a Series-B product.",
    tags: ["UX", "Design systems", "Prototyping"],
  },
  {
    icon: Boxes,
    title: "Full-Stack Build",
    description:
      "Type-safe frontends, scalable backends, auth, billing and integrations — production architecture from day one.",
    tags: ["Next.js", "APIs", "Infra"],
  },
  {
    icon: Gauge,
    title: "Rapid MVP Sprints",
    description:
      "Bi-weekly sprints that turn a roadmap into shippable software. Unlimited revisions, weekly demos, zero contracts.",
    tags: ["2-week cycles", "Async", "Demos"],
  },
  {
    icon: Workflow,
    title: "Growth Engineering",
    description:
      "Analytics, experimentation and AI-powered loops wired in so you can move faster the moment you launch.",
    tags: ["Analytics", "A/B", "Automation"],
  },
  {
    icon: ShieldCheck,
    title: "Scale & Reliability",
    description:
      "Observability, performance budgets and hardening so the thing you launched survives the traffic you earn.",
    tags: ["Monitoring", "Security", "Perf"],
  },
];

// ---- Process -----------------------------------------------------------
export const PROCESS = [
  {
    step: "01",
    title: "Iterate",
    description:
      "We map the roadmap, set milestones and pressure-test the idea before a single line of code. You always know what ships next.",
  },
  {
    step: "02",
    title: "Develop",
    description:
      "AI-accelerated sprints turn the plan into working software, with weekly demos and a live KPI dashboard you can watch fill up.",
  },
  {
    step: "03",
    title: "Grow",
    description:
      "We wire in analytics, experiments and AI tooling so the product compounds — every release moves a number that matters.",
  },
  {
    step: "04",
    title: "Collaborate",
    description:
      "Async by default. Slack, Loom and shared boards keep us flexible. Pause or cancel anytime — no contracts, no friction.",
  },
];

// ---- Feature showcase --------------------------------------------------
export const SHOWCASE = [
  {
    label: "Dashboard",
    title: "A control room for the metrics that move your raise",
    description:
      "Real-time KPIs, cohort retention and revenue — surfaced the moment they change so you walk into investor meetings with proof, not promises.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    points: ["Live KPI streams", "Cohort retention", "Investor-ready exports"],
  },
  {
    label: "AI Copilot",
    title: "An assistant that understands your product, not just your prompt",
    description:
      "Context-aware copilots grounded in your own data. They draft, summarise and act — turning hours of busywork into a single sentence.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    points: ["Grounded RAG", "Tool-calling agents", "Streaming UX"],
  },
  {
    label: "Mobile",
    title: "Native-feeling experiences that ship on every screen",
    description:
      "One codebase, pixel-perfect everywhere. Gesture-driven, buttery-smooth and built to feel premium the instant it loads.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    points: ["60fps interactions", "Offline-first", "Push & deep links"],
  },
];

// ---- Case studies ------------------------------------------------------
export interface CaseStudy {
  name: string;
  category: string;
  result: string;
  description: string;
  image: string;
  year: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Street Talk",
    category: "Social · AI",
    result: "0 → 50k users",
    description:
      "A voice-first social network. We shipped the MVP in 16 days and the AI moderation layer that kept it safe at scale.",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1400&q=80",
    year: "2025",
  },
  {
    name: "Ratio",
    category: "Fintech",
    result: "$4.2M seed",
    description:
      "Automated financial close for startups. From whiteboard to a fundable product investors could click through in two sprints.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
    year: "2025",
  },
  {
    name: "CreatorNow",
    category: "Creator economy",
    result: "12x faster payouts",
    description:
      "A monetisation platform for creators. We rebuilt the payout engine and a dashboard that creators actually open every day.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1400&q=80",
    year: "2024",
  },
  {
    name: "Orbital",
    category: "Dev tooling",
    result: "30% less infra cost",
    description:
      "An observability layer for AI pipelines. Real-time tracing and cost analytics, designed to make complexity feel calm.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    year: "2024",
  },
];

// ---- Testimonials ------------------------------------------------------
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Creme felt like an extension of our team. They shipped a polished MVP in two weeks that we used to close our seed round.",
    name: "Campbell Baron",
    role: "CEO & Founder",
    company: "@montra",
    avatar: "https://i.pravatar.cc/160?img=12",
  },
  {
    quote:
      "The design quality is genuinely Series-B level. Investors assumed we had a 10-person product team. It was just Creme.",
    name: "Priya Nair",
    role: "Co-founder",
    company: "@ratio",
    avatar: "https://i.pravatar.cc/160?img=32",
  },
  {
    quote:
      "Async, fast, no nonsense. We watched the KPI dashboard fill up every week. Best money we've spent pre-launch.",
    name: "Marcus Webb",
    role: "COO",
    company: "@launchpop",
    avatar: "https://i.pravatar.cc/160?img=15",
  },
  {
    quote:
      "Their AI work is the real thing — grounded, useful, shipped. Not a demo. It moved our activation by 40%.",
    name: "Elena Sokolova",
    role: "Head of Product",
    company: "@creatornow",
    avatar: "https://i.pravatar.cc/160?img=45",
  },
  {
    quote:
      "We paused for a month, came back, and picked up like nothing happened. The flexibility is unreal for a startup.",
    name: "David Chen",
    role: "Founder",
    company: "@streettalk",
    avatar: "https://i.pravatar.cc/160?img=53",
  },
  {
    quote:
      "From first call to live product in 18 days. The craft, the motion, the polish — it all just felt premium.",
    name: "Sofia Almeida",
    role: "CPO",
    company: "@orbital",
    avatar: "https://i.pravatar.cc/160?img=20",
  },
];

// ---- FAQ ---------------------------------------------------------------
export const FAQS = [
  {
    q: "How fast can you actually ship an MVP?",
    a: "Most MVPs go from kickoff to a launch-ready product in around two weeks. Scope drives the timeline — we set milestones on day one so you always know what ships next.",
  },
  {
    q: "Is there a contract or lock-in?",
    a: "None. Our subscription model is fully flexible — pause or cancel anytime. You only pay for the sprints you run, and everything we build is yours.",
  },
  {
    q: "What does 'AI-native' really mean here?",
    a: "We treat AI as a core capability, not a bolt-on. That means grounded retrieval, tool-calling agents and reasoning flows wired into your product's architecture — built to be genuinely useful, not a demo.",
  },
  {
    q: "Who owns the code and design?",
    a: "You do — 100%. We hand over a clean, documented, production-grade repository and the full design system at the end of every engagement.",
  },
  {
    q: "How do we communicate during a sprint?",
    a: "Async by default. A shared Slack channel, weekly Loom demos and a live roadmap board keep everything transparent without endless meetings.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Spin a sprint back up whenever you need. Many founders keep a rolling subscription for growth work, new features and scaling.",
  },
];

// ---- Footer ------------------------------------------------------------
export const FOOTER_LINKS = {
  Studio: ["About", "Work", "Careers", "Blog"],
  Services: ["AI Products", "Product Design", "Full-Stack Build", "Growth"],
  Resources: ["Pricing", "Process", "FAQ", "Contact"],
};

export const SOCIALS = ["Twitter", "LinkedIn", "Dribbble", "Instagram"];
