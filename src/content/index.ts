import { filtrarPorRecurso } from '../config/recursos';
import type { Idioma } from '../i18n/idiomas';
import type { ConteudoCapitulo } from './tipos';

// Cada capítulo (e cada projeto) é uma pasta src/content/{capitulos,projetos}/NN-slug/ com pt.ts, en.ts e es.ts
// (e um imagens.ts compartilhado). Só o idioma pedido é baixado.
const modulos = import.meta.glob<{ default: ConteudoCapitulo }>('./{capitulos,projetos}/*/{pt,en,es}.ts');

type Tipo = 'capitulos' | 'projetos';

const porChave = new Map(
  Object.entries(modulos).map(([caminho, carregar]) => {
    const [, tipo, slug, idioma] = caminho.match(/\/(capitulos|projetos)\/\d+-([^/]+)\/(pt|en|es)\.ts$/)!;
    return [`${tipo}:${slug}:${idioma}`, carregar];
  }),
);

async function carregar(tipo: Tipo, slug: string, idioma: Idioma): Promise<ConteudoCapitulo | null> {
  // Se a tradução ainda não existir, cai para o português.
  const modulo = porChave.get(`${tipo}:${slug}:${idioma}`) ?? porChave.get(`${tipo}:${slug}:pt`);
  // Trechos marcados com `recurso`/`semRecurso` saem conforme o que está publicado.
  return modulo ? filtrarPorRecurso((await modulo()).default) : null;
}

export const carregarConteudo = (slug: string, idioma: Idioma) => carregar('capitulos', slug, idioma);
export const carregarProjeto = (slug: string, idioma: Idioma) => carregar('projetos', slug, idioma);
