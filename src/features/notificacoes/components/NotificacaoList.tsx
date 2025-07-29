import React from "react";
import { NotificacaoItem } from "./NotificacaoItem";

// Mock de notificações por categoria
const notificacoes = [
  { title: "Seu pedido foi recebido", date: "12 de maio", category: "Alerta" },
  { title: "Seu pedido foi enviado", date: "10 de maio", category: "Alerta" },
  { title: "Seu pedido foi entregue", date: "08 de maio", category: "Alerta" },
  { title: "Seu pedido foi recebido", date: "06 de maio", category: "Lembrete" },
  { title: "Seu pedido foi enviado", date: "04 de maio", category: "Pagamento" },
  { title: "Seu pedido foi entregue", date: "02 de maio", category: "Documentos" },
];

/**
 * Lista de notificações filtrada pela categoria ativa.
 */
export const NotificacaoList = React.memo(({ active }: { active: string }) => (
  <div>
    {notificacoes.filter(n => n.category === active).map((n, i) => (
      <NotificacaoItem key={i} title={n.title} date={n.date} />
    ))}
  </div>
)); 