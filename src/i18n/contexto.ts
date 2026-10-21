import { createContext, useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { comIdioma, separarIdioma, type Idioma } from './idiomas';
import { dicionarios, type Dicionario } from './textos';

export const IdiomaContext = createContext<Idioma>('pt');

export const useIdioma = () => useContext(IdiomaContext);

export const useT = (): Dicionario => dicionarios[useIdioma()];

/** Função que prefixa rotas internas com o idioma atual. */
export function useRota() {
  const idioma = useIdioma();
  return useCallback((para: string) => comIdioma(idioma, para), [idioma]);
}

/** Caminho atual sem o prefixo de idioma (ex.: "/capitulos/x"). */
export const useCaminho = () => separarIdioma(useLocation().pathname).caminho;
