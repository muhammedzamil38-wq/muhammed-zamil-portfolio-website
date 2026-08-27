import { motion as Motion, spring } from "motion/react";

export default function ANimatedButton({children}) {
  return (
    <Motion.button
      className="relative w-50 h-15 cursor-pointer bg-transparent border border-border text-foreground hover:border-primary/50 focus:outline-none focus-visible:ring-2
               focus-visible:ring-primary focus-visible:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed group
                 flex items-center justify-center text-center
                 px-8 py-4 animated-border font-medium rounded-full overflow-visible"
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={{ delay: 1, default: { type: spring, stiffness: 100 } }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <Motion.path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDashoffset: 400 }}
          variants={{
            rest: {
              strokeDashoffset: 400,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            },
            hover: {
              strokeDashoffset: -550,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            },
          }}
        />
      </svg>

      <span className="relative z-10 flex items-center justify-center  gap-2">
        {children}
      </span>
    </Motion.button>
  );
}
