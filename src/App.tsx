import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { IdiomaProvider } from './i18n/IdiomaProvider';
import { idiomasPublicados, infoIdioma } from './i18n/idiomas';
import Capitulo from './pages/Capitulo/Capitulo';
import Home from './pages/Home/Home';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import Legal from './pages/Legal/Legal';
import Projeto from './pages/Projeto/Projeto';
import Projetos from './pages/Projetos/Projetos';

// Uma árvore de rotas por idioma: pt na raiz, /en e /es com prefixo.
const rotas: RouteObject[] = idiomasPublicados.map((idioma) => ({
  path: infoIdioma[idioma].prefixo || '/',
  element: (
    <IdiomaProvider idioma={idioma}>
      <Layout />
    </IdiomaProvider>
  ),
  children: [
    { index: true, element: <Home /> },
    { path: 'capitulos/:slug', element: <Capitulo /> },
    { path: 'projetos', element: <Projetos /> },
    { path: 'projetos/:slug', element: <Projeto /> },
    { path: 'privacidade', element: <Legal slug="privacidade" /> },
    { path: 'termos', element: <Legal slug="termos" /> },
    { path: '*', element: <NaoEncontrada /> },
  ],
}));

const router = createBrowserRouter(rotas);

export default function App() {
  return <RouterProvider router={router} />;
}
