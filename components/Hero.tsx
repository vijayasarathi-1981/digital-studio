import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // The container is 400vh tall to require multiple scrolls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Circle clip-path grows smoothly from 0% to 150% across the entire scroll duration
  const clipSize = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const clipPath = useMotionTemplate`circle(${clipSize}% at 50% 50%)`;

  // Scale the background slightly as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-[#0c1128]"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

        {/* Base Layer: Outline Image + Initial Text */}
        <motion.div
          className="absolute inset-0 z-0 origin-center flex flex-col items-center justify-center"
          style={{ scale }}
        >
          <img
            src="https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_outline_fzg37d.jpg"
            alt="City Outline Sketch"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] drop-shadow-2xl text-center relative z-20"
          >
            Imagine the <br className="hidden sm:block" />
            Future
          </motion.h1>

          {/* Edge Blur Gradients to blend into background */}
          <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#0c1128] via-[#0c1128]/80 to-transparent pointer-events-none -z-10" />
          <div className="absolute inset-y-0 left-0 w-[20vw] bg-gradient-to-r from-[#0c1128] via-[#0c1128]/80 to-transparent pointer-events-none -z-10" />
          <div className="absolute inset-y-0 right-0 w-[20vw] bg-gradient-to-l from-[#0c1128] via-[#0c1128]/80 to-transparent pointer-events-none -z-10" />
        </motion.div>

        {/* Top Layer: Realistic Image + New Text (Revealed by scroll) */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none origin-center flex flex-col items-center justify-center"
          style={{
            scale,
            clipPath
          }}
        >
          <img
            src="https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_iglhwn.jpg"
            alt="Realistic City Skyline"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          {/* Subtle dark overlay so white text remains readable on white sketch lines */}
          <div className="absolute inset-0 bg-[#0c1128]/40 pointer-events-none opacity-45 -z-10" />

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] drop-shadow-2xl text-center relative z-20"
          >
            Build the <br className="hidden sm:block" />
            Reality
          </motion.h1>

          {/* Edge Blur Gradients to blend into background */}
          <div className="absolute inset-x-0 bottom-0 h-[25vh] bg-gradient-to-t from-[#0c1128] via-[#0c1128]/90 to-transparent pointer-events-none -z-10" />
          <div className="absolute inset-y-0 left-0 w-[25vw] bg-gradient-to-r from-[#0c1128] via-[#0c1128]/35 to-transparent pointer-events-none -z-10" />
          <div className="absolute inset-y-0 right-0 w-[25vw] bg-gradient-to-l from-[#0c1128] via-[#0c1128]/35 to-transparent pointer-events-none -z-10" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-200 font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            Keep Scrolling
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-2"
          >
            <ChevronDown className="w-5 h-5 text-gray-200 drop-shadow-lg" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
