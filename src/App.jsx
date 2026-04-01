import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Expertise from './components/Expertise';
import SkillsMarquee from './components/SkillsMarquee';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-void">
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
  );
}
