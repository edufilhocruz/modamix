import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Package, Store } from "lucide-react";

const ProfileSelection = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      id: "admin",
      title: "Administrador",
      description: "Gerencie feiras, relatórios e notificações",
      icon: Shield,
      color: "bg-modamix-orange",
      textColor: "text-white",
      route: "/admin"
    },
    {
      id: "fornecedor",
      title: "Fornecedor",
      description: "Gerencie seus produtos e vendas",
      icon: Package,
      color: "bg-modamix-yellow",
      textColor: "text-modamix-dark",
      route: "/fornecedor"
    },
    {
      id: "expositor",
      title: "Expositor",
      description: "Acesse feiras e benefícios",
      icon: Store,
      color: "bg-modamix-dark",
      textColor: "text-white",
      route: "/app"
    }
  ];

  const handleProfileSelect = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-sm mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-modamix-dark mb-2">
            ModaMix
          </h1>
          <p className="text-gray-600">
            Selecione seu perfil para continuar
          </p>
        </div>

        {/* Profile Cards */}
        <div className="space-y-4">
          {profiles.map((profile) => {
            const IconComponent = profile.icon;
            return (
              <div
                key={profile.id}
                onClick={() => handleProfileSelect(profile.route)}
                className={`${profile.color} ${profile.textColor} rounded-lg p-6 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      {profile.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Escolha o perfil que melhor se adequa ao seu uso</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection; 