import About from "@/components/homeitem/About";
import Banner from "@/components/homeitem/Banner";
import HomeServices from "@/components/homeitem/HomeServices";
import Testimonials from "@/components/homeitem/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <HomeServices />
      <Testimonials />
    </main>
  );
}
