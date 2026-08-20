import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Method from "@/components/Method";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider fromClass="bg-flare" toClass="fill-cream" />
        <Intro />
        <WaveDivider fromClass="bg-cream" toClass="fill-ink" />
        <Method />
        <Work />
        <WaveDivider fromClass="bg-ink" toClass="fill-cream" />
        <Skills />
        <WaveDivider fromClass="bg-cream" toClass="fill-ink" />
        <About />
        <WaveDivider fromClass="bg-ink" toClass="fill-flare" />
        <Contact />
        <WaveDivider fromClass="bg-flare" toClass="fill-ink" />
      </main>
      <Footer />
    </>
  );
}
