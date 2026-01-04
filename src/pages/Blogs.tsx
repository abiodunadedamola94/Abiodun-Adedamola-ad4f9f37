import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large-scale React applications with proper state management and component architecture.",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    tags: ["React", "Architecture"],
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends in web development including AI integration, edge computing, and new frameworks.",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    tags: ["Web Dev", "Trends"],
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them effectively in your projects.",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "Tutorial"],
  },
  {
    title: "Design Systems That Scale",
    excerpt: "How to build and maintain design systems that grow with your organization.",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    tags: ["Design", "Systems"],
  },
  {
    title: "Performance Optimization Tips",
    excerpt: "Practical tips for optimizing your web application's performance and user experience.",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    tags: ["Performance", "Tips"],
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Thoughts, tutorials, and insights on development and design.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Thumbnail placeholder */}
                <div className="w-full md:w-32 h-24 md:h-20 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0" />

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="border-border">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
}
