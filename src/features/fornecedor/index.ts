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

// Componentes UI
export { FornecedorInput } from './ui/FornecedorInput';
export { FornecedorCheckbox } from './ui/FornecedorCheckbox';

// Hooks
export { useFornecedor } from './hooks/useFornecedor';

// Serviços
export { FornecedorService } from './services/fornecedorService';

// Tipos
export type {
  MetodosPagamento,
  FormDataFeira,
  FornecedorState,
  CreateFeiraRequest,
  CreateFeiraResponse
} from './types/fornecedor';

// Configurações
export { FORNECEDOR_CONFIG } from './config/fornecedor.config';
export type { FornecedorConfig } from './config/fornecedor.config'; 