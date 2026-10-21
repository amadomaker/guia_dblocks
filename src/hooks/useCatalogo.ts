import { catalogoEm } from '../data/catalogo';
import { projetosEm } from '../data/projetos';
import { useIdioma } from '../i18n/contexto';

/** Trilhas e capítulos com os textos no idioma atual. */
export const useCatalogo = () => catalogoEm(useIdioma());

/** Projetos com os textos no idioma atual. */
export const useProjetos = () => projetosEm(useIdioma());
