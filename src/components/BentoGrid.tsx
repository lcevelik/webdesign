import { motion } from "motion/react";
import { Badge } from "@/src/components/ui/badge";
import { ChevronRight } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Item 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-3xl overflow-hidden bg-black text-white group cursor-pointer"
        >
          <img 
            src="https://picsum.photos/seed/lumina-dark/1200/800" 
            alt="Dark Mode" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <Badge variant="outline" className="w-fit mb-4 border-white/30 text-white">New</Badge>
            <h3 className="text-4xl font-bold mb-2">Dark Mode.</h3>
            <p className="text-lg text-white/70 mb-6 max-w-sm">
              Easier on the eyes, even more beautiful to look at.
            </p>
            <div className="flex items-center text-blue-400 font-medium group-hover:gap-2 transition-all">
              Learn more <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Large Item 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative h-[500px] rounded-3xl overflow-hidden bg-zinc-100 group cursor-pointer"
        >
          <img 
            src="https://picsum.photos/seed/lumina-light/1200/800" 
            alt="Performance" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <h3 className="text-4xl font-bold mb-2">Pro Performance.</h3>
            <p className="text-lg text-zinc-600 mb-6 max-w-sm">
              Built for the most demanding workflows.
            </p>
            <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
              See the benchmarks <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Small Item 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-3xl overflow-hidden bg-linear-to-br from-purple-500 to-indigo-600 text-white p-10 flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Privacy. Built-in.</h3>
          <p className="text-white/80 max-w-xs">
            What happens on Lumina, stays on Lumina.
          </p>
        </motion.div>

        {/* Small Item 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative h-[400px] rounded-3xl overflow-hidden bg-zinc-900 text-white p-10 flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Universal Control.</h3>
          <p className="text-white/60 max-w-xs">
            One app for all your devices. Seamlessly synced.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
