import type { Bloco, ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

type Img = (typeof img)[keyof typeof img];

const exemplo = (titulo: string, texto: string, blocos: Img, altBlocos: string, console: Img, altConsole: string): Bloco => ({
  tipo: 'exemplo',
  titulo,
  texto,
  blocos: [
    {
      tipo: 'blocosEConsole',
      imagem: { ...blocos, alt: altBlocos },
      console: { ...console, alt: altConsole },
    },
  ],
});

const conteudo: ConteudoCapitulo = {
  descricao:
    'Faça o programa repetir coisas sem copiar os mesmos blocos várias vezes, e escolha quanto tempo esperar entre uma ação e outra.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.categoriaLacos, alt: 'Caixa de blocos com o grupo Laços aberto dentro de Controle' },
    legenda: 'Os blocos de laço ficam em Controle › Laços.',
  },
  secoes: [
    {
      id: 'o-que-e-um-laco',
      titulo: 'O que é um laço',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Imagine que você precisa bater palmas 10 vezes. Em vez de falar “bata palmas” 10 vezes, você pode dizer: “repita 10 vezes: bata palmas”. É isso que um laço faz no programa: ele repete os blocos que estão dentro dele.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Laço também é chamado de loop. Os blocos de laço ficam em Controle, no grupo Laços. Cada um repete de um jeito diferente. Veja os exemplos abaixo.',
        },
        { tipo: 'caminho', itens: ['Controle', 'Laços'] },
      ],
    },
    {
      id: 'os-tipos-de-laco',
      titulo: 'Os tipos de laço',
      blocos: [
        exemplo(
          '1. Repita algumas vezes',
          'O bloco repita 10 vezes faz o que está dentro dele quantas vezes você quiser. É só trocar o número. Aqui, ele mostra Olá! três vezes.',
          img.exemplo1,
          'Bloco repita 3 vezes com um imprime Olá! dentro',
          img.console1,
          'Console mostrando Olá! três vezes',
        ),
        exemplo(
          '2. Repita para sempre',
          'O repita enquanto com o bloco verdadeiro nunca para. É o laço mais usado com a placa, porque o programa precisa continuar rodando enquanto a placa está ligada. Aqui, a cada segundo, o contador ganha mais 1 e aparece no Console.',
          img.exemplo2,
          'Bloco repita enquanto verdadeiro somando 1 ao contador e esperando 1 segundo',
          img.console2,
          'Console mostrando os números 1, 2, 3 e 4, um por linha',
        ),
        exemplo(
          '3. Repita enquanto algo for verdade',
          'O repita enquanto também pode repetir só enquanto uma regra for verdade. Aqui, ele repete enquanto o número for menor que 5. Quando o número chega a 5, a regra deixa de ser verdade e o laço para.',
          img.exemplo3,
          'Bloco repita enquanto número menor que 5, somando 1 ao número a cada volta',
          img.console3,
          'Console mostrando os números de 1 a 4',
        ),
        exemplo(
          '4. Conte de um número até outro',
          'O contar com i de 1 até 10 por 1 conta para você. Na primeira volta, i vale 1. Na segunda, vale 2. E assim até 10. Aqui, cada número é multiplicado por 2, e o Console mostra a tabuada do 2.',
          img.exemplo4,
          'Bloco contar com i de 1 até 10 por 1, imprimindo i vezes 2',
          img.console4,
          'Console mostrando a tabuada do 2',
        ),
        exemplo(
          '5. Um item de cada vez',
          'O para cada item na lista passa por todos os itens de uma lista, um de cada vez. Aqui temos uma lista com três nomes, e o Console mostra um nome por vez.',
          img.exemplo5,
          'Bloco para cada item na lista com uma lista de três nomes',
          img.console5,
          'Console mostrando os três nomes, um por linha',
        ),
        exemplo(
          '6. Pare antes do fim',
          'O encerra o laço faz o laço parar na hora, mesmo sem ter terminado. Aqui, a contagem iria até 10, mas para quando chega no 6. Por isso o Console mostra só de 1 a 5.',
          img.exemplo6,
          'Bloco contar até 10 com um se que encerra o laço quando i chega a 6',
          img.console6,
          'Console mostrando os números de 1 a 5',
        ),
      ],
    },
    {
      id: 'controlando-o-tempo',
      titulo: 'Controlando o tempo',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O bloco esperar faz o programa dar uma pausa antes de continuar. Ele fica em Controle, no grupo Temporização. Você escolhe quanto tempo e em qual unidade:',
        },
        { tipo: 'caminho', itens: ['Controle', 'Temporização', 'esperar'] },
        {
          tipo: 'figuraComLista',
          layout: { colunas: 28, itens: 14, topo: 8, titulo: 17, linhaTexto: 23 },
          imagem: { ...img.unidadesEsperar, alt: 'Bloco esperar com a lista de unidades aberta: segundos, milisegundos e microsegundos' },
          itens: [
            { titulo: 'segundos', texto: 'O tempo do relógio. 1 segundo é mais ou menos o tempo de falar “mil e um”.' },
            { titulo: 'milisegundos', texto: 'Pedacinhos de um segundo: 1000 milisegundos são 1 segundo.' },
            { titulo: 'microsegundos', texto: 'Pedacinhos ainda menores. Quase nunca são usados nos primeiros projetos.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Laço para sempre precisa de pausa',
          texto:
            'Um laço que repete para sempre roda muito rápido. Coloque um esperar dentro dele para dar tempo de ver o que está acontecendo, como no Pisca LED do capítulo 06.',
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
            { titulo: 'Diga o seu nome', texto: 'Use o repita para mostrar o seu nome 5 vezes no Console.' },
            { titulo: 'Tabuada do 5', texto: 'Mude o exemplo 4 para mostrar a tabuada do 5.' },
            {
              titulo: 'Pisque só 10 vezes',
              texto: 'No Pisca LED, troque o repita enquanto por um repita 10 vezes. O que acontece no final?',
            },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
