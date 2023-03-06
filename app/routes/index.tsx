import CheckoutMenu from "~/components/CheckoutMenu";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import OurRegion from "~/components/OurRegion";
import SpaceBlock from "~/components/SpaceBlock";
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <HeroSection />
      <OurRegion />
      <SpaceBlock />
      <CheckoutMenu />
      <Footer />
    </div>
  );
}
