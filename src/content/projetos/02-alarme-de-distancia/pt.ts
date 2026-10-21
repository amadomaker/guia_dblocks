import { links } from '../../../data/links';
import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Use o sensor ultrassônico para medir a distância e tocar o buzzer quando algo chegar perto.',
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
              capitulo: 14,
              texto: 'O que você usa: Como ligar o sensor ultrassônico no CONN 7 e medir a distância em milímetros.',
            },
            {
              capitulo: 8,
              texto: 'O que você usa: O se / senão e a comparação menor que, para decidir quando o alarme toca.',
            },
            { capitulo: 16, texto: 'O que você usa: O bloco de apito do buzzer, com frequência e duração.' },
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
            { titulo: 'AmadoBoard', texto: 'O buzzer e o LED vermelho já vêm na placa.' },
            { titulo: 'Sensor ultrassônico HC-SR04', texto: 'Mede a distância usando som.' },
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
              titulo: 'Encaixe o sensor ultrassônico no conector CONN 7.',
              texto: 'Ele já tem o lugar certo: trigger no D17 e echo no D34.',
              capitulo: 14,
            },
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
          empilhado: true,
          imagem: {
            ...img.blocosAlarme,
            alt: 'Programa do alarme: mede a distância e, se for menor que 200 mm, acende o LED vermelho e apita',
          },
          titulo: 'O que esse programa faz?',
          linhas: [
            { texto: 'Prepara o sensor ultrassônico: echo no D34 e trigger no D17.', capitulo: 14 },
            { texto: 'Mede a distância e guarda em distancia.', capitulo: 14 },
            {
              texto: 'Se a distância for menor que 200 mm (20 cm), acende o LED vermelho e apita.',
              capitulo: 8,
            },
            { texto: 'Senão, apaga o LED. Espera 100 milissegundos e repete.', capitulo: 8 },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Teste com a mão',
          texto: 'Aproxime a mão devagar do sensor e veja o alarme disparar quando passar de 20 centímetros.',
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
              titulo: 'Bipe que acelera',
              texto:
                'Faça o apito ficar mais rápido quanto mais perto estiver o objeto, como o sensor de ré de um carro.',
            },
            { titulo: 'Três zonas', texto: 'Use o verde para longe, o azul para perto e o vermelho para muito perto.' },
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
