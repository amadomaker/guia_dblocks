import type { ConteudoCapitulo } from '../../tipos';
import { links } from '../../../data/links';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Descubre qué es Dblocks, qué puedes crear con él y cómo los bloques que armas hacen funcionar la placa.',
  atualizadoEm: 'octubre de 2026',
  abertura: {
    tipo: 'figura',
    imagem: {
      ...img.blocosPiscaLed,
      alt: 'Pantalla de Dblocks con la caja de bloques a la izquierda y el programa LED intermitente armado en el área de trabajo',
    },
    legenda: 'La pantalla de Dblocks con un programa que hace parpadear la luz roja de la AmadoBoard.',
  },
  secoes: [
    {
      id: 'o-que-e-o-dblocks',
      titulo: '¿Qué es Dblocks?',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Dblocks es un lugar para programar con bloques de colores, directo en el navegador. Encajas los bloques como piezas de un rompecabezas. Cada pieza es una orden para la placa, como encender una luz, esperar o tocar un sonido.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'No necesitas saber nada de programación para empezar. Con los bloques puedes encender luces, leer sensores, mover motores, tocar música y mucho más. Detrás de los bloques, Dblocks escribe el programa en el idioma que entiende la placa.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'De dónde viene Dblocks',
          texto: `Dblocks se creó a partir de [BIPES](${links.bipes}), una plataforma brasileña y gratuita de programación con bloques. Amado Maker dejó todo listo para el aula y para la AmadoBoard.`,
        },
      ],
    },
    {
      id: 'o-que-voce-encontra-na-plataforma',
      titulo: 'Qué encuentras en la plataforma',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Las pestañas de Dblocks están en la barra del lado izquierdo de la pantalla. Cada pestaña abre una parte diferente de la plataforma. Estas son las que más vas a usar:',
        },
        {
          tipo: 'cardsAbas',
          itens: [
            {
              imagem: { ...img.abaBlocos, alt: 'Pestaña Bloques con la caja de bloques abierta en la categoría Control' },
              titulo: 'Bloques',
              texto: 'Aquí armas tu programa arrastrando los bloques.',
              capitulo: 3,
            },
            {
              imagem: { ...img.abaSimulador, alt: 'Pestaña Simulador con una batería, una resistencia y un LED conectados en la pantalla' },
              titulo: 'Simulador',
              texto: 'Arma circuitos en la pantalla y prueba tu programa aunque no tengas la placa.',
              capitulo: 19,
            },
            {
              imagem: { ...img.abaDispositivo, alt: 'Pestaña Dispositivo mostrando la AmadoBoard vista desde arriba con los nombres de los pines' },
              titulo: 'Dispositivo',
              texto: 'Mira la AmadoBoard en 3D y descubre para qué sirve cada parte.',
              capitulo: 12,
            },
            {
              recurso: 'jose',
              imagem: { ...img.abaIa, alt: 'Pestaña IA con la cabeza de José en 3D' },
              titulo: 'IA',
              texto: 'Conversa con José, un robot con inteligencia artificial, y cambia su forma de ser usando bloques.',
              capitulo: 26,
            },
          ],
        },
        {
          tipo: 'chipsAbas',
          rotulo: 'Otras pestañas:',
          itens: [
            { nome: 'Consola', capitulo: 20 },
            { nome: 'Archivos', capitulo: 20 },
            { nome: 'IOT', capitulo: 25 },
            { nome: 'Música', capitulo: 17 },
            { nome: 'Visión', capitulo: 22 },
          ],
        },
      ],
    },
    {
      id: 'a-amadoboard',
      titulo: 'La AmadoBoard',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'La AmadoBoard es la placa electrónica de Amado Maker. Piensa en ella como el cerebro de tus proyectos: es la que recibe el programa y hace que las cosas pasen. Ya viene con luces (LEDs), un buzzer para hacer sonidos, sensor de temperatura, sensor de luz, Wi‑Fi, Bluetooth y lugares para conectar motores. Así puedes hacer muchas cosas sin armar ningún circuito.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'En la pestaña Dispositivo puedes girar la placa en 3D y ver el nombre de cada parte. El capítulo 11 muestra todo esto con calma.',
        },
      ],
    },
    {
      id: 'o-que-voce-vai-precisar',
      titulo: 'Lo que vas a necesitar',
      blocos: [
        {
          tipo: 'requisitos',
          itens: [
            {
              icone: 'layout',
              titulo: 'Una computadora con Google Chrome o Microsoft Edge',
              texto: 'Estos navegadores pueden hablar con la placa por el cable. No hace falta instalar ningún programa.',
            },
            {
              icone: 'plug',
              titulo: 'Una AmadoBoard y un cable USB',
              texto: '¿Todavía no tienes la placa? Puedes empezar por el Simulador.',
            },
            {
              icone: 'check',
              titulo: 'MicroPython en la placa',
              texto:
                'Es lo que hace que la placa entienda los programas de Dblocks. Se graba una sola vez, y el capítulo 04 muestra cómo hacerlo.',
            },
          ],
        },
      ],
    },
    {
      id: 'guia-rapido',
      titulo: 'Guía rápida',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Conecta la placa', texto: 'Conecta la AmadoBoard a la computadora con el cable USB.' },
            { titulo: 'Abre Dblocks', texto: 'Abre Dblocks en el navegador y entra con tu cuenta de Google.' },
            {
              titulo: 'Arma y ejecuta',
              texto:
                'Arrastra los bloques al área de trabajo y haz clic en Ejecutar el programa. Es el botón con el dibujo ▷, en la barra de arriba.',
              blocos: [
                {
                  tipo: 'figura',
                  tamanho: 'pequena',
                  imagem: {
                    ...img.botaoExecutar,
                    alt: 'Barra de arriba de Dblocks con el botón Ejecutar el programa resaltado y su nombre apareciendo abajo',
                  },
                  legenda: 'Consejo: deja el mouse sobre un botón para ver su nombre.',
                },
              ],
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Consejo',
          texto:
            'Los botones de la barra de arriba no tienen el nombre escrito. Pero si dejas el mouse sobre uno de ellos, aparece el nombre. ¿Tienes dudas? ¡Solo apunta!',
        },
      ],
    },
  ],
};

export default conteudo;
