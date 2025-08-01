/**
 * Feature Fornecedor - Arquivo de índice
 * Centraliza todas as exportações da feature para facilitar importações
 */

// Páginas
export { default as FornecedorPage } from './pages/Fornecedor';

// Componentes
export { FornecedorHeader } from './components/FornecedorHeader';
export { FornecedorForm } from './components/FornecedorForm';
export { FornecedorContent } from './components/FornecedorContent';
export { FornecedorFooter } from './components/FornecedorFooter';
export { FornecedorNavbar } from './components/FornecedorNavbar';
export { ProdutoList } from './components/ProdutoList';
export { ProdutoForm } from './components/ProdutoForm';
export { ProdutoFilters } from './components/ProdutoFilters';

// Componentes UI
export { FornecedorInput } from './ui/FornecedorInput';
export { FornecedorCheckbox } from './ui/FornecedorCheckbox';

// Hooks
export { useFornecedor } from './hooks/useFornecedor';
export { useProdutos } from './hooks/useProdutos';

// Serviços
export { FornecedorService } from './services/fornecedorService';
export * from './services/produtoService';

// Tipos
export type {
  MetodosPagamento,
  FormDataFeira,
  FornecedorState,
  CreateFeiraRequest,
  CreateFeiraResponse,
  Produto,
  FormDataProduto,
  CreateProdutoRequest,
  CreateProdutoResponse,
  Categoria,
  Fornecedor
} from './types/fornecedor';

// Configurações
export { FORNECEDOR_CONFIG } from './config/fornecedor.config';
export type { FornecedorConfig } from './config/fornecedor.config'; 