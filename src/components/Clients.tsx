import { motion } from "framer-motion";
import { Camera, ShoppingBag, Hexagon, Tv, Globe2, CreditCard } from "lucide-react";

export default function Clients() {
  const logos = [
    { name: "Instagram", icon: Camera },
    { name: "Shopify", icon: ShoppingBag },
    { name: "HubSpot", icon: Hexagon },
    { name: "CNBC", icon: Tv },
    { name: "BUSINESS INSIDER", icon: Globe2 },
    { name: "stripe", icon: CreditCard },
  ];

  // Duplicate list multiple times to ensure a seamless infinite scroll
  const scrollItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-[#0c1128] border-b border-white/5 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-center">
        {/* Pill Badge */}
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 mb-6 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
          Interested
        </div>
        
        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
          Trusted by 300+ businesses
        </h3>
      </div>

      {/* Infinite Logo Ticker */}
      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right Edge Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0c1128] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0c1128] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-20 md:gap-32 whitespace-nowrap px-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 text-gray-300 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              <item.icon className="w-8 h-8" />
              <span 
                className={`
                  font-bold 
                  ${item.name === 'BUSINESS INSIDER' ? 'tracking-widest uppercase text-xl' : 'text-3xl tracking-tight'} 
                  ${item.name === 'stripe' ? 'tracking-tighter lowercase text-4xl' : ''}
                `}
              >
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
