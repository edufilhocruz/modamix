/**
 * Configurações da feature Fornecedor
 * Centraliza constantes, configurações e valores padrão
 */

export const FORNECEDOR_CONFIG = {
  // Configurações de API
  API: {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
    ENDPOINTS: {
      CREATE_FEIRA: '/feiras',
      GET_FEIRAS: '/feiras',
      UPDATE_FEIRA: '/feiras/:id',
      DELETE_FEIRA: '/feiras/:id'
    },
    TIMEOUT: 10000 // 10 segundos
  },

  // Configurações de validação
  VALIDATION: {
    MIN_BARRACAS: 1,
    MAX_BARRACAS: 1000,
    MIN_PRECO: 0.01,
    MAX_PRECO: 10000,
    MIN_NOME_LENGTH: 3,
    MAX_NOME_LENGTH: 100
  },

  // Configurações de UI
  UI: {
    LOADING_DELAY: 1000, // Delay para simular carregamento
    ERROR_DISPLAY_TIME: 5000, // Tempo para exibir erros
    SUCCESS_MESSAGE_TIME: 3000 // Tempo para exibir mensagens de sucesso
  },

  // Configurações de formatação
  FORMAT: {
    CURRENCY: {
      LOCALE: 'pt-BR',
      CURRENCY: 'BRL',
      MINIMUM_FRACTION_DIGITS: 2,
      MAXIMUM_FRACTION_DIGITS: 2
    },
    DATE: {
      LOCALE: 'pt-BR',
      OPTIONS: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }
    }
  },

  // Configurações de mapa
  MAP: {
    DEFAULT_IMAGE_URL: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH5AOWlidLcF_Qosifc-Oz0iYUkIy--3qY_cnN7iIeBGYhkZJuQdvdSUVMhY3C66duB8Z4_stb6qT8SKzjbmSyEVj54qqbI5145qi8yzJRlurlteZz_Y-i7G-BS28Z6boGDr5Ta_29-dSKTsbkbpqxMuc6rpiPLFdcvJeAdemhhu04Wklc3yuSfYlNQ6pViKe_sxJA4UIosaEs2uc1I6yh0YV-asYWHPVjIxzfW_jhIWdmVenUtNegC74pdW6tweKh1mEnKFiY0n4',
    ASPECT_RATIO: '16/9'
  },

  // Mensagens de erro
  ERROR_MESSAGES: {
    REQUIRED_FIELDS: 'Por favor, preencha todos os campos obrigatórios.',
    INVALID_BARRACAS: 'Número de barracas deve ser entre 1 e 1000.',
    INVALID_PRECO: 'Preço deve ser maior que zero.',
    INVALID_NOME: 'Nome da feira deve ter entre 3 e 100 caracteres.',
    PAYMENT_METHOD_REQUIRED: 'Selecione pelo menos um método de pagamento.',
    NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
    UNKNOWN_ERROR: 'Erro inesperado. Tente novamente.'
  },

  // Mensagens de sucesso
  SUCCESS_MESSAGES: {
    FEIRA_CREATED: 'Feira criada com sucesso!',
    FEIRA_UPDATED: 'Feira atualizada com sucesso!',
    FEIRA_DELETED: 'Feira removida com sucesso!'
  }
} as const;

/**
 * Tipos derivados das configurações
 */
export type FornecedorConfig = typeof FORNECEDOR_CONFIG; 