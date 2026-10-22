import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Na aba Dispositivo você gira a AmadoBoard em 3D, liga camadas para ver os pinos, faz um tour por todas as partes e conhece os componentes que podem ser ligados nela.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.placa3dComponentes, alt: 'AmadoBoard em 3D na aba Dispositivo, vista 3/4, com os componentes destacados' },
    legenda: 'A AmadoBoard em 3D na aba Dispositivo, na vista 3/4.',
  },
  secoes: [
    {
      id: 'a-placa-em-3d',
      titulo: 'A placa em 3D',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'No capítulo Conhecendo a AmadoBoard você viu as peças da placa. Aqui você vai encontrar cada uma delas no Dblocks, com a placa em 3D.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Abra a aba Dispositivo, o ícone de um chip na barra da esquerda. A AmadoBoard aparece em 3D, em cima de uma bancada. Arraste com o mouse para girar e use a rodinha para chegar mais perto.',
        },
        {
          tipo: 'figuraComLista',
          layout: { itens: 16, topo: 4, linhaTexto: 23 },
          imagem: {
            ...img.painelDispositivo,
            alt: 'Painel da aba Dispositivo com as vistas, as camadas de Ver na placa e os comandos Tour guiado, Componentes e Explodir',
            recorte: { x: -1.45, y: -1.96, largura: 101.45, altura: 101.78 },
          },
          itens: [
            { titulo: 'Vistas', texto: 'No canto de cima, escolha Superior, Frente, 3/4 ou Verso para ver a placa de outro jeito.' },
            {
              titulo: 'Ver na placa',
              texto: 'Ligue e desligue camadas: Nomes dos pinos, Componentes, Energia, Entradas, Saídas digitais e Comunicação.',
            },
            {
              titulo: 'Cores',
              texto:
                'Cada camada usa uma cor: vermelho para energia, preto para o GND, laranja para entradas, azul para saídas e roxo para comunicação.',
            },
            { titulo: 'Comandos', texto: 'Tour guiado, Componentes e Explodir. Eles são explicados mais abaixo.' },
          ],
        },
        {
          tipo: 'paragrafo',
          texto:
            'Ligue a camada Componentes e pare o mouse em cima de uma peça para ver o nome dela. Clique na peça para ler mais.',
        },
      ],
    },
    {
      id: 'os-pinos-da-placa',
      titulo: 'Os pinos da placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os pinos são as perninhas onde você liga sensores, luzes e motores. Cada um tem um nome, como D32 ou GND. Os nomes aparecem na vista Superior. Ligue a camada Energia e a placa mostra onde estão os pinos que dão energia: 3V3, 5V, VS e GND.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.camadaEnergia, alt: 'AmadoBoard na vista Superior com a camada Energia destacando os pinos 3V3, 5V, VS e GND' },
          legenda: 'A vista Superior com a camada Energia ligada.',
        },
      ],
    },
    {
      id: 'tour-guiado-e-componentes',
      titulo: 'Tour guiado e componentes',
      blocos: [
        {
          tipo: 'textoComFigura',
          titulo: 'Tour guiado',
          paragrafos: [
            'Clique em Tour guiado para conhecer a placa passo a passo. A câmera vai até cada peça e um cartão explica para que ela serve. Use Próximo e Anterior para andar pelas 15 paradas.',
            'Cada cartão também mostra em qual categoria de blocos você usa aquela peça no Dblocks.',
          ],
          imagem: { ...img.cartaoTour, alt: 'Cartão do tour guiado explicando uma peça da placa, com os botões Anterior e Próximo' },
        },
        { tipo: 'subtitulo', texto: 'Componentes' },
        {
          tipo: 'paragrafo',
          texto:
            'O comando Componentes mostra uma parede com sensores, atuadores e peças básicas que podem ser ligados na placa, como o sensor ultrassônico, o servo motor e o display OLED. Clique em um deles para saber mais.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.painelComponentes, alt: 'Parede de componentes com sensores, atuadores e peças básicas para ligar na placa' },
        },
        { tipo: 'subtitulo', texto: 'Explodir' },
        {
          tipo: 'paragrafo',
          texto:
            'O comando Explodir separa as peças da placa no ar, como se ela fosse desmontada. Assim dá para ver o que fica embaixo de cada peça.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.placaExplodida, alt: 'AmadoBoard explodida, com as peças separadas no ar' },
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
              titulo: 'Ache o buzzer',
              texto: 'Ligue a camada Componentes e passe o mouse pela placa até achar o buzzer. Em qual pino ele está ligado?',
            },
            { titulo: 'Faça o tour', texto: 'Faça o tour guiado até o fim. Qual peça você achou mais interessante?' },
            { titulo: 'Onde está o GND?', texto: 'Na vista Superior, ligue a camada Energia e conte quantos pinos GND aparecem.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
