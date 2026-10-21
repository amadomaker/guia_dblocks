import { publicado } from '../../config/recursos';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import { ChamadaFinal } from './ChamadaFinal';
import { Hero } from './Hero';
import { Jose } from './Jose';
import { Materiais } from './Materiais';
import { Projetos } from './Projetos';
import { Trilhas } from './Trilhas';

export default function Home() {
  useTituloDaPagina(null);

  return (
    <>
      <Hero />
      <Trilhas />
      <Projetos />
      {publicado('jose') && <Jose />}
      <Materiais />
      <ChamadaFinal />
    </>
  );
}
