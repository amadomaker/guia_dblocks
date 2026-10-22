import { publicado } from '../config/recursos';
import type { IconName } from '../components/Icon/Icon';
import type { Idioma } from '../i18n/idiomas';
import { dicionarios } from '../i18n/textos';

/** Categoria de blocos: define a cor do capítulo (página "Proposta cores blocos" no Figma). */
export type Categoria =
  | 'marca'
  | 'variaveis'
  | 'controle'
  | 'logica'
  | 'funcoes'
  | 'codigo'
  | 'placa'
  | 'visao'
  | 'bluetooth'
  | 'internet';

export type Nivel = 'Iniciante' | 'Intermediário' | 'Avançado';
export type Selo = 'Novo' | 'Atualizado';

type BaseCapitulo = {
  numero: number;
  slug: string;
  icone: IconName;
  categoria: Categoria;
  minutos: number;
  nivel: Nivel;
  selo?: Selo;
};

type BaseTrilha = {
  numero: number;
  slug: string;
  icone: IconName;
  categoria: Categoria;
  capitulos: BaseCapitulo[];
};

export type Capitulo = BaseCapitulo & { titulo: string; resumo: string; /** Usado no link "Próximo". */ tituloCurto?: string };
export type Trilha = Omit<BaseTrilha, 'capitulos'> & { titulo: string; resumo: string; duracao: string; capitulos: Capitulo[] };

export const corDaCategoria = (c: Categoria) => `var(--cat-${c})`;
export const capaDaCategoria = (c: Categoria) => `var(--cat-${c}-capa)`;
export const numeroDoCapitulo = (n: number) => String(n).padStart(2, '0');
export const rotaDoCapitulo = (c: Pick<Capitulo, 'slug'>) => `/capitulos/${c.slug}`;

const estrutura: BaseTrilha[] = [
  {
    numero: 1,
    slug: 'primeiros-passos',
    icone: 'rocket',
    categoria: 'marca',
    capitulos: [
      { numero: 1, slug: 'o-que-e-o-dblocks', icone: 'rocket', categoria: 'marca', minutos: 5, nivel: 'Iniciante', selo: 'Atualizado' },
      { numero: 2, slug: 'sua-conta-e-seu-perfil', icone: 'user', categoria: 'marca', minutos: 4, nivel: 'Iniciante', selo: 'Novo' },
      { numero: 3, slug: 'conhecendo-a-interface', icone: 'layout', categoria: 'marca', minutos: 8, nivel: 'Iniciante', selo: 'Novo' },
      { numero: 4, slug: 'conhecendo-a-amadoboard', icone: 'cpu', categoria: 'marca', minutos: 10, nivel: 'Iniciante', selo: 'Novo' },
      { numero: 5, slug: 'conectando-a-placa', icone: 'plug', categoria: 'marca', minutos: 7, nivel: 'Iniciante', selo: 'Atualizado' },
      { numero: 6, slug: 'seu-primeiro-programa', icone: 'play', categoria: 'marca', minutos: 10, nivel: 'Iniciante', selo: 'Atualizado' },
    ],
  },
  {
    numero: 2,
    slug: 'programacao-em-blocos',
    icone: 'repeat',
    categoria: 'controle',
    capitulos: [
      { numero: 7, slug: 'variaveis-e-valores', icone: 'braces', categoria: 'variaveis', minutos: 9, nivel: 'Iniciante', selo: 'Atualizado' },
      { numero: 8, slug: 'lacos-e-tempo', icone: 'repeat', categoria: 'controle', minutos: 10, nivel: 'Iniciante', selo: 'Atualizado' },
      { numero: 9, slug: 'matematica-e-logica', icone: 'calculator', categoria: 'logica', minutos: 10, nivel: 'Iniciante' },
      { numero: 10, slug: 'funcoes-e-texto', icone: 'func', categoria: 'funcoes', minutos: 12, nivel: 'Intermediário', selo: 'Novo' },
      { numero: 11, slug: 'do-bloco-ao-python', icone: 'code', categoria: 'codigo', minutos: 8, nivel: 'Intermediário', selo: 'Novo' },
    ],
  },
  {
    numero: 3,
    slug: 'amadoboard-e-eletronica',
    icone: 'cpu',
    categoria: 'placa',
    capitulos: [
      { numero: 12, slug: 'explorando-a-placa-em-3d', icone: 'cube', categoria: 'placa', minutos: 10, nivel: 'Iniciante', selo: 'Atualizado' },
      { numero: 13, slug: 'entradas-e-saidas-digitais', icone: 'toggle', categoria: 'placa', minutos: 12, nivel: 'Iniciante' },
      { numero: 14, slug: 'entradas-e-saidas-analogicas', icone: 'wave', categoria: 'placa', minutos: 12, nivel: 'Intermediário' },
      { numero: 15, slug: 'sensores', icone: 'thermo', categoria: 'placa', minutos: 15, nivel: 'Intermediário' },
      { numero: 16, slug: 'atuadores-e-motores', icone: 'cog', categoria: 'placa', minutos: 15, nivel: 'Intermediário' },
      { numero: 17, slug: 'musica-com-o-buzzer', icone: 'music', categoria: 'placa', minutos: 10, nivel: 'Iniciante' },
      { numero: 18, slug: 'displays', icone: 'monitor', categoria: 'placa', minutos: 12, nivel: 'Intermediário' },
    ],
  },
  {
    numero: 4,
    slug: 'ferramentas-da-plataforma',
    icone: 'layout',
    categoria: 'codigo',
    capitulos: [
      { numero: 19, slug: 'simulador-de-circuitos', icone: 'circuit', categoria: 'codigo', minutos: 12, nivel: 'Iniciante', selo: 'Atualizado' },
      { numero: 20, slug: 'console-e-arquivos', icone: 'terminal', categoria: 'codigo', minutos: 10, nivel: 'Intermediário', selo: 'Atualizado' },
      { numero: 21, slug: 'projetos-salvar-e-compartilhar', icone: 'folder', categoria: 'codigo', minutos: 8, nivel: 'Iniciante', selo: 'Atualizado' },
      { numero: 22, slug: 'visao-computacional', icone: 'vision', categoria: 'visao', minutos: 15, nivel: 'Intermediário', selo: 'Atualizado' },
    ],
  },
  {
    numero: 5,
    slug: 'conectividade-e-iot',
    icone: 'wifi',
    categoria: 'internet',
    capitulos: [
      { numero: 23, slug: 'bluetooth', icone: 'bluetooth', categoria: 'bluetooth', minutos: 15, nivel: 'Intermediário' },
      { numero: 24, slug: 'wi-fi-e-internet', icone: 'wifi', categoria: 'internet', minutos: 15, nivel: 'Avançado' },
      { numero: 25, slug: 'iot-e-paineis-de-dados', icone: 'chart', categoria: 'internet', minutos: 15, nivel: 'Avançado', selo: 'Novo' },
    ],
  },
];

