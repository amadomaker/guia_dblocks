import { Link } from 'react-router-dom';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import { useRota, useT } from '../../i18n/contexto';
import { materiais } from '../../data/materiais';
import { CardMaterial } from '../Home/Materiais';
import { GradeProjetos } from '../Home/Projetos';
import styles from './Projetos.module.css';

const naPratica = materiais.find((m) => m.chave === 'naPratica')!;

export default function Projetos() {
  const t = useT();
  const rota = useRota();
  const textos = t.paginaProjetos;
  useTituloDaPagina(textos.tituloAba);

  return (
    <>
      <section className={styles.secao}>
        <div className="container">
          <header className={styles.cabecalho}>
            <nav className={styles.trilha} aria-label={t.doc.voceEstaEm}>
              <Link to={rota('/')}>{t.nav.inicio}</Link>
              <span aria-hidden>{'  /  '}</span>
              <span aria-current="page">{textos.titulo}</span>
            </nav>
            <h1 className={styles.titulo}>{textos.titulo}</h1>
            <p className={styles.subtitulo}>{textos.subtitulo}</p>
          </header>

          <ol className={styles.passos}>
            {textos.passos.map((passo, i) => (
              <li key={passo.titulo} className={styles.passo}>
                <span className={styles.numero} aria-hidden>
                  {i + 1}
                </span>
                <div className={styles.passoTexto}>
                  <p className={styles.passoTitulo}>{passo.titulo}</p>
                  <p className={styles.passoCorpo}>{passo.texto}</p>
                </div>
              </li>
            ))}
          </ol>

          <GradeProjetos />
        </div>
      </section>

      <section className={styles.mais}>
        <div className="container">
          <header className={styles.maisCabecalho}>
            <h2 className={styles.maisTitulo}>{textos.maisTitulo}</h2>
            <p className={styles.maisSubtitulo}>{textos.maisSubtitulo}</p>
          </header>
          <div className={styles.maisCard}>
            <CardMaterial material={naPratica} />
          </div>
        </div>
      </section>
    </>
  );
}
