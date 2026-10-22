import { links } from '../../../data/links';
import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Leia a temperatura com o sensor DHT11. Quando passar de 30 °C, o servo gira para abrir a janela e o LED vermelho acende.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    topo: 8,
    imagem: {
      ...img.capaSimulador,
      alt: 'Simulador do Dblocks com a AmadoBoard, o servo e o sensor DHT11 ligados, e os blocos do programa ao lado',
    },
    legenda: 'O circuito da janela automática montado no Simulador do Dblocks.',
  },
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
            { capitulo: 15, texto: 'O que você usa: Como ligar o DHT11 e ler a temperatura.' },
            { capitulo: 16, texto: 'O que você usa: Como ligar o servo no SERVO B e girar até um ângulo.' },
            {
              capitulo: 9,
              texto: 'O que você usa: O se / senão e a comparação maior que, para decidir quando abrir.',
            },
            {
              capitulo: 8,
              texto: 'O que você usa: O repita enquanto e o esperar, para ler a temperatura de tempos em tempos.',
            },
            {
              capitulo: 19,
              texto: 'O que você usa: Como montar e testar o circuito no Simulador, antes de usar a placa.',
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
            { titulo: 'AmadoBoard', texto: 'O LED vermelho já vem na placa.' },
            { titulo: 'Sensor DHT11', texto: 'Mede a temperatura e a umidade.' },
            { titulo: 'Servomotor', texto: 'Abre e fecha a janela.' },
            { titulo: 'Jumpers', texto: 'Para ligar o sensor e o jumper do servo.' },
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
            { titulo: 'Ligue o DHT11.', texto: 'VCC no 3V3, GND no GND e o sinal no D18, no conector CONN 4.', capitulo: 15 },
            { titulo: 'Ligue o servo no SERVO B.', texto: 'Marrom no GND, vermelho no VS e amarelo no D16.', capitulo: 16 },
            { titulo: 'Dê força para o servo.', texto: 'No CONN 5, coloque um jumper ligando o VS ao 5V.', capitulo: 16 },
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
            ...img.blocosJanela,
            alt: 'Programa da janela: lê a temperatura e, acima de 30 graus, gira o servo e acende o LED vermelho',
          },
          titulo: 'O que esse programa faz?',
          linhas: [
            { texto: 'Prepara o DHT11 no D18 e o servo no D16.', capitulo: 15 },
            { texto: 'Atualiza a leitura e guarda a temperatura.', capitulo: 15 },
            {
              texto: 'Se passar de 30 graus, gira o servo para 90 graus e acende o LED vermelho.',
              capitulo: 16,
            },
            { texto: 'Senão, volta o servo para 0 e apaga o LED.', capitulo: 9 },
            {
              texto: 'Espera 2 segundos e repete. O DHT11 precisa de pelo menos 1 segundo entre as leituras.',
              capitulo: 8,
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Monte primeiro no Simulador',
          texto: 'Na aba Simulador você testa o programa e o circuito sem a placa. Veja como no capítulo 18.',
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
            { titulo: 'Mostre a temperatura', texto: 'Escreva a temperatura no display OLED (capítulo 17).' },
            { titulo: 'Ventilador', texto: 'Troque o servo por um motor DC (capítulo 15) que liga quando esquenta.' },
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
