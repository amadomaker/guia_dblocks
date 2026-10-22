import type { ConteudoCapitulo } from '../../tipos';
import { links } from '../../../data/links';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Find out what Dblocks is, what you can create with it and how the blocks you build make the board work.',
  atualizadoEm: 'October 2026',
  abertura: {
    tipo: 'figura',
    imagem: {
      ...img.blocosPiscaLed,
      alt: 'Dblocks screen with the block box on the left and the Blink LED program built in the workspace',
    },
    legenda: 'The Dblocks screen with a program that makes the AmadoBoard red light blink.',
  },
  secoes: [
    {
      id: 'o-que-e-o-dblocks',
      titulo: 'What is Dblocks?',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Dblocks is a place to program with colorful blocks, right in your browser. You snap the blocks together like puzzle pieces. Each piece is an instruction for the board, like turning on a light, waiting or playing a sound.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'You don’t need to know anything about programming to start. With blocks, you can turn on lights, read sensors, move motors, play music and much more. Behind the blocks, Dblocks writes the program in the language the board understands.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Where Dblocks comes from',
          texto: `Dblocks was created from [BIPES](${links.bipes}), a free Brazilian block programming platform. Amado Maker got everything ready for the classroom and for the AmadoBoard.`,
        },
      ],
    },
    {
      id: 'o-que-voce-encontra-na-plataforma',
      titulo: 'What you will find on the platform',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'The Dblocks tabs are in the bar on the left side of the screen. Each tab opens a different part of the platform. These are the ones you will use the most:',
        },
        {
          tipo: 'cardsAbas',
          itens: [
            {
              imagem: { ...img.abaBlocos, alt: 'Blocks tab with the block box open on the Control category' },
              titulo: 'Blocks',
              texto: 'This is where you build your program by dragging blocks.',
              capitulo: 3,
            },
            {
              imagem: { ...img.abaSimulador, alt: 'Simulator tab with a battery, a resistor and an LED wired on the screen' },
              titulo: 'Simulator',
              texto: 'Build circuits on the screen and test your program even without the board.',
              capitulo: 19,
            },
            {
              imagem: { ...img.abaDispositivo, alt: 'Device tab showing the AmadoBoard from above with the pin names' },
              titulo: 'Device',
              texto: 'See the AmadoBoard in 3D and find out what each part of it is for.',
              capitulo: 12,
            },
            {
              recurso: 'jose',
              imagem: { ...img.abaIa, alt: 'AI tab with José’s head in 3D' },
              titulo: 'AI',
              texto: 'Talk to José, a robot with artificial intelligence, and change the way he acts using blocks.',
              capitulo: 26,
            },
          ],
        },
        {
          tipo: 'chipsAbas',
          rotulo: 'Other tabs:',
          itens: [
            { nome: 'Console', capitulo: 20 },
            { nome: 'Files', capitulo: 20 },
            { nome: 'IOT', capitulo: 25 },
            { nome: 'Music', capitulo: 17 },
            { nome: 'Vision', capitulo: 22 },
          ],
        },
      ],
    },
    {
      id: 'a-amadoboard',
      titulo: 'The AmadoBoard',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'The AmadoBoard is Amado Maker’s electronic board. Think of it as the brain of your projects: it receives the program and makes things happen. It already comes with lights (LEDs), a buzzer to make sounds, a temperature sensor, a light sensor, Wi‑Fi, Bluetooth and places to connect motors. So you can do a lot without building any circuit.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'In the Device tab you can rotate the board in 3D and see the name of each part. Chapter 11 shows all of this calmly.',
        },
      ],
    },
    {
      id: 'o-que-voce-vai-precisar',
      titulo: 'What you will need',
      blocos: [
        {
          tipo: 'requisitos',
          itens: [
            {
              icone: 'layout',
              titulo: 'A computer with Google Chrome or Microsoft Edge',
              texto: 'These browsers can talk to the board over the cable. You don’t need to install any program.',
            },
            {
              icone: 'plug',
              titulo: 'An AmadoBoard and a USB cable',
              texto: 'Don’t have the board yet? You can start with the Simulator.',
            },
            {
              icone: 'check',
              titulo: 'MicroPython on the board',
              texto:
                'It is what makes the board understand Dblocks programs. You flash it only once, and chapter 04 shows how to do it.',
            },
          ],
        },
      ],
    },
    {
      id: 'guia-rapido',
      titulo: 'Quick guide',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Connect the board', texto: 'Plug the AmadoBoard into the computer with the USB cable.' },
            { titulo: 'Open Dblocks', texto: 'Open Dblocks in the browser and sign in with your Google account.' },
            {
              titulo: 'Build and run',
              texto:
                'Drag the blocks to the workspace and click Run the program. It is the button with the ▷ drawing, on the top bar.',
              blocos: [
                {
                  tipo: 'figura',
                  tamanho: 'pequena',
                  imagem: {
                    ...img.botaoExecutar,
                    alt: 'Dblocks top bar with the Run the program button highlighted and its name showing below',
                  },
                  legenda: 'Tip: hold the mouse over a button to see its name.',
                },
              ],
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Tip',
          texto:
            'The buttons on the top bar don’t have their names written. But if you hold the mouse over one of them, the name shows up. Not sure? Just point at it!',
        },
      ],
    },
  ],
};

export default conteudo;
