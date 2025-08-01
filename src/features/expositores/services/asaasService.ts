// Configuração da API do Asaas
const ASAAS_API_URL = process.env.REACT_APP_ASAAS_API_URL || 'https://sandbox.asaas.com/api/v3';
const ASAAS_API_KEY = process.env.REACT_APP_ASAAS_API_KEY || '';

export interface AsaasPixResponse {
  id: string;
  dateCreated: string;
  customer: string;
  paymentLink: string;
  value: number;
  netValue: number;
  originalValue: number;
  interestValue: number;
  description: string;
  billingType: string;
  pixTransaction: {
    id: string;
    qrCode: string;
    qrCodeText: string;
    endToEndIdentifier: string;
  };
  status: string;
  dueDate: string;
  originalDueDate: string;
  paymentDate: string;
  clientPaymentDate: string;
  installmentNumber: number;
  invoiceUrl: string;
  bankSlipUrl: string;
  transactionReceiptUrl: string;
  discount: {
    value: number;
    dueDateLimitDays: number;
    type: string;
  };
  fine: {
    value: number;
  };
  interest: {
    value: number;
  };
  postalService: boolean;
  split: any[];
}

export interface AsaasCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  mobilePhone: string;
  address: string;
  addressNumber: string;
  complement: string;
  province: string;
  postalCode: string;
  cpfCnpj: string;
  personType: string;
  deleted: boolean;
  additionalEmails: string;
  externalReference: string;
  notificationDisabled: boolean;
  observations: string;
}

export interface AsaasPaymentRequest {
  customer: string;
  billingType: 'PIX';
  value: number;
  dueDate: string;
  description: string;
  externalReference?: string;
  discount?: {
    value: number;
    dueDateLimitDays: number;
  };
  fine?: {
    value: number;
  };
  interest?: {
    value: number;
  };
  postalService?: boolean;
}

export interface AsaasCustomerRequest {
  name: string;
  email: string;
  phone: string;
  mobilePhone: string;
  cpfCnpj: string;
  postalCode: string;
  address: string;
  addressNumber: string;
  complement: string;
  province: string;
  personType: 'FISICA' | 'JURIDICA';
  externalReference?: string;
  notificationDisabled?: boolean;
  observations?: string;
}

// Função para criar cliente no Asaas
export const createAsaasCustomer = async (customerData: AsaasCustomerRequest): Promise<AsaasCustomer> => {
  try {
    const response = await fetch(`${ASAAS_API_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': ASAAS_API_KEY
      },
      body: JSON.stringify(customerData)
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar cliente: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na criação do cliente Asaas:', error);
    throw error;
  }
};

// Função para criar pagamento PIX no Asaas
export const createAsaasPixPayment = async (paymentData: AsaasPaymentRequest): Promise<AsaasPixResponse> => {
  try {
    const response = await fetch(`${ASAAS_API_URL}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': ASAAS_API_KEY
      },
      body: JSON.stringify(paymentData)
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar pagamento: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na criação do pagamento Asaas:', error);
    throw error;
  }
};

// Função para consultar status do pagamento
export const getAsaasPaymentStatus = async (paymentId: string): Promise<AsaasPixResponse> => {
  try {
    const response = await fetch(`${ASAAS_API_URL}/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'access_token': ASAAS_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Erro ao consultar pagamento: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na consulta do pagamento Asaas:', error);
    throw error;
  }
};

// Função para cancelar pagamento
export const cancelAsaasPayment = async (paymentId: string): Promise<void> => {
  try {
    const response = await fetch(`${ASAAS_API_URL}/payments/${paymentId}/cancel`, {
      method: 'POST',
      headers: {
        'access_token': ASAAS_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Erro ao cancelar pagamento: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro no cancelamento do pagamento Asaas:', error);
    throw error;
  }
};

// Função para gerar QR Code PIX
export const generatePixQRCode = async (qrCodeText: string): Promise<string> => {
  try {
    // Aqui você pode usar uma API para gerar QR Code ou uma biblioteca local
    // Por enquanto, retornamos uma URL de API externa
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCodeText)}`;
    return qrCodeUrl;
  } catch (error) {
    console.error('Erro ao gerar QR Code:', error);
    throw error;
  }
};

// Função para formatar data para o formato do Asaas (YYYY-MM-DD)
export const formatDateForAsaas = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Função para calcular data de vencimento (30 minutos a partir de agora)
export const calculateDueDate = (): string => {
  const dueDate = new Date();
  dueDate.setMinutes(dueDate.getMinutes() + 30);
  return formatDateForAsaas(dueDate);
}; 