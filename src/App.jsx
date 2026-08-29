import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronRight,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  Table2,
  X,
  Zap,
} from "lucide-react";
import profilePhoto from "./assets/pfp.png";
import youtubeDashboard from "./assets/youtube-dashboard.png";
import ecommerceDashboard from "./assets/ecommerce-dashboard.png";
import electricalDashboard from "./assets/electrical-dashboard.png";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    id: "youtube",
    tag: "CONTENT ANALYTICS",
    title: "YouTube Content Intelligence",
    subtitle: "Apna College channel — performance & publishing analysis",
    description:
      "Analyzed a large education YouTube channel to understand views, engagement, publishing patterns, and top-performing content.",
    tools: ["Python", "YouTube Data API", "SQL", "Power BI"],
    stats: [
      ["Videos analyzed", "1,053"],
      ["Total views", "1.32B"],
      ["Avg engagement", "14.78%"],
    ],
    image: youtubeDashboard,
    findings: [
      "The channel reached 1.32B total views across 1,053 analyzed videos.",
      "2022 recorded the highest average views per video in the dashboard at about 2.9M.",
      "Very Long videos had the highest average views among the duration categories shown.",
    ],
    work: [
      "Pulled channel-wide video metadata using the YouTube Data API",
      "Cleaned and standardized the raw data into a SQL-ready dataset",
      "Built an interactive Power BI dashboard with KPIs and trends",
    ],
    case: {
      problem:
        "Understand which factors such as timing, duration, and publishing patterns are associated with stronger video performance.",
      dataset:
        "Approximately 1,053 videos containing publish dates, views, likes, comments, and duration.",
      cleaning:
        "Deduplicated records, standardized duration categories, and transformed publish timestamps into useful analytical fields.",
      analysis:
        "Compared views over time, ranked top-performing videos, and segmented publishing activity by year and duration.",
      visualization:
        "Power BI dashboard with Total Videos, Views, Likes, Comments, Average Views/Video, trend analysis, top videos, and upload-volume views.",
      recommendations:
        "Use engagement-rate KPIs and views-versus-engagement analysis as the next layer to distinguish reach from audience response.",
    },
    github: "https://github.com/SakshiA2409/youtube-content-performance-analysis",
  },
  {
    id: "ecommerce",
    tag: "RETAIL ANALYTICS",
    title: "E-Commerce Sales Data Analysis",
    subtitle: "Multi-platform sales performance across categories & cities",
    description:
      "Performed end-to-end analysis of 10,000+ e-commerce transactions to understand revenue by product, platform, brand, and region.",
    tools: ["Python", "SQL", "Power BI"],
    stats: [
      ["Transactions", "10,000+"],
      ["Cities compared", "6"],
      ["Analysis focus", "Revenue"],
    ],
    findings: [
      "Total sales reached 302.00M across 10K+ orders, with an average order value of 30.20K.",
      "Electronics and Fashion were the strongest categories by total sales in the dashboard.",
      "Sales peaked around 26M in January, July, and September, while December was the weakest month at about 22M.",
    ],
    work: [
      "Consolidated transaction-level data across multiple platforms and cities",
      "Used SQL to segment revenue by category, brand, platform, and region",
      "Built a Power BI dashboard to communicate business-facing trends",
    ],
    case: {
      problem:
        "Create a single view of where revenue is coming from and identify categories, cities, and platforms that deserve attention.",
      dataset:
        "10,000+ transactions spanning product categories, brands, selling platforms, and six cities.",
      cleaning:
        "Standardized category and brand naming, reconciled platform-specific fields, and validated transaction dates.",
      analysis:
        "Segmented sales and order volume by category, brand, platform, city, and month, while comparing ratings with brand sales performance.",
      visualization:
        "Power BI dashboard with KPI cards, monthly sales trends, category and brand performance, platform and city comparisons, and a brand-rating versus sales scatter plot.",
      recommendations:
        "Prioritize stronger categories and platforms, investigate weaker city/month combinations, and use rating-versus-sales patterns to guide brand-level decisions.",
    },
    image: ecommerceDashboard,
    github: "https://github.com/SakshiA2409/ecommerce-sales-analysis-dashboard",
  },
  {
    id: "billing",
    tag: "REAL BUSINESS DATA",
    title: "Electrical Solutions — Billing Analysis",
    subtitle: "Real business billing data, not a training dataset",
    description:
      "Cleaned and analyzed one month of real electrical-supply billing data, dealing with inconsistent product names, mixed quantity formats, and a major bulk-order outlier.",
    tools: ["Python", "Pandas", "Excel"],
    stats: [
      ["Line items cleaned", "554"],
      ["Name variants normalized", "15+"],
      ["Outlier revenue share", "~43%"],
    ],
    findings: [
      "A single bulk order contributed roughly 43% of the month's revenue and materially affected the initial analysis.",
      "After isolating the outlier, Sunday emerged as the strongest selling day.",
      "Fans and lights were the leading products in the cleaned analysis.",
    ],
    work: [
      "Cleaned 554 real line items from June 2026 billing records",
      "Normalized 15+ spelling variants of the same product names",
      "Reconciled mixed quantity formats and isolated a major revenue outlier",
    ],
    case: {
      problem:
        "Turn raw billing records with inconsistent naming and formats into a reliable view of sales patterns.",
      dataset:
        "554 line items from June 2026 billing records containing product names, quantities, and amounts as entered by staff.",
      cleaning:
        "Normalized 15+ spelling variants and handled inconsistent quantity formats before analysis.",
      analysis:
        "Identified a single bulk order contributing roughly 43% of monthly revenue, then re-ran the analysis after isolating the outlier.",
      visualization:
        "Created both a technical breakdown and a simplified visual report for a non-technical audience.",
      recommendations:
        "After separating the outlier, Sunday emerged as the strongest selling day and fans/lights as leading products, supporting staffing and stock decisions.",
    },
    image: electricalDashboard,
    github: "https://github.com/SakshiA2409/electrical-solutions-billing-analysis",
  },
  {
    id: "restaurant",
    visualType: "sql",
    tag: "SQL ANALYTICS",
    title: "Restaurant Sales & Customer Behavior Analysis",
    subtitle: "SQL-only analysis across orders, customers, meals, and cities",
    description:
      "Analyzed 36,000 restaurant orders across customers, meals, restaurants, and cities using SQL to uncover spending patterns, demand peaks, and top-performing markets.",
    tools: ["SQL", "MySQL"],
    stats: [
      ["Orders analyzed", "36,000"],
      ["Tables queried", "7"],
      ["Business questions", "9"],
    ],
    findings: [
      "Herzelia was identified as the strongest city in the analysis.",
      "Fast Food was the top-performing restaurant category.",
      "Demand peaks appeared around 12PM and 7–9PM, supporting staffing recommendations.",
    ],
    work: [
      "Modeled and queried a 7-table relational schema (orders, members, meals, restaurants, restaurant types, cities)",
      "Answered 9 business questions using joins, aggregates, and date-based analysis",
      "Translated SQL findings into ranked business recommendations by market, category, and customer segment",
    ],
    case: {
      problem:
        "Answer practical business questions about customers, demand, and performance using only SQL against a relational restaurant-orders dataset.",
      dataset:
        "36,000 orders across 200 unique customers and 30 active restaurants, spanning orders, members, order_details, meals, restaurants, restaurant_types, and cities tables.",
      cleaning:
        "Excluded an incomplete month (July) from monthly revenue comparisons to keep the analysis fair across full months.",
      analysis:
        "Used multi-table joins, GROUP BY, and aggregate functions to rank customers by spending and frequency, find peak ordering hours, and compare revenue by city, restaurant type, and individual restaurant.",
      visualization:
        "Structured results as ranked business questions and findings, each paired with a business insight and recommendation.",
      recommendations:
        "Prioritize the top city (Herzelia) and top restaurant category (Fast Food) for expansion, build loyalty programs around high-spending and high-frequency customers, and staff up for the 12PM and 7-9PM demand peaks.",
    },
    github: "https://github.com/SakshiA2409/restaurant-sales-customer-analysis-sql",
  },
];

