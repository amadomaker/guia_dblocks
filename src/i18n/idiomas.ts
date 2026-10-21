export const idiomas = ['pt', 'en', 'es'] as const;
export type Idioma = (typeof idiomas)[number];

/**
 * Idiomas com rota publicada. A infraestrutura de EN/ES já existe, mas a tradução do conteúdo
 * fica para uma etapa futura: enquanto isso eles aparecem no seletor como "em breve".
 */
export const idiomasPublicados: readonly Idioma[] = ['pt'];

export const infoIdioma: Record<Idioma, { codigo: string; nome: string; html: string; prefixo: string }> = {
  pt: { codigo: 'PT', nome: 'Português', html: 'pt-BR', prefixo: '' },
  en: { codigo: 'EN', nome: 'English', html: 'en', prefixo: '/en' },
  es: { codigo: 'ES', nome: 'Español', html: 'es', prefixo: '/es' },
};

/** Separa o idioma do caminho: "/en/capitulos/x" → { idioma: 'en', caminho: '/capitulos/x' }. */
export function separarIdioma(pathname: string): { idioma: Idioma; caminho: string } {
  const m = pathname.match(/^\/(en|es)(?=\/|$)/);
  if (!m) return { idioma: 'pt', caminho: pathname || '/' };
  return { idioma: m[1] as Idioma, caminho: pathname.slice(m[0].length) || '/' };
}

/** Prefixa uma rota interna com o idioma. Aceita "/", "/#ancora" e "/caminho#ancora". */
export function comIdioma(idioma: Idioma, para: string): string {
  const prefixo = infoIdioma[idioma].prefixo;
  if (!prefixo || !para.startsWith('/')) return para;
  if (para === '/') return prefixo;
  if (para.startsWith('/#')) return prefixo + para.slice(1);
  return prefixo + para;
}