/** Capítulo 26 fica fora das trilhas: tem seção própria na home. */
const estruturaJose: BaseCapitulo = {
  numero: 26,
  slug: 'conhecendo-o-jose',
  icone: 'bot',
  categoria: 'marca',
  minutos: 15,
  nivel: 'Iniciante',
  selo: 'Novo',
};

export type Catalogo = ReturnType<typeof montarCatalogo>;

function montarCatalogo(idioma: Idioma) {
  const t = dicionarios[idioma];
  const cap = (c: BaseCapitulo): Capitulo => ({ ...c, ...t.capitulos[c.slug as keyof typeof t.capitulos] });
  const trilhas: Trilha[] = estrutura.map((tr) => ({
    ...tr,
    ...t.trilhas[tr.slug as keyof typeof t.trilhas],
    capitulos: tr.capitulos.map(cap),
  }));
  // Com o José oculto (src/config/recursos.ts), o capítulo 26 sai da navegação, da busca e das rotas.
  const capituloJose = publicado('jose') ? cap(estruturaJose) : null;
  const todosOsCapitulos = [...trilhas.flatMap((tr) => tr.capitulos), ...(capituloJose ? [capituloJose] : [])];

  return {
    trilhas,
    capituloJose,
    todosOsCapitulos,
    capituloPorSlug: (slug: string) => todosOsCapitulos.find((c) => c.slug === slug),
    capituloPorNumero: (n: number) => todosOsCapitulos.find((c) => c.numero === n),
    trilhaDoCapitulo: (slug: string) => trilhas.find((tr) => tr.capitulos.some((c) => c.slug === slug)),
  };
}

const cache = new Map<Idioma, Catalogo>();
export function catalogoEm(idioma: Idioma): Catalogo {
  if (!cache.has(idioma)) cache.set(idioma, montarCatalogo(idioma));
  return cache.get(idioma)!;
}

/** Categoria de um capítulo pelo número, sem depender de idioma. */
export const categoriaDoCapitulo = (n: number): Categoria =>
  [...estrutura.flatMap((t) => t.capitulos), estruturaJose].find((c) => c.numero === n)?.categoria ?? 'codigo';
