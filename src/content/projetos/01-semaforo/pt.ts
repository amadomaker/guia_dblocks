import { links } from '../../../data/links';
import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Acenda os 3 LEDs da AmadoBoard na ordem certa e controle o tempo de cada cor.',
  atualizadoEm: 'outubro de 2026',
  secoes: [
    {
      id: 'capitulos-que-voce-vai-usar',
      titulo: 'Capítulos que você vai usar',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Este projeto junta o que você aprende nestes capítulos. Não fez algum deles ainda? Tudo bem: abra o capítulo quando chegar na parte que usa ele e depois volte para cá.',
        },
        {
          tipo: 'capitulosUsados',
          itens: [
            {
              capitulo: 7,
              texto:
                'O que você usa: O repita enquanto, para o semáforo nunca parar, e o esperar, para dar o tempo de cada cor.',
            },
            { capitulo: 12, texto: 'O que você usa: O ajustar pino de saida, para acender e apagar cada LED.' },
          ],
        },
      ],
    },
    {
      id: 'voce-vai-precisar',
      titulo: 'Você vai precisar',
      blocos: [
        {
          tipo: 'materiais',
          itens: [
            { titulo: 'AmadoBoard', texto: 'Os 3 LEDs já vêm na placa.' },
            { titulo: 'Cabo USB', texto: 'Para levar o programa.' },
          ],
        },
      ],
    },
    {
      id: 'os-blocos',
      titulo: 'Os blocos',
      blocos: [
        {
          tipo: 'programa',
          imagem: {
            ...img.blocosSemaforo,
            alt: 'Programa do semáforo: acende o verde, o azul e o vermelho com esperas entre eles, repetindo para sempre',
          },
          titulo: 'O que esse programa faz?',
          linhas: [
            { texto: 'Acende o LED verde (D33) e espera 3 segundos.', capitulo: 12 },
            { texto: 'Apaga o verde e acende o azul (D2) por 1 segundo. Ele faz o papel do amarelo.', capitulo: 12 },
            { texto: 'Apaga o azul e acende o vermelho (D32) por 3 segundos.', capitulo: 12 },
            { texto: 'Apaga o vermelho e repete tudo para sempre.', capitulo: 7 },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Por que azul?',
          texto: 'A placa tem LEDs vermelho, verde e azul. No nosso semáforo, o azul avisa que o sinal vai fechar.',
        },
      ],
    },
    {
      id: 'desafios',
      titulo: 'Desafios',
      blocos: [
        {
          tipo: 'desafios',
          itens: [
            {
              titulo: 'Sinal para pedestres',
              texto: 'Coloque um botão (capítulo 12): quando apertado, o sinal fecha mais rápido.',
            },
            { titulo: 'Hora do rush', texto: 'Deixe o verde aceso por mais tempo e o vermelho por menos.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Quer mais projetos?',
          texto: `O PDF [Dblocks na prática](${links.pdfDblocksNaPratica}) tem mais 15 projetos básicos e de música, um por página, prontos para imprimir.`,
        },
      ],
    },
  ],
};

export default conteudo;
