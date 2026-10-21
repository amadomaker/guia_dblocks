import { Link } from 'react-router-dom';
import { ChipsCapitulos } from '../../components/ChipsCapitulos/ChipsCapitulos';
import { Icon } from '../../components/Icon/Icon';
import { MetaCapitulo } from '../../components/MetaCapitulo/MetaCapitulo';
import { corDaCategoria } from '../../data/catalogo';
import { rotaDoProjeto } from '../../data/projetos';
import { useProjetos } from '../../hooks/useCatalogo';
import { useRota, useT } from '../../i18n/contexto';
import imagemDestaque from '../../assets/home/projeto-janela-automatica.webp';
import styles from './Projetos.module.css';

export function Projetos() {
  const t = useT();
  const rota = useRota();

  return (
    <section id="projetos" className={styles.secao}>
      <div className="container">
        <header className={styles.cabecalho}>
          <div className={styles.textoCabecalho}>
            <h2 className={styles.titulo}>{t.projetosSecao.titulo}</h2>
            <p className={styles.subtitulo}>{t.projetosSecao.subtitulo}</p>
          </div>
          <Link to={rota('/projetos')} className={styles.verTodos}>
            {t.projetosSecao.verTodos}
            <Icon name="arrow" size={18} />
          </Link>
        </header>

        <GradeProjetos />
      </div>
    </section>
  );
}

/** Destaque + lista dos outros projetos. Também usada na página "Projetos na prática". */
export function GradeProjetos({ className }: { className?: string }) {
  const t = useT();
  const rota = useRota();
  const { projetos, destaque } = useProjetos();
  const outros = projetos.filter((p) => p.slug !== destaque.slug);

  return (
    <div className={`${styles.grade} ${className ?? ''}`}>
      <Link to={rota(rotaDoProjeto(destaque))} className={styles.destaque}>
        <div className={styles.imagem}>
          <img src={imagemDestaque} alt={t.projetosSecao.altDestaque} width={580} height={274} loading="lazy" />
          <span className={styles.seloDestaque}>{t.projetosSecao.seloDestaque}</span>
        </div>
        <div className={styles.textoDestaque}>
          <h3 className={styles.tituloDestaque}>{destaque.titulo}</h3>
          <p className={styles.resumoDestaque}>{destaque.resumo}</p>
          <ChipsCapitulos capitulos={destaque.capitulos} />
          <div className={styles.rodapeDestaque}>
            <MetaCapitulo minutos={destaque.minutos} nivel={destaque.nivel} tema="escuro" />
            <span className={styles.verProjeto}>
              {t.projetosSecao.verProjeto}
              <Icon name="arrow" size={18} />
            </span>
          </div>
        </div>
      </Link>

      <div className={styles.outros}>
        {outros.map((p) => (
          <Link key={p.slug} to={rota(rotaDoProjeto(p))} className={styles.projeto}>
            <span className={styles.iconeProjeto} style={{ background: corDaCategoria(p.categoria) }}>
              <Icon name={p.icone} size={30} />
            </span>
            <div className={styles.textoProjeto}>
              <div className={styles.topoProjeto}>
                <h3 className={styles.tituloProjeto}>{p.tituloCurto}</h3>
                <MetaCapitulo minutos={p.minutos} nivel={p.nivel} tema="escuro" />
              </div>
              <p className={styles.resumoProjeto}>{p.resumo}</p>
              <ChipsCapitulos capitulos={p.capitulos} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
