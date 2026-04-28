import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_FORM_URL = "";

const EmailSignupSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     toast({
  //       title: "Please enter a valid email",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   if (GOOGLE_FORM_URL) {
  //     try {
  //       await fetch(GOOGLE_FORM_URL, {
  //         method: "POST",
  //         mode: "no-cors",
  //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //         body: new URLSearchParams({ name, email }),
  //       });
  //     } catch {
  //       // no-cors means we can't read the response
  //     }
  //   }

  //   // Always show success (no-cors can't confirm)
  //   setIsSubmitted(true);
  //   setIsSubmitting(false);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData();

  formData.append("entry.1152728169", name);   // replace with your NAME field ID
  formData.append("entry.1548419292", email);  // replace with your EMAIL field ID

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdCMZ_izpCIMuvTRSHmmpniYe-DDPTeubC1W1wOCcWvo20YvQ/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    // Reset form
    setName("");
    setEmail("");

    alert("You're on the list! 🎉");
  } catch (error) {
    console.error("Error submitting form", error);
    alert("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section ref={ref} id="signup" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-lg text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-light text-balance mb-4">
            Be the First to Know
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Join the waitlist and get notified the moment the book launches, plus 
            early access to additional content.
          </p>
        </div>

        {isSubmitted ? (
          <div
            className={`p-8 bg-card rounded-xl shadow-sm transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-xl font-serif mb-2">You're on the list!</h3>
            <p className="text-muted-foreground text-sm">
              We'll be in touch when the book is ready. Thank you for your interest.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Input
              type="text"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 bg-card border-border/60 text-base placeholder:text-muted-foreground/60"
            />
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-card border-border/60 text-base placeholder:text-muted-foreground/60"
            />
            <Button
              variant="hero"
              size="lg"
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </Button>
            <p className="text-xs text-muted-foreground/70">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSignupSection;
