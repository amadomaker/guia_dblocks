import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { TextoRico } from '../../components/Conteudo/TextoRico';
import { carregarDocumento, type SlugLegal } from '../../content/legal';
import type { BlocoLegal, DocumentoLegal } from '../../content/legal/tipos';
import { useSecaoAtiva } from '../../hooks/useSecaoAtiva';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import { useIdioma, useRota, useT } from '../../i18n/contexto';
import styles from './Legal.module.css';

export default function Legal({ slug }: { slug: SlugLegal }) {
  const idioma = useIdioma();
  const t = useT();
  const rota = useRota();
  const [doc, setDoc] = useState<DocumentoLegal | null>(null);

  useTituloDaPagina(doc?.titulo ?? t.rodape[slug]);

  useEffect(() => {
    let ativo = true;
    setDoc(null);
    carregarDocumento(slug, idioma).then((d) => ativo && setDoc(d));
    return () => {
      ativo = false;
    };
  }, [slug, idioma]);

  const chave = doc?.secoes.map((s) => s.id).join('|') ?? '';
  const ids = useMemo(() => (chave ? chave.split('|') : []), [chave]);
  const ativa = useSecaoAtiva(ids);

  if (!doc) return <div className={styles.carregando} aria-busy="true" aria-label={t.legal.carregando} />;

  return (
    <>
      <header className={styles.faixa}>
        <div className="container">
          <nav className={styles.trilha} aria-label={t.doc.voceEstaEm}>
            <Link to={rota('/')}>{t.nav.inicio}</Link>
            <span aria-hidden>{'  /  '}</span>
            <span aria-current="page">{doc.titulo}</span>
          </nav>
          <h1 className={styles.titulo}>{doc.titulo}</h1>
          <p className={styles.descricao}>{doc.descricao}</p>
          <p className={styles.atualizacao}>{t.legal.atualizadoEm(doc.atualizadoEm)}</p>
        </div>
      </header>

      <div className={styles.fundoCorpo}>
        <div className={`container ${styles.corpo}`}>
          <aside className={styles.sumario} aria-label={t.doc.nestaPagina}>
            <p className={styles.sumarioTitulo}>{t.doc.nestaPagina}</p>
            <nav className={styles.sumarioItens}>
              {doc.secoes.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={s.id === ativa ? styles.sumarioAtivo : styles.sumarioItem}
                  aria-current={s.id === ativa ? 'location' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                    history.replaceState(null, '', `#${s.id}`);
                  }}
                >
                  {s.menu}
                </a>
              ))}
            </nav>
          </aside>

          <article className={styles.conteudo}>
            {doc.secoes.map((secao) => (
              <section key={secao.id} id={secao.id} className={styles.secao} aria-labelledby={`${secao.id}-titulo`}>
                <h2 id={`${secao.id}-titulo`} className={styles.secaoTitulo}>
                  {secao.titulo}
                </h2>
                {secao.blocos.map((bloco, i) => (
                  <Bloco key={i} bloco={bloco} />
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}

function Bloco({ bloco }: { bloco: BlocoLegal }) {
  switch (bloco.tipo) {
    case 'paragrafo':
      return (
        <p className={styles.paragrafo}>
          <TextoRico texto={bloco.texto} />
        </p>
      );

    case 'forte':
      return <p className={styles.forte}>{bloco.texto}</p>;

    case 'lista':
      return (
        <ul className={styles.lista}>
          {bloco.itens.map((item) => (
            <li key={item}>
              <TextoRico texto={item} />
            </li>
          ))}
        </ul>
      );

    case 'tabela': {
      const colunas = { gridTemplateColumns: bloco.colunas.map((c) => `${c}fr`).join(' ') } as CSSProperties;
      return (
        <div className={styles.tabela} role="table">
          <div className={styles.tabelaCabecalho} style={colunas} role="row">
            {bloco.cabecalho.map((c) => (
              <span key={c} role="columnheader">
                {c}
              </span>
            ))}
          </div>
          {bloco.linhas.map((linha) => (
            <div key={linha[0]} className={styles.tabelaLinha} style={colunas} role="row">
              {linha.map((celula, i) => (
                <span key={i} role={i === 0 ? 'rowheader' : 'cell'}>
                  <TextoRico texto={celula} />
                </span>
              ))}
            </div>
          ))}
        </div>
      );
    }

    case 'aviso':
      return (
        <p className={styles.aviso}>
          <TextoRico texto={bloco.texto} />
        </p>
      );
  }
}
