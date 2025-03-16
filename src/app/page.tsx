import { Banner } from "@/components/banner";
import BannerScroll from "@/components/bannerScroll";
import { SectionCards } from "@/components/sectionCards";
import ImageTextSection from "@/components/imageTextSection";
import Section2 from "@/components/section-02";
import SectionTech from "@/components/sectionTech";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <ImageTextSection />
      <SectionCards />
      <Section2 />
      <BannerScroll />
      <SectionTech />
    </div>
  );
}
