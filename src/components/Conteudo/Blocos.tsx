import { Fragment, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Bloco, Imagem } from '../../content/tipos';
import { corDaCategoria, numeroDoCapitulo } from '../../data/catalogo';
import { useCatalogo } from '../../hooks/useCatalogo';
import { useRota, useT } from '../../i18n/contexto';
import { Icon } from '../Icon/Icon';
import { TextoRico } from './TextoRico';
import styles from './Conteudo.module.css';

/** Rota (já com idioma) de um capítulo pelo número. */
function useRotaDoNumero() {
  const rota = useRota();
  const { capituloPorNumero } = useCatalogo();
  return (n: number) => rota(`/capitulos/${capituloPorNumero(n)?.slug ?? ''}`);
}

export function Figura({ imagem, className }: { imagem: Imagem; className?: string }) {
  if (imagem.recorte) {
    const r = imagem.recorte;
    return (
      <span
        role="img"
        aria-label={imagem.alt}
        className={`${styles.imagem} ${styles.imagemRecortada} ${className ?? ''}`}
        style={{ maxWidth: imagem.largura, aspectRatio: `${imagem.largura} / ${imagem.altura}` }}
      >
        <img
          src={imagem.src}
          alt=""
          loading="lazy"
          decoding="async"
          style={{ left: `${r.x}%`, top: `${r.y}%`, width: `${r.largura}%`, height: `${r.altura}%` }}
        />
      </span>
    );
  }
  return (
    <img
      src={imagem.src}
      alt={imagem.alt}
      width={imagem.largura}
      height={imagem.altura}
      loading="lazy"
      decoding="async"
      className={`${styles.imagem} ${className ?? ''}`}
      style={{ maxWidth: imagem.largura, aspectRatio: `${imagem.largura} / ${imagem.altura}` }}
    />
  );
}

/** Chip "Capítulo NN" com a bolinha da cor da categoria, que leva ao capítulo. */
function ChipCapitulo({ numero }: { numero: number }) {
  const t = useT();
  const rotaDoNumero = useRotaDoNumero();
  const { capituloPorNumero } = useCatalogo();
  const cap = capituloPorNumero(numero);
  return (
    <Link to={rotaDoNumero(numero)} className={styles.chipCapitulo}>
      <span style={{ background: cap && corDaCategoria(cap.categoria) }} aria-hidden />
      {t.comum.capitulo} {numeroDoCapitulo(numero)}
    </Link>
  );
}

