import type { TextoRico } from '../tipos';

export type BlocoLegal =
  | { tipo: 'paragrafo'; texto: TextoRico }
  /** Parágrafo inteiro em negrito, usado como subtítulo curto. */
  | { tipo: 'forte'; texto: string }
  | { tipo: 'lista'; itens: TextoRico[] }
  /** `colunas`: larguras do Figma (px), usadas como proporção. A primeira coluna é o rótulo da linha. */
  | { tipo: 'tabela'; colunas: number[]; cabecalho: string[]; linhas: TextoRico[][] }
  | { tipo: 'aviso'; texto: TextoRico };

export type DocumentoLegal = {
  titulo: string;
  descricao: string;
  atualizadoEm: string;
  secoes: {
    id: string;
    titulo: string;
    /** Rótulo curto no sumário "Nesta página". */
    menu: string;
    blocos: BlocoLegal[];
  }[];
};
