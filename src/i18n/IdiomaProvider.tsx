import type { ReactNode } from 'react';
import { IdiomaContext } from './contexto';
import type { Idioma } from './idiomas';

export function IdiomaProvider({ idioma, children }: { idioma: Idioma; children: ReactNode }) {
  return <IdiomaContext.Provider value={idioma}>{children}</IdiomaContext.Provider>;
}