function BlocoConteudo({ bloco }: { bloco: Bloco }) {
  const t = useT();
  const rotaDoNumero = useRotaDoNumero();
  const { capituloPorNumero } = useCatalogo();
  switch (bloco.tipo) {
    case 'paragrafo':
      return (
        <p className={bloco.menor ? styles.exemploTexto : styles.paragrafo}>
          <TextoRico texto={bloco.texto} />
        </p>
      );

    case 'figura': {
      const pequena = bloco.tamanho === 'pequena';
      return (
        <figure
          className={pequena ? styles.figuraPequena : styles.figura}
          // Na figura pequena a legenda pode passar da largura do print (no Figma ela não quebra).
          style={{ ...(pequena || bloco.legendaLivre ? undefined : { maxWidth: bloco.imagem.largura }), paddingTop: bloco.topo }}
        >
          <Figura
            imagem={bloco.imagem}
            className={pequena || bloco.semSombra ? styles.imagemSemSombra : styles.imagemSombra}
          />
          {bloco.legenda && (
            <figcaption className={pequena ? styles.legendaPequena : styles.legenda}>
              <TextoRico texto={bloco.legenda} />
            </figcaption>
          )}
        </figure>
      );
    }

    case 'destaque':
      return (
        <aside className={`${styles.destaque} ${styles[`destaque_${bloco.variante}`]}`}>
          <Icon name={bloco.icone} size={20} className={styles.destaqueIcone} />
          <div className={styles.destaqueTexto}>
            <p className={styles.destaqueTitulo}>{bloco.titulo}</p>
            <p className={`${styles.destaqueCorpo} ${bloco.enfase ? styles.destaqueEnfase : ''}`}>
              <TextoRico texto={bloco.texto} />
            </p>
          </div>
        </aside>
      );

    case 'cardsAbas':
      return (
        <div className={styles.cardsAbas}>
          {bloco.itens.map((item) => (
            <article key={item.titulo} className={styles.cardAba}>
              <Figura imagem={item.imagem} />
              <h3 className={styles.cardAbaTitulo}>{item.titulo}</h3>
              <p className={styles.cardAbaTexto}>
                <TextoRico texto={item.texto} />
              </p>
              <Link to={rotaDoNumero(item.capitulo)} className={styles.linkCapitulo}>
                {t.comum.capitulo} {numeroDoCapitulo(item.capitulo)}
                <Icon name="arrow" size={16} />
              </Link>
            </article>
          ))}
        </div>
      );

    case 'chipsAbas':
      return (
        <div className={styles.chipsAbas}>
          <span className={styles.chipsRotulo}>{bloco.rotulo}</span>
          {bloco.itens.map((item) => (
            <Link key={item.nome} to={rotaDoNumero(item.capitulo)} className={styles.chipAba}>
              <span className={styles.chipNome}>{item.nome}</span>
              <span className={styles.chipCap}>
                {t.comum.capAbreviado} {item.capitulo}
              </span>
            </Link>
          ))}
        </div>
      );

    case 'requisitos':
      return (
        <ul className={styles.requisitos}>
          {bloco.itens.map((item) => (
            <li key={item.titulo} className={`${styles.requisito} ${item.icone ? '' : styles.requisitoSemIcone}`}>
              {item.icone && (
                <span className={styles.requisitoIcone}>
                  <Icon name={item.icone} size={22} />
                </span>
              )}
              <div className={styles.requisitoTexto}>
                <p className={styles.requisitoTitulo}>{item.titulo}</p>
                <p className={styles.requisitoCorpo}>
                  <TextoRico texto={item.texto} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      );

    case 'figuras':
      return (
        <div className={`${styles.figuras} ${bloco.quebra ? styles.figurasQuebra : ''}`} style={bloco.gap ? { gap: bloco.gap } : undefined}>
          {bloco.itens.map((item) => (
            <figure
              key={item.imagem.src}
              className={styles.figura}
              style={bloco.quebra ? { width: item.imagem.largura } : { maxWidth: item.imagem.largura }}
            >
              <Figura imagem={item.imagem} className={bloco.semSombra ? styles.imagemSemSombra : styles.imagemSombra} />
              {item.legenda && (
                <figcaption className={styles.legenda}>
                  <TextoRico texto={item.legenda} />
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case 'figuraComItens':
      return (
        <div className={styles.figuraComItens}>
          <Figura imagem={bloco.imagem} className={styles.imagemSombra} />
          <ul className={styles.itensComBorda}>
            {bloco.itens.map((item) => (
              <li key={item.titulo} className={styles.itemComBorda} style={{ borderColor: item.cor }}>
                <p className={styles.itemComBordaTitulo}>{item.titulo}</p>
                <p className={styles.itemComBordaTexto}>
                  <TextoRico texto={item.texto} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'capitulosUsados':
      return (
        <ul className={styles.capitulosUsados}>
          {bloco.itens.map((item) => {
            const cap = capituloPorNumero(item.capitulo);
            const numero = numeroDoCapitulo(item.capitulo);
            return (
              <li key={item.capitulo}>
                <Link to={rotaDoNumero(item.capitulo)} className={styles.capituloUsado}>
                  <span className={styles.capituloUsadoNumero} style={{ background: cap && corDaCategoria(cap.categoria) }}>
                    {numero}
                  </span>
                  <span className={styles.capituloUsadoTexto}>
                    <span className={styles.capituloUsadoTitulo}>
                      {t.comum.capitulo} {numero} · {cap?.titulo}
                    </span>
                    <span className={styles.capituloUsadoCorpo}>
                      <TextoRico texto={item.texto} />
                    </span>
                  </span>
                  <span className={styles.capituloUsadoAbrir}>
                    {t.conteudo.abrir}
                    <Icon name="arrow" size={16} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      );

    case 'materiais':
      return (
        <ul className={styles.materiais}>
          {bloco.itens.map((item) => (
            <li key={item.titulo} className={styles.material}>
              <p className={styles.materialTitulo}>{item.titulo}</p>
              {item.texto && (
                <p className={styles.materialTexto}>
                  <TextoRico texto={item.texto} />
                </p>
              )}
            </li>
          ))}
        </ul>
      );

    case 'programa':
      return (
        <div className={`${styles.programa} ${bloco.empilhado ? styles.programaEmpilhado : ''}`}>
          <div className={styles.programaMoldura}>
            <Figura imagem={bloco.imagem} />
          </div>
          <div className={styles.programaTexto}>
            <p className={styles.programaTitulo}>{bloco.titulo}</p>
            <ol className={styles.programaLinhas}>
              {bloco.linhas.map((linha, i) => {
                return (
                  <li key={i} className={styles.programaLinha}>
                    <span className={styles.programaNumero} aria-hidden>
                      {i + 1}.
                    </span>
                    <div className={styles.programaLinhaTexto}>
                      <p className={styles.programaCorpo}>
                        <TextoRico texto={linha.texto} />
                      </p>
                      <ChipCapitulo numero={linha.capitulo} />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      );

    case 'figuraComFaixas':
      return (
        <div className={styles.figuraComFaixas}>
          <Figura imagem={bloco.imagem} />
          <ul className={styles.faixas}>
            {bloco.itens.map((item) => (
              <li key={item.titulo} className={styles.faixa}>
                <span className={styles.faixaCor} style={{ background: item.cor }} aria-hidden />
                <div className={styles.faixaTexto}>
                  <p className={styles.faixaTitulo}>{item.titulo}</p>
                  <p className={styles.faixaCorpo}>
                    <TextoRico texto={item.texto} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'figuraAnotada':
      return (
        <figure className={styles.figura} style={{ maxWidth: bloco.imagem.largura }}>
          <div className={styles.anotada}>
            <Figura imagem={bloco.imagem} className={styles.imagemSombra} />
            {bloco.marcadores.map((m, i) => (
              <span
                key={i}
                className={styles.marcador}
                style={{ left: `${(m.x / bloco.imagem.largura) * 100}%`, top: `${(m.y / bloco.imagem.altura) * 100}%` }}
                aria-hidden
              >
                {i + 1}
              </span>
            ))}
          </div>
          {bloco.legenda && (
            <figcaption className={styles.legenda}>
              <TextoRico texto={bloco.legenda} />
            </figcaption>
          )}
        </figure>
      );

    case 'listaNumerada':
      return (
        <ol className={styles.listaNumerada}>
          {bloco.itens.map((item, i) => (
            <li key={item.titulo} className={styles.linhaNumerada}>
              <span className={styles.marcadorPequeno} aria-hidden>
                {i + 1}
              </span>
              <div className={styles.linhaTexto}>
                <p className={styles.linhaTitulo}>{item.titulo}</p>
                <p className={styles.linhaCorpo}>
                  <TextoRico texto={item.texto} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case 'figuraComLista':
      return (
        <div
          className={`${styles.figuraComLista} ${bloco.centralizar ? styles.centralizar : ''}`}
          style={
            {
              '--colunas': `${bloco.layout?.colunas ?? 32}px`,
              '--itens': `${bloco.layout?.itens ?? 12}px`,
              '--topo': `${bloco.layout?.topo ?? 0}px`,
              '--titulo': `${bloco.layout?.titulo ?? 16}px`,
              '--entre-titulo': `${bloco.layout?.entreTitulo ?? 2}px`,
              '--linha-texto': `${bloco.layout?.linhaTexto ?? 22}px`,
            } as CSSProperties
          }
        >
          <Figura imagem={bloco.imagem} className={bloco.semSombra ? undefined : styles.imagemSombra} />
          <ul className={styles.listaLado}>
            {bloco.itens.map((item) => (
              <li key={item.titulo} className={styles.itemLado}>
                <p className={styles.itemLadoTitulo}>{item.titulo}</p>
                <p className={styles.linhaCorpo}>
                  <TextoRico texto={item.texto} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'figuraAoLado':
      return (
        <div className={styles.figuraAoLado} style={bloco.gap ? { gap: bloco.gap } : undefined}>
          <Figura imagem={bloco.imagem} />
          <div className={styles.figuraAoLadoBlocos}>
            <Blocos blocos={bloco.blocos} />
          </div>
        </div>
      );

    case 'figuraComTabela':
      return (
        <div className={styles.figuraComTabela}>
          <Figura imagem={bloco.imagem} className={styles.imagemSombra} />
          <dl className={styles.tabela}>
            {bloco.itens.map((item) => (
              <div key={item.titulo} className={styles.tabelaLinha}>
                <dt className={styles.tabelaNome}>{item.titulo}</dt>
                <dd className={styles.tabelaTexto}>
                  <TextoRico texto={item.texto} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case 'link':
      return (
        <a
          href={bloco.href}
          target="_blank"
          rel="noreferrer"
          className={`${styles.linkSolto} ${bloco.recuado ? styles.linkRecuado : ''}`}
        >
          {bloco.texto}
          <Icon name="external" size={16} />
        </a>
      );

    case 'estados':
      return (
        <ul className={styles.estados}>
          {bloco.itens.map((item) => (
            <li key={item.titulo} className={styles.estado}>
              <Figura imagem={item.imagem} />
              <div className={styles.linhaTexto}>
                <p className={styles.linhaTitulo}>{item.titulo}</p>
                <p className={styles.linhaCorpo}>
                  <TextoRico texto={item.texto} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      );

    case 'tabela':
      return (
        <dl className={styles.tabelaBorda}>
          {bloco.itens.map((item) => (
            <div
              key={item.titulo}
              className={styles.tabelaBordaLinha}
              style={bloco.respiro ? { paddingBlock: bloco.respiro } : undefined}
            >
              <dt className={styles.tabelaBordaNome} style={{ width: bloco.larguraNome ?? 260 }}>
                {item.titulo}
              </dt>
              <dd className={styles.tabelaBordaTexto}>
                <TextoRico texto={item.texto} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case 'caminho':
      return (
        <p className={styles.caminho}>
          {bloco.itens.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && (
                <span className={styles.caminhoSeta} aria-hidden>
                  ›
                </span>
              )}
              <span className={i === bloco.itens.length - 1 ? styles.caminhoBloco : styles.caminhoItem}>{item}</span>
            </Fragment>
          ))}
        </p>
      );

    case 'desafios':
      return (
        <ul className={styles.desafios}>
          {bloco.itens.map((item) => (
            <li key={item.titulo} className={styles.desafio}>
              <p className={styles.desafioTitulo}>{item.titulo}</p>
              <p className={styles.desafioTexto}>
                <TextoRico texto={item.texto} />
              </p>
            </li>
          ))}
        </ul>
      );

    case 'galeria':
      return (
        <div className={styles.galeria}>
          {bloco.itens.map((item) => (
            <article key={item.titulo} className={styles.galeriaItem}>
              <Figura imagem={item.imagem} className={styles.imagemSombra} />
              <h3 className={styles.galeriaTitulo}>{item.titulo}</h3>
              <p className={styles.linhaCorpo}>
                <TextoRico texto={item.texto} />
              </p>
            </article>
          ))}
        </div>
      );

    case 'exemplo':
      return (
        <article className={`${styles.exemplo} ${bloco.compacto ? styles.exemploCompacto : ''}`}>
          <h3 className={styles.exemploTitulo}>{bloco.titulo}</h3>
          {bloco.texto && (
            <p className={styles.exemploTexto}>
              <TextoRico texto={bloco.texto} />
            </p>
          )}
          <Blocos blocos={bloco.blocos} />
        </article>
      );

    case 'blocosEConsole':
      return (
        <div className={styles.blocosEConsole}>
          <Figura imagem={bloco.imagem} />
          <div className={styles.console}>
            <p className={styles.consoleRotulo}>{bloco.rotulo ?? t.conteudo.noConsole}</p>
            <Figura imagem={bloco.console} />
          </div>
        </div>
      );

    case 'console':
      return (
        <div className={styles.console}>
          <p className={styles.consoleRotulo}>{bloco.rotulo ?? t.conteudo.noConsole}</p>
          <Figura imagem={bloco.imagem} />
        </div>
      );

    case 'explicacao':
      return (
        <div className={`${styles.explicacao} ${bloco.variante === 'montagem' ? styles.montagem : ''}`}>
          <p className={styles.explicacaoTitulo}>{bloco.titulo}</p>
          {bloco.itens.map((item) => (
            <p key={item} className={styles.explicacaoItem}>
              <TextoRico texto={item} />
            </p>
          ))}
          {bloco.blocos && <Blocos blocos={bloco.blocos} />}
        </div>
      );

    case 'nota':
      return (
        <p className={styles.nota}>
          <TextoRico texto={bloco.texto} />
        </p>
      );

    case 'simbolos':
      return (
        <dl className={`${styles.simbolos} ${bloco.tamanho === 'medio' ? styles.simbolosMedios : ''}`}>
          {bloco.itens.map((item) => (
            <div key={item.simbolo} className={styles.simboloLinha}>
              <dt className={styles.simbolo}>{item.simbolo}</dt>
              <dd className={styles.simboloTexto}>
                <TextoRico texto={item.texto} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case 'passosComFigura':
      return (
        <div
          className={styles.passosComFigura}
          style={bloco.entrePassos ? ({ '--entre-passos': `${bloco.entrePassos}px` } as CSSProperties) : undefined}
        >
          <BlocoConteudo bloco={{ tipo: 'passos', itens: bloco.itens }} />
          <Figura imagem={bloco.imagem} className={bloco.semSombra ? undefined : styles.imagemSombra} />
        </div>
      );

    case 'blocoECodigo':
      return (
        <div className={styles.blocoECodigo} role="table">
          {bloco.itens.map((item) => (
            <div key={item.codigo} className={styles.blocoECodigoLinha} role="row">
              <p className={styles.blocoECodigoBloco} role="cell">
                {item.bloco}
              </p>
              <code className={styles.blocoECodigoCodigo} role="cell">
                {item.codigo}
              </code>
              <p className={styles.blocoECodigoTexto} role="cell">
                <TextoRico texto={item.texto} />
              </p>
            </div>
          ))}
        </div>
      );

    case 'subtitulo':
      return (
        <h3
          className={`${styles.subtitulo} ${bloco.grande ? styles.subtituloGrande : ''}`}
          style={bloco.altura ? { lineHeight: `${bloco.altura}px` } : undefined}
        >
          {bloco.texto}
        </h3>
      );

    case 'navegador':
      return (
        <>
          <div className={styles.navegador}>
            <div className={styles.navegadorBarra} aria-hidden>
              <span className={styles.navegadorBolinha} />
              <span className={styles.navegadorBolinha} />
              <span className={styles.navegadorBolinha} />
              <span className={styles.navegadorUrl}>{bloco.url}</span>
            </div>
            <img
              src={bloco.imagem.src}
              alt={bloco.imagem.alt}
              width={bloco.imagem.largura}
              height={bloco.imagem.altura}
              loading="lazy"
              decoding="async"
              className={styles.navegadorPagina}
            />
          </div>
          {bloco.legenda && (
            <p className={styles.legenda} style={{ maxWidth: bloco.imagem.largura }}>
              <TextoRico texto={bloco.legenda} />
            </p>
          )}
        </>
      );

    case 'endereco':
      return <code className={styles.endereco}>{bloco.texto}</code>;

    case 'textoComFigura':
      return (
        <div className={styles.textoComFigura}>
          <div className={styles.textoComFiguraTexto}>
            <h3 className={styles.subtitulo}>{bloco.titulo}</h3>
            {bloco.paragrafos.map((p) => (
              <p key={p} className={styles.exemploTexto}>
                <TextoRico texto={p} />
              </p>
            ))}
          </div>
          <Figura imagem={bloco.imagem} className={styles.imagemSombra} />
        </div>
      );

    case 'figuraComLigacoes':
      return (
        <div className={styles.figuraComLigacoes}>
          <Figura imagem={bloco.imagem} />
          <div className={styles.ligacoes}>
            <p className={styles.ligacoesTitulo}>{bloco.titulo}</p>
            <dl className={styles.ligacoesTabela}>
              {bloco.itens.map((item) => (
                <div key={item.titulo} className={styles.ligacaoLinha}>
                  <dt className={styles.ligacaoNome}>{item.titulo}</dt>
                  <dd className={styles.ligacaoTexto}>
                    <TextoRico texto={item.texto} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      );

    case 'blocosEOled':
      return (
        <div className={styles.blocosEOled}>
          <Figura imagem={bloco.imagem} />
          <div className={styles.console}>
            <p className={styles.consoleRotulo}>{t.conteudo.naTelinha}</p>
            <Figura imagem={bloco.telinha} className={styles.imagemSemBorda} />
          </div>
        </div>
      );

    case 'passos':
      return (
        <ol className={`${styles.passos} ${bloco.montagem ? styles.passosMontagem : ''}`} start={bloco.inicio}>
          {bloco.itens.map((passo, i) => (
            <li key={passo.titulo} className={styles.passo}>
              <span className={styles.passoNumero} aria-hidden>
                {(bloco.inicio ?? 1) + i}
              </span>
              <div className={styles.passoTexto}>
                <p className={styles.passoTitulo}>{passo.titulo}</p>
                {passo.texto && (
                  <p className={styles.passoCorpo}>
                    <TextoRico texto={passo.texto} />
                  </p>
                )}
                {passo.capitulo && (
                  <p className={styles.aprendaMais}>
                    {t.conteudo.aprendaMaisNo}
                    <ChipCapitulo numero={passo.capitulo} />
                  </p>
                )}
                {passo.blocos && <Blocos blocos={passo.blocos} />}
              </div>
            </li>
          ))}
        </ol>
      );
  }
}

export function Blocos({ blocos }: { blocos: Bloco[] }) {
  return (
    <>
      {blocos.map((b, i) => (
        <BlocoConteudo key={i} bloco={b} />
      ))}
    </>
  );
}
