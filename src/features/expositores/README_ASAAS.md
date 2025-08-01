# Integração com Asaas - Pagamentos PIX

Este documento explica como configurar e usar a integração com a API do Asaas para processar pagamentos PIX na funcionalidade de expositores.

## Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Asaas API Configuration
REACT_APP_ASAAS_API_URL=https://sandbox.asaas.com/api/v3
REACT_APP_ASAAS_API_KEY=sua_chave_api_aqui
```

### 2. Obter Credenciais do Asaas

1. Acesse [https://www.asaas.com](https://www.asaas.com)
2. Crie uma conta ou faça login
3. Vá para **Configurações > API**
4. Copie sua **API Key**
5. Para testes, use o ambiente **Sandbox**
6. Para produção, use o ambiente **Production**

## Funcionalidades Implementadas

### 1. Criação de Cliente
- `createAsaasCustomer()` - Cria um novo cliente no Asaas
- Dados necessários: nome, email, telefone, CPF, endereço

### 2. Criação de Pagamento PIX
- `createAsaasPixPayment()` - Cria um pagamento PIX
- Retorna QR Code e código PIX para pagamento

### 3. Consulta de Status
- `getAsaasPaymentStatus()` - Consulta o status do pagamento
- Útil para verificar se o pagamento foi confirmado

### 4. Cancelamento
- `cancelAsaasPayment()` - Cancela um pagamento pendente

## Fluxo de Pagamento

### 1. Adicionar ao Carrinho
```typescript
// Adicionar produto
handleAdicionarAoCarrinho(produtoId, quantidade);

// Adicionar espaço de feira
handleAdicionarEspacoAoCarrinho(feiraId, quantidade);
```

### 2. Finalizar Compra
```typescript
// Abrir modal de checkout
handleCheckout();

// Processar pagamento
const pagamento = await finalizarCheckout(checkoutData);
```

### 3. Pagamento PIX
- Usuário escaneia QR Code ou copia código PIX
- Pagamento é processado pelo banco
- Status é atualizado automaticamente

## Estrutura de Dados

### CheckoutData
```typescript
interface CheckoutData {
  expositoresId: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  metodoPagamento: 'pix';
  observacoes?: string;
  valor: number;
}
```

### PagamentoPIX
```typescript
interface PagamentoPIX {
  id: string;
  qrCode: string;
  qrCodeText: string;
  valor: number;
  expiracao: Date;
  status: 'pendente' | 'pago' | 'expirado';
}
```

## Implementação Real vs Simulação

### Atual (Simulação)
- Usa dados mockados para desenvolvimento
- Não faz chamadas reais para a API do Asaas
- Útil para testes e desenvolvimento

### Produção (Real)
- Descomente o código no arquivo `expositoresService.ts`
- Configure as variáveis de ambiente
- Implemente tratamento de erros adequado

## Webhooks (Opcional)

Para receber notificações automáticas de pagamento:

1. Configure webhook no painel do Asaas
2. URL: `https://seu-dominio.com/api/webhooks/asaas`
3. Eventos: `PAYMENT_RECEIVED`, `PAYMENT_OVERDUE`, `PAYMENT_DELETED`

## Tratamento de Erros

### Erros Comuns
- **401 Unauthorized**: API Key inválida
- **400 Bad Request**: Dados inválidos
- **404 Not Found**: Cliente ou pagamento não encontrado
- **429 Too Many Requests**: Limite de requisições excedido

### Implementação
```typescript
try {
  const pagamento = await finalizarCheckout(checkoutData);
  // Sucesso
} catch (error) {
  if (error.message.includes('401')) {
    // API Key inválida
  } else if (error.message.includes('400')) {
    // Dados inválidos
  } else {
    // Erro genérico
  }
}
```

## Testes

### Ambiente Sandbox
- Use dados de teste
- Pagamentos não são reais
- Útil para desenvolvimento

### Ambiente Production
- Use dados reais
- Pagamentos são processados
- Use apenas após testes completos

## Segurança

### Boas Práticas
1. Nunca exponha a API Key no frontend
2. Use HTTPS em produção
3. Valide todos os dados de entrada
4. Implemente rate limiting
5. Monitore logs de erro

### Configuração Segura
```typescript
// ✅ Correto - Variável de ambiente
const API_KEY = process.env.REACT_APP_ASAAS_API_KEY;

// ❌ Incorreto - Hardcoded
const API_KEY = 'sua_chave_aqui';
```

## Monitoramento

### Logs Importantes
- Criação de clientes
- Criação de pagamentos
- Confirmação de pagamentos
- Erros de API

### Métricas
- Taxa de conversão
- Tempo médio de pagamento
- Taxa de erro
- Volume de transações

## Suporte

Para dúvidas sobre a integração:
- [Documentação Asaas](https://docs.asaas.com/)
- [Suporte Asaas](https://www.asaas.com/suporte)
- [API Reference](https://docs.asaas.com/reference) 