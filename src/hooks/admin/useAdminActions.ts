import { Calendar, BarChart2, Bell } from "lucide-react";

// Hook para fornecer dados das ações rápidas do admin
// Troque o array por chamada de API quando backend estiver pronto
export function useAdminActions() {
  return [
    {
      title: "Criar nova feira",
      desc: "Inicie o planejamento de um novo evento",
      icon: Calendar,
      to: "/admin/feiras/criar"
    },
    {
      title: "Gerar Relatórios",
      desc: "Crie relatórios detalhados sobre as feiras",
      icon: BarChart2,
      to: "/admin/relatorios"
    },
    {
      title: "Gerar Notificações",
      desc: "Gerencie as notificações do sistema",
      icon: Bell,
      to: "/admin/notificacoes"
    }
  ];
} 