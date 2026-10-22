import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Converse com a placa pelo celular, sem fios: mande comandos para acender LEDs e veja as leituras dos sensores em um gráfico.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.programaBluetooth, alt: 'Programa no Dblocks que manda a luz do ambiente para o celular pelo Bluetooth' },
    legenda: 'Um programa que manda a luz do ambiente para o celular pelo Bluetooth.',
  },
  secoes: [
    {
      id: 'o-que-e-bluetooth',
      titulo: 'O que é Bluetooth',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O Bluetooth é um jeito de dois aparelhos conversarem sem fio, quando estão perto um do outro. É o mesmo que liga o celular a um fone sem fio.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'A AmadoBoard usa o Bluetooth de baixo consumo, chamado BLE. Com ele dá para controlar um robô pelo celular, mandar as leituras dos sensores para o celular e muito mais.',
        },
      ],
    },
    {
      id: 'preparando',
      titulo: 'Preparando',
      blocos: [
        { tipo: 'caminho', itens: ['Comunicação', 'Bluetooth'] },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaBluetooth, alt: 'Categoria Bluetooth com os blocos e o botão Instalar biblioteca: ble_advertising' },
          legenda: 'Os blocos de Bluetooth e o botão para instalar a biblioteca.',
        },
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Instale a biblioteca', texto: 'Com a placa conectada, clique em Instalar biblioteca: ble_advertising.' },
            {
              titulo: 'Instale o app no celular',
              texto: 'Procure Bluefruit Connect na loja de aplicativos do celular. Ele é gratuito para Android e iPhone.',
              blocos: [
                {
                  tipo: 'figura',
                  imagem: { ...img.appBluefruit, alt: 'O aplicativo Bluefruit Connect, da Adafruit, na loja de aplicativos do celular' },
                  legenda: 'O app Bluefruit Connect, da Adafruit, na loja de aplicativos.',
                },
              ],
            },
          ],
        },
        {
          tipo: 'tabela',
          larguraNome: 230,
          respiro: 12,
          itens: [
            { titulo: 'Configura e inicia o Bluetooth', texto: 'Liga o Bluetooth com o nome que você escolher.' },
            { titulo: 'Definir os dados recebidos', texto: 'Guarda numa variável o que chegar do celular.' },
            { titulo: 'Verificar os dados recebidos', texto: 'Olha se chegou algo novo do celular.' },
            {
              titulo: 'Configurar o plotador',
              texto: 'Escolhe os valores que vão para o gráfico do celular. A engrenagem deixa mandar até 3 valores.',
            },
            { titulo: 'Enviar dados para o plotador', texto: 'Manda os valores para o gráfico.' },
          ],
        },
      ],
    },
    {
      id: 'exemplos',
      titulo: 'Exemplos',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 1: o programa base',
          texto:
            'Este é o ponto de partida de todo projeto com Bluetooth. Com ele, você confere se as mensagens do celular estão chegando.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploBase, alt: 'Programa que liga o Bluetooth, guarda os dados recebidos e verifica sem parar' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Liga o Bluetooth com o nome meuBluetooth.',
                '2. Guarda o que chegar do celular na variável dados.',
                '3. Fica verificando, sem parar, se chegou algo novo.',
              ],
            },
          ],
        },
        {
          tipo: 'explicacao',
          variante: 'montagem',
          titulo: 'No celular, com o Bluefruit Connect',
          itens: [
            '1. Rode o programa e abra o app. Escolha o aparelho MPY ESP32 na lista. Esse nome pode aparecer mesmo se você escolheu outro no bloco.',
            '2. Toque em Controller e depois em Control Pad.',
            '3. Aperte os botões. No Console aparece Dados recebidos e o código do botão, como !B507.',
          ],
          blocos: [
            { tipo: 'console', imagem: { ...img.consoleBotoes, alt: 'Console mostrando Dados recebidos com os códigos !B516 e !B507 dos botões de seta' } },
            {
              tipo: 'nota',
              texto:
                'Cada botão manda dois códigos: um quando você aperta e outro quando solta. No teste do print acima foram usados os botões de seta: a seta para cima mandou !B516 ao apertar e !B507 ao soltar.',
            },
            {
              tipo: 'figura',
              imagem: { ...img.passosNoApp, alt: 'Passos no app: escolher o MPY ESP32, abrir Controller e depois o Control Pad' },
              legenda: 'No app: escolha o MPY ESP32, abra Controller e, dentro dele, o Control Pad.',
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 2: LEDs pelo celular',
          texto: 'Agora os botões do celular acendem os LEDs da placa. Enquanto o botão está apertado, o LED fica aceso.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploLeds, alt: 'Programa que acende o LED azul com !B11, o verde com !B219 e senão apaga os dois' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Se chegar !B11 (botão 1 apertado), acende o LED azul (D2).',
                '2. Se chegar !B219 (botão 2 apertado), acende o LED verde (D33).',
                '3. Senão, apaga os dois LEDs.',
              ],
            },
            {
              tipo: 'nota',
              texto: 'A resposta é quase na hora. Troque os LEDs por um motor e você tem um carrinho de controle remoto!',
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 3: gráfico no celular',
          texto: 'O celular desenha um gráfico com a luz do ambiente, lida pelo sensor LDR no pino D39.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploGrafico, alt: 'Programa que lê a luz, mostra no Console e manda o valor para o plotador a cada segundo' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Liga o Bluetooth.',
                '2. Lê a luz e mostra no Console.',
                '3. Manda o valor para o gráfico do celular.',
                '4. Repete a cada 1 segundo.',
              ],
            },
            {
              tipo: 'nota',
              texto: 'No app, toque em Plotter para ver o gráfico. Cubra o sensor com a mão e veja a linha descer.',
            },
            {
              tipo: 'figura',
              imagem: { ...img.graficoNoApp, alt: 'Gráfico no app acompanhando a luz do ambiente em tempo real' },
              legenda: 'O gráfico no app, acompanhando a luz do ambiente em tempo real.',
            },
          ],
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
            { titulo: 'Mais um LED', texto: 'Use o botão 3 do app para acender o LED vermelho (D32).' },
            { titulo: 'Buzzer remoto', texto: 'Toque uma nota no buzzer quando apertar o botão para cima.' },
            { titulo: 'Dois gráficos', texto: 'Clique na engrenagem do plotador e mande também a temperatura.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
