import type { ConteudoCapitulo } from '../../tipos';
import { links } from '../../../data/links';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Descubra o que é o Dblocks, o que dá para criar com ele e como os blocos que você monta fazem a placa funcionar.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: {
      ...img.blocosPiscaLed,
      alt: 'Tela do Dblocks com a caixa de blocos à esquerda e o programa Pisca LED montado na área de trabalho',
    },
    legenda: 'A tela do Dblocks com um programa que faz a luz vermelha da AmadoBoard piscar.',
  },
  secoes: [
    {
      id: 'o-que-e-o-dblocks',
      titulo: 'O que é o Dblocks?',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O Dblocks é um lugar para programar usando blocos coloridos, direto no navegador. Você encaixa os blocos como peças de um quebra‑cabeça. Cada peça é uma ordem para a placa, como acender uma luz, esperar ou tocar um som.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Você não precisa saber nada de programação para começar. Com os blocos, dá para acender luzes, ler sensores, mover motores, tocar músicas e muito mais. Por trás dos blocos, o Dblocks escreve o programa na língua que a placa entende.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'De onde vem o Dblocks',
          texto: `O Dblocks foi criado a partir do [BIPES](${links.bipes}), uma plataforma brasileira e gratuita de programação com blocos. A Amado Maker deixou tudo pronto para a sala de aula e para a AmadoBoard.`,
        },
      ],
    },
    {
      id: 'o-que-voce-encontra-na-plataforma',
      titulo: 'O que você encontra na plataforma',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'As abas do Dblocks ficam na barra do lado esquerdo da tela. Cada aba abre uma parte diferente da plataforma. Estas são as que você mais vai usar:',
        },
        {
          tipo: 'cardsAbas',
          itens: [
            {
              imagem: { ...img.abaBlocos, alt: 'Aba Blocos com a caixa de blocos aberta na categoria Controle' },
              titulo: 'Blocos',
              texto: 'É aqui que você monta o seu programa, arrastando os blocos.',
              capitulo: 3,
            },
            {
              imagem: { ...img.abaSimulador, alt: 'Aba Simulador com uma bateria, um resistor e um LED ligados na tela' },
              titulo: 'Simulador',
              texto: 'Monte circuitos na tela e teste o seu programa mesmo sem ter a placa.',
              capitulo: 19,
            },
            {
              imagem: { ...img.abaDispositivo, alt: 'Aba Dispositivo mostrando a AmadoBoard vista de cima com os nomes dos pinos' },
              titulo: 'Dispositivo',
              texto: 'Veja a AmadoBoard em 3D e descubra para que serve cada parte dela.',
              capitulo: 12,
            },
            {
              recurso: 'jose',
              imagem: { ...img.abaIa, alt: 'Aba IA com a cabeça do José em 3D' },
              titulo: 'IA',
              texto: 'Converse com o José, um robô com inteligência artificial, e mude o jeito dele usando blocos.',
              capitulo: 26,
            },
          ],
        },
        {
          tipo: 'chipsAbas',
          rotulo: 'Outras abas:',
          itens: [
            { nome: 'Console', capitulo: 20 },
            { nome: 'Arquivos', capitulo: 20 },
            { nome: 'IOT', capitulo: 25 },
            { nome: 'Música', capitulo: 17 },
            { nome: 'Visão', capitulo: 22 },
          ],
        },
      ],
    },
    {
      id: 'a-amadoboard',
      titulo: 'A AmadoBoard',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'A AmadoBoard é a placa eletrônica da Amado Maker. Pense nela como o cérebro dos seus projetos: é ela que recebe o programa e faz as coisas acontecerem. Ela já vem com luzes (LEDs), um buzzer para fazer sons, sensor de temperatura, sensor de luz, Wi‑Fi, Bluetooth e lugares para ligar motores. Assim, dá para fazer muita coisa sem montar nenhum circuito.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Na aba Dispositivo você pode girar a placa em 3D e ver o nome de cada parte. O capítulo 12 mostra tudo isso com calma.',
        },
      ],
    },
    {
      id: 'o-que-voce-vai-precisar',
      titulo: 'O que você vai precisar',
      blocos: [
        {
          tipo: 'requisitos',
          itens: [
            {
              icone: 'layout',
              titulo: 'Um computador com Google Chrome ou Microsoft Edge',
              texto: 'Esses navegadores conseguem conversar com a placa pelo cabo. Não precisa instalar nenhum programa.',
            },
            {
              icone: 'plug',
              titulo: 'Uma AmadoBoard e um cabo USB',
              texto: 'Ainda não tem a placa? Você pode começar pelo Simulador.',
            },
            {
              icone: 'check',
              titulo: 'O MicroPython na placa',
              texto:
                'É ele que faz a placa entender os programas do Dblocks. Ele é gravado uma vez só, e o capítulo 05 mostra como fazer.',
            },
          ],
        },
      ],
    },
    {
      id: 'guia-rapido',
      titulo: 'Guia rápido',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Conecte a placa', texto: 'Ligue a AmadoBoard no computador usando o cabo USB.' },
            { titulo: 'Abra o Dblocks', texto: 'Abra o Dblocks no navegador e entre com a sua conta Google.' },
            {
              titulo: 'Monte e execute',
              texto:
                'Arraste os blocos para a área de trabalho e clique em Executar o programa. É o botão com o desenho ▷, na barra de cima.',
              blocos: [
                {
                  tipo: 'figura',
                  tamanho: 'pequena',
                  imagem: {
                    ...img.botaoExecutar,
                    alt: 'Barra de cima do Dblocks com o botão Executar o programa destacado e o nome aparecendo embaixo',
                  },
                  legenda: 'Dica: pare o mouse em cima de um botão para ver o nome dele.',
                },
              ],
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Dica',
          texto:
            'Os botões da barra de cima não têm o nome escrito. Mas, se você parar o mouse em cima de um deles, o nome aparece. Ficou em dúvida? É só apontar!',
        },
      ],
    },
  ],
};

export default conteudo;
