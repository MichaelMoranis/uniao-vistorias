import { Banner } from "@/components/banner";
import Cards from "@/components/Cards";
import ImageTextSection from "@/components/imageTextSection";
import SectionCards from "@/components/sectionCards";
import SectionTech from "@/components/sectionTech";

export default function QuemSomos() {
  return (
    <>
      <Banner text="Tudo sobre a União Vistorias!" image="/industry.jpg" />
      <ImageTextSection
        text="Nós estamos otimizando e transformando o mercado de seguros e vistorias! "
        image="/engenheiro.jpg"
        txtParag="Na União Vistorias, nossa missão é fornecer serviços de vistoria
        especializados e confiáveis, com o objetivo de garantir a tranquilidade
        e segurança de nossos clientes. Estamos comprometidos em oferecer
        soluções abrangentes e precisas para atender às diversas necessidades
        do mercado."
        txt2=""
      />
      <SectionCards text="Nós sabemos o que o mercado de seguros no Brasil precisa ">
        <Cards
          image="/eficiencia.png"
          txtsubtitle="Eficiência"
          txt1="Conduzimos nossas vistorias atendendo todos os prazos, critérios e medidas que garantem uma inspeção eficiente e assertiva."
          txtclick="Saiba mais"
        />
        <Cards
          image="/seguranca.png"
          txtsubtitle="Segurança"
          txt1="Seguimos uma metodologia ágil porém clara, objetiva e segura, atestada através da nossa experiência de mercado."
          txtclick="Saiba mais"
        />
        <Cards
          image="/qualidade.png"
          txtsubtitle="Qualidade"
          txt1="Através da identidade de trabalho da UniãoVistorias, impactamos o mercado de seguros com serviços de extrema qualidade."
          txtclick="Saiba mais"
        />
      </SectionCards>
      <SectionTech
        image="/profissionais.jpg"
        titleh2="Inovação e aprimoramento contínuo de processos "
        title="Um serviço de qualidade não precisa ser maçante !"
        text2="Evolução continua!"
        pargf1="Com uma equipe altamente qualificada e experiente, a União Vistorias
destaca-se pela excelência no fornecimento de serviços de vistoria
técnica, inspeções e laudos técnicos em diferentes segmentos. Nossos
profissionais são especializados em avaliar imóveis residenciais,
comerciais e industriais, proporcionando um diagnóstico preciso e
completo."
        text1="Desdobramento técnico concreto!"
        text3="Diligência na comunicação!"
      />
    </>
  );
}
