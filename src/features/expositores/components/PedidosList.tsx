import React from 'react';
import { Package, Calendar, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Pedido } from '../types/expositores';

interface PedidosListProps {
  pedidos: Pedido[];
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
    case 'aprovado':
      return {
        icon: CheckCircle,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        label: 'Aprovado'
      };
    case 'cancelado':
      return {
        icon: XCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        label: 'Cancelado'
      };
    case 'em_preparo':
      return {
        icon: AlertCircle,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        label: 'Em Preparo'
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

export const PedidosList: React.FC<PedidosListProps> = React.memo(({
  pedidos,
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

  if (pedidos.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">Nenhum pedido encontrado</h3>
        <p className="text-gray-500">Você ainda não fez nenhum pedido.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {pedidos.map((pedido) => {
        const statusInfo = getStatusInfo(pedido.status);
        const StatusIcon = statusInfo.icon;

        return (
          <div key={pedido.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            {/* Header do Pedido */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-modamix-dark">
                  Pedido #{pedido.id}
                </h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusInfo.bgColor} ${statusInfo.color}`}>
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {statusInfo.label}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  {new Date(pedido.data).toLocaleDateString('pt-BR')}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(pedido.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>

            {/* Itens do Pedido */}
            <div className="space-y-2 mb-3">
              {pedido.itens.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-modamix-dark">{item.produto.nome}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantidade}x {formatPrice(item.produto.preco)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-modamix-dark">
                      {formatPrice(item.produto.preco * item.quantidade)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Informações do Fornecedor */}
            <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{pedido.fornecedorNome}</span>
            </div>

            {/* Total e Ações */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500">Total do Pedido</p>
                <p className="text-xl font-bold text-modamix-dark">
                  {formatPrice(pedido.total)}
                </p>
              </div>
              <div className="flex space-x-2">
                {pedido.status === 'pendente' && (
                  <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Cancelar
                  </button>
                )}
                <button className="px-4 py-2 text-sm bg-modamix-orange text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

PedidosList.displayName = 'PedidosList'; 