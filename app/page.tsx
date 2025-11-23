import { Header, Hero, Location, Popular, Reviews } from "./components";

export default function HomePage() {
  return (
    <>
      <header className="bg-slate-950 p-3 border-b border-b-slate-500/10">
        <Header />
      </header>

      <Hero />

      <main className="px-2 md:mx-auto max-w-7xl">
        <Popular />
        <Location />
        <Reviews />
      </main>

      <footer>footer..</footer>
    </>
  );
}
