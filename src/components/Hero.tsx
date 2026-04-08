import { motion } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/50"
        >
          Intelligence that <br /> feels like magic.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the next generation of productivity with Lumina. 
          Seamlessly integrated, beautifully designed, and incredibly powerful.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-lg group">
            Learn more
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="link" className="text-lg text-blue-600 hover:text-blue-700">
            Buy now
            <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="mt-20 w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card"
      >
        <img 
          src="https://picsum.photos/seed/lumina-app/1920/1080" 
          alt="Lumina App Interface" 
          className="w-full h-auto object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
