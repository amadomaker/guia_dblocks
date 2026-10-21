import { useEffect } from 'react';
import { useT } from '../i18n/contexto';

/** Define o <title> da aba. `null` usa só o nome do Guia. */
export function useTituloDaPagina(titulo: string | null) {
  const t = useT();
  useEffect(() => {
    document.title = titulo ? `${titulo} · ${t.meta.tituloSite}` : t.meta.tituloInicial;
  }, [titulo, t]);
}
