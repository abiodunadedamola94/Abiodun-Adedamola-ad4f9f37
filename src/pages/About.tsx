import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function About() {
  const skills = [
    "React", "TypeScript", "Node.js", "Figma", "Tailwind CSS", 
    "Next.js", "GraphQL", "Python", "UI/UX Design", "Motion Design"
  ];

  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Get to know the person behind the code
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Photo */}
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <span className="text-6xl font-display font-bold gradient-text">JD</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                <span>5+ years experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Available for freelance</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-semibold">My Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer and designer with over 5 years of experience 
                creating digital products. My journey began with a curiosity for how things 
                work on the web, which evolved into a deep love for crafting user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design is invisible—it just works. My approach combines 
                technical expertise with creative thinking to build solutions that are both 
                beautiful and functional.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-xl font-display font-semibold">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h2 className="text-xl font-display font-semibold">Experience</h2>
          <div className="space-y-6">
            {[
              { role: "Senior Developer", company: "Tech Corp", period: "2022 - Present" },
              { role: "Full Stack Developer", company: "StartupXYZ", period: "2020 - 2022" },
              { role: "Frontend Developer", company: "Digital Agency", period: "2018 - 2020" },
            ].map((exp, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mt-1">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
