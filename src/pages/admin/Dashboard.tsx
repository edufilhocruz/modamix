import React from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminIndicators } from "@/components/admin/AdminIndicators";
import { AdminActions } from "@/components/admin/AdminActions";
import { AdminNavbar } from "@/components/admin/AdminNavbar";

// Página principal do painel administrativo
// Composição modular: cada bloco é um componente isolado para performance e reuso
const Dashboard = () => (
  <div className="relative flex min-h-screen flex-col bg-white pb-24">
    {/* Header fixo com título e ícone */}
    <AdminHeader />
    {/* Indicadores principais do sistema */}
    <h2 className="text-[#181611] text-[22px] font-bold px-4 pb-3 pt-5">Indicadores</h2>
    <AdminIndicators />
    {/* Ações rápidas para o admin */}
    <h2 className="text-[#181611] text-[22px] font-bold px-4 pb-3 pt-5">Ações</h2>
    <AdminActions />
    {/* Navbar inferior fixa para navegação entre seções */}
    <AdminNavbar />
  </div>
);

export default Dashboard; 