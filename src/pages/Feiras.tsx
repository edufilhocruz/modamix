import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useNavigate } from "react-router-dom";

const feirasData = [
  {
    id: 1,
    title: "Moda Verão 2024",
    date: "15 a 18 de Dezembro",
    year: "2024",
    location: "Centro de Convenções SP",
    attendees: "500+ expositores",
    time: "9h às 18h",
    status: "próxima",
    description: "A maior feira de moda verão com as tendências mais quentes da estação.",
    highlights: ["Desfiles", "Workshops", "Networking", "Lançamentos"]
  },
  {
    id: 2,
    title: "Outlet de Fim de Ano",
    date: "05 a 08 de Dezembro",
    year: "2024",
    location: "Expo Center Norte",
    attendees: "300+ expositores",
    time: "10h às 20h",
    status: "próxima",
    description: "Grandes descontos em roupas e acessórios para o fim de ano.",
    highlights: ["Descontos até 70%", "Liquidação", "Marcas Premium"]
  },
  {
    id: 3,
    title: "Moda Inverno 2025",
    date: "20 a 23 de Junho",
    year: "2025",
    location: "Centro de Convenções SP",
    attendees: "600+ expositores",
    time: "9h às 18h",
    status: "futura",
    description: "Preparando o futuro da moda inverno com peças exclusivas.",
    highlights: ["Pré-lançamentos", "Tendências 2025", "B2B"]
  }
];

const Feiras = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <header className="p-4 flex items-center space-x-4 border-b border-gray-200">
          <button onClick={() => navigate("/")} className="p-1">
            <ArrowLeft className="w-6 h-6 text-modamix-dark" />
          </button>
          <h1 className="text-xl font-bold text-modamix-dark">Feiras</h1>
        </header>

        <main className="p-4 space-y-6 pb-20">
          {/* Filtros */}
          <div className="flex space-x-2">
            <Button size="sm" className="bg-secondary text-secondary-foreground">
              Todas
            </Button>
            <Button variant="outline" size="sm">
              Próximas
            </Button>
            <Button variant="outline" size="sm">
              2024
            </Button>
            <Button variant="outline" size="sm">
              2025
            </Button>
          </div>

          {/* Lista de Feiras */}
          <div className="space-y-4">
            {feirasData.map((feira) => (
              <div key={feira.id} className="bg-card border border-border rounded-lg p-4 space-y-3">
                {/* Header da Feira */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-modamix-dark">{feira.title}</h3>
                    <p className="text-sm text-muted-foreground">{feira.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    feira.status === 'próxima' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {feira.status === 'próxima' ? 'Próxima' : 'Futura'}
                  </span>
                </div>

                {/* Descrição */}
                <p className="text-sm text-gray-600">{feira.description}</p>

                {/* Informações */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{feira.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{feira.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{feira.attendees}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{feira.year}</span>
                  </div>
                </div>

                {/* Destaques */}
                <div className="flex flex-wrap gap-2">
                  {feira.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-secondary/50 text-modamix-dark text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Ações */}
                <div className="flex space-x-2 pt-2">
                  <Button 
                    className="flex-1" 
                    size="sm"
                    onClick={() => navigate('/mapa-espacos')}
                  >
                    Ver Detalhes
                  </Button>
                  <Button variant="outline" size="sm">
                    Salvar
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Convite */}
          <div className="bg-gradient-to-r from-secondary to-primary/20 p-4 rounded-lg text-center">
            <h3 className="font-bold text-modamix-dark mb-2">Seja um Expositor</h3>
            <p className="text-sm text-modamix-dark/80 mb-3">
              Participe das próximas feiras e expanda seu negócio
            </p>
            <Button variant="outline" size="sm" className="border-modamix-dark text-modamix-dark">
              Saiba Mais
            </Button>
          </div>
        </main>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Feiras;