import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Make the liquid glass effect slightly intensify on scroll
  const scrollBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.02)", "rgba(255, 255, 255, 0.08)"]
  );

  const scrollBackdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(8px)", "blur(24px)"]
  );

  const navItems = ["Services", "Work", "Agency", "Contact"];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.header
        style={{
          background: isMobileMenuOpen ? "rgba(255, 255, 255, 0.08)" : scrollBackground,
          backdropFilter: isMobileMenuOpen ? "blur(24px)" : scrollBackdropFilter
        }}
        className={`w-full max-w-5xl border border-white/10 pointer-events-auto transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'rounded-3xl' : 'rounded-full'
          }`}
      >
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-black text-xl sm:text-2xl tracking-tighter hover:scale-105 transition-transform block">
                Digistudio
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-md font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Start Project
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 transition-transform active:scale-95"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden border-t border-white/10"
              >
                <div className="py-6 flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-bold text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                  <button className="mt-4 w-full px-6 py-3 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 active:scale-95 transition-all">
                    Start Project
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  );
}
