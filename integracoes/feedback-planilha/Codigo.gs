/**
 * Recebe as respostas do "Este capítulo ajudou?" / "Este projeto ajudou?" do Guia Dblocks
 * e grava na planilha "guiadblocks-feedback".
 *
 * Fluxo:
 *  1. Clique em Sim ou Não  -> { id, tipo, pagina, caminho, idioma, resposta }  = nova linha.
 *  2. Motivo do "Não" (opcional) -> { id, motivo } = preenche a coluna "O que faltou" da mesma linha.
 *
 * Nada de dado pessoal: não guardamos IP, e-mail nem nome. O campo de motivo avisa
 * para não escrever dados pessoais.
 *
 * Publicação: veja o README.md desta pasta.
 */

const ABA = 'Respostas';
const CABECALHO = ['Data/hora', 'ID', 'Tipo', 'Página', 'Caminho', 'Idioma', 'Resposta', 'O que faltou', 'Motivo enviado em'];
const COL = { id: 2, resposta: 7, motivo: 8, motivoEm: 9 };

// Proteção simples contra abuso da URL pública.
const LIMITE_POR_MINUTO = 120;
const TAMANHO_MAX_MOTIVO = 1000;

const VALIDOS = {
  id: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
  tipo: /^(capitulo|projeto)$/,
  pagina: /^[a-z0-9-]{1,80}$/,
  caminho: /^\/[a-z0-9/-]{0,120}$/,
  idioma: /^(pt|en|es)$/,
  resposta: /^(sim|nao)$/,
};

function doPost(e) {
  try {
    const dados = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!dentroDoLimite()) return resposta({ ok: false, erro: 'limite' });
    if (!VALIDOS.id.test(String(dados.id || ''))) return resposta({ ok: false, erro: 'id' });

    const trava = LockService.getScriptLock();
    trava.waitLock(10000);
    try {
      const aba = abaDeRespostas();
      if (dados.motivo !== undefined) return resposta(gravarMotivo(aba, dados));
      return resposta(gravarResposta(aba, dados));
    } finally {
      trava.releaseLock();
    }
  } catch (erro) {
    return resposta({ ok: false, erro: String((erro && erro.message) || erro) });
  }
}

// Abrir a URL no navegador mostra só isto (útil para testar se a publicação deu certo).
function doGet() {
  return resposta({ ok: true, servico: 'guia-dblocks-feedback' });
}

function gravarResposta(aba, dados) {
  for (const campo of ['tipo', 'pagina', 'caminho', 'idioma', 'resposta']) {
    if (!VALIDOS[campo].test(String(dados[campo] || ''))) return { ok: false, erro: campo };
  }
  // A mesma resposta pode chegar duas vezes (reenvio do navegador): grava uma só.
  if (linhaDoId(aba, dados.id)) return { ok: true, repetido: true };
  aba.appendRow([new Date(), dados.id, dados.tipo, dados.pagina, dados.caminho, dados.idioma, dados.resposta, '', '']);
  return { ok: true };
}

function gravarMotivo(aba, dados) {
  const motivo = String(dados.motivo || '').trim().slice(0, TAMANHO_MAX_MOTIVO);
  if (!motivo) return { ok: false, erro: 'motivo' };
  const linha = linhaDoId(aba, dados.id);
  if (!linha) return { ok: false, erro: 'id-desconhecido' };
  // Só aceita motivo em resposta "nao" e só uma vez, para ninguém sobrescrever motivos alheios.
  if (aba.getRange(linha, COL.resposta).getValue() !== 'nao') return { ok: false, erro: 'nao-e-nao' };
  if (aba.getRange(linha, COL.motivo).getValue() !== '') return { ok: true, repetido: true };
  aba.getRange(linha, COL.motivo, 1, 2).setValues([[semFormula(motivo), new Date()]]);
  return { ok: true };
}

function abaDeRespostas() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  let aba = planilha.getSheetByName(ABA);
  if (!aba) {
    aba = planilha.insertSheet(ABA);
    aba.appendRow(CABECALHO);
    aba.setFrozenRows(1);
    aba.getRange(1, 1, 1, CABECALHO.length).setFontWeight('bold');
    aba.setColumnWidth(COL.motivo, 420);
  }
  return aba;
}

function linhaDoId(aba, id) {
  const achado = aba.getRange(2, COL.id, Math.max(aba.getLastRow() - 1, 1), 1)
    .createTextFinder(id).matchEntireCell(true).findNext();
  return achado ? achado.getRow() : 0;
}

// Texto livre começando com = + - @ viraria fórmula na planilha.
function semFormula(texto) {
  return /^[=+\-@]/.test(texto) ? "'" + texto : texto;
}

function dentroDoLimite() {
  const cache = CacheService.getScriptCache();
  const chave = 'min:' + Math.floor(Date.now() / 60000);
  const total = Number(cache.get(chave) || 0) + 1;
  cache.put(chave, String(total), 120);
  return total <= LIMITE_POR_MINUTO;
}

function resposta(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto)).setMimeType(ContentService.MimeType.JSON);
}

/** Rode uma vez pelo editor (botão Executar) para criar a aba e autorizar o script. */
function configurar() {
  abaDeRespostas();
}
