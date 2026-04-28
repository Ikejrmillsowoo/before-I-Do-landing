import heroBook from "@/assets/book.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-8">
            <p
              className="text-md font-sans tracking-[0.25em] uppercase text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Coming Soon - May 2026
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.05] text-balance opacity-0 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Before I Do
            </h1>
            <p
              className="text-lg md:text-xl font-serif italic text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              A Guide to Dating and Courtship
            </p>
            <p
              className="text-base text-muted-foreground max-w-md leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              "Before I Do" is for singles and couples who want to build strong
              foundations that last. Whether you are dating, courting,
              preparing for marriage, or married, this book helps you understand yourself,
              structure your choices and cultivate a relationship rooted in clarity,
              purpose and genuine love.
            </p>
            <div
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("signup")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Notified on Launch
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <img
                src={heroBook}
                alt="Before I Do book cover"
                className="w-72 md:w-80 lg:w-96 rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
