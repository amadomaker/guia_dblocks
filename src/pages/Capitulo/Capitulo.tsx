import { useEffect, useState, type CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Blocos } from '../../components/Conteudo/Blocos';
import { FimDoCapitulo, type LinkNavegacao } from '../../components/FimDoCapitulo/FimDoCapitulo';
import { Icon } from '../../components/Icon/Icon';
import { LayoutDoc } from '../../components/LayoutDoc/LayoutDoc';
import { carregarConteudo } from '../../content';
import type { ConteudoCapitulo } from '../../content/tipos';
import { capaDaCategoria, corDaCategoria, numeroDoCapitulo, rotaDoCapitulo } from '../../data/catalogo';
import { useCatalogo } from '../../hooks/useCatalogo';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import { useIdioma, useRota, useT } from '../../i18n/contexto';
import NaoEncontrada from '../NaoEncontrada/NaoEncontrada';
import conteudoStyles from '../../components/Conteudo/Conteudo.module.css';
import styles from './Capitulo.module.css';

export default function Capitulo() {
  const { slug = '' } = useParams();
  const idioma = useIdioma();
  const t = useT();
  const rota = useRota();
  const { capituloPorSlug, trilhaDoCapitulo, todosOsCapitulos } = useCatalogo();
  const capitulo = capituloPorSlug(slug);
  const [conteudo, setConteudo] = useState<ConteudoCapitulo | null | undefined>(undefined);

  useTituloDaPagina(capitulo ? `${numeroDoCapitulo(capitulo.numero)} · ${capitulo.titulo}` : t.naoEncontrada.tituloAba);

  useEffect(() => {
    let ativo = true;
    setConteudo(undefined);
    carregarConteudo(slug, idioma).then((c) => ativo && setConteudo(c));
    return () => {
      ativo = false;
    };
  }, [slug, idioma]);

  if (!capitulo) return <NaoEncontrada />;

  const trilha = trilhaDoCapitulo(capitulo.slug);
  // O selo do cabeçalho pode diferir do card da home (vem do conteúdo quando definido).
  const selo = conteudo?.selo !== undefined ? conteudo.selo : capitulo.selo;
  const numero = numeroDoCapitulo(capitulo.numero);
  const cores = {
    '--cor': corDaCategoria(capitulo.categoria),
    '--capa': capaDaCategoria(capitulo.categoria),
  } as CSSProperties;

  const i = todosOsCapitulos.findIndex((c) => c.slug === capitulo.slug);
  const ant = todosOsCapitulos[i - 1];
  const prox = todosOsCapitulos[i + 1];
  // Na virada de trilha o rótulo muda para "Trilha anterior" / "Próxima trilha".
  const mesmaTrilha = (outro: typeof capitulo) => trilhaDoCapitulo(outro.slug)?.slug === trilha?.slug || !trilha;
  const anterior: LinkNavegacao = ant
    ? {
        rotulo: (mesmaTrilha(ant) ? t.fim.anterior : t.fim.trilhaAnterior)(numeroDoCapitulo(ant.numero)),
        titulo: ant.titulo,
        para: rotaDoCapitulo(ant),
      }
    : { rotulo: t.fim.voltarPara, titulo: t.doc.todasAsTrilhas, para: '/#trilhas' };
  const proximo: LinkNavegacao = prox
    ? {
        rotulo: (mesmaTrilha(prox) || !trilhaDoCapitulo(prox.slug) ? t.fim.proximo : t.fim.proximaTrilha)(
          numeroDoCapitulo(prox.numero),
        ),
        titulo: prox.tituloCurto ?? prox.titulo,
        para: rotaDoCapitulo(prox),
      }
    : { rotulo: t.fim.fimDoGuia, titulo: t.fim.voltarAoInicio, para: '/' };

  const grupo = trilha
    ? {
        rotuloNumero: `${t.comum.trilhaMaiusculo} ${trilha.numero}`,
        titulo: trilha.titulo,
        icone: trilha.icone,
        categoria: trilha.categoria,
        para: `/#${trilha.slug}`,
        itens: trilha.capitulos.map((c) => ({ rotulo: c.titulo, para: rotaDoCapitulo(c), atual: c.slug === capitulo.slug })),
      }
    : {
        rotuloNumero: t.doc.capituloEspecial,
        titulo: t.nav.jose,
        icone: capitulo.icone,
        categoria: capitulo.categoria,
        para: '/#jose',
        itens: [
          {
            rotulo: capitulo.tituloCurto ?? capitulo.titulo,
            para: rotaDoCapitulo(capitulo),
            atual: true,
            numero: capitulo.numero,
          },
        ],
        cor: 'var(--jose-azul)',
        progresso: t.doc.totalCapitulos(1),
        especial: true,
      };

  return (
    <LayoutDoc
      voltar={{ rotulo: t.doc.todasAsTrilhas, para: '/#trilhas' }}
      grupo={grupo}
      trilhaAtual={trilha?.slug}
      secoes={conteudo?.secoes.map((s) => ({ id: s.id, titulo: s.tituloMenu ?? s.titulo })) ?? []}
    >
      <nav className={styles.trilhaNavegacao} aria-label={t.doc.voceEstaEm}>
        <Link to={rota('/')}>{t.nav.inicio}</Link>
        <span aria-hidden>/</span>
        <Link to={rota(grupo.para)}>{grupo.titulo}</Link>
        <span aria-hidden>/</span>
        <span aria-current="page" className={styles.atual}>
          {t.comum.capitulo} {numero}
        </span>
      </nav>

      <header className={styles.cabecalho} style={cores}>
        <div className={styles.etiquetas}>
          <span className={styles.etiquetaCapitulo}>
            {t.comum.capituloMaiusculo} {numero}
          </span>
          {selo && (
            <span className={selo === 'Novo' ? styles.seloNovo : styles.seloAtualizado}>{t.comum.selos[selo]}</span>
          )}
        </div>
        <h1 className={styles.titulo}>{conteudo?.titulo ?? capitulo.titulo}</h1>
        {conteudo && <p className={styles.descricao}>{conteudo.descricao}</p>}
        <div className={styles.meta}>
          <span>
            <Icon name="clock" size={16} />
            {t.doc.minDeLeitura(capitulo.minutos)}
          </span>
          <span>
            <Icon name="level" size={16} />
            {t.comum.niveis[capitulo.nivel]}
          </span>
          {conteudo && (
            <span>
              <Icon name="book" size={16} />
              {t.doc.atualizadoEm(conteudo.atualizadoEm)}
            </span>
          )}
        </div>
      </header>

      {conteudo === undefined && <div className={styles.carregando} aria-busy="true" aria-label={t.doc.carregando} />}

      {conteudo === null && (
        <div className={styles.emBreve}>
          <p className={styles.emBreveTitulo}>{t.doc.emBreve}</p>
          <p>{capitulo.resumo}</p>
        </div>
      )}

      {conteudo && (
        <>
          {conteudo.abertura && <Blocos blocos={[conteudo.abertura]} />}
          {conteudo.secoes.map((secao) => (
            <section
              key={secao.id}
              id={secao.id}
              className={`${conteudoStyles.secao} ${secao.etapa ? conteudoStyles.secaoEtapa : ''}`}
              aria-labelledby={`${secao.id}-titulo`}
            >
              {secao.etapa && <p className={conteudoStyles.etapa}>{secao.etapa}</p>}
              <h2 id={`${secao.id}-titulo`} className={conteudoStyles.secaoTitulo}>
                {secao.titulo}
              </h2>
              <Blocos blocos={secao.blocos} />
            </section>
          ))}
          <FimDoCapitulo tipo="capitulo" pagina={capitulo.slug} anterior={anterior} proximo={proximo} />
        </>
      )}
    </LayoutDoc>
  );
}
