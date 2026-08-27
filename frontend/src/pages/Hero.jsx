import React from "react";
import { easeInOut, motion as Motion } from "motion/react";
import Button from "../component/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import AnimatedButton from "../component/AnimatedButton";

const dotPositions = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
}));

const social = [
  {
    icon: SiGithub,
    label: "Github",
    href: "https://github.com/muhammedzamil38-wq",
  },
  {
    icon: FiLinkedin,
    label: "Linkedin",
    href: "https://linkedin.com/in/muhammed-zamil-ae",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/muhammmmed_zamil/?hl=en#",
  },
];

const skills = [
  "React",
  "MongoDb",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Vercel",
  "JavaScript",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Docker",
  "Flutter",
  "Dart",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dotPositions.map(({ left, top }, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#20B2A6",
              left,
              top,
              animation: `slow-drift ${15 + (index % 6) * 20}s ease-in-out infinite`,
              animationDelay: `${(index * 1.7) % 5}s`,
            }}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <Motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer * MERN Specialist
              </span>
            </Motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <Motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl  font-bold leading-tight"
              >
                Crafiting <span className="text-primary glow-text">digital</span> <br />{" "}
                experience with <br />{" "}
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </Motion.h1>
              <Motion.p
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                I’m Muhammed Zamil, a MERN Stack and Flutter Developer passionate about
                building modern web and mobile applications. I work with technologies like
                React, Node.js, MongoDB, Flutter, and Dart to turn ideas into responsive,
                user-friendly, and real-world applications. I’m always learning, building,
                and improving my skills.
              </Motion.p>
            </div>

            {/* cta button */}
            <Motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedButton><Download className="w-5 h-5" /> Download CV</AnimatedButton>
            </Motion.div>
            {/* Social Links */}
            <Motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="flex items-center gap-4 "
            >
              <span className="text-sm text-muted-foreground">Follow Me:</span>
              {social.map((social, index) => (
                <a
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                >
                  <social.icon
                    className="w-5 h-5"
                    // color={social.label === "Linkedin" ? "#0A66C2" : "currentColor"}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </Motion.div>
          </div>
          {/* right Column - profile Content */}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-image.png"
                  alt="Muhammed Zamil"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <Motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    ease: easeInOut,
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available For Work</span>
                  </div>
                </Motion.div>
                {/* Stats Badge */}
                <Motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    ease: easeInOut,
                    delay: 0.5,
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -left-4 glass rounded-xl px-4 py-4"
                >
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </Motion.div>
              </div>
            </div>
          </Motion.div>
        </div>
        {/* Skills */}
        <Motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="mt-20 "
        >
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I Work With
          </p>
          <div className="relative overflow-hidden">
            <Motion.div
              initial={{ x: "0%" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex"
            >
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </Motion.div>
          </div>
        </Motion.div>
      </div>
      <Motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        <a
          className="flex flex-col cursor-pointer items-center gap-2 text-muted-foreground hover:text-primary"
          href="#about"
        >
          <span className=" text-xs uppercase tracking-wide">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce cursor-pointer" />
        </a>
      </Motion.div>
    </section>
  );
};

export default Hero;
