import { useState } from "react";
import { fetchReportStats } from "../services/reportsService";
import { ReportStat } from "../types/report";

/**
 * Hook para buscar os dados de estatísticas do relatório.
 * Pronto para trocar de mock para API real.
 */
export function useReportStats(): ReportStat[] {
  // No futuro, pode usar useQuery do react-query para cache e loading
  const [stats] = useState<ReportStat[]>(fetchReportStats());
  return stats;
} 