
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkShowcase from '@/components/WorkShowcase';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WorkShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