const SKILLS = [
  {
    title: "Data Analytics",
    icon: Database,
    items: ["Excel", "SQL", "Python", "Pandas", "NumPy"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    items: ["Power BI", "Tableau", "DAX", "Dashboard Development", "Matplotlib"],
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Databases",
    icon: Table2,
    items: ["MySQL", "Data Cleaning", "Querying", "Relational Data"],
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Analytical Practice",
    icon: Zap,
    items: ["EDA", "KPI Analysis", "Business Insights", "Reporting"],
    accent: "from-amber-300 to-orange-500",
  },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan-300">
        <span className="h-px w-8 bg-cyan-400" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.visualType === "sql") {
    return (
      <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 opacity-15 blur-3xl" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-amber-300">SQL ANALYSIS</div>
              <div className="mt-1 text-sm font-bold text-white">RESTAURANT SALES &amp; CUSTOMER BEHAVIOR</div>
            </div>
            <Database size={18} className="text-amber-300" />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["orders", "members", "meals", "restaurants", "cities"].map((table) => (
              <span key={table} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium text-slate-300">
                {table}
              </span>
            ))}
          </div>

          <div className="my-4 text-center text-amber-300">↓</div>
          <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-3 text-center">
            <div className="text-xs font-bold tracking-[0.16em] text-white">SQL ANALYSIS</div>
            <div className="mt-2 text-[9px] tracking-[0.12em] text-slate-400">JOINS • AGGREGATIONS • GROUP BY • DATE ANALYSIS</div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.stats.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-center">
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="mt-1 text-[8px] leading-3 text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-500">ACTUAL DASHBOARD</span>
          <BarChart3 size={16} className="text-cyan-300" />
        </div>
        <div className="bg-black p-2">
          <img src={project.image} alt={`${project.title} dashboard`} className="h-auto w-full rounded-lg object-contain" />
        </div>
      </div>
    );
  }

  return null;
}

