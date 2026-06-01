import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "./components-home/Hero";
import { Stats } from "./components-home/Stats";
import { OnlineTraining } from "./components-home/OnlineTraining";
import { Programs } from "./components-home/Programs";
import { CaseStudies } from "./components-home/CaseStudies";
import { Testimonial } from "./components-home/Testimonial";
import { Faq } from "./components-home/Faq";
import { Cta } from "./components-home/Cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <OnlineTraining />
      <Programs />
      <CaseStudies />
      <Testimonial />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
