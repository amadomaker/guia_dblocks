import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Vamos criar o seu primeiro programa: fazer a luz vermelha da AmadoBoard piscar sem parar. Depois, você vai rodar o programa na placa e guardar ele lá dentro.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.piscaLedPronto, alt: 'Programa Pisca LED pronto na área de trabalho do Dblocks' },
    legenda: 'O programa pronto na área de trabalho.',
  },
  secoes: [
    {
      id: 'o-que-vamos-montar',
      titulo: 'O que vamos montar',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O LED é uma luzinha que fica na placa. O nosso programa vai dar quatro ordens, uma depois da outra, e repetir para sempre: acender o LED, esperar um segundo, apagar o LED e esperar mais um segundo. É isso que faz o LED piscar.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Ainda não conectou a placa?',
          texto: 'Volte ao capítulo 05. Se você ainda não tem a placa, o capítulo 19 mostra como testar circuitos no Simulador.',
        },
      ],
    },
    {
      id: 'o-laco-que-repete',
      etapa: 'PASSO 1',
      titulo: 'O laço que repete',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Clique em Controle, depois em Laços. Arraste o bloco repita enquanto para a área de trabalho e solte embaixo de Dados do projeto. Esse bloco faz tudo o que estiver dentro dele se repetir. Chamamos isso de laço.',
        },
        { tipo: 'caminho', itens: ['Controle', 'Laços', 'repita enquanto'] },
        {
          tipo: 'figuras',
          itens: [
            { imagem: { ...img.categoriaLacos, alt: 'Caixa de blocos com os blocos de Laços' }, legenda: 'Os blocos de Laços.' },
            {
              imagem: { ...img.blocoRepitaEnquanto, alt: 'Bloco repita enquanto encaixado embaixo de Dados do projeto' },
              legenda: 'O bloco repita enquanto na área de trabalho.',
            },
          ],
        },
      ],
    },
    {
      id: 'repetir-para-sempre',
      etapa: 'PASSO 2',
      titulo: 'Repetir para sempre',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O repita enquanto precisa saber até quando repetir. Clique em Variáveis, depois em Boleanas, e encaixe o bloco verdadeiro na ponta do repita enquanto. Assim, ele repete para sempre, sem parar.',
        },
        { tipo: 'caminho', itens: ['Variáveis', 'Boleanas', 'verdadeiro'] },
        {
          tipo: 'figuras',
          itens: [
            { imagem: { ...img.categoriaBoleanas, alt: 'Caixa de blocos com os blocos de Boleanas' }, legenda: 'Os blocos de Boleanas.' },
            {
              imagem: { ...img.condicaoVerdadeiro, alt: 'Bloco repita enquanto com o bloco verdadeiro encaixado na condição' },
              legenda: 'O laço com a condição verdadeiro.',
            },
          ],
        },
      ],
    },
    {
      id: 'acender-e-apagar-o-led',
      etapa: 'PASSO 3',
      titulo: 'Acender e apagar o LED',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Clique em Pinos entrada/saída e arraste dois blocos ajustar pino de saida para dentro do repita enquanto, um embaixo do outro. Eles vêm escolhendo a luz azul (D2 / LED AZUL). Clique no nome do pino e troque para D32 / LED VERMELHO nos dois. No segundo bloco, troque verdadeiro por falso.',
        },
        { tipo: 'caminho', itens: ['Pinos entrada/saída', 'ajustar pino de saida'] },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.categoriaPinos, alt: 'Caixa de blocos com os blocos de Pinos entrada/saída' },
              legenda: 'Os blocos de pinos de entrada e saída.',
            },
            {
              imagem: { ...img.trocandoOPino, alt: 'Lista de pinos aberta com D32 / LED VERMELHO selecionado' },
              legenda: 'Escolhendo D32 / LED VERMELHO na lista de pinos.',
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Verdadeiro acende, falso apaga',
          texto:
            'No bloco ajustar pino de saida, verdadeiro quer dizer ligado e falso quer dizer desligado. Por isso o primeiro bloco acende o LED e o segundo apaga.',
        },
      ],
    },
    {
      id: 'dando-um-tempo',
      etapa: 'PASSO 4',
      titulo: 'Dando um tempo',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Se não tiver uma pausa, o LED acende e apaga tão rápido que nem dá para ver. Clique em Controle, depois em Temporização, e coloque um bloco esperar 1 segundos embaixo de cada ajustar pino de saida. Assim o LED fica um segundo aceso e um segundo apagado.',
        },
        { tipo: 'caminho', itens: ['Controle', 'Temporização', 'esperar'] },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.categoriaTemporizacao, alt: 'Caixa de blocos com os blocos de Temporização' },
              legenda: 'Os blocos de Temporização.',
            },
            {
              imagem: { ...img.programaCompleto, alt: 'Programa Pisca LED completo com os blocos esperar entre os ajustes de pino' },
              legenda: 'O Pisca LED completo.',
            },
          ],
        },
      ],
    },
    {
      id: 'rodando-na-placa',
      titulo: 'Rodando na placa',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Conecte a placa', texto: 'Siga o capítulo 05. Quando a placa conecta, a tomada da barra de cima fica azul.' },
            { titulo: 'Clique em Executar o programa', texto: 'Olhe para a placa: a luz vermelha começa a piscar a cada segundo!' },
            {
              titulo: 'Para parar, clique de novo',
              texto: 'Enquanto o programa roda, o botão vira um quadrado. Clique nele para parar. Você pode rodar e parar quantas vezes quiser.',
            },
          ],
        },
        {
          tipo: 'figuras',
          semSombra: true,
          itens: [
            {
              imagem: { ...img.barraConectado, alt: 'Barra de cima com a tomada azul, mostrando a placa conectada' },
              legenda: 'Placa conectada, pronta para rodar.',
            },
            {
              imagem: { ...img.barraExecutando, alt: 'Barra de cima com o botão Executar transformado em quadrado' },
              legenda: 'Programa rodando. Clique no quadrado para parar.',
            },
          ],
        },
      ],
    },
    {
      id: 'gravando-na-placa',
      titulo: 'Gravando na placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O botão Executar o programa só funciona enquanto a placa está ligada no computador. Quer que a placa pisque sozinha, mesmo longe do computador? Clique em Salvar na placa (main.py), o botão com o desenho de um disquete, ao lado do Executar o programa. O programa fica guardado na placa e começa toda vez que ela ligar.',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.salvarNaPlaca, alt: 'Botão Salvar na placa (main.py) com o nome aparecendo embaixo' },
          legenda: 'O botão Salvar na placa (main.py). O nome aparece quando você para o mouse em cima.',
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
            { titulo: 'Troque a cor', texto: 'Use o D33 / LED VERDE ou o D2 / LED AZUL no lugar do vermelho.' },
            { titulo: 'Mude o ritmo', texto: 'Troque o 1 dos blocos esperar por 0.5. O LED vai piscar mais rápido!' },
            { titulo: 'Use os três LEDs', texto: 'Acenda a luz vermelha, depois a verde e depois a azul, como um semáforo.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Parabéns!',
          texto:
            'Você acabou de criar o seu primeiro programa e terminou a Trilha 1. Na próxima trilha, Programação em blocos, você vai aprender ainda mais truques com os blocos.',
        },
      ],
    },
  ],
};

export default conteudo;
