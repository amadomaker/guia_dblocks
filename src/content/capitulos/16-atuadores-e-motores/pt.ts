import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Faça a placa mexer coisas de verdade: ligar uma lâmpada com o relé, girar um braço com o servo e mover um carrinho com o motor DC.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.servoMotor, alt: 'Programa no Dblocks que move o servo motor para três posições' },
    legenda: 'Um programa que move o servo motor para três posições.',
  },
  secoes: [
    {
      id: 'o-que-e-um-atuador',
      titulo: 'O que é um atuador',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Se os sensores são os sentidos da placa, os atuadores são os músculos. Eles recebem uma ordem do programa e fazem alguma coisa acontecer no mundo: girar, empurrar, ligar uma luz ou tocar um som.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos ficam em Saídas e atuadores, um grupo para cada tipo: Módulo relé, Servo motor, Motor DC e Campainha. A campainha (buzzer) tem um capítulo só dela, o 17.',
        },
        { tipo: 'caminho', itens: ['Saídas e atuadores'] },
      ],
    },
    {
      id: 'rele-um-interruptor-controlado',
      titulo: 'Relé: um interruptor controlado',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O relé funciona como um interruptor de parede, só que quem aperta é a placa. Com ele, a placa pode ligar e desligar coisas que precisam de mais energia, como uma lâmpada ou um ventilador.',
        },
        { tipo: 'caminho', itens: ['Saídas e atuadores', 'Módulo relé'] },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: lâmpada que apaga sozinha',
          texto: 'O programa liga o relé, espera 3 segundos e desliga. É como uma luz de corredor com temporizador.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploRele, alt: 'Programa que liga o relé no pino D17, espera 3 segundos e desliga' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: ['1. Liga o relé no pino D17.', '2. Espera 3 segundos.', '3. Desliga o relé.'],
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.ligacaoRele, alt: 'Diagrama de ligação do módulo relé: VCC no 5V, IN2 no D17 e GND no GND' },
          legenda: 'O módulo relé: VCC no 5V, IN2 no D17 e GND no GND. Do outro lado, o relé liga e desliga o LED das pilhas.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Ligar e desligar ao contrário?',
          texto:
            'Muitos módulos relé funcionam ao contrário: desligar no bloco faz o relé ligar, e ligar faz ele desligar. Se acontecer isso com o seu, é só trocar as opções do bloco.',
        },
        {
          tipo: 'destaque',
          variante: 'aviso',
          icone: 'book',
          titulo: 'Cuidado com a tomada',
          texto: 'Nunca ligue o relé na tomada sem a ajuda de um adulto. Para aprender, use luzes e motores de pilha.',
        },
      ],
    },
    {
      id: 'servo-motor-girar-ate-um-angulo',
      titulo: 'Servo motor: girar até um ângulo',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O servo motor gira até uma posição exata e para ali, entre 0 e 180 graus. Imagine o ponteiro de um relógio que você escolhe onde parar. É ótimo para braços robóticos, cancelas e portas.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'A AmadoBoard tem dois lugares para servos: SERVO A, no pino D15, e SERVO B, no D16. O fio marrom vai no GND, o vermelho no VS e o amarelo no sinal.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Dê energia ao servo',
          texto:
            'Ao lado dos pinos dos servos ficam os pinos 3V3, VS e 5V. Coloque um jumper ligando o VS ao 5V. Sem isso, o servo fica sem força para girar.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.ligacaoServo, alt: 'Diagrama de ligação do servo motor no SERVO A, com o jumper ligando o VS ao 5V' },
          legenda: 'O servo no SERVO A: sinal (laranja) no D15, VS (vermelho) e GND (marrom). O jumper preto liga o VS ao 5V.',
        },
        { tipo: 'caminho', itens: ['Saídas e atuadores', 'Servo motor'] },
        {
          tipo: 'paragrafo',
          texto:
            'Primeiro o bloco Iniciar servo motor diz em qual pino o servo está e dá um nome para ele, como servo1. Depois, o Mover servo diz para qual ângulo ele deve ir.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 1: três posições',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploServoPosicoes, alt: 'Programa que move o servo1 para 0, 90 e 180 graus com pausas' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara o servo1 no pino D15.',
                '2. Move para 0 graus e espera 1 segundo.',
                '3. Move para 90 graus e depois para 180 graus, com uma pausa entre eles.',
                '4. Repete para sempre.',
              ],
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 2: movimento suave',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploServoSuave, alt: 'Programa com dois laços contar movendo o servo de 0 a 180 e de volta, um grau por vez' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Usa o laço contar do capítulo 08 para ir de 0 até 180 graus, um grau de cada vez.',
                '2. Espera 10 milisegundos a cada grau, para o movimento ficar suave.',
                '3. Depois faz o caminho de volta, de 180 até 0.',
              ],
            },
            { tipo: 'nota', texto: 'Parece um radar girando de um lado para o outro.' },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 3: porta automática',
          texto: 'O servo abre a porta quando alguém chega perto do sensor ultrassônico, como nas portas de shopping.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploPorta, alt: 'Programa que gira o servo para 90 graus quando a distância medida é menor que 100 milímetros' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara o servo e o sensor ultrassônico.',
                '2. Mede a distância em milímetros e guarda em distancia.',
                '3. Se a distância for menor que 100 milímetros (10 centímetros), gira o servo para 90 graus: a porta abre.',
                '4. Senão, volta para 0 grau: a porta fecha.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'motor-dc-girar-sem-parar',
      titulo: 'Motor DC: girar sem parar',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O motor DC gira sem parar, para frente ou para trás. É o motor das rodinhas de um carrinho. Você escolhe a força, ou seja, a velocidade, e o sentido do giro.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Os fios do motor vão nos bornes azuis da placa: Motor A no J1 e Motor B no J3. O Motor A usa os pinos D12, D13 e D14, e o Motor B usa D25, D26 e D27.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.ligacaoMotorDc, alt: 'Motor DC preso nos dois parafusos do borne J1 (Motor A)' },
          legenda: 'O motor DC preso nos dois parafusos do borne J1 (Motor A).',
        },
        { tipo: 'caminho', itens: ['Saídas e atuadores', 'Motor DC'] },
        {
          tipo: 'tabela',
          larguraNome: 160,
          respiro: 12,
          itens: [
            { titulo: 'Potência', texto: 'De 0 (parado) até 1023 (mais rápido).' },
            { titulo: 'Direção', texto: '1 para frente, 2 para trás e 0 para parar.' },
            { titulo: 'Parar motor DC', texto: 'Para o motor na hora.' },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: para frente e para trás',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploMotor, alt: 'Programa que gira o motor1 para frente, para, e gira para trás em um laço' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara o motor1 nos pinos do Motor A: D12, D13 e D14.',
                '2. Coloca a potência no máximo (1023) e gira para frente por 2 segundos.',
                '3. Para, espera 2 segundos e gira para trás por mais 2 segundos.',
                '4. Para de novo e repete tudo.',
              ],
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Motores precisam de mais energia',
          texto:
            'Motores gastam muita energia. Se o motor ficar fraco, ligue uma fonte ou bateria de 6 a 12V na entrada J2 da placa.',
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
              titulo: 'Cancela de estacionamento',
              texto: 'Abra a cancela (servo em 90 graus) quando o botão do capítulo 13 for apertado.',
            },
            {
              titulo: 'Carrinho',
              texto: 'Ligue os dois motores para frente ao mesmo tempo. O que acontece se um for para frente e o outro para trás?',
            },
            { titulo: 'Velocidade', texto: 'Use o trimpot do capítulo 14 para controlar a potência do motor.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
