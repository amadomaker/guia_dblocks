import type { IconName } from '../components/Icon/Icon';
import type { Idioma } from '../i18n/idiomas';
import { dicionarios } from '../i18n/textos';
import type { Categoria, Nivel } from './catalogo';

type BaseProjeto = {
  slug: string;
  icone: IconName;
  categoria: Categoria;
  minutos: number;
  nivel: Nivel;
  /** Números dos capítulos usados (o rótulo curto do chip vem do dicionário). */
  capitulos: number[];
};

export type Projeto = BaseProjeto & { titulo: string; tituloCurto: string; resumo: string };

const estrutura: BaseProjeto[] = [
  { slug: 'semaforo', icone: 'semaforo', categoria: 'controle', minutos: 20, nivel: 'Iniciante', capitulos: [8, 13] },
  { slug: 'alarme-de-distancia', icone: 'bell', categoria: 'placa', minutos: 30, nivel: 'Intermediário', capitulos: [9, 15, 17] },
  { slug: 'janela-automatica', icone: 'thermo', categoria: 'placa', minutos: 40, nivel: 'Intermediário', capitulos: [8, 9, 15, 16, 19] },
  { slug: 'carrinho-seguidor-de-linha', icone: 'car', categoria: 'logica', minutos: 60, nivel: 'Avançado', capitulos: [9, 15, 16] },
];

export const SLUG_DESTAQUE = 'janela-automatica';

export const rotaDoProjeto = (p: Pick<Projeto, 'slug'>) => `/projetos/${p.slug}`;

const cache = new Map<Idioma, ReturnType<typeof montar>>();

function montar(idioma: Idioma) {
  const t = dicionarios[idioma];
  const projetos: Projeto[] = estrutura.map((p) => ({ ...p, ...t.projetos[p.slug as keyof typeof t.projetos] }));
  return {
    projetos,
    destaque: projetos.find((p) => p.slug === SLUG_DESTAQUE)!,
    projetoPorSlug: (slug: string) => projetos.find((p) => p.slug === slug),
  };
}

export function projetosEm(idioma: Idioma) {
  if (!cache.has(idioma)) cache.set(idioma, montar(idioma));
  return cache.get(idioma)!;
}
