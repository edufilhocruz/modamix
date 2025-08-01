import React from 'react';
import { Store, Package, FileText, Calendar, User } from 'lucide-react';
import { FornecedorList } from './FornecedorList';
import { ProdutoList } from './ProdutoList';
import { ProdutoFilters } from './ProdutoFilters';
import { SimpleSearch } from './SimpleSearch';
import { PedidosList } from './PedidosList';
import { PedidosFilters } from './PedidosFilters';
import { ReservasList } from './ReservasList';
import { ReservasFilters } from './ReservasFilters';
import { BoxSelectionModal } from './BoxSelectionModal';
import { FeirasFuturasSection } from './FeirasFuturasSection';
import { getCategorias } from '../services/expositoresService';

interface ExpositoresContentProps {
  activeSection: 'inicio' | 'produtos' | 'pedidos' | 'reservas' | 'reservar-espacos' | 'perfil';
  fornecedores: any[];
  produtos: any[];
  pedidos: any[];
  reservas: any[];
  feirasFuturas: any[];
  selectedFornecedor: any;
  filtros: any;
  pedidosFiltros: any;
  reservasFiltros: any;
  isLoadingFornecedores: boolean;
  isLoadingProdutos: boolean;
  isLoadingPedidos: boolean;
  isLoadingReservas: boolean;
  isLoadingFeirasFuturas: boolean;
  onSelectFornecedor: (fornecedor: any) => void;
  onAddToCart: (produtoId: string, quantidade: number) => void;
  onFiltrosChange: (filtros: any) => void;
  onClearFiltros: () => void;
  onPedidosFiltrosChange: (filtros: any) => void;
  onClearPedidosFiltros: () => void;
  onReservasFiltrosChange: (filtros: any) => void;
  onClearReservasFiltros: () => void;
  onSelecionarFeira: (feira: any) => void;
  onSectionChange: (section: 'inicio' | 'produtos' | 'pedidos' | 'reservas' | 'reservar-espacos' | 'perfil') => void;
  formatPrice: (price: number) => string;
}

