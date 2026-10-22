import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao: 'Mostre textos, números e leituras de sensores em uma telinha OLED ligada na AmadoBoard.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.programaDisplay, alt: 'Programa no Dblocks que escreve Ola, Maker! na telinha OLED' },
    legenda: 'Um programa que escreve Ola, Maker! na telinha OLED.',
  },
  secoes: [
    {
      id: 'a-telinha-oled',
      titulo: 'A telinha OLED',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O display OLED é uma telinha pequena, do tamanho de um selo, onde a placa pode escrever textos e números. Com ela, o seu projeto mostra informações sem precisar do computador, como a temperatura ou a distância medida.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'A AmadoBoard tem um encaixe só para ela, escrito OLED DISPLAY. É só encaixar a telinha ali, ou ligar com fios como na imagem abaixo. Ela usa os pinos D21 (SDA) e D22 (SCL).',
        },
        {
          tipo: 'figura',
          imagem: { ...img.ligacaoDisplayOled, alt: 'Diagrama de ligação do display OLED no conector I2C: SDA no D21, SCK (SCL) no D22, VDD no 3V3 e GND no GND' },
          legenda: 'O display OLED no conector I2C: SDA no D21, SCK (SCL) no D22, VDD no 3V3 e GND no GND.',
        },
        {
          tipo: 'paragrafo',
          texto: 'Os blocos ficam em Telas › Display OLED. Antes de usar, com a placa conectada, clique em Instalar biblioteca: ssd1306.',
        },
        { tipo: 'caminho', itens: ['Telas', 'Display OLED'] },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaDisplayOled, alt: 'Categoria Display OLED com os blocos da telinha e o botão Instalar biblioteca: ssd1306' },
          legenda: 'Os blocos da telinha OLED e o botão para instalar a biblioteca.',
        },
      ],
    },
    {
      id: 'como-escrever-na-tela',
      titulo: 'Como escrever na tela',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'A telinha funciona como um quadro‑negro. Para mostrar algo novo, você sempre segue três passos, nesta ordem:',
        },
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Limpar display OLED', texto: 'Apaga o que estava escrito antes.' },
            { titulo: 'Escrever texto ou Exibir valor', texto: 'Escreve uma palavra ou um número na posição que você escolher.' },
            { titulo: 'Atualizar display OLED', texto: 'Mostra de verdade o que foi escrito. Sem esse bloco, a tela continua vazia!' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'O que são as posições X e Y?',
          texto:
            'A tela tem 128 pontinhos de largura e 64 de altura. X diz quantos pontinhos andar para a direita, e Y quantos andar para baixo. X 0 e Y 0 é o canto de cima, à esquerda. Cada letra ocupa 8 por 8 pontinhos: cabem 16 letras em uma linha e 8 linhas na tela.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'A telinha não tem acentos',
          texto:
            'As letras da telinha não têm acento. Escreva Ola em vez de Olá: se usar acento, aparece um quadradinho no lugar da letra.',
        },
      ],
    },
    {
      id: 'exemplos',
      titulo: 'Exemplos',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 1: um recado na tela',
          blocos: [
            {
              tipo: 'blocosEOled',
              imagem: { ...img.exemploRecado, alt: 'Programa que limpa a tela, escreve Ola, Maker! em X 20 e Y 28 e atualiza' },
              telinha: { ...img.telinhaRecado, alt: 'Telinha OLED mostrando Ola, Maker! no meio da tela' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara a telinha: I2C 1, SCL 22 e SDA 21.',
                '2. Limpa a tela.',
                '3. Escreve Ola, Maker! na posição X 20 e Y 28.',
                '4. Atualiza a tela para o texto aparecer.',
              ],
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 2: um contador',
          blocos: [
            {
              tipo: 'blocosEOled',
              imagem: { ...img.exemploContador, alt: 'Programa que mostra o contador na tela, soma 1 e espera 1 segundo' },
              telinha: { ...img.telinhaContador, alt: 'Telinha OLED mostrando o número 7 no meio da tela' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara a telinha e cria a variável contador valendo 0.',
                '2. Repete para sempre: limpa a tela, mostra o número e atualiza.',
                '3. Soma 1 no contador e espera 1 segundo.',
              ],
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 3: mostrando a luz do ambiente',
          texto: 'Junta o display com o sensor de luz do capítulo 14 (o jumper do LDR vai no D39).',
          blocos: [
            {
              tipo: 'blocosEOled',
              imagem: { ...img.exemploLuz, alt: 'Programa que lê o LDR e mostra Luz: e o valor na tela a cada meio segundo' },
              telinha: { ...img.telinhaLuz, alt: 'Telinha OLED mostrando Luz: e, embaixo, o valor lido do sensor' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Prepara a telinha.',
                '2. Repete para sempre: lê a luz do sensor e guarda em luz.',
                '3. Limpa a tela, escreve Luz: em cima e o número embaixo.',
                '4. Atualiza a tela e espera meio segundo.',
              ],
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Parabéns!',
          texto:
            'Você terminou a Trilha 3. Agora você já sabe usar os sensores, os motores, o som e a tela da AmadoBoard. Na próxima trilha, Ferramentas da plataforma, você conhece o Simulador e outras partes do Dblocks.',
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
            { titulo: 'O seu nome', texto: 'Escreva o seu nome no meio da tela.' },
            { titulo: 'Termômetro', texto: 'Mostre a temperatura do DHT11, do capítulo 15, na telinha.' },
            { titulo: 'Placar', texto: 'Use o botão do capítulo 13 para somar pontos e mostrar o placar na tela.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
