// Recursos que podem ficar fora do ar sem apagar o que já está pronto.
// Como ligar e desligar: docs/recursos-ocultos.md.

/** Recursos que dá para esconder. */
export type Recurso = 'jose';

/**
 * O José (IA) só aparece com VITE_JOSE_PUBLICADO=true no build.
 * Desligado: some a seção da home, o link "IA José" da navbar, o capítulo 25 (vira 404 e sai da busca),
 * os trechos de capítulo marcados com `recurso: 'jose'`, e a política/termos usam a versão sem o José.
 */
export const recursosPublicados: Record<Recurso, boolean> = {
  jose: import.meta.env.VITE_JOSE_PUBLICADO === 'true',
};

export const publicado = (recurso: Recurso) => recursosPublicados[recurso];

/**
 * Remove, em qualquer profundidade, os itens de lista marcados com `recurso` (só aparecem com o recurso
 * publicado) ou `semRecurso` (só aparecem enquanto ele NÃO está publicado). Serve para o conteúdo dos
 * capítulos e projetos, que é só dado (objetos e listas).
 */
export function filtrarPorRecurso<T>(valor: T): T {
  if (Array.isArray(valor)) {
    return valor.filter((item) => visivel(item)).map((item) => filtrarPorRecurso(item)) as T;
  }
  if (valor && typeof valor === 'object' && Object.getPrototypeOf(valor) === Object.prototype) {
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, filtrarPorRecurso(v)])) as T;
  }
  return valor;
}

function visivel(item: unknown) {
  if (!item || typeof item !== 'object') return true;
  const { recurso, semRecurso } = item as { recurso?: Recurso; semRecurso?: Recurso };
  if (recurso && !publicado(recurso)) return false;
  if (semRecurso && publicado(semRecurso)) return false;
  return true;
}
