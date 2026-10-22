import { links } from '../../../data/links';
import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Junte o sensor TCRT5000 e os dois motores DC para o carrinho seguir uma linha no chão.',
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
            { capitulo: 15, texto: 'O que você usa: Como o sensor infravermelho lê 0 ou 1 e onde ligar o sinal.' },
            {
              capitulo: 16,
              texto: 'O que você usa: Como ligar os motores DC no J1 e no J3 e mudar a potência e a direção.',
            },
            {
              capitulo: 9,
              texto: 'O que você usa: O se / senão se / senão, para escolher entre virar ou seguir em frente.',
            },
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
            { titulo: 'AmadoBoard' },
            { titulo: '2 sensores infravermelhos', texto: 'Modelo TCRT5000.' },
            { titulo: '2 motores DC com rodas', texto: 'E um chassi de carrinho.' },
            { titulo: 'Fonte ou bateria de 9V', texto: 'Motores gastam muita energia.' },
            { titulo: 'Fita isolante preta', texto: 'Para fazer a pista.' },
          ],
        },
      ],
    },
    {
      id: 'montagem',
      titulo: 'Montagem',
      blocos: [
        {
          tipo: 'passos',
          montagem: true,
          itens: [
            {
              titulo: 'Ligue os sensores na frente do carrinho.',
              texto: 'Esquerda: sinal no D35 (CONN 1). Direita: sinal no D36 (CONN 8). VCC no 3V3 e GND no GND.',
              capitulo: 15,
            },
            { titulo: 'Ligue os motores.', texto: 'Motor da esquerda no J1 e motor da direita no J3.', capitulo: 16 },
            { titulo: 'Ligue a bateria na entrada J2.', texto: 'Sem ela, os motores ficam fracos.', capitulo: 16 },
            { titulo: 'Faça a pista.', texto: 'Cole fita preta no chão claro, com curvas suaves.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Use o 3V3 nos sensores',
          texto:
            'Os pinos da placa trabalham com até 3,3V. Ligar 5V direto em um pino de entrada pode estragar a placa.',
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
            ...img.blocosCarrinho,
            alt: 'Programa do carrinho: lê os dois sensores e decide qual motor anda para seguir a linha',
          },
          titulo: 'O que esse programa faz?',
          linhas: [
            { texto: 'Prepara o motor1 (J1) e o motor2 (J3) e põe a potência dos dois em 700.', capitulo: 16 },
            {
              texto: 'Lê os sensores: esquerda no D35 e direita no D36. Sobre a linha preta, o sensor lê 1.',
              capitulo: 15,
            },
            {
              texto: 'Se a esquerda vê a linha, para o motor1 e anda com o motor2: o carrinho vira para a esquerda.',
              capitulo: 9,
            },
            {
              texto: 'Se a direita vê a linha, anda com o motor1 e para o motor2: vira para a direita.',
              capitulo: 9,
            },
            {
              texto: 'Se nenhum vê a linha, os dois motores andam e o carrinho segue em frente.',
              capitulo: 16,
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Teste os sensores antes',
          texto:
            'Use o exemplo do sensor infravermelho do capítulo 14 para ver se cada sensor lê 1 em cima da fita.',
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
              titulo: 'Parada de segurança',
              texto: 'Pare o carrinho quando o sensor ultrassônico encontrar um obstáculo.',
            },
            {
              titulo: 'Mais rápido',
              texto: 'Aumente a potência aos poucos e veja até onde o carrinho ainda consegue fazer as curvas.',
            },
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
