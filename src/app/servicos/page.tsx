import { Banner } from "@/components/banner";
import Cards from "@/components/Cards";
import ImageTextSection from "@/components/imageTextSection";
import SectionCards from "@/components/sectionCards";
import SectionTech from "@/components/sectionTech";

export default function Servicos() {
  return (
    <>
      <Banner text="Prestamos serviços de qualidade!" image="/services.jpg" />
      <ImageTextSection
        text="Nós estamos otimizando e transformando o mercado de seguros "
        image="/mind-mapping.png"
        txtParag="Construímos nossa história através de uma metodologia moderna na relação de inspeções e vistorias securitárias na mais diversas áreas do mercado, sempre otimizando processos, crescendo frequentemente e proporcionando resultados únicos aos nossos clientes"
        txt2="."
      />
      <SectionCards text="Nós sabemos o que o mercado de seguros no Brasil precisa ">
        <Cards
          image="/efficiency.png"
          txtsubtitle="Eficiência"
          txt1="Conduzimos nossas vistorias atendendo todos os prazos, critérios e medidas que garantem uma inspeção eficiente e assertiva."
          txtclick="Saiba mais"
        />
        <Cards
          image="/secure-data.png"
          txtsubtitle="Segurança"
          txt1="Seguimos uma metodologia ágil porém clara, objetiva e segura, atestada através da nossa experiência de mercado."
          txtclick="Saiba mais"
        />
        <Cards
          image="/quality-assurance.png"
          txtsubtitle="Qualidade"
          txt1="Através da identidade de trabalho da SIGMA, impactamos o mercado de seguros com serviços de extrema qualidade."
          txtclick="Saiba mais"
        />
      </SectionCards>
      <SectionTech
        image="/podcast-.png"
        titleh2="Inovação e aprimoramento contínuo de processos "
        title="Um serviço de qualidade não precisa ser maçante !"
        text2="Evolução continua!"
        pargf1="Profissionais bem posicionados, atendimento único, comprometimento e seriedade além de tecnologia, expertise e dinamismo fazem da SIGMA uma empresa única no segmento com foto total em resultados de alta qualidade!"
        text1="Desdobramento técnico concreto!"
        text3="Diligência na comunicação!"
      />
    </>
  );
}
