// Hook para fornecer dados dos indicadores do admin
// Troque o array por chamada de API quando backend estiver pronto
export function useAdminIndicators() {
  return [
    { label: "Expositores", value: 120 },
    { label: "Parceiros", value: 35 },
    { label: "Visitantes", value: 5450 },
    { label: "Reservas", value: 2100 },
    { label: "Receita", value: 150000 },
  ];
} 