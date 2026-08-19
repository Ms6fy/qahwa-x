import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Vibe from "@/components/Vibe";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import NowPlaying from "@/components/NowPlaying";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Vibe />
        <Location />
      </main>
      <Footer />
      <NowPlaying />
    </>
  );
}
