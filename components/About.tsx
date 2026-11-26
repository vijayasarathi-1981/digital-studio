import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="agency" className="py-32 bg-[#0c1128] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              Design is not just <br />
              <span className="text-gray-600">what it looks like.</span><br />
              It's how it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">feels</span>.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-lg font-light leading-relaxed"
          >
            <p>
              At Aura Studio, we believe that the web is a canvas for immersive storytelling. We merge cutting-edge technology with high-end aesthetics to build digital platforms that leave a lasting impression.
            </p>
            <p>
              Our multidisciplinary team of designers, engineers, and motion artists work synchronously to ensure every pixel serves a purpose and every interaction delights the user.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10 mt-8">
              <div>
                <h4 className="text-4xl font-black text-white mb-2">10+</h4>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">150+</h4>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
