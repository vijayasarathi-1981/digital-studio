import { motion } from "framer-motion";
import { Palette, Wand2, Target, Rocket } from "lucide-react";

const services = [
  {
    title: "UI/UX\nCreative Design",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    icon: Palette,
    textPos: "top-8 left-8 md:top-12 md:left-12 text-left",
    bgPos: "bottom-0 right-0 rounded-tl-[100%]",
    iconPos: "bottom-8 right-8 md:bottom-12 md:right-12"
  },
  {
    title: "Visual\nGraphic Design",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    icon: Wand2,
    textPos: "top-8 right-8 md:top-12 md:right-12 text-left md:text-left",
    bgPos: "bottom-0 left-0 rounded-tr-[100%]",
    iconPos: "bottom-8 left-8 md:bottom-12 md:left-12"
  },
  {
    title: "Strategy &\nDigital Marketing",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    icon: Target,
    textPos: "bottom-8 left-8 md:bottom-12 md:left-12 text-left",
    bgPos: "top-0 right-0 rounded-bl-[100%]",
    iconPos: "top-8 right-8 md:top-12 md:right-12"
  },
  {
    title: "Effective\nBusiness Growth",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    icon: Rocket,
    textPos: "bottom-8 right-8 md:bottom-12 md:right-12 text-left md:text-left",
    bgPos: "top-0 left-0 rounded-br-[100%]",
    iconPos: "top-8 left-8 md:top-12 md:left-12"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0c1128] relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Services Built Specifically<br />for your Business
          </h2>
        </motion.div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative w-full h-[350px] md:h-[450px] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group hover:bg-white/10 transition-colors duration-500 rounded-3xl"
            >
              {/* Quarter Circle Icon Container */}
              <div className={`absolute w-48 h-48 md:w-64 md:h-64 bg-blue-500/5 ${service.bgPos} transition-transform duration-700 group-hover:scale-105 group-hover:bg-blue-500/10`}>
                <service.icon className={`absolute w-12 h-12 md:w-16 md:h-16 text-blue-400 opacity-80 ${service.iconPos} transition-transform duration-500 group-hover:scale-110`} />
              </div>

              {/* Text Content */}
              <div className={`absolute max-w-[65%] md:max-w-[55%] flex flex-col ${service.textPos}`}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4 whitespace-pre-line leading-tight drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
