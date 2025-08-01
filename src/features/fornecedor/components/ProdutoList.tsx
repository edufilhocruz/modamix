/**
 * Componente para listar produtos do fornecedor
 * Exibe produtos em cards com ações de editar/deletar
 */

import React from 'react';
import { Produto } from '../types/fornecedor';
import { Edit, Trash2, Eye, EyeOff, Package } from 'lucide-react';

/**
 * Props para o componente ProdutoList
 */
interface ProdutoListProps {
  produtos: Produto[];
  isLoading: boolean;
  onEdit: (produto: Produto) => void;
  onDelete: (produtoId: string) => void;
  onToggleStatus: (produto: Produto) => void;
  formatPrice: (price: number) => string;
}

/**
 * Componente de lista de produtos
 */
export const ProdutoList: React.FC<ProdutoListProps> = React.memo(({
  produtos,
  isLoading,
  onEdit,
  onDelete,
  onToggleStatus,
  formatPrice
}) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (produtos.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-modamix-dark mb-2">
          Nenhum produto cadastrado
        </h3>
        <p className="text-modamix-dark/70">
          Comece cadastrando seu primeiro produto para aparecer aqui.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className={`bg-white rounded-xl p-4 shadow-sm border transition-all duration-200 ${
            produto.ativo 
              ? 'border-gray-100 hover:shadow-md' 
              : 'border-gray-200 bg-gray-50'
          }`}
        >
          <div className="flex items-start space-x-4">
            {/* Imagem do produto */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                {produto.imagem ? (
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Package className="w-8 h-8 text-gray-400" />
                )}
              </div>
            </div>

            {/* Informações do produto */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className={`font-semibold text-modamix-dark truncate ${
                    !produto.ativo ? 'line-through text-gray-500' : ''
                  }`}>
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-modamix-dark/70 line-clamp-2">
                    {produto.descricao}
                  </p>
                </div>
                
                {/* Status badge */}
                <span className={`ml-2 text-xs font-medium px-2 py-1 rounded-full ${
                  produto.ativo
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {produto.ativo ? 'Ativo' : 'Inativo'}
                </span>
              </div>

              {/* Detalhes do produto */}
              <div className="flex items-center justify-between text-sm">
                <div className="space-y-1">
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-modamix-orange">
                      {formatPrice(produto.preco)}
                    </span>
                    <span className="text-modamix-dark/70">
                      Estoque: {produto.estoque}
                    </span>
                  </div>
                  <div className="text-modamix-dark/60">
                    Categoria: {produto.categoria}
                  </div>
                </div>

                {/* Ações */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onToggleStatus(produto)}
                    className={`p-2 rounded-lg transition-colors ${
                      produto.ativo
                        ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        : 'text-green-600 hover:text-green-700 hover:bg-green-50'
                    }`}
                    title={produto.ativo ? 'Desativar produto' : 'Ativar produto'}
                  >
                    {produto.ativo ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  
                  <button
                    onClick={() => onEdit(produto)}
                    className="p-2 text-modamix-orange hover:text-modamix-dark hover:bg-orange-50 rounded-lg transition-colors"
                    title="Editar produto"
                  >
                    <Edit size={16} />
                  </button>
                  
                  <button
                    onClick={() => onDelete(produto.id)}
                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    title="Deletar produto"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

ProdutoList.displayName = 'ProdutoList'; 