export const ExpositoresContent: React.FC<ExpositoresContentProps> = React.memo(({
  activeSection,
  fornecedores,
  produtos,
  pedidos,
  reservas,
  feirasFuturas,
  selectedFornecedor,
  filtros,
  pedidosFiltros,
  reservasFiltros,
  isLoadingFornecedores,
  isLoadingProdutos,
  isLoadingPedidos,
  isLoadingReservas,
  isLoadingFeirasFuturas,
  onSelectFornecedor,
  onAddToCart,
  onFiltrosChange,
  onClearFiltros,
  onPedidosFiltrosChange,
  onClearPedidosFiltros,
  onReservasFiltrosChange,
  onClearReservasFiltros,
  onSelecionarFeira,
  onSectionChange,
  formatPrice
}) => {
  const categorias = getCategorias();
  const [isBoxSelectionOpen, setIsBoxSelectionOpen] = React.useState(false);
  const [selectedFeira, setSelectedFeira] = React.useState<any>(null);

  const handleSelecionarFeira = (feira: any) => {
    setSelectedFeira(feira);
    setIsBoxSelectionOpen(true);
  };

  const handleConfirmBoxSelection = (feiraId: string, quantidade: number) => {
    // Adicionar espaço ao carrinho
    onSelecionarFeira({ feiraId, quantidade });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-modamix-dark mb-2">
                Área do Expositor
              </h1>
              <p className="text-gray-600">
                Compre produtos e espaços nas feiras
              </p>
            </div>

            {/* Cards de Ação */}
            <div className="space-y-4 mb-8">
              {/* Comprar Produtos */}
              <button 
                onClick={() => onSectionChange('produtos')}
                className="w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-modamix-orange/20 transition-all duration-200 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Package className="w-8 h-8 text-modamix-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-modamix-dark mb-1">
                      Comprar Produtos
                    </h3>
                    <p className="text-sm text-modamix-dark/70">
                      Explore produtos dos fornecedores
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 text-modamix-orange">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Reservar Espaços */}
              <button 
                onClick={() => onSectionChange('reservar-espacos')}
                className="w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-modamix-orange/20 transition-all duration-200 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Store className="w-8 h-8 text-modamix-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-modamix-dark mb-1">
                      Reservar Espaços
                    </h3>
                    <p className="text-sm text-modamix-dark/70">
                      Reserve seu espaço nas feiras
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 text-modamix-orange">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Feiras Futuras */}
            <FeirasFuturasSection
              feiras={feirasFuturas}
              isLoading={isLoadingFeirasFuturas}
              formatPrice={formatPrice}
              onSelecionarFeira={handleSelecionarFeira}
            />
          </div>
        );

      case 'produtos':
        return (
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-modamix-dark mb-2">
                Produtos
              </h1>
            </div>

            {/* Busca Simples */}
            <div className="mb-6">
              <SimpleSearch
                searchTerm={filtros.busca}
                onSearchChange={(value) => onFiltrosChange({ busca: value })}
                onClearSearch={() => onFiltrosChange({ busca: '' })}
                placeholder="Buscar por nome ou categoria..."
              />
            </div>

            {/* Produtos em Destaque */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-modamix-dark mb-4">
                Produtos em Destaque
              </h2>
              <ProdutoList
                produtos={produtos.filter(p => p.destaque).slice(0, 4)}
                isLoading={isLoadingProdutos}
                onAddToCart={onAddToCart}
                formatPrice={formatPrice}
              />
            </div>

            {/* Lista de Produtos */}
            <div>
              <ProdutoList
                produtos={produtos}
                isLoading={isLoadingProdutos}
                onAddToCart={onAddToCart}
                formatPrice={formatPrice}
              />
            </div>
          </div>
        );



      case 'pedidos':
        return (
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-modamix-dark mb-2">
                Meus Pedidos
              </h1>
              <p className="text-gray-600">
                Acompanhe o status dos seus pedidos
              </p>
            </div>

            {/* Filtros */}
            <PedidosFilters
              searchTerm={pedidosFiltros.busca}
              selectedStatus={pedidosFiltros.status}
              onSearchChange={(value) => onPedidosFiltrosChange({ busca: value })}
              onStatusChange={(status) => onPedidosFiltrosChange({ status })}
              onClearFilters={onClearPedidosFiltros}
            />

            {/* Lista de Pedidos */}
            <PedidosList
              pedidos={pedidos}
              isLoading={isLoadingPedidos}
              formatPrice={formatPrice}
            />
          </div>
        );

      case 'reservas':
        return (
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-modamix-dark mb-2">
                Minhas Reservas
              </h1>
              <p className="text-gray-600">
                Gerencie suas reservas de espaços nas feiras
              </p>
            </div>

            {/* Filtros */}
            <ReservasFilters
              searchTerm={reservasFiltros.busca}
              selectedStatus={reservasFiltros.status}
              selectedDate={reservasFiltros.data}
              onSearchChange={(value) => onReservasFiltrosChange({ busca: value })}
              onStatusChange={(status) => onReservasFiltrosChange({ status })}
              onDateChange={(data) => onReservasFiltrosChange({ data })}
              onClearFilters={onClearReservasFiltros}
            />

            {/* Lista de Reservas */}
            <ReservasList
              reservas={reservas}
              isLoading={isLoadingReservas}
              formatPrice={formatPrice}
            />
          </div>
        );

      case 'reservar-espacos':
        return (
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-modamix-dark mb-2">
                Reservar Espaços
              </h1>
              <p className="text-gray-600">
                Escolha uma feira e reserve seus espaços
              </p>
            </div>

            {/* Listagem das Feiras Futuras */}
            <FeirasFuturasSection
              feiras={feirasFuturas}
              isLoading={isLoadingFeirasFuturas}
              formatPrice={formatPrice}
              onSelecionarFeira={handleSelecionarFeira}
            />
          </div>
        );

      case 'perfil':
        return (
          <div className="flex-1 p-4">
            <div className="text-center py-12">
              <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Meu Perfil
              </h3>
              <p className="text-gray-500">
                Funcionalidade em desenvolvimento
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      {renderContent()}
      
      {/* Modal de Seleção de Boxes */}
      <BoxSelectionModal
        isOpen={isBoxSelectionOpen}
        onClose={() => setIsBoxSelectionOpen(false)}
        feira={selectedFeira}
        formatPrice={formatPrice}
        onConfirmSelection={handleConfirmBoxSelection}
      />
    </main>
  );
});

ExpositoresContent.displayName = 'ExpositoresContent'; 