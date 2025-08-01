# ModaMix App & Painel Administrativo

Aplicativo web completo para gestão e participação em feirões ModaMix, com frontend em React + TypeScript e backend (futuro) em Go (Golang).

## ✨ Visão Geral

O ModaMix é um aplicativo web responsivo, pensado para dispositivos móveis e desktop, que oferece:
- Experiência moderna para usuários finais (visitantes, expositores)
- Painel administrativo completo para gestão de feiras, expositores, notificações e relatórios
- Interface fiel ao design, com identidade visual ModaMix (laranja, amarelo, preto)

## 🏗️ Arquitetura

- **Frontend:** React + TypeScript + Tailwind CSS
- **Backend:** Go (Golang) — integração futura via REST API
- **Gerenciamento de rotas:** React Router DOM
- **Ícones:** Lucide React
- **Estrutura baseada em features (feature-based)**
- **Componentização e clean code**

### Estrutura de Pastas (Frontend)
```
src/
  features/
    beneficios/
    feiras/
    notificacoes/
    perfil/
  pages/
    admin/
      Dashboard.tsx
      Reports.tsx
      Feiras.tsx
      FeirasCriar.tsx
      Notificacoes.tsx
      ...
  components/
  hooks/
  ui/
  ...
```

## 🚀 Como rodar o projeto (Frontend)

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o app:
   ```bash
   npm run dev
   ```
3. Acesse:
   - Tela Inicial (Seleção de Perfil): [http://localhost:8080/](http://localhost:8080/)
   - App (Expositor): [http://localhost:8080/app](http://localhost:8080/app)
   - Fornecedor: [http://localhost:8080/fornecedor](http://localhost:8080/fornecedor)
   - Admin: [http://localhost:8080/admin](http://localhost:8080/admin)

## 🔗 Integração com Backend Go (futuro)
- O frontend está pronto para consumir APIs RESTful escritas em Go (Golang)
- Basta substituir os serviços e hooks de mock por chamadas reais à API
- Estrutura de services e types já preparada para integração

## 🧩 Principais Funcionalidades

### Seleção de Perfil
- Tela inicial para escolher entre Administrador, Fornecedor ou Expositor
- Interface intuitiva com cards coloridos e ícones
- Navegação direta para cada área específica

### Usuário (App - Expositor)
- Visualização de feiras e eventos
- Sistema de pontos e benefícios (gamificação)
- Perfil do usuário com opção de trocar perfil
- Notificações (app, e-mail, WhatsApp)
- Acesso rápido a informações, agenda, marcas, FAQ, contato, ingresso e mais
- Navegação mobile-first, responsiva e moderna

### Fornecedor
- Área dedicada para fornecedores (em desenvolvimento)
- Gestão de produtos e vendas
- Participação em feiras
- Benefícios exclusivos

### Administrador (Painel Admin)
- Dashboard com indicadores (feiras, parceiros, expositores, faturamento)
- Relatórios e exportação (PDF, planilha)
- Gestão de feiras: criar, listar, visualizar detalhes
- Gestão de notificações: envio por app, e-mail, WhatsApp
- Cadastro de novas feiras com busca automática de endereço por CEP e mapa dinâmico
- Visualização de espaços reservados e restantes
- Interface fiel ao design, com identidade visual ModaMix
- Navegação separada para admin e usuário

## 🖌️ UI/UX
- Design mobile-first, inspirado em apps modernos
- Cores: laranja, amarelo, preto (identidade ModaMix)
- Componentes com animações, feedback visual e acessibilidade
- Inputs com máscaras (CEP, valor), selects customizados, botões arredondados

## 🔗 Integrações
- **API Brasil Endereço:** busca automática de endereço por CEP
- **Google Maps:** visualização dinâmica do endereço da feira

## 📦 Futuras Integrações
- Backend Go para feiras, expositores, notificações, relatórios
- Autenticação e permissões
- Upload de imagens para feiras

## 👨‍💻 Desenvolvimento
- Estrutura pronta para integração com backend Go
- Mock data facilmente substituível por API real
- Código comentado e modularizado

---

Para dúvidas, sugestões ou contribuições, entre em contato com a equipe ModaMix!
