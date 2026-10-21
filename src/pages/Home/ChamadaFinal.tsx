import { Link } from 'react-router-dom';
import { links } from '../../data/links';
import { useRota, useT } from '../../i18n/contexto';
import styles from './ChamadaFinal.module.css';

export function ChamadaFinal() {
  const t = useT();
  const rota = useRota();
  return (
    <section className={styles.secao}>
      <div className="container">
        <div className={styles.faixa}>
          <div className={styles.texto}>
            <h2 className={styles.titulo}>{t.chamadaFinal.titulo}</h2>
            <p className={styles.subtitulo}>{t.chamadaFinal.subtitulo}</p>
          </div>
          <div className={styles.botoes}>
            <Link to={rota('/#primeiros-passos')} className={styles.secundario}>
              {t.chamadaFinal.primeirosPassos}
            </Link>
            <a href={links.dblocks} target="_blank" rel="noreferrer" className={styles.primario}>
              {t.comum.abrirDblocks}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
