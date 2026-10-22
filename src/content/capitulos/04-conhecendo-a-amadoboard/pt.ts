import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Conheça a placa que vai rodar os seus programas: as peças que ela já traz, como ela recebe energia e em quais pinos ligar cada coisa.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.placaLegendas, alt: 'A AmadoBoard vista de cima, com o nome de cada parte' },
    legenda: 'A AmadoBoard com o nome de cada parte.',
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
            'Ela usa o ESP32, um pequeno computador com Wi‑Fi e Bluetooth, e já vem com muitas peças prontas: luzes, buzzer, sensor de temperatura, sensor de luz e lugar para ligar motores e servos. Assim, você faz muitos projetos sem montar nenhum circuito.',
        },
      ],
    },
    {
      id: 'energia-da-placa',
      titulo: 'Energia da placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'A placa pode ser ligada de dois jeitos: pela porta USB (J4), o mesmo cabo que leva o programa, ou por uma fonte ou bateria de 6 a 12V na entrada J2.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Dentro da placa, reguladores de tensão transformam essa energia em 5V e 3,3V, que é o que as peças usam. Um LED vermelho acende para mostrar que a placa está ligada.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.energia, alt: 'A porta USB (J4) e a entrada de alimentação (J2) na AmadoBoard' },
          legenda: 'Os dois caminhos de energia: USB (J4) ou fonte (J2).',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Quando usar a fonte?',
          texto:
            'Motores gastam mais energia do que o USB consegue dar. Em projetos com motores, ligue também uma fonte ou bateria na entrada J2.',
        },
      ],
    },
    {
      id: 'leds-e-buzzer',
      titulo: 'LEDs e buzzer',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'A placa tem três LEDs e um buzzer já ligados no ESP32. Para usar, é só escolher o pino certo no bloco.',
        },
        {
          tipo: 'tabela',
          itens: [
            { titulo: 'LED vermelho', texto: 'Pino D32.' },
            { titulo: 'LED verde', texto: 'Pino D33.' },
            { titulo: 'LED azul', texto: 'Pino D2.' },
            { titulo: 'Buzzer', texto: 'Pino D4. Toca sons e músicas.' },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.ledsBuzzer, alt: 'Os três LEDs e o buzzer na AmadoBoard' },
          legenda: 'Os LEDs e o buzzer na placa.',
        },
      ],
    },
    {
      id: 'sensores-da-placa',
      titulo: 'Sensores da placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'A placa também traz três sensores: o sensor de temperatura (LM35), o sensor de luz (LDR) e o trimpot, um botão de girar que muda um valor.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Eles não estão ligados direto no ESP32. Os três saem no conector CONN 10, e você liga um fio (jumper) dele até uma das entradas D34, D35, D36 ou D39.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.sensores, alt: 'O conector CONN 10, onde saem o LM35, o LDR e o trimpot' },
          legenda: 'Os sensores saem neste conector.',
        },
      ],
    },
    {
      id: 'motores-e-servos',
      titulo: 'Motores e servos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para motores DC, a placa tem um driver (o chip L293) que dá força para dois motores ao mesmo tempo. O motor A usa os pinos D12, D13 e D14 e vai no borne J1. O motor B usa D25, D26 e D27 e vai no borne J3.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.driverMotores, alt: 'O chip L293 e os bornes J1 e J3 dos motores' },
          legenda: 'O driver e os bornes dos motores.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Para servo motores, há dois conectores prontos: Servo A no pino D15 e Servo B no pino D16. A energia deles (VS) pode vir de 3,3V ou de 5V.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.conectoresServos, alt: 'Os conectores dos servos A e B na AmadoBoard' },
          legenda: 'Os conectores dos servos A e B.',
        },
      ],
    },
    {
      id: 'pinos-de-entrada-e-saida',
      titulo: 'Pinos de entrada e saída',
      blocos: [
        { tipo: 'paragrafo', texto: 'Além das peças prontas, a placa tem pinos livres para ligar outras coisas:' },
        {
          tipo: 'tabela',
          itens: [
            { titulo: 'Só entrada', texto: 'D34, D35, D36 e D39. Servem para ler sensores.' },
            {
              titulo: 'Saída',
              texto: 'D5, D15, D16, D17, D18, D19, D21, D22 e D23. Servem para ligar LEDs, buzzers e outras peças.',
            },
            { titulo: 'I2C', texto: 'Conector para o display OLED.' },
            { titulo: 'SPI', texto: 'Barramento para módulos que usam SPI.' },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.entradasSaidas, alt: 'Os conectores de entrada, saída, I2C e SPI da AmadoBoard' },
          legenda: 'Os conectores de entrada, saída, I2C e SPI.',
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
      id: 'componentes-extras',
      titulo: 'Componentes extras',
      blocos: [
        { tipo: 'paragrafo', texto: 'Estes são os componentes extras que você pode ligar na placa:' },
        {
          tipo: 'tabela',
          itens: [
            { titulo: 'Sensor ultrassônico HC-SR04', texto: 'Mede distâncias.' },
            { titulo: 'Seguidor de linha TCRT5000', texto: 'Percebe linhas no chão.' },
            { titulo: 'Sensor DHT11', texto: 'Mede a temperatura e a umidade do ar.' },
            { titulo: 'Módulo LDR', texto: 'Mede a luz do ambiente.' },
            { titulo: 'Servo motor', texto: 'Gira até um ângulo exato.' },
            { titulo: 'Motor DC', texto: 'Gira sem parar, como em rodas e ventiladores.' },
            { titulo: 'Display OLED', texto: 'Tela pequena de 0,96", 128×64, ligada no I2C.' },
            { titulo: 'Buzzer', texto: 'Emite sons.' },
            { titulo: 'LEDs', texto: 'Luzes para mostrar estados.' },
            { titulo: 'Potenciômetro', texto: 'Botão de girar que muda um valor.' },
            { titulo: 'Resistores', texto: '100Ω, 330Ω, 1kΩ e 10kΩ. Limitam a corrente.' },
            { titulo: 'Fonte 9V 1A', texto: 'Liga na entrada J2.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Veja a placa em 3D',
          texto:
            'Na aba Dispositivo dá para girar a AmadoBoard, ver o nome dos pinos e fazer um tour pela placa. Isso está no capítulo [Explorando a placa em 3D](/capitulos/explorando-a-placa-em-3d).',
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
            { titulo: 'Ache os LEDs', texto: 'Na imagem da placa, ache os três LEDs. Em qual pino está cada um?' },
            {
              titulo: 'Sem cabo USB',
              texto: 'De que outro jeito a placa pode receber energia? De quantos volts a fonte precisa ser?',
            },
            {
              titulo: 'Ligue o LDR',
              texto: 'O LDR sai no CONN 10. Em quais pinos você pode ligar o fio para o programa ler o valor dele?',
            },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
