import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { TextoRico as Texto } from '../../content/tipos';
import { useRota } from '../../i18n/contexto';
import styles from './Conteudo.module.css';

// **negrito** | [rótulo](destino) | `código` | {{pendência}} (texto provisório, destacado até ser preenchido)
const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)|`(.+?)`|\{\{(.+?)\}\}/g;

export function TextoRico({ texto }: { texto: Texto }) {
  const rota = useRota();
  const partes: ReactNode[] = [];
  let ultimo = 0;
  for (const m of texto.matchAll(TOKEN)) {
    if (m.index > ultimo) partes.push(texto.slice(ultimo, m.index));
    const [, negrito, rotulo, destino, codigo, pendencia] = m;
    if (negrito) partes.push(<strong key={m.index}>{negrito}</strong>);
    else if (rotulo && destino)
      partes.push(
        destino.startsWith('/') ? (
          <Link key={m.index} to={rota(destino)} className={styles.link}>
            {rotulo}
          </Link>
        ) : (
          <a key={m.index} href={destino} target="_blank" rel="noreferrer" className={styles.link}>
            {rotulo}
          </a>
        ),
      );
    else if (codigo) partes.push(<code key={m.index} className={styles.codigoInline}>{codigo}</code>);
    else if (pendencia) partes.push(<strong key={m.index} className={styles.pendencia}>{pendencia}</strong>);
    ultimo = m.index + m[0].length;
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return <>{partes.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}
