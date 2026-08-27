import React from "react";
import { motion as Motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ANimatedButton from "../component/AnimatedButton";

const projects = [
  {
    name: "Forever — E-Commerce Website",
    description:
      "Forever is a modern full-stack e-commerce platform designed for a smooth and user-friendly shopping experience. It features product browsing, categories, cart management, user authentication, and a responsive interface, built with the MERN stack and integrated with secure payment functionality.",
    image: "/projects/project-forever.png",
    tags: ["MERN", "JWT", "Tailwind CSS", "Stripe", "Razorpay", "Multer", "Cloudinary"],
    liveLink: "https://forever-frontend-peach-six.vercel.app/",
    github: "https://github.com/muhammedzamil38-wq/Forever-website",
  },
  {
    name: "Dino Game",
    description:
      "Dino Game is a simple and interactive browser game inspired by the classic Chrome Dinosaur Game. The player controls a dinosaur, jumps over obstacles, and tries to achieve the highest score possible. It features a clean, minimal interface with a restart option for quick replay.",
    tags: ["JavaScript"],
    image: "/projects/project-dino.png",
    liveLink: "https://dino-game-ten-rust.vercel.app/",
    github: "https://github.com/muhammedzamil38-wq/Dino-game",
  },
  {
    name: "Notes Taking",
    description:
      "Notes is a full-stack MERN web application designed for creating, managing, and organizing personal notes. It includes secure JWT-based authentication and provides a simple, responsive interface for users to easily manage their notes.",
    tags: ["MERN", "Tailwind CSS", "JWT"],
    image: "/projects/project-notes.png",
    liveLink: "https://notes-wweb.vercel.app/",
    github: "https://github.com/muhammedzamil38-wq/NOTES-WEB",
  },
  {
    name: "Wethear calculator",
    description:
      "Weather Calculator is a simple and responsive weather application that allows users to enter a city and quickly view important weather information, including temperature, feels-like temperature, humidity, and weather conditions. It provides a clean and straightforward interface for checking weather details.",
    tags: ["Weather API", "TailwindCSS", "JavaScript", "HTML"],
    image: "/projects/project-weather.png",
    liveLink: "https://weather-calculator-sand.vercel.app/",
    github: "https://github.com/muhammedzamil38-wq/Weather-calculator",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <Motion.span
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.7 }}
            className="text-secondary-foreground text-sm font-medium tracking-wide uppercase"
          >
            Featured Work
          </Motion.span>
          <Motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Projects that{" "}
            <Motion.span
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.9 }}
              className="font-serif italic font-normal text-white"
            >
              make an impact
            </Motion.span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-muted-foreground"
          >
            A selection of my recent work, from complex web application to innovative
            ideas that solve rel-life problems
          </Motion.p>
        </div>
        {/* Project */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            return (
              <Motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.3,
                  delay: `${(index + 1) * 0.1}`,
                }}
                key={index}
                className=" glass rounded-2xl overflow-hidden md:row-span-1 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700"
                    src={project.image}
                    alt={project.name}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                  <Motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    <a
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.liveLink}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  </Motion.div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <a target="_blank" rel="noopener noreferrer" href={project.liveLink}>
                      <ArrowUpRight
                        className="w-5 h-5 text-muted-foreground 
                  hover:text-primary 
                    hover:translate-x-1 
                    hover:-translate-y-1 transition-all"
                      />
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, inx) => {
                      return (
                        <span
                          className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-700"
                          key={inx}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Motion.div>
            );
          })}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="col-span-full w-full text-center mt-12 flex items-center justify-center"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/muhammedzamil38-wq"
            >
              <ANimatedButton>
                View All Projects <ArrowUpRight className="w-5 h-5 " />
              </ANimatedButton>
            </a>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
