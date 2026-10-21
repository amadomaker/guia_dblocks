import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Conheça as peças da AmadoBoard e para que serve cada uma. Na aba Dispositivo você gira a placa em 3D, vê o nome dos pinos e faz um tour por todas as partes.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.placa3dComponentes, alt: 'AmadoBoard em 3D na aba Dispositivo, vista 3/4, com os componentes destacados' },
    legenda: 'A AmadoBoard em 3D na aba Dispositivo, na vista 3/4.',
  },
  secoes: [
    {
      id: 'o-que-e-a-amadoboard',
      titulo: 'O que é a AmadoBoard',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'A AmadoBoard é a placa eletrônica da Amado Maker, feita para aprender. Ela é o cérebro dos seus projetos: recebe o programa que você monta no Dblocks e faz as coisas acontecerem.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'O melhor é que ela já vem com muitas peças prontas: luzes, buzzer, sensor de temperatura, sensor de luz e lugar para ligar motores. Assim, você pode fazer muitos projetos sem montar nenhum circuito.',
        },
      ],
    },
    {
      id: 'a-placa-em-3d',
      titulo: 'A placa em 3D',
      blocos: [
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
                'Cada camada usa uma cor: vermelho para energia, laranja para entradas, azul para saídas e roxo para comunicação.',
            },
            { titulo: 'Comandos', texto: 'Tour guiado, Componentes e Explodir. Eles são explicados mais abaixo.' },
          ],
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
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'GND é o terra',
          texto:
            'Todo circuito precisa de um caminho de volta para a energia. Esse caminho é o GND. Por isso, quase todo sensor tem um fio ligado no GND.',
        },
      ],
    },
    {
      id: 'as-pecas-da-placa',
      titulo: 'As peças da placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Estas são as peças que mais vão aparecer nos seus projetos. Na aba Dispositivo, ligue a camada Componentes e pare o mouse em cima de uma peça para ver o nome dela. Clique na peça para ler mais.',
        },
        {
          tipo: 'tabela',
          larguraNome: 220,
          respiro: 13,
          itens: [
            { titulo: 'ESP32', texto: 'O cérebro da placa. Roda o seu programa e tem Wi‑Fi e Bluetooth.' },
            { titulo: 'Porta USB', texto: 'Onde você liga o cabo. Ela leva o programa e também dá energia para a placa.' },
            { titulo: 'Entrada 6 a 12V', texto: 'Para ligar uma fonte ou bateria quando o USB não dá conta, como com motores.' },
            { titulo: '3 LEDs', texto: 'Luzes já ligadas nos pinos: vermelha no D32, verde no D33 e azul no D2.' },
            { titulo: 'Buzzer', texto: 'Uma campainha no pino D4. Toca sons e músicas.' },
            { titulo: 'Sensor de luz (LDR)', texto: 'Percebe se o ambiente está claro ou escuro.' },
            { titulo: 'Sensor de temperatura (LM35)', texto: 'Mede a temperatura do ambiente.' },
            { titulo: 'Trimpot', texto: 'Um botão de girar que muda um valor, como um volume.' },
            { titulo: 'Driver dos motores', texto: 'Dá força para dois motores DC. Motor A no J1 e motor B no J3.' },
            { titulo: 'RESET e BOOT', texto: 'RESET reinicia a placa. BOOT quase nunca é usado no dia a dia.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Ligando o LDR, o LM35 e o trimpot',
          texto:
            'Esses três sensores saem no conector CONN 10. Para o programa ler um deles, ligue um fio (jumper) do CONN 10 até uma das entradas D34, D35, D36 ou D39.',
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
