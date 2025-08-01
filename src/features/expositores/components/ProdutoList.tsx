import React from 'react';
import { Package } from 'lucide-react';
import { Produto } from '../types/expositores';
import Grid from './ProductGrid';
import { ProductCard } from './ProductCard';

interface ProdutoListProps {
  produtos: Produto[];
  isLoading: boolean;
  onAddToCart: (produtoId: string, quantidade: number) => void;
  formatPrice: (price: number) => string;
}

export const ProdutoList: React.FC<ProdutoListProps> = React.memo(({
  produtos,
  isLoading,
  onAddToCart,
  formatPrice
}) => {
  if (isLoading) {
    return (
      <Grid>
        {[...Array(8)].map((_, index) => (
          <Grid.Item key={index}>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
              <div className="aspect-square bg-gray-200"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </Grid.Item>
        ))}
      </Grid>
    );
  }

  if (produtos.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">Nenhum produto encontrado</h3>
        <p className="text-gray-500">Tente ajustar os filtros ou selecionar outro fornecedor.</p>
      </div>
    );
  }

  return (
    <Grid>
      {produtos.map((produto) => (
        <Grid.Item key={produto.id}>
          <ProductCard
            produto={produto}
            onAddToCart={onAddToCart}
            formatPrice={formatPrice}
          />
        </Grid.Item>
      ))}
    </Grid>
  );
});

ProdutoList.displayName = 'ProdutoList'; 