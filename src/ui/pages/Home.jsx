import Actions from '../components/layout/sections/Actions';
import Features from '../components/layout/sections/Features';
import Hero from '../components/layout/sections/Hero';
import Roadmap from '../components/layout/sections/Roadmap';

export default function Home() {
  return (
    <main className="mt-40 pt-16 pb-10">
      <Hero />
      <Features />
      <Roadmap />
      <Actions />
    </main>
  );
}
