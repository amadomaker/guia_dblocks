import type { IconName } from '../components/Icon/Icon';
import type { Dicionario } from '../i18n/textos';
import { links } from './links';

export type Material = {
  chave: keyof Dicionario['materiaisSecao']['itens'];
  icone: IconName;
  cor: string;
  fundo: string;
  acaoIcone: IconName;
  href: string;
  download?: boolean;
};

export const materiais: Material[] = [
  { chave: 'guiaAmadoBoard', icone: 'filedown', cor: '#e8590c', fundo: '#fcebe2', acaoIcone: 'filedown', href: links.pdfGuiaAmadoBoard, download: true },
  { chave: 'naPratica', icone: 'book', cor: '#00a069', fundo: '#e0f4ed', acaoIcone: 'filedown', href: links.pdfDblocksNaPratica, download: true },
  { chave: 'instalador', icone: 'cpu', cor: '#326eb4', fundo: '#e6eef6', acaoIcone: 'external', href: links.instaladorMicropython },
  { chave: 'exemplos', icone: 'code', cor: '#822d96', fundo: '#f0e6f2', acaoIcone: 'arrow', href: links.exemplos },
];
