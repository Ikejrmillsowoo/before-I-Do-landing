import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Heart, MessageCircle, Compass, Shield } from "lucide-react";

const topics = [
  {
    icon: MessageCircle,
    title: "Communication",
    description: "The art of honest, vulnerable dialogue that deepens connection rather than creating distance.",
  },
  {
    icon: Heart,
    title: "Measuring Maturity",
    description: "Evaluating where you are and your persoanl readiness for a commitment.",
  },
  {
    icon: Compass,
    title: "Planned Shared Vision",
    description: "Align on the big questions, finances, family, faith, and future, before they become fractures.",
  },
  {
    icon: Shield,
    title: "Setting Healthy Bouandaries",
    description: "Transform disagreements into opportunities for growth instead of battlegrounds.",
  },
];

const TopicsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-5xl font-serif font-light text-balance transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            What You'll Discover
          </h2>
          <p
            className={`mt-5 text-muted-foreground max-w-lg mx-auto transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Pillars that separate relationships that last from ones that don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className={`group p-8 rounded-xl bg-card shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <topic.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-medium mb-3">{topic.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
