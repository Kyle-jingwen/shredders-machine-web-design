import { Hero } from "@/components/home/Hero";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { ApplicationsSection } from "@/components/home/ApplicationsSection";
import { Features } from "@/components/home/Features";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <ApplicationsSection />
      <Features />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
