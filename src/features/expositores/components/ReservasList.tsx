import React from 'react';
import { MapPin, Calendar, Clock, CheckCircle, XCircle, AlertCircle, DollarSign, Users } from 'lucide-react';
import { ReservaEspaco } from '../types/expositores';

interface ReservasListProps {
  reservas: ReservaEspaco[];
  isLoading: boolean;
  formatPrice: (price: number) => string;
}

const getStatusInfo = (status: string) => {
  switch (status) {
    case 'pendente':
      return {
        icon: Clock,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        label: 'Pendente'
      };
    case 'confirmada':
      return {
        icon: CheckCircle,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        label: 'Confirmada'
      };
    case 'cancelada':
      return {
        icon: XCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        label: 'Cancelada'
      };
    case 'em_analise':
      return {
        icon: AlertCircle,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        label: 'Em Análise'
      };
    default:
      return {
        icon: Clock,
        color: 'text-gray-600',
        bgColor: 'bg-gray-100',
        label: status
      };
  }
};

export const ReservasList: React.FC<ReservasListProps> = React.memo(({
  reservas,
  isLoading,
  formatPrice
}) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 animate-pulse">
            <div className="flex items-center justify-between mb-3">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (reservas.length === 0) {
    return (
      <div className="text-center py-12">
        <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">Nenhuma reserva encontrada</h3>
        <p className="text-gray-500">Você ainda não fez nenhuma reserva de espaço.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reservas.map((reserva) => {
        const statusInfo = getStatusInfo(reserva.status);
        const StatusIcon = statusInfo.icon;

        return (
          <div key={reserva.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow overflow-hidden">
            {/* Header da Reserva */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div className="flex items-center space-x-3 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-modamix-dark truncate">
                  Reserva #{reserva.id}
                </h3>
                <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${statusInfo.bgColor} ${statusInfo.color} flex-shrink-0`}>
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {statusInfo.label}
                </span>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="text-sm font-medium text-gray-700">
                  {new Date(reserva.dataReserva).toLocaleDateString('pt-BR')}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(reserva.dataReserva).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>

            {/* Informações da Feira */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-modamix-dark mb-3">{reserva.feiraNome}</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{reserva.feiraEndereco}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>
                    {new Date(reserva.dataInicio).toLocaleDateString('pt-BR')} - {new Date(reserva.dataFim).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>

            {/* Detalhes do Espaço */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center space-x-3 min-w-0">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-modamix-dark truncate">{reserva.espacoNome}</p>
                      <p className="text-sm text-gray-600 truncate">{reserva.espacoTamanho}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-lg text-modamix-dark">{formatPrice(reserva.valor)}</p>
                    <p className="text-xs text-gray-500">por período</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>Capacidade: {reserva.espacoCapacidade} pessoas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Observações */}
            {reserva.observacoes && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="font-medium text-modamix-dark mb-1 text-sm">Observações:</p>
                <p className="text-sm text-gray-700">{reserva.observacoes}</p>
              </div>
            )}

            {/* Total e Ações */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Valor Total</p>
                  <p className="text-xl font-bold text-modamix-dark">
                    {formatPrice(reserva.valor)}
                  </p>
                </div>
                                <div className="flex flex-wrap gap-2 justify-end">
                  {reserva.status === 'pendente' && (
                    <button className="px-3 py-2 text-xs font-medium bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors whitespace-nowrap">
                      Cancelar
                    </button>
                  )}
                  {reserva.status === 'confirmada' && (
                    <button className="px-3 py-2 text-xs font-medium bg-modamix-yellow text-modamix-dark rounded-lg hover:bg-yellow-400 transition-colors whitespace-nowrap">
                      Baixar Comprovante
                    </button>
                  )}
                  <button className="px-3 py-2 text-xs font-medium bg-modamix-orange text-white rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

ReservasList.displayName = 'ReservasList'; 