import type { Recurso } from '../config/recursos';
import type { IconName } from '../components/Icon/Icon';

/**
 * Texto com marcação mínima, para ficar fácil de traduzir:
 *   **negrito**   [texto do link](url ou /rota)   `código`
 */
export type TextoRico = string;

export type Imagem = {
  src: string;
  alt: string;
  /** Tamanho da caixa no Figma (px). A imagem preenche a caixa com object-fit: cover. */
  largura: number;
  altura: number;
  /** Quando o print aparece recortado no Figma: posição/tamanho da imagem em % da caixa. */
  recorte?: { x: number; y: number; largura: number; altura: number };
};

/** Marca um bloco ou item que depende de um recurso que pode estar oculto (ver src/config/recursos.ts). */
export type MarcaRecurso = {
  /** Só aparece com o recurso publicado. */
  recurso?: Recurso;
  /** Só aparece enquanto o recurso NÃO está publicado (texto alternativo). */
  semRecurso?: Recurso;
};

export type Bloco = MarcaRecurso & (
  /** `menor`: 16px/26px, usado ao lado de prints. */
  | { tipo: 'paragrafo'; texto: TextoRico; menor?: boolean }
  /** `topo`: espaço extra acima (px), quando o Figma afasta a figura do cabeçalho. */
  | {
      tipo: 'figura';
      imagem: Imagem;
      legenda?: TextoRico;
      tamanho?: 'normal' | 'pequena';
      semSombra?: boolean;
      topo?: number;
    }
  /** `enfase`: corpo em semibold com entrelinha normal (aviso curto, sem parágrafo). */
  | {
      tipo: 'destaque';
      variante: 'info' | 'dica' | 'aviso';
      icone: IconName;
      titulo: string;
      texto: TextoRico;
      enfase?: boolean;
    }
  | { tipo: 'cardsAbas'; itens: (MarcaRecurso & { imagem: Imagem; titulo: string; texto: TextoRico; capitulo: number })[] }
  | { tipo: 'chipsAbas'; rotulo: string; itens: (MarcaRecurso & { nome: string; capitulo: number })[] }
  | { tipo: 'requisitos'; itens: { icone?: IconName; titulo: string; texto: TextoRico }[] }
  /** `inicio`: número do primeiro passo, quando a lista continua depois de um print. */
  | { tipo: 'passos'; itens: Passo[]; inicio?: number; /** Projetos: 6px entre título e texto. */ montagem?: boolean }
  /** Figuras lado a lado, cada uma com legenda opcional. */
  | { tipo: 'figuras'; itens: { imagem: Imagem; legenda?: TextoRico }[]; semSombra?: boolean; gap?: number }
  /** Print à esquerda e, ao lado, itens com uma borda colorida (ex.: painel de perfil). */
  | { tipo: 'figuraComItens'; imagem: Imagem; itens: { cor: string; titulo: string; texto: TextoRico }[] }
  /** Print com marcadores numerados por cima (posição em px dentro da imagem). */
  | { tipo: 'figuraAnotada'; imagem: Imagem; marcadores: { x: number; y: number }[]; legenda?: TextoRico }
  /** Lista com borda e marcadores numerados (explica os números de uma figura anotada). */
  | { tipo: 'listaNumerada'; itens: ItemTexto[] }
  /** Print e, ao lado, uma lista de nomes com explicação. */
  | {
      tipo: 'figuraComLista';
      imagem: Imagem;
      itens: ItemTexto[];
      centralizar?: boolean;
      semSombra?: boolean;
      layout?: LayoutLista;
    }
  /** Print sem sombra e, ao lado (gap 32), outros blocos ocupando o resto da largura. */
  | { tipo: 'figuraAoLado'; imagem: Imagem; blocos: Bloco[]; gap?: number }
  /** Print estreito e, ao lado, uma tabela de nome × descrição. */
  | { tipo: 'figuraComTabela'; imagem: Imagem; itens: ItemTexto[] }
  /** Link solto. `recuado` alinha com o texto dos passos numerados. */
  | { tipo: 'link'; texto: string; href: string; recuado?: boolean }
  /** Cards com um print pequeno e a explicação ao lado (ex.: estados da barra). */
  | { tipo: 'estados'; itens: (ItemTexto & { imagem: Imagem })[] }
  /** Tabela com borda: nome à esquerda (largura fixa) e explicação à direita. */
  | { tipo: 'tabela'; itens: ItemTexto[]; larguraNome?: number; respiro?: number }
  /** Onde achar um bloco: "Controle › Laços › repita enquanto" (o último fica destacado). */
  | { tipo: 'caminho'; itens: string[] }
  /** Cards cinza com sugestões para praticar. */
  | { tipo: 'desafios'; itens: ItemTexto[] }
  /** Grade de prints, cada um com título e explicação (ex.: tipos de valores). */
  | { tipo: 'galeria'; itens: (ItemTexto & { imagem: Imagem })[] }
  /** Card com borda que agrupa um exemplo: título, explicação e blocos. */
  | { tipo: 'exemplo'; titulo: string; texto?: TextoRico; blocos: Bloco[]; compacto?: boolean }
  /** Print dos blocos e, ao lado, o que aparece no Console. */
  | { tipo: 'blocosEConsole'; imagem: Imagem; console: Imagem; rotulo?: string }
  /** Só o print do Console, com o rótulo "No Console:". */
  | { tipo: 'console'; imagem: Imagem; rotulo?: string }
  /** Caixa cinza "O que esse programa faz?" com uma linha por passo. */
  | { tipo: 'explicacao'; titulo: string; itens: TextoRico[]; variante?: 'montagem'; blocos?: Bloco[] }
  /** Texto menor de fechamento, usado dentro de exemplos. */
  | { tipo: 'nota'; texto: TextoRico }
  /** Tabela com borda de símbolo × significado (ex.: =, ≠, <; e, ou, não). */
  | { tipo: 'simbolos'; itens: { simbolo: string; texto: TextoRico }[]; tamanho?: 'grande' | 'medio' }
  /** Passos numerados com um print ao lado. */
  | { tipo: 'passosComFigura'; itens: Passo[]; imagem: Imagem; semSombra?: boolean; entrePassos?: number }
  /** Tabela bloco × código MicroPython × explicação. */
  | { tipo: 'blocoECodigo'; itens: { bloco: string; codigo: string; texto: TextoRico }[] }
  /** Subtítulo dentro de uma seção (20px). */
  /** `altura`: line-height em px quando o Figma não usa o normal. */
  | { tipo: 'subtitulo'; texto: string; grande?: boolean; altura?: number }
  /** Título, parágrafos e um print ao lado. */
  | { tipo: 'textoComFigura'; titulo: string; paragrafos: TextoRico[]; imagem: Imagem }
  /** Print pequeno e, ao lado, um título com uma tabela compacta (ex.: ligações de um módulo). */
  | { tipo: 'figuraComLigacoes'; imagem: Imagem; titulo: string; itens: ItemTexto[] }
  /** Print dos blocos e, ao lado, uma ilustração da telinha OLED (x/y em px do Figma, 256×128). */
  /** Janela de navegador desenhada (barra com a URL) com o print da página dentro. */
  /** Print ao lado de uma lista com borda, cada item marcado por uma faixa colorida. */
  | { tipo: 'figuraComFaixas'; imagem: Imagem; itens: { cor: string; titulo: string; texto: TextoRico }[] }
  /** Projetos: cards dos capítulos usados, com o que o projeto aproveita de cada um. */
  | { tipo: 'capitulosUsados'; itens: { capitulo: number; texto: TextoRico }[] }
  /** Projetos: materiais necessários, em caixas de duas colunas. */
  | { tipo: 'materiais'; itens: { titulo: string; texto?: TextoRico }[] }
  /** Projetos: print dos blocos numa moldura e, ao lado, o passo a passo com o capítulo de cada linha. */
  | {
      tipo: 'programa';
      imagem: Imagem;
      titulo: string;
      linhas: { texto: TextoRico; capitulo: number }[];
      /** Print largo: a explicação vai embaixo em vez de ao lado. */
      empilhado?: boolean;
    }
  | { tipo: 'navegador'; url: string; imagem: Imagem; legenda?: TextoRico }
  /** Endereço ou trecho de código em fonte mono, numa caixa cinza. */
  | { tipo: 'endereco'; texto: string }
  | { tipo: 'blocosEOled'; imagem: Imagem; linhas: { texto: string; x: number; y: number }[] }
);

