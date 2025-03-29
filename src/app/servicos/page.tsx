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
        image="/indutrial.jpg"
        txtParag="Construímos nossa história através de uma metodologia moderna na relação de inspeções e vistorias securitárias na mais diversas áreas do mercado, sempre otimizando processos, crescendo frequentemente e proporcionando resultados únicos aos nossos clientes"
        txt2="."
      />
      <SectionCards text="Tipos de serviços!">
        <Cards
          image="/riscos.png"
          txtsubtitle="Riscos Massificados"
          txt1="Atendimento com realização de vistorias
              aos setores de comércio, serviços e
             industrial com peritos qualificados para
             atendimento nos mais variáveis
             seguimentos empresariais."
          txtclick="Saiba mais"
        />
        <Cards
          image="/engenharia-civil.png"
          txtsubtitle="Riscos de Engenharia - RE"
          txt1="Vistorias em execução de obras com laudos preparados por
           analistas especializados em Engenharia Civil. No processo de
           análise consiste em duas etapas, sendo a inspeção in-loco do
           terreno/obra e suas respectivas vizinhanças."
          txtclick="Saiba mais"
        />
        <Cards
          image="/construcao.png"
          txtsubtitle="Riscos Nomeados - Grandes Riscos"
          txt1="Atendimento com realização de vistorias em riscos de grande porte, com
           solicitação de documentações importantes iniciada logo após o processo de
           agendamento, havendo o acompanhamento do analista responsável."
          txtclick="Saiba mais"
        />
        <Cards
          image="/trator.png"
          txtsubtitle="Riscos Diversos - RD"
          txt1="Vistorias em equipamentos diversos em
           vários setores (agropecuários, hospitalares,
          industriais, comerciais entre outros)."
          txtclick="Saiba mais"
        />
        <Cards
          image="/energia-eolica.png"
          txtsubtitle="Riscos de Geração e Trasmissão de Energia"
          txt1="  
           A geração e transmissão de energia envolvem diversos riscos, desde acidentes operacionais até impactos ambientais. Na geração, há perigos como vazamentos em usinas, combustão em termelétricas ou falhas em hidrelétricas. Já na transmissão, destacam-se falhas em linhas de alta tensão, curtos-circuitos e exposição a campos eletromagnéticos."
          txtclick="Saiba mais"
        />
      </SectionCards>
      <SectionTech
        image="/computer.png"
        titleh2="Inovação e aprimoramento contínuo de processos "
        title="Um serviço de qualidade não precisa ser maçante !"
        text2="Evolução continua!"
        pargf1="Profissionais bem posicionados, atendimento único, comprometimento e seriedade além de tecnologia, expertise e dinamismo fazem da União Vistorias uma empresa única no segmento com foco total em resultados de alta qualidade!"
        text1="Desdobramento técnico concreto!"
        text3="Diligência na comunicação!"
      />
    </>
  );
}
