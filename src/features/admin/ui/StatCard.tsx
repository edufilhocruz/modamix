import React from "react";

/**
 * Card visual para exibir uma estatística do relatório admin.
 * Usar React.memo para evitar renders desnecessários.
 */
export const StatCard = React.memo(({ label, value }: { label: string; value: string | number }) => (
  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f4f4f0]">
    <p className="text-[#181611] text-base font-medium leading-normal">{label}</p>
    <p className="text-[#181611] tracking-light text-2xl font-bold leading-tight">{value}</p>
  </div>
)); 