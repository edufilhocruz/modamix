// Pages
export { default as Expositores } from './pages/Expositores';

// Components
export { ExpositoresContent } from './components/ExpositoresContent';
export { ExpositoresNavbar } from './components/ExpositoresNavbar';
export { FornecedorList } from './components/FornecedorList';
export { ProdutoList } from './components/ProdutoList';
export { ProdutoFilters } from './components/ProdutoFilters';
export { PedidosList } from './components/PedidosList';
export { PedidosFilters } from './components/PedidosFilters';
export { ReservasList } from './components/ReservasList';
export { ReservasFilters } from './components/ReservasFilters';
export { default as FeirasFuturas } from './components/FeirasFuturas';
export { CarrinhoModal } from './components/CarrinhoModal';
export { ProductCard } from './components/ProductCard';
export { default as ProductGrid } from './components/ProductGrid';
export { SimpleSearch } from './components/SimpleSearch';

// Hooks
export { useExpositores } from './hooks/useExpositores';

// Services
export * from './services/expositoresService';

// Types
export type {
  Fornecedor,
  Produto,
  ItemCarrinho,
  Carrinho,
  Pedido,
  FiltrosProdutos,
  Expositor,
  ReservaEspaco
} from './types/expositores'; 