// Envio das respostas do "ajudou?" para a planilha (Apps Script em integracoes/feedback-planilha).
// Sem VITE_FEEDBACK_URL no build, nada é enviado (ex.: desenvolvimento local).
const url = import.meta.env.VITE_FEEDBACK_URL as string | undefined;

export type RespostaFeedback = {
  id: string;
  tipo: 'capitulo' | 'projeto';
  pagina: string;
  caminho: string;
  idioma: string;
  resposta: 'sim' | 'nao';
};

// O Apps Script não responde à verificação CORS do navegador: text/plain + no-cors evita a
// verificação, e keepalive garante o envio mesmo se a pessoa sair da página logo depois.
function enviar(dados: object) {
  if (!url) return;
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(dados),
  }).catch(() => {
    /* sem rede: a resposta só não é registrada */
  });
}

export const enviarResposta = (dados: RespostaFeedback) => enviar(dados);
export const enviarMotivo = (id: string, motivo: string) => enviar({ id, motivo });

export function novoId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  // Navegadores antigos: UUID v4 com Math.random (suficiente para identificar a linha).
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}
