import Image from "next/image";
import Navbar from "./navbar/page";
import Hero from "./heroSection/page";
import VisionSection from "./visionSection/page";
import FeaturesSection from "./featuresSection/page";
import QuoteSection from "./quoteSection/page";
import SolutionSection from "./solutionSection/page";
import TargetUsersSection from "./targetUsersSection/page";
import ProblemsSection from "./problemsSection/page";
import TrustSection from "./trustSection/page";
import FAQSection from "./faqSection/page";
import WaitlistSection from "./waitlistSection/page";
import Footer from "./footer/page";
import BackToTop from "./backToTop/page";
import PrivacyModal from "./privacyModal/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VisionSection />
      <FeaturesSection />
      <QuoteSection />
      <ProblemsSection />

      {/* Wrapped sections with arrow illustration */}
      <div className="relative">
        {/* Arrow illustration spanning all 3 sections */}
        <div className="absolute left-10 top-80  w-100 pointer-events-none z-10">
          <Image
            src="/image 15.svg"
            alt=""
            width={150}
            height={1200}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-300 w-500 opacity-100"
          />
        </div>
        
        <SolutionSection />
        <TargetUsersSection />
      </div>
      <WaitlistSection />
      <TrustSection />
      <FAQSection />
      <Footer />
      <BackToTop />
      <PrivacyModal />
    </main>
  );
}
