import React from "react";
import { AdminIndicatorCard } from "@/ui/admin/AdminIndicatorCard";
import { useAdminIndicators } from "@/hooks/admin/useAdminIndicators";

// Renderiza os cards de indicadores do painel admin
export const AdminIndicators = React.memo(() => {
  let indicators = useAdminIndicators(); // Hook pode ser trocado por API futuramente
  // Remove 'Receita' do array original
  const receita = indicators.find(i => i.label === "Receita");
  indicators = indicators.filter(i => i.label !== "Receita");
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {indicators.map((item) => (
        <AdminIndicatorCard key={item.label} label={item.label} value={item.value} cardClass="bg-modamix-yellow text-modamix-dark" />
      ))}
      <AdminIndicatorCard label="Feiras Ativas" value={8} cardClass="bg-modamix-yellow text-modamix-dark" />
      <AdminIndicatorCard label="Usuários Ativos" value={320} cardClass="bg-modamix-yellow text-modamix-dark" />
      <AdminIndicatorCard label="Receita" value={receita?.value || "-"} cardClass="bg-modamix-yellow text-modamix-dark" />
    </div>
  );
}); 