function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative mx-auto my-6 max-w-3xl rounded-3xl border border-white/10 bg-[#0b1220] p-6 shadow-2xl sm:my-10 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-slate-400 transition hover:text-white"
          aria-label="Close case study"
        >
          <X size={17} />
        </button>

        <div className="pr-10">
          <div className="text-xs font-semibold tracking-[0.2em] text-cyan-300">
            CASE STUDY
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>

        {project.image && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black">
            <img
              src={project.image}
              alt={`${project.title} full dashboard`}
              className="h-auto w-full"
            />
          </div>
        )}

        <div className="mt-8 grid gap-6">
          {[
            ["Business Problem", project.case.problem],
            ["Dataset", project.case.dataset],
            ["Data Cleaning", project.case.cleaning],
            ["Analysis", project.case.analysis],
            ["Visualization", project.case.visualization],
          ].map(([label, text]) => (
            <div key={label}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                {label}
              </h4>
              <p className="text-sm leading-7 text-slate-400">{text}</p>
            </div>
          ))}

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Key Findings
            </h4>
            <ul className="space-y-2">
              {project.findings.map((finding) => (
                <li key={finding} className="flex gap-2 text-sm leading-7 text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  {finding}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Business Recommendations
            </h4>
            <p className="text-sm leading-7 text-slate-400">
              {project.case.recommendations}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
      <div className="text-xs font-semibold tracking-[0.2em] text-cyan-300">
        OPEN TO OPPORTUNITIES
      </div>
      <h3 className="mt-3 text-2xl font-bold text-white">
        Let's connect professionally.
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        For internships, junior Data Analyst roles, or analytics opportunities,
        the fastest way to reach me is by email or LinkedIn.
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <a
          href="mailto:agrawalsakshi139@gmail.com?subject=Data%20Analyst%20Opportunity"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.01]"
        >
          Email Me <Mail size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/sakshi-agrawal2409"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
        >
          Connect on LinkedIn <Linkedin size={16} />
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060b14] text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #060b14;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }
        ::selection { background: rgba(34, 211, 238, .25); }
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 42px 42px;
        }
      `}</style>

      {/* NAVIGATION */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all ${
          scrolled
            ? "border-b border-white/10 bg-[#060b14]/80 py-3 backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-base font-bold tracking-tight"
          >
            Sakshi<span className="text-cyan-300">.</span>Agrawal
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-5 mt-3 rounded-2xl border border-white/10 bg-[#0b1220] p-2 md:hidden">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(item.id);
                }}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="grid-bg relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40"
      >
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Data Analyst · Nashik, Maharashtra, India
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.04em] text-white sm:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Sakshi.
              </span>
            </h1>

            <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-slate-200 sm:text-4xl">
              Data Analyst turning{" "}
              <span className="text-cyan-300">raw data</span> into meaningful
              insights.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400 sm:text-base">
              I work with Excel, SQL, Python and Power BI to clean messy data,
              uncover patterns, build useful dashboards, and communicate
              business insights clearly.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
              >
                View My Projects <ArrowRight size={16} />
              </button>
              <a
                href="mailto:agrawalsakshi139@gmail.com?subject=Data%20Analyst%20Opportunity"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
              >
                Email Me <Mail size={16} />
              </a>
              <a
                href="/Sakshi_Agrawal_Data_Analyst_Resume.pdf"
                download="Sakshi_Agrawal_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/5 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/10"
              >
                Download Resume <FileText size={16} />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-500">
              <a
                href="https://www.linkedin.com/in/sakshi-agrawal2409"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-cyan-300"
              >
                <Linkedin size={19} />
              </a>
              <a
                href="https://github.com/SakshiA2409"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:text-cyan-300"
              >
                <Github size={19} />
              </a>
              <a
                href="mailto:agrawalsakshi139@gmail.com"
                aria-label="Email"
                className="transition hover:text-cyan-300"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={profilePhoto}
                  alt="Sakshi - Data Analyst"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">CURRENT FOCUS</div>
                    <div className="mt-1 font-semibold text-white">
                      Data Analytics & BI
                    </div>
                  </div>
                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                    <BarChart3 size={19} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <SectionTitle
              eyebrow="ABOUT ME"
              title="I enjoy finding the story inside messy data."
            />
            <div className="space-y-5 text-[15px] leading-7 text-slate-400">
              <p>
                I'm a BCA graduate focused on data analytics and business
                intelligence. My projects cover Excel, SQL, Python, Pandas,
                Power BI and Tableau.
              </p>
              <p>
                I especially enjoy the practical part of analytics: cleaning
                inconsistent data, checking assumptions, finding outliers,
                comparing performance, and turning the result into something
                that a non-technical person can understand.
              </p>
              <p>
                I'm currently looking for Data Analyst and Data Analyst
                internship opportunities where I can apply SQL, Python, Excel
                and Power BI while continuing to grow my analytical and
                business skills.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-7">
            <div className="mb-6 text-xs font-semibold tracking-[0.2em] text-cyan-300">
              PROFILE
            </div>
            <div className="space-y-5">
              {[
                ["Role", "Data Analyst"],
                ["Education", "BCA"],
                ["Location", "Nashik, Maharashtra, India"],
                ["Focus", "Data Analytics & Business Intelligence"],
                ["Core Tools", "Excel · SQL · Python · Power BI"],
              ].map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start justify-between gap-5 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-slate-500">{key}</span>
                  <span className="text-right text-sm font-medium text-slate-200">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-white/10 bg-[#080f1a] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="SKILLS"
            title="Tools I use to turn data into decisions."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-300/20"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-2xl bg-gradient-to-br ${skill.accent} p-[1px]`}
                    >
                      <div className="rounded-2xl bg-[#0b1220] p-3">
                        <Icon size={20} className="text-cyan-300" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white">{skill.title}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400 transition group-hover:border-cyan-300/20 group-hover:text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="FEATURED PROJECTS"
            title="Analytics in action."
            description="Projects showing different sides of my analytical workflow — content analytics, retail analytics, real business billing data, and SQL-only business analysis."
          />

          <div className="space-y-7">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-transparent"
              >
                <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                  <div className="p-6 sm:p-8">
                    <div className="text-[11px] font-semibold tracking-[0.18em] text-cyan-300">
                      {project.tag}
                    </div>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {project.subtitle}
                    </p>

                    <p className="mt-5 text-[14px] leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {project.work.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-slate-400"
                        >
                          <ChevronRight
                            size={16}
                            className="mt-1 shrink-0 text-cyan-300"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                      >
                        View Case Study <ArrowRight size={15} />
                      </button>

                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                        >
                          <Github size={15} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7">
                    <ProjectVisual project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-white/10 bg-[#080f1a] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="EDUCATION"
            title="Education & credentials."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">
                Bachelor of Computer Applications
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Savitribai Phule Pune University · Graduated May 2026
              </p>
            </div>

            <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.015] p-7">
              <div className="mb-5 inline-flex rounded-2xl bg-violet-400/10 p-3 text-violet-300">
                <BriefcaseBusiness size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">
                Professional Development
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Building practical expertise through Python, SQL, Excel, Power BI,
                data cleaning, dashboard development, and hands-on analytics projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GITHUB CTA */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/[0.08] via-blue-500/[0.04] to-violet-500/[0.08] p-8 text-center sm:p-12">
          <Github className="mx-auto mb-4 text-cyan-300" size={28} />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Explore my work on GitHub
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Explore notebooks, SQL work, cleaned datasets, and project files
            behind my analytics projects.
          </p>
          <a
            href="https://github.com/SakshiA2409"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
          >
            Visit GitHub <ExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="CONTACT"
              title="Let's connect."
              description="I'm open to Data Analyst internships, junior Data Analyst roles, and meaningful analytics opportunities."
            />

            <div className="space-y-4">
              <a
                href="mailto:agrawalsakshi139@gmail.com"
                className="flex items-center gap-4 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <span className="rounded-xl border border-white/10 p-3">
                  <Mail size={18} />
                </span>
                agrawalsakshi139@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/sakshi-agrawal2409"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <span className="rounded-xl border border-white/10 p-3">
                  <Linkedin size={18} />
                </span>
                linkedin.com/in/sakshi-agrawal2409
              </a>

              <a
                href="https://github.com/SakshiA2409"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <span className="rounded-xl border border-white/10 p-3">
                  <Github size={18} />
                </span>
                github.com/SakshiA2409
              </a>
            </div>
          </div>

          <ContactCard />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 Sakshi Agrawal. Built with data, not templates.</span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sakshi-agrawal2409"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SakshiA2409"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