/** Espaçamentos (px) do bloco figuraComLista, que variam um pouco entre as telas do Figma. */
export type LayoutLista = {
  colunas?: number;
  itens?: number;
  topo?: number;
  titulo?: number;
  entreTitulo?: number;
  linhaTexto?: number;
};

export type ItemTexto = MarcaRecurso & { titulo: string; texto: TextoRico };

export type Passo = {
  titulo: string;
  texto?: TextoRico;
  /** Projetos: "Aprenda mais no [Capítulo NN]". */
  capitulo?: number;
  blocos?: Bloco[];
};

export type Secao = {
  /** Âncora usada no "Nesta página". */
  id: string;
  titulo: string;
  /** Rótulo acima do título, como "PASSO 1" (deixa a seção mais compacta). */
  etapa?: string;
  /** Título curto para o "Nesta página", quando diferente. */
  tituloMenu?: string;
  blocos: Bloco[];
};

export type ConteudoCapitulo = {
  /** Título do cabeçalho, quando difere do nome do capítulo no catálogo. */
  titulo?: string;
  /** Selo do cabeçalho, quando a página difere do card da home. */
  selo?: 'Novo' | 'Atualizado' | null;
  /** Subtítulo do cabeçalho. */
  descricao: string;
  atualizadoEm: string;
  /** Bloco antes da primeira seção (normalmente uma figura). */
  abertura?: Bloco;
  secoes: Secao[];
};
