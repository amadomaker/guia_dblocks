import { publicado } from '../../config/recursos';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoDblocks from '../../assets/brand/logo-dblocks.svg';
import { Icon } from '../Icon/Icon';
import { links } from '../../data/links';
import { useCaminho, useIdioma, useRota, useT } from '../../i18n/contexto';
import { comIdioma, idiomas, idiomasPublicados, infoIdioma } from '../../i18n/idiomas';
import styles from './Navbar.module.css';

function SeletorDeIdioma() {
  const [aberto, setAberto] = useState(false);
  const atual = useIdioma();
  const t = useT();
  const caminho = useCaminho();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const fechar = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)) setAberto(false);
    };
    document.addEventListener('mousedown', fechar);
    document.addEventListener('keydown', fechar);
    return () => {
      document.removeEventListener('mousedown', fechar);
      document.removeEventListener('keydown', fechar);
    };
  }, [aberto]);

  return (
    <div className={styles.idioma} ref={ref}>
      <button
        type="button"
        className={styles.idiomaBotao}
        aria-haspopup="listbox"
        aria-expanded={aberto}
        aria-label={`${t.nav.idioma}: ${infoIdioma[atual].nome}`}
        onClick={() => setAberto((v) => !v)}
      >
        <Icon name="globe" size={18} />
        <span>{infoIdioma[atual].codigo}</span>
        <Icon name="chevron-down" size={16} className={aberto ? styles.chevronAberto : undefined} />
      </button>
      {aberto && (
        <ul className={styles.idiomaLista} role="listbox" aria-label={t.nav.idioma}>
          {idiomas.map((i) => {
            const publicado = idiomasPublicados.includes(i);
            return (
            <li key={i}>
              <button
                type="button"
                role="option"
                aria-selected={i === atual}
                aria-disabled={!publicado}
                disabled={!publicado}
                lang={infoIdioma[i].html}
                className={styles.idiomaOpcao}
                onClick={() => {
                  setAberto(false);
                  navigate(comIdioma(i, caminho) + hash);
                }}
              >
                <span className={styles.idiomaCodigo}>{infoIdioma[i].codigo}</span>
                {infoIdioma[i].nome}
                {!publicado && <span className={styles.emBreve}>{t.nav.emBreve}</span>}
              </button>
            </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Navbar() {
  const t = useT();
  const rota = useRota();
  const caminho = useCaminho();
  const { hash } = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => setMenuAberto(false), [caminho, hash]);

  const itens = [
    { rotulo: t.nav.inicio, para: '/', ativo: caminho === '/' && hash === '' },
    { rotulo: t.nav.primeirosPassos, para: '/#primeiros-passos', ativo: hash === '#primeiros-passos' },
    { rotulo: t.nav.trilhas, para: '/#trilhas', ativo: caminho.startsWith('/capitulos') || hash === '#trilhas' },
    { rotulo: t.nav.projetos, para: '/projetos', ativo: caminho.startsWith('/projetos') },
    ...(publicado('jose') ? [{ rotulo: t.nav.jose, para: '/#jose', ativo: hash === '#jose' }] : []),
    { rotulo: t.nav.materiais, para: '/#materiais', ativo: hash === '#materiais' },
  ];

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.barra}`}>
        <Link to={rota('/')} className={styles.marca} aria-label={t.comum.paginaInicial}>
          <img src={logoDblocks} alt="Dblocks" width={174.245} height={56.128} className={styles.logo} />
          <span className={styles.seloGuia}>
            <Icon name="book" size={16} />
            {t.nav.selo}
          </span>
        </Link>

        <nav id="menu-principal" className={`${styles.links} ${menuAberto ? styles.linksAbertos : ''}`} aria-label={t.nav.principal}>
          {itens.map((item) => (
            <Link key={item.para} to={rota(item.para)} className={styles.link} aria-current={item.ativo ? 'page' : undefined}>
              {item.rotulo}
            </Link>
          ))}
        </nav>

        <div className={styles.acoes}>
          <SeletorDeIdioma />
          <a className={styles.abrir} href={links.dblocks} target="_blank" rel="noreferrer">
            {t.comum.abrirDblocks}
          </a>
          <button
            type="button"
            className={styles.menuBotao}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? t.nav.fecharMenu : t.nav.abrirMenu}
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
