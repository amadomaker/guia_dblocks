import { useMemo, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon, type IconName } from '../Icon/Icon';
import { useSecaoAtiva } from '../../hooks/useSecaoAtiva';
import { corDaCategoria, type Categoria } from '../../data/catalogo';
import { useCatalogo } from '../../hooks/useCatalogo';
import { useRota, useT } from '../../i18n/contexto';
import { links } from '../../data/links';
import styles from './LayoutDoc.module.css';

/** `numero`: número exibido no lugar da posição (capítulo especial mostra o número real). */
export type ItemTrilha = { rotulo: string; para: string; atual: boolean; numero?: number };

type Props = {
  voltar: { rotulo: string; para: string };
  grupo: {
    rotuloNumero: string;
    titulo: string;
    icone: IconName;
    categoria: Categoria;
    para: string;
    itens: ItemTrilha[];
    /** Cor do ícone quando não é a da categoria. */
    cor?: string;
    /** Texto abaixo da barra; o padrão é "N de M capítulos". */
    progresso?: string;
    /** Capítulo fora das trilhas (José): item sem destaque de "atual". */
    especial?: boolean;
  };
  /** Slug da trilha atual, para não repetir em "Outras trilhas". */
  trilhaAtual?: string;
  secoes: { id: string; titulo: string }[];
  children: ReactNode;
};

export function LayoutDoc({ voltar, grupo, trilhaAtual, secoes, children }: Props) {
  // Mesma referência enquanto as seções não mudam, para não re-registrar o listener de scroll.
  const chave = secoes.map((s) => s.id).join('|');
  const ids = useMemo(() => (chave ? chave.split('|') : []), [chave]);
  const ativa = useSecaoAtiva(ids);
  const t = useT();
  const rota = useRota();
  const { trilhas } = useCatalogo();

  const posicao = grupo.itens.findIndex((i) => i.atual) + 1;
  const cor = { '--cor': grupo.cor ?? corDaCategoria(grupo.categoria) } as CSSProperties;

  return (
    <div className={styles.pagina}>
      <div className={styles.corpo}>
        <aside className={styles.esquerda} aria-label={t.doc.navegacaoTrilha}>
          <div className={styles.fixo}>
            <Link to={rota(voltar.para)} className={styles.voltar}>
              <Icon name="arrow" size={16} className={styles.setaVoltar} />
              {voltar.rotulo}
            </Link>

            <nav className={styles.trilhaAtual} style={cor} aria-label={grupo.titulo}>
              <Link to={rota(grupo.para)} className={styles.trilhaCabecalho}>
                <span className={styles.trilhaIcone}>
                  <Icon name={grupo.icone} size={20} />
                </span>
                <span className={styles.trilhaNomes}>
                  <span className={styles.trilhaNumero}>{grupo.rotuloNumero}</span>
                  <span className={styles.trilhaTitulo}>{grupo.titulo}</span>
                </span>
              </Link>
              <div className={styles.progresso}>
                <div
                  className={styles.barra}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={grupo.itens.length}
                  aria-valuenow={posicao}
                  aria-label={t.doc.progresso}
                >
                  <span style={{ width: `${(posicao / grupo.itens.length) * 100}%` }} />
                </div>
                <p className={styles.progressoTexto}>
                  {grupo.progresso ?? t.doc.deCapitulos(posicao, grupo.itens.length)}
                </p>
              </div>
              <ol className={styles.itens}>
                {grupo.itens.map((item, i) => (
                  <li key={item.para}>
                    <Link
                      to={rota(item.para)}
                      className={grupo.especial ? styles.itemEspecial : item.atual ? styles.itemAtual : styles.item}
                      aria-current={item.atual ? 'page' : undefined}
                    >
                      <span className={styles.itemNumero}>{item.numero ?? i + 1}</span>
                      <span className={styles.itemRotulo}>{item.rotulo}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <nav className={styles.outras} aria-label={t.doc.outrasTrilhas}>
              <p className={styles.rotuloPequeno}>{t.doc.outrasTrilhas}</p>
              {trilhas
                .filter((tr) => tr.slug !== trilhaAtual)
                .map((tr) => (
                  <Link key={tr.slug} to={rota(`/#${tr.slug}`)} className={styles.outra}>
                    <span className={styles.ponto} style={{ background: corDaCategoria(tr.categoria) }} />
                    {tr.titulo}
                  </Link>
                ))}
            </nav>
          </div>
        </aside>

        <article className={styles.conteudo}>{children}</article>

        <aside className={styles.direita} aria-label={t.doc.nestaPagina}>
          <div className={`${styles.fixo} ${styles.fixoDireita}`}>
            <p className={styles.rotuloPequeno}>{t.doc.nestaPagina}</p>
            <nav className={styles.indice}>
              {secoes.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={s.id === ativa ? styles.indiceAtivo : styles.indiceItem}
                  aria-current={s.id === ativa ? 'location' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                    history.replaceState(null, '', `#${s.id}`);
                  }}
                >
                  {s.titulo}
                </a>
              ))}
            </nav>
            <a href={links.dblocks} target="_blank" rel="noreferrer" className={styles.abrir}>
              <span>{t.doc.sigaOGuia}</span>
              <span className={styles.abrirLink}>
                {t.comum.abrirDblocks}
                <Icon name="external" size={16} />
              </span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
