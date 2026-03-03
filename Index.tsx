import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import MenuPreview from "@/components/MenuPreview";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <MenuPreview />
      <Reserve />
      <Footer />
    </div>
  );
};

export default Index;
