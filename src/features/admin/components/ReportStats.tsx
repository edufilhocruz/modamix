import React from "react";
import { StatCard } from "../ui/StatCard";
import { useReportStats } from "../hooks/useReportStats";

/**
 * Exibe os principais indicadores do relatório de desempenho.
 * Usa React.memo para evitar renders desnecessários.
 * Os dados vêm do hook, que pode ser facilmente trocado por API.
 */
export const ReportStats = React.memo(() => {
  const stats = useReportStats();
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {stats.map((s) => (
        <StatCard key={s.label} label={s.label} value={s.value} />
      ))}
    </div>
  );
}); 