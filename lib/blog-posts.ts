export interface BlogPost {
  slug: string;
  title: string;
  category: "AI" | "Cyber Security" | "Databases" | "Engineering";
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
}

export const categories = ["AI", "Cyber Security", "Databases", "Engineering"] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-database-tradeoffs",
    title: "Choosing a Database as Your Business Grows: The Tradeoffs Nobody Puts on the Slide",
    category: "Databases",
    excerpt:
      "Every database pitch deck shows a benchmark chart. Nobody shows you the 2am migration, the query that got slow at 500k rows, or the bill that tripled. Here's how we actually think about it.",
    date: "2026-08-20",
    readTime: "7 min read",
    content: [
      "Every few months a founder asks us some version of the same question: \"Should we move off Postgres to [insert trendy database]?\" Usually someone on their team read a benchmark post, or a competitor mentioned using it, and now it feels like the responsible thing to at least consider. It rarely is — but the instinct to ask is a good one. Database choice is one of the few technical decisions that gets genuinely expensive to reverse once your data and your team's habits are built around it.",
      "So instead of another benchmark comparison, here's the actual framework we walk clients through — the tradeoffs that matter once you're past the prototype and into a business people depend on.",
      "**1. Your bottleneck almost never starts as \"the database is slow.\"** It starts as \"this one page is slow,\" and the database is usually the last thing to blame, not the first. Before touching your data layer, check for missing indexes, N+1 queries, and whether you're fetching more than the page needs. We've seen teams plan a six-month migration to fix a problem that was a missing composite index. Rule of thumb: if you haven't run `EXPLAIN ANALYZE` on your slowest queries, you're not ready to pick a new database — you're ready to fix the one you have.",
      "**2. Relational (Postgres/MySQL) is still the right default.** Not because it's trendy — it's the opposite of trendy — but because it gives you strong consistency, mature tooling, and the flexibility to ask questions of your data you didn't anticipate when you designed the schema. Growing businesses pivot. A rigid NoSQL schema optimized for today's access pattern becomes a liability when the product changes shape in year two. Postgres in particular has closed most of the gap with specialized databases: JSONB for flexible documents, extensions for full-text search and vector similarity, and solid horizontal read scaling.",
      "**3. Pick a specialized database for a specific, measured pain — not a vibe.** Real reasons to add (not necessarily replace) a database: you have genuinely high-write time-series data (sensor logs, metrics) — consider a time-series store. You need sub-millisecond key lookups at massive scale — consider a key-value store as a cache layer, not your source of truth. You're building AI features needing similarity search over embeddings — a vector database, or Postgres with pgvector, is worth it. None of these justify ripping out your primary relational database; they justify adding a purpose-built tool next to it for the workload that actually needs it.",
      "**4. The real cost is operational, not technical.** A new database means new backup strategy, new monitoring, new failure modes your on-call engineer has to learn at 2am, and new hiring requirements. A team that knows Postgres deeply will ship more reliable software on Postgres than the same team on a database they're learning under pressure. Weigh \"is this technically better\" against \"can my current team operate this well.\" For most growing businesses, the second question matters more.",
      "**5. Design for the migration you'll actually need: scaling reads, not swapping engines.** The most common real bottleneck as you grow isn't \"wrong database,\" it's \"one write-heavy primary doing everything.\" The unglamorous, high-leverage moves — read replicas, connection pooling, caching hot queries, and archiving old data out of your hot tables — solve 90% of the scaling problems that get blamed on the database engine itself.",
      "**Our actual advice:** start with Postgres (or MySQL if your team already knows it cold). Instrument it properly from day one so you can see real bottlenecks instead of guessing. Add a specialized store only when you have a measured, specific workload that needs it — and treat that as augmenting your primary database, not replacing it. The database that wins is the one your team can operate calmly under pressure, not the one that won last quarter's benchmark.",
      "If you're mid-migration-panic right now, or just want a second opinion before you commit engineering months to a database switch, that's a conversation we're happy to have — even if the honest answer is \"you don't need to change anything yet.\"",
    ],
  },
];
