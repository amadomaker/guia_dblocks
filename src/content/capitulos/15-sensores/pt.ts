import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Conheça os sensores mais usados nos projetos: o que percebe obstáculos, o que mede temperatura e umidade, o que mede distância e o que lê cartões.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.sensorUltrassonico, alt: 'Programa no Dblocks que mede a distância com o sensor ultrassônico' },
    legenda: 'Um programa que mede a distância com o sensor ultrassônico.',
  },
  secoes: [
    {
      id: 'o-que-e-um-sensor',
      titulo: 'O que é um sensor',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os sensores são os sentidos da placa. Assim como os seus olhos veem e a sua pele sente o calor, os sensores percebem o que acontece em volta: se tem alguma coisa perto, se está quente, se está úmido.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'O sensor transforma o que percebe em um número, e o programa usa esse número para decidir o que fazer. A maioria dos blocos fica na categoria Sensores, separada em grupos.',
        },
        { tipo: 'caminho', itens: ['Sensores'] },
      ],
    },
    {
      id: 'sensor-infravermelho',
      titulo: 'Sensor infravermelho',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O sensor infravermelho percebe se tem alguma coisa bem na frente dele. Ele manda uma luz que não conseguimos ver e olha se ela volta. É muito usado em carrinhos que seguem uma linha no chão.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Ele tem 3 pinos (VCC, GND e sinal) e funciona como o botão do capítulo 12: o resultado é 0 ou 1. Ligue o sinal em uma das entradas D34, D35, D36 ou D39. Por isso o bloco é o ler entrada digital, de Pinos entrada/saída.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: o que tem na frente?',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo1, alt: 'Programa que lê o pino D35 e guarda em valor_sensor' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Lê o pino D35, onde está o sinal do sensor, e guarda em valor_sensor.',
                '2. Mostra o valor no Console: 0 quando tem algo na frente e 1 quando não tem.',
                '3. Espera meio segundo e lê de novo.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console1, alt: 'Console mostrando 0 e 1 conforme algo passa na frente do sensor' } },
          ],
        },
      ],
    },
    {
      id: 'temperatura-e-umidade-dht11',
      titulo: 'Temperatura e umidade (DHT11)',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O DHT11 mede duas coisas: a temperatura e a umidade do ar, ou seja, quanta água tem no ar. É ótimo para fazer uma estação do tempo. Ligue o sinal dele em um pino digital, como o D17.',
        },
        { tipo: 'caminho', itens: ['Sensores', 'Temperatura e umidade'] },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: estação do tempo',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo2, alt: 'Programa que inicia o DHT11 no pino D17 e mostra temperatura e umidade a cada segundo' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara o sensor DHT11 no pino D17.',
                '2. Repete para sempre: atualiza a leitura do sensor.',
                '3. Mostra a temperatura e a umidade no Console.',
                '4. Espera 1 segundo antes de ler de novo.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console2, alt: 'Console mostrando a temperatura e a umidade' } },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Dê um tempo para o sensor',
          texto: 'O DHT11 precisa de pelo menos 1 segundo entre uma leitura e outra. Se ler mais rápido, ele pode errar.',
        },
      ],
    },
    {
      id: 'sensor-de-distancia-ultrassonico',
      titulo: 'Sensor de distância (ultrassônico)',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O sensor ultrassônico mede a distância até um objeto usando som. Ele dá um “grito” que não conseguimos ouvir e espera o eco voltar, como fazem os morcegos. Quanto mais o eco demora, mais longe está o objeto.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'A AmadoBoard já tem um lugar certinho para ele, o CONN 7. Ali o pino trigger (o que grita) é o D17 e o echo (o que escuta) é o D34.',
        },
        { tipo: 'caminho', itens: ['Sensores', 'Ultrassônico'] },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: medindo a distância',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo3, alt: 'Programa que inicia o ultrassônico com echo no D34 e trigger no D17 e imprime a distância' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara o sensor com echo no D34 e trigger no D17.',
                '2. Repete para sempre: mede a distância e guarda em distancia.',
                '3. Mostra a distância em milímetros no Console. 100 milímetros são 10 centímetros.',
                '4. Espera meio segundo.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console3, alt: 'Console mostrando distâncias em milímetros' } },
            { tipo: 'nota', texto: 'Às vezes aparece um número muito alto ou -1. Isso é uma leitura errada: é só ignorar.' },
          ],
        },
      ],
    },
    {
      id: 'leitor-de-cartao-rfid',
      titulo: 'Leitor de cartão (RFID)',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O leitor RFID lê cartões e chaveiros sem encostar, como o cartão do ônibus. Cada cartão tem um código só dele. Dá para fazer uma fechadura que só abre com o cartão certo, ou uma chamada de presença.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Antes de usar, instale a biblioteca do leitor. Com a placa conectada, abra Sensores › Leitor RFID e clique em Instalar biblioteca: mfrc522. O Console avisa quando terminar.',
        },
        {
          tipo: 'figuraComLigacoes',
          imagem: { ...img.botoesBibliotecaRfid, alt: 'Botões do grupo Leitor RFID, entre eles Instalar biblioteca: mfrc522' },
          titulo: 'Como ligar o leitor na placa',
          itens: [
            { titulo: '3.3V do leitor', texto: '3V3 da placa' },
            { titulo: 'GND', texto: 'GND' },
            { titulo: 'SCK', texto: 'D18 / CLK' },
            { titulo: 'MOSI', texto: 'D23 / MOSI' },
            { titulo: 'MISO', texto: 'D19 / MISO' },
            { titulo: 'RST', texto: 'D22 / SCL' },
            { titulo: 'SDA do leitor', texto: 'D5 / CS' },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: lendo um cartão',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo4, alt: 'Programa que inicia o leitor RFID e mostra o código do cartão quando ele é encontrado' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara o leitor com os pinos da tabela.',
                '2. Repete para sempre: verifica se tem um cartão perto.',
                '3. Se tiver (status igual a 0), mostra Cartão encontrado! e o código do cartão.',
                '4. Espera meio segundo e verifica de novo.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console4, alt: 'Console mostrando Cartão encontrado! e o código do cartão' } },
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
            { titulo: 'Alarme de calor', texto: 'Mostre Está quente! no Console quando a temperatura passar de 30.' },
            {
              titulo: 'Sensor de estacionamento',
              texto: 'Acenda o LED vermelho quando a distância for menor que 100 milímetros (10 centímetros).',
            },
            { titulo: 'Contador de passagens', texto: 'Conte quantas vezes alguma coisa passou na frente do sensor infravermelho.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
