import { 
  Map, 
  Palette, 
  Calendar, 
  Utensils, 
  Headphones, 
  HelpCircle, 
  Ticket, 
  Info 
} from "lucide-react";

const quickActionsData = [
  { icon: Map, label: "Mapa" },
  { icon: Palette, label: "Marcas" },
  { icon: Calendar, label: "Agenda" },
  { icon: Utensils, label: "Comida" },
  { icon: Headphones, label: "Contato" },
  { icon: HelpCircle, label: "FAQ" },
  { icon: Ticket, label: "Ingresso" },
  { icon: Info, label: "Sobre" }
];

export const QuickActions = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-modamix-dark mb-4">Ações Rápidas</h3>
      <div className="grid grid-cols-4 gap-4">
        {quickActionsData.map((action, index) => {
          const Icon = action.icon;
          return (
            <div 
              key={index}
              className="bg-secondary p-3 rounded-lg flex flex-col items-center justify-center text-center hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              <Icon className="w-6 h-6 text-modamix-dark mb-1" />
              <span className="text-xs font-medium text-modamix-dark">{action.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};