import { Banner } from "@/components/banner";
import BannerScroll from "@/components/bannerScroll";
import SectionCards from "@/components/sectionCards";
import ImageTextSection from "@/components/imageTextSection";
import Section2 from "@/components/section-02";
import SectionTech from "@/components/sectionTech";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="w-full">
      <Banner
        text="Gestão e Análise de Riscos para Seguros"
        image={"/newbanner.jpg"}
      />
      <ImageTextSection
        text="Especializados no ramo securitário"
        txtParag="Especializados no ramo de seguros, realizamos inspeções técnicas
          detalhadas para diversas modalidades de riscos"
        txt2="Além disso, oferecemos suporte técnico para riscos nomeados e
          engenharia, garantindo a segurança e proteção do seu patrimônio
          empresarial."
        image={"/uniao-circulo.png"}
      />
      <SectionCards text="Expertise que faz da UniãoVistorias uma empresa destaque no segmento ">
        <Cards
          image="/roda-dentada-cinza.png"
          txtsubtitle="Experiência"
          txt1="Habituados com o mercado, executamos nossos serviços de forma eficiente e com total segurança."
          txtclick="saiba mais"
        />
        <Cards
          image="/ia.png"
          txtsubtitle="Inteligência"
          txt1="Temos as soluções ideais para empresas que precisam de agilidade, qualidade e confiança."
          txtclick="saiba mais"
        />
        <Cards
          image="/resultado.png"
          txtsubtitle="Resultado"
          txt1="Os melhores resultados através da nossa equipe qualificada e know-how do mercado."
          txtclick="saiba mais"
        />
      </SectionCards>
      <Section2
        image="/mapa-uniao.png"
        title="  Atuamos em todo o territorio nacional."
        txt1="  Oferecemos cobertura nacional com soluções personalizadas para
          análises e inspeções de riscos, garantindo agilidade e excelência em
          todos os serviços."
        txt2="          Nosso compromisso é manter a qualidade e aprimorar constantemente
          nossas metodologias, assegurando resultados eficientes e adaptados às
          necessidades de cada cliente."
      />
      <BannerScroll />
      <SectionTech
        image={"/refinaria.jpg"}
        titleh2="Inovação!"
        title="Tecnologia com foco no sucesso !"
        pargf1="Além de profissionais qualificados, qualidade no atendimento, transparência e comprometimento, acreditamos que a tecnologia faz toda a diferença para uma análise ágil, detalhada e eficiente. "
        text1="Desdobramento técnico concreto"
        text2=" Diligência na comunicação e envio!"
        text3="Inspeções inteligentes e dinâmicas"
      />
    </div>
  );
}
