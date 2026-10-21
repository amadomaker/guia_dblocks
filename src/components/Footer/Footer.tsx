import { publicado } from '../../config/recursos';
import { Link } from 'react-router-dom';
import logoDblocks from '../../assets/brand/logo-dblocks.svg';
import logoAmadoMaker from '../../assets/brand/logo-amado-maker.png';
import { links } from '../../data/links';
import { useRota, useT } from '../../i18n/contexto';
import styles from './Footer.module.css';

type LinkRodape = { rotulo: string; para: string; externo?: boolean };

export function Footer() {
  const t = useT();
  const rota = useRota();
  const l = t.rodape.links;

  const colunas: { titulo: string; links: LinkRodape[] }[] = [
    {
      titulo: t.rodape.colunas.guia,
      links: [
        { rotulo: l.primeirosPassos, para: '/#primeiros-passos' },
        { rotulo: l.trilhas, para: '/#trilhas' },
        { rotulo: l.projetos, para: '/projetos' },
        { rotulo: l.materiais, para: '/#materiais' },
      ],
    },
    {
      titulo: t.rodape.colunas.escolas,
      links: [
        { rotulo: l.digitalmenteMaker, para: links.digitalmenteMaker, externo: true },
        { rotulo: l.salaMaker, para: links.salaMaker, externo: true },
        { rotulo: l.demonstracao, para: links.contato, externo: true },
      ],
    },
    {
      titulo: t.rodape.colunas.plataforma,
      links: [
        { rotulo: l.experimentar, para: links.dblocks, externo: true },
        { rotulo: l.simulador, para: links.simulador, externo: true },
        { rotulo: l.site, para: links.siteDblocks, externo: true },
      ],
    },
  ];

  return (
    <footer className={styles.rodape}>
      <div className="container">
        <div className={styles.topo}>
          <div className={styles.marca}>
            <Link to={rota('/')} aria-label={t.comum.paginaInicial}>
              <img src={logoDblocks} alt="Dblocks" width={174.245} height={56.128} className={styles.logo} />
            </Link>
            <p className={styles.descricao}>{publicado('jose') ? t.rodape.descricao : t.rodape.descricaoSemJose}</p>
            <div className={styles.plataforma}>
              <span>{t.rodape.umaPlataforma}</span>
              <img src={logoAmadoMaker} alt="Amado Maker" width={70} height={40} className={styles.logoAmado} />
            </div>
          </div>

          {colunas.map((coluna) => (
            <nav key={coluna.titulo} className={styles.coluna} aria-label={coluna.titulo}>
              <p className={styles.tituloColuna}>{coluna.titulo}</p>
              {coluna.links.map((link) =>
                link.externo ? (
                  <a key={link.rotulo} href={link.para} className={styles.link} target="_blank" rel="noreferrer">
                    {link.rotulo}
                  </a>
                ) : (
                  <Link key={link.rotulo} to={rota(link.para)} className={styles.link}>
                    {link.rotulo}
                  </Link>
                ),
              )}
            </nav>
          ))}
        </div>

        <div className={styles.base}>
          <p className={styles.copyright}>{t.rodape.direitos}</p>
          <span className={styles.espaco} />
          <a href={links.bipes} target="_blank" rel="noreferrer" className={styles.bipes}>
            {t.rodape.bipesAntes}
            <span>BIPES</span>
            {t.rodape.bipesDepois}
          </a>
          <Link to={rota('/privacidade')} className={styles.legal}>
            {t.rodape.privacidade}
          </Link>
          <Link to={rota('/termos')} className={styles.legal}>
            {t.rodape.termos}
          </Link>
        </div>
      </div>
    </footer>
  );
}
