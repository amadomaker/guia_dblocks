import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Blocos } from '../../components/Conteudo/Blocos';
import { FimDoCapitulo, type LinkNavegacao } from '../../components/FimDoCapitulo/FimDoCapitulo';
import { Icon } from '../../components/Icon/Icon';
import { LayoutDoc } from '../../components/LayoutDoc/LayoutDoc';
import { carregarProjeto } from '../../content';
import type { ConteudoCapitulo } from '../../content/tipos';
import { numeroDoCapitulo } from '../../data/catalogo';
import { rotaDoProjeto } from '../../data/projetos';
import { useProjetos } from '../../hooks/useCatalogo';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import { useIdioma, useRota, useT } from '../../i18n/contexto';
import NaoEncontrada from '../NaoEncontrada/NaoEncontrada';
import conteudoStyles from '../../components/Conteudo/Conteudo.module.css';
import styles from '../Capitulo/Capitulo.module.css';

export default function Projeto() {
  const { slug = '' } = useParams();
  const idioma = useIdioma();
  const t = useT();
  const rota = useRota();
  const { projetos, projetoPorSlug } = useProjetos();
  const projeto = projetoPorSlug(slug);
  const [conteudo, setConteudo] = useState<ConteudoCapitulo | null | undefined>(undefined);

  useTituloDaPagina(projeto ? projeto.titulo : t.naoEncontrada.tituloAba);

  useEffect(() => {
    let ativo = true;
    setConteudo(undefined);
    carregarProjeto(slug, idioma).then((c) => ativo && setConteudo(c));
    return () => {
      ativo = false;
    };
  }, [slug, idioma]);

  if (!projeto) return <NaoEncontrada />;

  const i = projetos.findIndex((p) => p.slug === projeto.slug);
  const ant = projetos[i - 1];
  const prox = projetos[i + 1];
  const todos = { titulo: t.projeto.todos, para: '/projetos' };
  const anterior: LinkNavegacao = ant
    ? { rotulo: t.projeto.anterior, titulo: ant.titulo, para: rotaDoProjeto(ant) }
    : { rotulo: t.projeto.voltar, ...todos };
  const proximo: LinkNavegacao = prox
    ? { rotulo: t.projeto.proximo, titulo: prox.titulo, para: rotaDoProjeto(prox) }
    : { rotulo: t.projeto.fim, ...todos };

  const grupo = {
    rotuloNumero: t.projeto.grupo,
    titulo: t.paginaProjetos.titulo,
    icone: 'cube' as const,
    categoria: 'marca' as const,
    cor: 'var(--marca-laranja)',
    progresso: t.projeto.deProjetos(i + 1, projetos.length),
    para: '/projetos',
    itens: projetos.map((p) => ({ rotulo: p.titulo, para: rotaDoProjeto(p), atual: p.slug === projeto.slug })),
  };

  return (
    <LayoutDoc
      voltar={{ rotulo: t.projeto.todos, para: '/projetos' }}
      grupo={grupo}
      secoes={conteudo?.secoes.map((s) => ({ id: s.id, titulo: s.tituloMenu ?? s.titulo })) ?? []}
    >
      <nav className={styles.trilhaNavegacao} aria-label={t.doc.voceEstaEm}>
        <Link to={rota('/')}>{t.nav.inicio}</Link>
        <span aria-hidden>/</span>
        <Link to={rota('/projetos')}>{t.paginaProjetos.titulo}</Link>
        <span aria-hidden>/</span>
        <span aria-current="page" className={styles.atual}>
          {projeto.titulo}
        </span>
      </nav>

      <header className={styles.cabecalho}>
        <div className={styles.etiquetas}>
          <span className={styles.etiquetaCapitulo}>
            {t.projeto.rotulo} {numeroDoCapitulo(i + 1)}
          </span>
        </div>
        <h1 className={styles.titulo}>{conteudo?.titulo ?? projeto.titulo}</h1>
        <p className={styles.descricao}>{conteudo?.descricao ?? projeto.resumo}</p>
        <div className={styles.meta}>
          <span>
            <Icon name="clock" size={16} />
            {t.projeto.minDeProjeto(projeto.minutos)}
          </span>
          <span>
            <Icon name="level" size={16} />
            {t.comum.niveis[projeto.nivel]}
          </span>
          {conteudo && (
            <span>
              <Icon name="book" size={16} />
              {t.doc.atualizadoEm(conteudo.atualizadoEm)}
            </span>
          )}
        </div>
      </header>

      {conteudo === undefined && (
        <div className={styles.carregando} aria-busy="true" aria-label={t.projeto.carregando} />
      )}

      {conteudo && (
        <>
          {conteudo.abertura && <Blocos blocos={[conteudo.abertura]} />}
          {conteudo.secoes.map((secao) => (
            <section
              key={secao.id}
              id={secao.id}
              className={conteudoStyles.secao}
              aria-labelledby={`${secao.id}-titulo`}
            >
              <h2 id={`${secao.id}-titulo`} className={conteudoStyles.secaoTitulo}>
                {secao.titulo}
              </h2>
              <Blocos blocos={secao.blocos} />
            </section>
          ))}
          <FimDoCapitulo
            tipo="projeto"
            pagina={projeto.slug}
            pergunta={t.projeto.ajudou}
            anterior={anterior}
            proximo={proximo}
          />
        </>
      )}
    </LayoutDoc>
  );
}
