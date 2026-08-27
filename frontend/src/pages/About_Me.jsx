import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";
import { motion as Motion } from "motion/react";

const highlights = [
  {
    icons: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icons: Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering task at users expectation",
  },
  {
    icons: Users,
    title: "Collaboration",
    description: "Can help with teams to bring up new ideas.",
  },
  {
    icons: Lightbulb,
    title: "Innvoation",
    description: "Staying Ahead with the latest technologies and best practices",
  },
];

const About_Me = () => {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="container mx-auto grid  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 py-6 px-3 gap-5">
        <div className="w-50%">
          {/* text */}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.4 }}
            className="text-sm text-primary font-bold  "
          >
            About Me
          </Motion.div>
          {/* Highlighting Text */}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
          >
            <h1 className="text-5xl md:w-6xl lg:w-7xl text-primary font-bold glow-text leading-tight">
              Building the future,{" "}
              <span className="font-serif text-white italic font-normal">
                one <br /> component at a time
              </span>
            </h1>
          </Motion.div>
          {/* Paragraphs */}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.6 }}
            className="flex py-5 flex-col lg:w-50% gap-5 text-muted-foreground/70 "
          >
            <p className="hover:text-muted-foreground ">
              I’m Muhammed Zamil, a passionate developer who enjoys building modern web
              and mobile applications. I work with the MERN stack for web development and
              Flutter with Dart for mobile application development.
            </p>
            <p className="hover:text-muted-foreground ">
              I love turning ideas into real, functional projects that are clean,
              responsive, and easy to use. From designing interactive interfaces to
              building backend systems and APIs, I enjoy working on different parts of the
              development process.
            </p>
            <p className="hover:text-muted-foreground ">
              I’m continuously learning new technologies and improving my skills through
              hands-on projects. My goal is to become a better developer every day and
              create applications that are useful, creative, and enjoyable to use.
            </p>
          </Motion.div>
          {/* Mission */}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.7 }}
            className="glass-strong rounded-2xl p-5 glow-border italic text-muted-foreground/90 hover:text-muted-foreground"
          >
            <p>
              "My mission is to keep learning, building, and improving as a developer
              while creating meaningful web and mobile applications. I want to turn
              creative ideas into simple, useful, and reliable digital experiences that
              solve real problems and make a positive impact."
            </p>
          </Motion.div>
        </div>
        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icons;

            return (
              <Motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
                className=" items-center glass-strong cursor-pointer rounded-2xl w-auto p-5"
              >
                <div className="flex h-12 w-12 rounded-2xl bg-primary/10 hover:bg-primary/20 items-center justify-center">
                  <Icon />
                </div>
                <div>
                  <h1 className="py-2 text-white text-lg font-bold">{highlight.title}</h1>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>{highlight.description}</p>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About_Me;
