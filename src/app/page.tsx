import { Banner } from "@/components/banner";
import { ExpertSection } from "@/components/expertSection";
import ImageTextSection from "@/components/imageTextSection";
import Section2 from "@/components/section-02";
import SectionTech from "@/components/sectionTech";

export default function Home() {
  return (
    <div>
      <Banner />
      <ImageTextSection />
      <ExpertSection />
      <Section2 />
      <SectionTech />
    </div>
  );
}
