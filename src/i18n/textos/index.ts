import type { Idioma } from '../idiomas';
import { en } from './en';
import { es } from './es';
import { pt, type Dicionario } from './pt';

export const dicionarios: Record<Idioma, Dicionario> = { pt, en, es };
export type { Dicionario };
