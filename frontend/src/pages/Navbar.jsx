import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import { Menu, X } from "lucide-react";
import { motion as Motion } from "motion/react";
import { AnimatePresence } from "motion/react";

const navLink = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center ">
        <a className="text-xl font-bold tracking-tight hover:text-primary" href="#">
          MUHAMMED ZAMIL<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link, index) => (
              <a
                className="px-4 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                key={index}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <a href="#contact"><Button size="sm">Contact Me</Button></a>
        </div>
        <Motion.button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground cursor-pointer"
        >
          {!isMobileMenuOpen ? <Menu size={25} /> : <X size={25} />}
        </Motion.button>
      </nav>
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            className="md:hidden glass-strong"
          >
            <Motion.div className="conatiner mx-auto px-6 py-6 flex flex-col gap-4">
              {navLink.map((link, index) => (
                <a
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                  onClick={()=>setIsMobileMenuOpen(false)}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact"><Button onClick={()=>setIsMobileMenuOpen(false)} size="md">Contact Me</Button></a>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
