import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0c1128] pt-32 pb-12 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">
            Let's create <br />
            <span className="text-gray-600 hover:text-white transition-colors cursor-pointer duration-500">something epic.</span>
          </h2>
          <button className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold rounded-full text-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <span className="relative z-10">Start a Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-t border-white/5 pt-16">
          <div className="md:col-span-2">
            <a href="#" className="text-white font-black text-2xl tracking-tighter mb-4 inline-block">
              Digi<span className="text-gray-500">.studio</span>
            </a>
            <p className="text-gray-500 max-w-sm font-light mt-2">
              A premium web design and motion engineering agency based in the digital realm.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Work", "Agency", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <div className="flex gap-4">
              {[Mail, MessageSquare, MapPin, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-sm font-light">
          <p>© {new Date().getFullYear()} Aura Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
