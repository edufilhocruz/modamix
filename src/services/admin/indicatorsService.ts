import { AdminIndicator } from "@/types/admin/indicator";

export async function fetchAdminIndicators(): Promise<AdminIndicator[]> {
  // Futuramente: buscar do backend
  return [
    { label: "Expositores", value: 120 },
    { label: "Parceiros", value: 35 },
    { label: "Visitantes", value: "5,450" },
    { label: "Reservas", value: "2,100" },
    { label: "Receita", value: "R$ 150.000" },
  ];
} 