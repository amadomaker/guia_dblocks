import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import { MetaCapitulo } from '../../components/MetaCapitulo/MetaCapitulo';
import { rotaDoCapitulo } from '../../data/catalogo';
import { links } from '../../data/links';
import { useCatalogo } from '../../hooks/useCatalogo';
import { useRota, useT } from '../../i18n/contexto';
import jose from '../../assets/home/jose.webp';
import styles from './Jose.module.css';

export function Jose() {
  const t = useT();
  const rota = useRota();
  const { capituloJose } = useCatalogo();
  if (!capituloJose) return null;

  return (
    <section id="jose" className={styles.secao}>
      <div className={styles.visual}>
        <img src={jose} alt={t.joseSecao.alt} width={491} height={491} loading="lazy" className={styles.robo} />
        <div className={styles.balao} aria-hidden>
          <span className={styles.balaoNome}>José</span>
          <span className={styles.balaoTexto}>
            {t.joseSecao.balao1}
            <br />
            {t.joseSecao.balao2}
          </span>
        </div>
      </div>

      <div className={styles.texto}>
        <h2 className={styles.titulo}>
          {t.joseSecao.tituloAntes}
          <span>José</span>
          {t.joseSecao.tituloDepois1}
          <br />
          {t.joseSecao.tituloDepois2}
        </h2>
        <p className={styles.resumo}>{capituloJose.resumo}</p>
        <MetaCapitulo minutos={capituloJose.minutos} nivel={capituloJose.nivel} />
        <p className={styles.aviso}>
          <Icon name="lock" size={18} />
          {t.joseSecao.aviso}
        </p>
        <div className={styles.botoes}>
          <Link to={rota(rotaDoCapitulo(capituloJose))} className={styles.botaoPrimario}>
            {t.joseSecao.ler}
          </Link>
          <a href={links.contato} target="_blank" rel="noreferrer" className={styles.link}>
            {t.joseSecao.escola}
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
