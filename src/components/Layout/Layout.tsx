import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useIdioma, useT } from '../../i18n/contexto';
import { infoIdioma } from '../../i18n/idiomas';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

/** Rola até a âncora do hash (ex.: /#trilhas) ou volta ao topo ao trocar de página. */
function useRolagemDeRota() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Espera o conteúdo da rota montar antes de procurar o alvo.
      const id = decodeURIComponent(hash.slice(1));
      const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export function Layout() {
  const idioma = useIdioma();
  const t = useT();
  useRolagemDeRota();

  useEffect(() => {
    document.documentElement.lang = infoIdioma[idioma].html;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.descricao);
  }, [idioma, t]);

  return (
    <>
      <a href="#conteudo" className="pular-para-conteudo">
        {t.comum.pularParaConteudo}
      </a>
      <Navbar />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
