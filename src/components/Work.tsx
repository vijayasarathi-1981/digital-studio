import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Pixzen",
    category: "Crafting a seamless digital platform for creative professionals to showcase their work through intuitive interfaces.",
    image: "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp",
  },
  {
    title: "Wander",
    category: "A next-generation mobile experience designed for travelers to discover hidden gems around the world.",
    image: "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781631791578-Wander_Hero.webp",
  },
  {
    title: "Agentify",
    category: "Deep AI integration dashboard enabling teams to automate workflows and scale operations effortlessly.",
    image: "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp",
  },
  {
    title: "Future",
    category: "High-performance web application utilizing modern frameworks to deliver blazing fast user experiences.",
    image: "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp",
  },
  {
    title: "Genova",
    category: "Complete brand identity and digital presence overhaul for a premium lifestyle brand.",
    image: "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781670271708-Genova_Hero.webp",
  }
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 bg-[#0c1128] relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">Our Works</h2>
            <p className="text-gray-400 text-lg font-light max-w-xl">
              A collection of our most impactful projects. We blend aesthetics with technical excellence to create digital flagships.
            </p>
          </div>
          <button className="mt-8 md:mt-0 flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium border-b border-white/20 pb-1">
            View All Projects <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Expanding Flex Gallery */}
        <div className="flex flex-col md:flex-row w-full h-[400px] gap-2 md:gap-4">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            // On mobile, flex direction is column. On desktop, row.
            // If nothing is hovered, all share equally (flex: 1).
            // If hovered, active is flex: 4 (or 5), others are flex: 0.8.
            const flexValue = hoveredIndex === null ? 1 : isHovered ? 4 : 0.8;

            return (
              <motion.div
                key={project.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ flex: flexValue }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="relative overflow-hidden rounded-3xl cursor-pointer group flex-1"
                style={{ flex: flexValue }} // Fallback initial state
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Overlay Gradients */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-700 ${isHovered ? "opacity-20" : hoveredIndex !== null ? "opacity-60" : "opacity-30"
                    }`}
                />
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end h-full">
                  <div className="w-full flex items-center justify-between">
                    {/* Vertical text layout when collapsed (optional, but horizontal is fine if short) */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap truncate tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 text-sm md:text-base font-light mt-4 mb-8 max-w-sm leading-relaxed line-clamp-3">
                          {project.category}
                        </p>
                        <button className="px-8 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap">
                          Detail Project
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
