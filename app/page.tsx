import Hero from '@/components/sections/Hero';
import SkillsMarquee from '@/components/sections/SkillsMarquee';
import SelectedWork from '@/components/sections/SelectedWork';
import HireBanner from '@/components/sections/HireBanner';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <SelectedWork />
      <HireBanner />
      <Services />
      <About />
      <Process />
      <CTA />
    </>
  );
}
