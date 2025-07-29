import React from "react";
import { AdminActionCard } from "@/ui/admin/AdminActionCard";
import { useAdminActions } from "@/hooks/admin/useAdminActions";

// Renderiza os cards de ações rápidas do painel admin
export const AdminActions = React.memo(() => {
  const actions = useAdminActions(); // Hook pode ser trocado por API futuramente
  return (
    <div className="flex flex-col gap-4 p-4">
      {actions.map((item, i) => (
        <AdminActionCard key={item.title} {...item} />
      ))}
    </div>
  );
}); 