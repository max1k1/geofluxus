import React from "react";
import { Card } from "antd";
import s from "./ReportCard.module.css";
import TableSection from "../TableSection/TableSection";

type ReportType = "afvalrapport" | "benchmarkrapport" | "csrdrapport" | null;

interface ReportCardProps {
  reportType: ReportType | null;
}

function getReportContent(reportType: ReportType) {
  switch (reportType) {
    case "afvalrapport":
      return {
        title: "Afval rapport",
        description: `In dit afval rapport vindt u een overzicht van alle afvalstromen, 
        de bijbehorende hoeveelheden afval en de gebruikte verwerkingsmethodes. 
        Daarnaast wordt aangegeven wie het afval heeft verwerkt en welke 
        materialen er in het afval aanwezig zijn.`,
      };
    case "benchmarkrapport":
      return {
        title: "Benchmark rapport",
        description: `In dit benchmark rapport vindt u een overzicht van de huidige 
        afvalverwerkingsmethoden en hoe deze zich verhouden tot zowel nationale 
        standaarden als best practices. Door middel van grafieken en tabellen 
        analyseren we de verwerkingsmethoden per afvalsoort en identificeren we 
        waar verbeteringen mogelijk zijn en waar al goed gepresteerd wordt.`,
      };
    case "csrdrapport":
      return {
        title: "CSRD rapport",
        description: `Dit rapport biedt een uitgebreid overzicht van verschillende 
        aspecten van afvalbeheer zoals gevraagd in het CSRD. Het omvat een 
        gedetailleerd overzicht van de totale afvalcijfers, gebruikte 
        verwerkingsmethodes, samenstelling van het afval, en de aanwezige 
        materialen in het afval. Elk hoofdstuk biedt waardevolle inzichten in 
        de omvang, verwerking en inhoud van afvalstromen, essentieel voor het 
        optimaliseren van duurzaam afvalbeheer.`,
      };
    default:
      return {
        title: "",
        description: "",
      };
  }
}

export const columns = [
  {
    title: "Afvalsoort",
    dataIndex: "afvalsoort",
    key: "afvalsoort",
  },
  {
    title: "Beter",
    dataIndex: "beter",
    key: "beter",
  },
  {
    title: "Gemiddeld",
    dataIndex: "gemiddeld",
    key: "gemiddeld",
  },
  {
    title: "Onder",
    dataIndex: "onder",
    key: "onder",
  },
  {
    title: "Onbekend",
    dataIndex: "onbekend",
    key: "onbekend",
  },
];

export const data = [
  {
    key: "1",
    afvalsoort:
      "080111 - Afval van (bijv.) coatings (verf, lak en email) met gevaarlijke stoffen",
    beter: "91.5%",
    gemiddeld: "0%",
    onder: "0%",
    onbekend: "8.5%",
  },
  {
    key: "2",
    afvalsoort:
      "080314 - Afval van verf en dat organische oplosmiddelen of andere gevaarlijke stoffen bevat",
    beter: "100%",
    gemiddeld: "0%",
    onder: "0%",
    onbekend: "0%",
  },
];

export default function ReportCard({ reportType }: ReportCardProps) {
  const { title, description } = getReportContent(reportType);

  if (!reportType) {
    return (
      <div className={s.defaultReportCard}>
        <p>
          Er zijn momenteel geen rapporten geselecteerd. Kies een rapport om de
          details te bekijken.
        </p>
      </div>
    );
  }

  return (
    <div className={s.reportCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* ---- Subsection 1: Trends Afvalproductie ---- */}
      <Card className={s.subSectionCard}>
        <h3 className={s.subSectionTitle}>1. Trends afvalproductie</h3>
        <p>
          Hieronder vindt u de belangrijkste trends en cijfers rondom de
          afvalproductie, gebaseerd op data sinds 2018 en een vergelijking met
          het meest recente kwartaal (2022 Q4).
        </p>

        <div className={s.statsRow}>
          <div className={s.statsCard}>
            <div className={s.statsValue}>-1,1%</div>
            <div>Gemiddeld per jaar (sinds 2018)</div>
          </div>
          <div className={s.statsCard}>
            <div className={s.statsValue}>+0,5%</div>
            <div>In vergelijking met 2022 Q4</div>
          </div>
          <div className={s.statsCard}>
            <div className={s.statsValue}>12,7%</div>
            <div>van het afval bevat voornamelijk hernieuwbare materialen</div>
          </div>
        </div>
      </Card>
      {/* ---- Subsection 2: Afvalverwerking ---- */}
      <Card className={s.subSectionCard}>
        <h3 className={s.subSectionTitle}>
          2. Afvalverwerking in vergelijking met landelijke praktijken
        </h3>
        <p>
          In de onderstaande tabel analyseren we de toegepaste
          verwerkingsmethoden per afvalstroom en vergelijken we deze met de
          meest gebruikte methoden op nationaal niveau.
        </p>
        <TableSection columns={columns} data={data} />
      </Card>
      c{/* ---- Subsection 3: Materialen ---- */}
      <Card className={s.subSectionCard}>
        <h3 className={s.subSectionTitle}>3. Materialen</h3>
        <p>
          De Rijksoverheid heeft plannen voor de transitie naar een circulaire
          economie geformuleerd. In dit deel van het rapport bekijken we welke
          materialen aanwezig zijn in uw afvalstromen en hoe deze kunnen worden
          hergebruikt of gerecycled.
        </p>
      </Card>
    </div>
  );
}
