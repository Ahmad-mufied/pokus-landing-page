import Benefits from "@/components/sections/benefits";
import Demo from "@/components/sections/demo";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Demo />
      <Benefits />
      <Testimonials />
      <Faq />
      <Team />
      {/* The final CTA will be part of the Team or a separate small component later */}
      <Footer />
    </main>
  );
}
