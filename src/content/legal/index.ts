import { publicado } from '../../config/recursos';
import type { Idioma } from '../../i18n/idiomas';
import type { DocumentoLegal } from './tipos';

export type SlugLegal = 'privacidade' | 'termos';

// Cada documento tem a versão completa (<idioma>.ts) e a versão sem o José (<idioma>.sem-jose.ts),
// usada enquanto ele está oculto (src/config/recursos.ts). As duas ficam prontas no código.
const modulos = import.meta.glob<{ default: DocumentoLegal }>('./*/{pt,en,es}{,.sem-jose}.ts');

export async function carregarDocumento(slug: SlugLegal, idioma: Idioma): Promise<DocumentoLegal> {
  const versao = publicado('jose') ? '' : '.sem-jose';
  // Se a tradução ainda não existir, cai para o português.
  const carregar =
    modulos[`./${slug}/${idioma}${versao}.ts`] ??
    modulos[`./${slug}/pt${versao}.ts`] ??
    modulos[`./${slug}/pt.ts`];
  return (await carregar()).default;
}
