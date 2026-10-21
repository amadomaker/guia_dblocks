import { Link } from 'react-router-dom';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import { useRota, useT } from '../../i18n/contexto';
import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada({ emConstrucao = false }: { emConstrucao?: boolean }) {
  const t = useT();
  const textos = emConstrucao ? t.emConstrucao : t.naoEncontrada;
  const rota = useRota();
  useTituloDaPagina(textos.tituloAba);

  return (
    <section className={styles.secao}>
      <p className={styles.codigo}>404</p>
      <h1 className={styles.titulo}>{textos.titulo}</h1>
      <p className={styles.texto}>{textos.texto}</p>
      <Link to={rota('/')} className={styles.botao}>
        {t.naoEncontrada.voltar}
      </Link>
    </section>
  );
}
