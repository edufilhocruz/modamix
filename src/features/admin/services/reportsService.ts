import { ReportStat } from "../types/report";

/**
 * Service para buscar estatísticas do relatório.
 * Troque o array por chamada de API futuramente.
 */
export function fetchReportStats(): ReportStat[] {
  return [
    { label: "Total de visitantes", value: "12.345" },
    { label: "Reservas realizadas", value: "8.765" },
    { label: "Faturamento via PIX", value: "R$ 54.321" },
    { label: "Expositores participantes", value: "234" },
  ];
} 