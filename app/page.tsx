import { Header, Hero, Location, Popular, Reviews } from "./components";
import { Footer } from "./components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <header className="bg-slate-950 p-3 border-b border-b-slate-500/10">
        <Header />
      </header>

      <Hero />

      <main className="md:mx-auto max-w-7xl space-y-32">
        <Popular />
        <Location />
        <Reviews />
      </main>

      <Footer />
    </>
  );
}
