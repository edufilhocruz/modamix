import { ArrowLeft, Bell, Calendar, Gift, Info, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const notificationsData = [
  {
    id: 1,
    type: "feira",
    icon: Calendar,
    title: "Nova feira disponível!",
    message: "A feira Moda Verão 2024 está chegando. Não perca!",
    time: "2 horas atrás",
    unread: true
  },
  {
    id: 2,
    type: "promocao",
    icon: Gift,
    title: "Promoção especial",
    message: "Desconto de 30% para visitantes cadastrados",
    time: "1 dia atrás",
    unread: true
  },
  {
    id: 3,
    type: "info",
    icon: Info,
    title: "Atualização do app",
    message: "Nova versão disponível com melhorias",
    time: "2 dias atrás",
    unread: false
  },
  {
    id: 4,
    type: "destaque",
    icon: Star,
    title: "Marca em destaque",
    message: "Conheça a nova coleção da StyleBrand",
    time: "3 dias atrás",
    unread: false
  },
  {
    id: 5,
    type: "feira",
    icon: Calendar,
    title: "Lembrete de evento",
    message: "Outlet de Fim de Ano começa amanhã!",
    time: "1 semana atrás",
    unread: false
  }
];

const Notificacoes = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-sm mx-auto">
        <header className="p-4 flex items-center gap-3 border-b border-gray-200">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-modamix-dark" />
            <h1 className="text-xl font-bold text-modamix-dark">Notificações</h1>
          </div>
        </header>

        <main className="p-4 space-y-4 pb-20">
          {notificationsData.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card 
                key={notification.id} 
                className={`cursor-pointer hover:bg-gray-50 transition-colors ${
                  notification.unread ? 'border-l-4 border-l-modamix-orange bg-blue-50/30' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'feira' ? 'bg-modamix-yellow/20 text-modamix-dark' :
                      notification.type === 'promocao' ? 'bg-green-100 text-green-600' :
                      notification.type === 'destaque' ? 'bg-modamix-orange/20 text-modamix-orange' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-modamix-dark text-sm">
                          {notification.title}
                        </h3>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-modamix-orange rounded-full"></div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      
                      <p className="text-xs text-gray-400">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Notificacoes;