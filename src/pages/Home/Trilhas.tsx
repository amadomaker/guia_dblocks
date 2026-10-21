import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ChapterCard } from '../../components/ChapterCard/ChapterCard';
import { Icon } from '../../components/Icon/Icon';
import { corDaCategoria, rotaDoCapitulo } from '../../data/catalogo';
import { useCatalogo } from '../../hooks/useCatalogo';
import { useRota, useT } from '../../i18n/contexto';
import styles from './Trilhas.module.css';

export function Trilhas() {
  const t = useT();
  const rota = useRota();
  const { trilhas } = useCatalogo();
  const [filtro, setFiltro] = useState<string | null>(null);
  const visiveis = filtro ? trilhas.filter((tr) => tr.slug === filtro) : trilhas;

  return (
    <section id="trilhas" className={styles.secao}>
      <div className="container">
        <header className={styles.cabecalho}>
          <h2 className={styles.titulo}>{t.trilhasSecao.titulo}</h2>
          <p className={styles.subtitulo}>{t.trilhasSecao.subtitulo}</p>
          <div className={styles.filtros} role="group" aria-label={t.trilhasSecao.filtrar}>
            <button type="button" className={styles.filtro} aria-pressed={filtro === null} onClick={() => setFiltro(null)}>
              {t.trilhasSecao.todas}
            </button>
            {trilhas.map((tr) => (
              <button
                key={tr.slug}
                type="button"
                className={styles.filtro}
                aria-pressed={filtro === tr.slug}
                onClick={() => setFiltro(tr.slug)}
              >
                <span className={styles.ponto} style={{ background: corDaCategoria(tr.categoria) }} />
                {tr.titulo}
              </button>
            ))}
          </div>
        </header>

        <div className={styles.lista}>
          {visiveis.map((tr) => (
            <article key={tr.slug} id={tr.slug} className={styles.trilha}>
              <div className={styles.sobre}>
                <span className={styles.icone} style={{ '--cor': corDaCategoria(tr.categoria) } as CSSProperties}>
                  <Icon name={tr.icone} size={28} />
                </span>
                <p className={styles.numero}>
                  {t.comum.trilhaMaiusculo} {tr.numero}
                </p>
                <h3 className={styles.nome}>{tr.titulo}</h3>
                <p className={styles.resumo}>{tr.resumo}</p>
                <p className={styles.meta}>
                  <Icon name="book" size={16} className={styles.metaIcone} />
                  {tr.capitulos.length} {t.trilhasSecao.capitulos}
                  {'  ·  '}
                  {tr.duracao}
                </p>
                <Link to={rota(rotaDoCapitulo(tr.capitulos[0]))} className={styles.link}>
                  {t.trilhasSecao.verTrilha}
                  <Icon name="arrow" size={18} />
                </Link>
              </div>
              <div className={styles.capitulos}>
                {tr.capitulos.map((c) => (
                  <ChapterCard key={c.slug} capitulo={c} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
