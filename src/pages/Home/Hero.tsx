import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Busca } from '../../components/Busca/Busca';
import { rotaDoCapitulo } from '../../data/catalogo';
import { useIdioma, useRota, useT } from '../../i18n/contexto';
import { publicado } from '../../config/recursos';
import { useCatalogo } from '../../hooks/useCatalogo';
import styles from './Hero.module.css';

// Blocos decorativos ao redor do título. x/y/caixa = bounding box já rotacionada no Figma,
// medida a partir do centro do frame de 1920px; w = largura do bloco sem rotação.
const blocos = [
  { cor: '#ffb000', x: -805.33, y: 190, cw: 170.422, ch: 68.072, w: 166, rot: 6 },
  { cor: '#326eb4', x: -840, y: 318, cw: 175.139, ch: 62.874, w: 172, rot: -4 },
  { cor: '#e8590c', x: -732.67, y: 470, cw: 142.477, ch: 58.257, w: 140, rot: 3 },
  { cor: '#e64980', x: -710, y: 584.63, cw: 151.526, ch: 66.086, w: 147, rot: -6 },
  { cor: '#00a069', x: 600, y: 160.24, cw: 116.019, ch: 60.567, w: 112, rot: -5 },
  { cor: '#326eb4', x: 636.44, y: 320, cw: 158.18, ch: 61.688, w: 155, rot: 4 },
  { cor: '#5b4bc4', x: 560, y: 451.68, cw: 161.451, ch: 59.252, w: 159, rot: -3 },
  { cor: '#326eb4', x: 615.56, y: 600, cw: 161.844, ch: 64.577, w: 158, rot: 5 },
];

// Destinos dos chips "Mais procurados" (rótulos no dicionário, na mesma ordem).
const maisProcurados = [
  'conectando-a-placa',
  'atuadores-e-motores',
  'sensores',
  'simulador-de-circuitos',
  'wi-fi-e-internet',
  'displays',
];


// "Capítulos novos" do Figma (inclui o capítulo do José); não é a contagem dos selos do catálogo.
const CAPITULOS_NOVOS = 9;

export function Hero() {
  const t = useT();
  const rota = useRota();
  // A largura medida no Figma só vale para o texto em português.
  const larguraFixa = useIdioma() === 'pt';
  // Total de capítulos vem do catálogo: com o José oculto, o capítulo 26 sai da conta.
  const { trilhas, todosOsCapitulos } = useCatalogo();
  const numeros = [
    String(todosOsCapitulos.length),
    String(trilhas.length),
    String(CAPITULOS_NOVOS - (publicado('jose') ? 0 : 1)),
    '100%',
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.blocos} aria-hidden>
        {blocos.map((b, i) => (
          <span
            key={i}
            className={styles.bloco}
            style={
              {
                // Fração da largura do frame: em 1920px dá o mesmo ponto do Figma; em telas menores
                // (ex.: Windows com escala 125% → 1536px) os blocos se aproximam do centro.
                '--fx': (b.x + b.cw / 2) / 1920,
                '--cy': `${b.y + b.ch / 2}px`,
                '--w': larguraFixa ? `${b.w}px` : 'auto',
                '--rot': `${b.rot}deg`,
                '--cor': b.cor,
              } as CSSProperties
            }
          >
            {t.hero.blocos[i]}
          </span>
        ))}
      </div>

      <h1 className={styles.titulo}>
        {t.hero.titulo1}
        <br />
        <span>{t.hero.titulo2}</span>
      </h1>
      <p className={styles.subtitulo}>
        {t.hero.subtitulo1}
        <br />
        {t.hero.subtitulo2}
      </p>

      <div className={styles.busca}>
        <Busca />
        <div className={styles.maisProcurados}>
          <span className={styles.rotuloProcurados}>{t.hero.maisProcurados}</span>
          {maisProcurados.map((slug, i) => (
            <Link key={slug} to={rota(rotaDoCapitulo({ slug }))} className={styles.chip}>
              {t.hero.chips[i]}
            </Link>
          ))}
        </div>
      </div>

      <ul className={styles.numeros}>
        {numeros.map((valor, i) => (
          <li key={i}>
            <strong>{valor}</strong>
            <span>{t.hero.numeros[i]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
