import { Providers } from "@/components/providers";
import { LocaleTransition } from "@/components/locale-transition";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Menu } from "@/components/menu";
import { Promotions } from "@/components/promotions";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <Providers>
      <Navbar />
      <LocaleTransition>
        <main className="w-full max-w-full flex-1 overflow-x-clip">
          <Hero />
          <Marquee />
          <About />
          <Features />
          <Menu />
          <Promotions />
          <Testimonials />
          <Cta />
        </main>
        <Footer />
      </LocaleTransition>
    </Providers>
  );
}
