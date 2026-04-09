import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large-scale React applications with proper state management and component architecture.",
    date: "Dec 2024",
    tag: "DEVELOPMENT",
    tagClass: "border-blue-500/20 bg-blue-500/10 text-blue-300",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends in web development including AI integration, edge computing, and new frameworks.",
    date: "Dec 2024",
    tag: "TRENDS",
    tagClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them effectively in your projects.",
    date: "Nov 2024",
    tag: "TUTORIAL",
    tagClass: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },
  {
    title: "Design Systems That Scale",
    excerpt: "How to build and maintain design systems that grow with your organization.",
    date: "Nov 2024",
    tag: "DESIGN",
    tagClass: "border-violet-500/20 bg-violet-500/10 text-violet-300",
  },
  {
    title: "Performance Optimization Tips",
    excerpt: "Practical tips for optimizing your web application's performance and user experience.",
    date: "Oct 2024",
    tag: "PERFORMANCE",
    tagClass: "border-rose-500/20 bg-rose-500/10 text-rose-300",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-8">
        <section>
          <h2 className="mb-1 text-[15px] font-semibold tracking-tight text-foreground">
            Blog
          </h2>
          <p className="mb-6 text-xs leading-5 text-muted-foreground">
            Thoughts, tutorials, and insights on development and design.
          </p>

          <div className="space-y-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-[22px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-colors hover:border-muted-foreground/15 hover:bg-secondary cursor-pointer"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-xs font-medium text-foreground">{post.title}</h3>
                  <ArrowUpRight size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                </div>

                <p className="max-w-[490px] text-[11px] leading-5 text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] tracking-[0.08em] ${post.tagClass}`}>
                    {post.tag}
                  </span>
                  <span className="text-[10px] text-muted-foreground/60">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
