import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Zap, Shield, Sparkles, Cpu } from "lucide-react";

const features = [
  {
    title: "Blazing Fast",
    description: "Optimized for performance, Lumina responds to your every command instantly.",
    icon: Zap,
    color: "text-amber-500",
  },
  {
    title: "Secure by Design",
    description: "Your data is encrypted and protected with industry-leading security protocols.",
    icon: Shield,
    color: "text-blue-500",
  },
  {
    title: "AI Powered",
    description: "Leverage advanced machine learning to automate your most complex workflows.",
    icon: Sparkles,
    color: "text-purple-500",
  },
  {
    title: "Neural Engine",
    description: "Deep integration with your hardware for maximum efficiency and battery life.",
    icon: Cpu,
    color: "text-emerald-500",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Engineered for excellence.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail has been meticulously crafted to provide the best possible experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-background">
                <CardHeader>
                  <feature.icon className={`w-10 h-10 mb-4 ${feature.color}`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
