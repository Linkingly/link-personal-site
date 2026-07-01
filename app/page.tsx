import Hero from "@/components/Hero";
import FeaturedVideo from "@/components/FeaturedVideo";
import BentoGridSection from "@/components/BentoGridSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <FeaturedVideo />
      <BentoGridSection />

      {/* Footer */}
      <footer className="relative py-12 border-t border-border">
        <div className="section-container relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-tertiary">
          <p>2026 Link. Built with Next.js</p>
          <p>Somewhere on the internet</p>
        </div>
      </footer>
    </main>
  );
}
