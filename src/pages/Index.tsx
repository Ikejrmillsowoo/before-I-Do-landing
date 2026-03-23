import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TopicsSection from "@/components/TopicsSection";
import EmailSignupSection from "@/components/EmailSignupSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <EmailSignupSection />
      <FooterSection />
    </div>
  );
};

export default Index;
