import { Link } from 'react-router-dom';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import { useRota, useT } from '../../i18n/contexto';
import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada() {
  const t = useT();
  const rota = useRota();
  useTituloDaPagina(t.naoEncontrada.tituloAba);

  return (
    <section className={styles.secao}>
      <p className={styles.codigo}>404</p>
      <h1 className={styles.titulo}>{t.naoEncontrada.titulo}</h1>
      <p className={styles.texto}>{t.naoEncontrada.texto}</p>
      <Link to={rota('/')} className={styles.botao}>
        {t.naoEncontrada.voltar}
      </Link>
    </section>
  );
}
