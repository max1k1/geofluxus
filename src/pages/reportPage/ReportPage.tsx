import React, { useState } from "react";
import { Select } from "antd";
import s from "./ReportPage.module.css";
import ReportCard from "../../components/reportCard/ReportCard";

const { Option } = Select;

type ReportType = "afvalrapport" | "benchmarkrapport" | "csrdrapport";

export default function ReportPage() {
  const [reportType, setReportType] = useState<ReportType | null>(null);

  return (
    <div className={s.reportPageContainer}>
      <div className={s.content}>
        {/* 1. Page Header */}
        <div className={s.section}>
          <div className={s.headerSection}>
            <h1 className={s.headerTitle}>Bekijk rapport</h1>
            <p className={s.headerSubtitle}>
              Selecteer een rapport dat je wilt verkennen voor een dieper
              inzicht in het afvalbeheer van uw organisatie.
            </p>
          </div>
        </div>

        {/* 2. Card for "Rapporttype" */}
        <div className={s.section}>
          <div className={s.selectCard}>
            <div className={s.selectCardTitle}>Rapporttype</div>
            <Select<ReportType>
              placeholder="Selecteer een rapporttype"
              style={{ width: "100%" }}
              value={reportType ?? undefined}
              onChange={(value) => setReportType(value)}
            >
              <Option value="afvalrapport">Afval rapport</Option>
              <Option value="benchmarkrapport">Benchmark rapport</Option>
              <Option value="csrdrapport">CSRD rapport</Option>
            </Select>
          </div>
        </div>
        <ReportCard reportType={reportType} />
      </div>
    </div>
  );
}
