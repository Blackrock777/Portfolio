import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import NoiseOverlay from './components/NoiseOverlay';
import CursorFollower from './components/CursorFollower';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Expertise from './components/Expertise';
import SkillsMarquee from './components/SkillsMarquee';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <PageLoader onComplete={() => setLoaderDone(true)} />
      <SmoothScroll>
        <NoiseOverlay />
        <CursorFollower />
        <div className="relative min-h-screen" style={{ backgroundColor: '#060606' }}>
          <Navbar />
          <main>
            <Hero />
            <Work />
            <Expertise />
            <SkillsMarquee />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
