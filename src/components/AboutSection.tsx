import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-card">
      <div className="container mx-auto max-w-3xl text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-light text-balance mb-8">
            Why I Wrote this Book
          </h2>
        </div>
        <div
          className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p>
            Too many couples walk down the aisle full of love but short on
            preparation. The wedding gets months of planning. The marriage gets
            hope. Yet the two individuals making that promise, full of love and
            full of potential, are so rarely prepared to fully give themselves
            to it.
          </p>
          <p>
            <em className="font-serif text-foreground text-xl">Before I Do</em>{" "}
            is the book I wish every couple had before making the biggest
            commitment of their lives. It is not about dampening romance, but to
            deepen it. Lasting love isn't just felt; it's built. It's
            about bringing the best of who you are into the relationship, and
            giving what you're building together the foundation it deserves.
          </p>
          <p>
            Whether you're dating, engaged, or simply building something with
            someone you love, these pages will help you build with intention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
