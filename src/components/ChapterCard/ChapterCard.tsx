import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { MetaCapitulo } from '../MetaCapitulo/MetaCapitulo';
import { capaDaCategoria, corDaCategoria, numeroDoCapitulo, rotaDoCapitulo, type Capitulo } from '../../data/catalogo';
import { useRota, useT } from '../../i18n/contexto';
import styles from './ChapterCard.module.css';

export function ChapterCard({ capitulo }: { capitulo: Capitulo }) {
  const t = useT();
  const rota = useRota();
  const numero = numeroDoCapitulo(capitulo.numero);
  const cores = {
    '--cor': corDaCategoria(capitulo.categoria),
    '--capa': capaDaCategoria(capitulo.categoria),
  } as CSSProperties;

  return (
    <Link to={rota(rotaDoCapitulo(capitulo))} className={styles.card} style={cores}>
      <div className={styles.capa}>
        <span className={styles.numeroFundo} aria-hidden>
          {numero}
        </span>
        <span className={styles.pilula}>
          {t.comum.capituloMaiusculo} {numero}
        </span>
        {capitulo.selo && (
          <span className={capitulo.selo === 'Novo' ? styles.seloNovo : styles.seloAtualizado}>
            {t.comum.selos[capitulo.selo]}
          </span>
        )}
        <span className={styles.icone}>
          <Icon name={capitulo.icone} size={32} />
        </span>
      </div>
      <div className={styles.texto}>
        <h3 className={styles.titulo}>{capitulo.titulo}</h3>
        <p className={styles.resumo}>{capitulo.resumo}</p>
      </div>
      <div className={styles.rodape}>
        <MetaCapitulo minutos={capitulo.minutos} nivel={capitulo.nivel} />
        <Icon name="arrow" size={20} className={styles.seta} />
      </div>
    </Link>
  );
}
