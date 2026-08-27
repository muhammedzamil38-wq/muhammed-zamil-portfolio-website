import React from "react";
import { motion as Motion } from "motion/react";

const experiences = [
  {
    period: "2026 - present",
    role: "Flutter Developer",
    description: "learning Mobile development",
    technologies: ["Flutter", "Dart"],
    current: true,
  },
  {
    period: "2025 - 2026 - present",
    role: "Full Stack Web Developer",
    description: "1+ Year Experience in MERN Stack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    current: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl px-6 relative z-10">
          <Motion.span
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.7 }}
            className="text-secondary-foreground text-sm font-medium tracking-wide uppercase"
          >
            Career Journey
          </Motion.span>
          <Motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Experience that{" "}
            <Motion.span
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              className="font-serif italic font-normal text-white"
            >
              {" "}
              speaks volumes.
            </Motion.span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-muted-foreground"
          >
            A timeline of my proffesional growth, fro curious beginner to a full stack web
            developer and mobile developer
          </Motion.p>
        </div>
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178, 166,0.8)]"></div>

          {/* Experience Items */}
          <div className="space-y-12 mt-4">
            {experiences.map((experience, index) => {
              return (
                <Motion.div
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.3,
                    delay: `${(index + 1) * 0.15}`,
                  }}
                  key={index}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background z-10">
                  {experience.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span> }
                  </div>
                  {/* Content */}
                  <div
                    className={`pl-8 md:pl-0  ${index % 2 == 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div
                      className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                    >
                      <span className="text-sm text-primary font-medium">
                        {experience.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
                      <p className="text-sm text-muted-foreground mt-4">
                        {experience.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${index % 2 == 0 ? "md:justify-end" : ""}`}
                      >
                        {experience.technologies.map((tech, indx) => {
                          return (
                            <span
                              className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border hover:text-primary hover:border-primary/70"
                              key={indx}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
