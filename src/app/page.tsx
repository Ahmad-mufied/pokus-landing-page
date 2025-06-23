import Benefits from "@/components/sections/benefits";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import Cta from "@/components/sections/cta";
// import Demo from "@/components/sections/demo";
import Faq from "@/components/sections/faq";
import Team from "@/components/sections/team";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-8 sm:p-4">
        <Hero />
        <Features />
        {/* <Demo /> */}
        <Benefits />
        <Testimonials />
        <Faq />
        <Team />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
