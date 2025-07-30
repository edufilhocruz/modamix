/**
 * Tipos para a feature de Fornecedor
 * Define as interfaces e tipos utilizados em toda a feature
 */

export interface MetodosPagamento {
  dinheiro: boolean;
  credito: boolean;
  debito: boolean;
  pix: boolean;
}

export interface FormDataFeira {
  nomeFeira: string;
  numeroBarracas: string;
  precoBarraca: string;
  metodosPagamento: MetodosPagamento;
}

export interface FornecedorState {
  formData: FormDataFeira;
  isLoading: boolean;
  error: string | null;
}

export interface CreateFeiraRequest {
  nomeFeira: string;
  numeroBarracas: number;
  precoBarraca: number;
  metodosPagamento: MetodosPagamento;
  localizacao?: string;
}

export interface CreateFeiraResponse {
  id: string;
  nomeFeira: string;
  status: 'success' | 'error';
  message: string;
} 