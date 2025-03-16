import { Banner } from "@/components/banner";
import Cards from "@/components/Cards";
import ImageTextSection from "@/components/imageTextSection";
import SectionCards from "@/components/sectionCards";

export default function WeAre() {
  return (
    <>
      <Banner text="Tudo sobre a União Vistorias!" image="/vistoria.jpg" />
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
      <ImageTextSection
        text="Nós estamos otimizando e transformando o mercado de seguros "
        image="/uniao-circulo.png"
        txtParag="Construímos nossa história através de uma metodologia moderna na relação de inspeções e vistorias securitárias na mais diversas áreas do mercado, sempre otimizando processos, crescendo frequentemente e proporcionando resultados únicos aos nossos clientes. "
        txt2="asdfas sdfasdfasdf dasdfasdf dfasdf"
      />
    </>
  );
}
