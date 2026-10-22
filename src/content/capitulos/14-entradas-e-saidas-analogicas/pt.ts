import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Meça quanta luz tem no ambiente com o sensor da placa e controle o brilho de um LED, do bem fraquinho até o mais forte.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.abajurAutomatico, alt: 'Programa de abajur automático no Dblocks: quanto mais escuro, mais forte o LED azul' },
    legenda: 'Um abajur automático: quanto mais escuro, mais forte o LED azul acende.',
  },
  secoes: [
    {
      id: 'mais-do-que-ligado-e-desligado',
      titulo: 'Mais do que ligado e desligado',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'No capítulo anterior, tudo era ligado ou desligado. Mas muita coisa no mundo muda aos pouquinhos: a luz do dia vai escurecendo, a temperatura vai subindo. Isso é analógico.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Pense na diferença entre um interruptor e um botão de volume. O interruptor só liga ou desliga. O volume pode ficar baixinho, médio ou alto. Com as entradas e saídas analógicas, a placa consegue medir e controlar esse “mais ou menos”.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.sinalAnalogico, alt: 'Gráfico de um sinal analógico: a tensão varia aos poucos entre 0V e 3,3V ao longo do tempo' },
          legenda: 'Um sinal analógico muda aos poucos e pode ter qualquer valor entre 0V e 3,3V.',
        },
        { tipo: 'caminho', itens: ['Pinos entrada/saída', 'Ler entrada analógica'] },
      ],
    },
    {
      id: 'lendo-a-luz-do-ambiente',
      titulo: 'Lendo a luz do ambiente',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'A AmadoBoard já tem um sensor de luz, o LDR. Para o programa ler esse sensor, ligue um fio (jumper) do LDR, no conector CONN 10, até o pino D39.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.ligacaoLdr, alt: 'Diagrama de ligação do LDR: um jumper liga o LDR, no CONN 10, ao pino D39' },
          legenda: 'Um jumper liga o LDR, no CONN 10, até o pino D39.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 1: medindo a luz',
          texto: 'O programa lê o sensor de luz sem parar e mostra o valor no Console.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo1, alt: 'Programa que lê o pino D39 com Ler entrada analógica, guarda em valor_ldr e imprime' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Repete para sempre.',
                '2. Lê o pino D39 com o bloco Ler entrada analógica e guarda em valor_ldr.',
                '3. Mostra o valor no Console.',
                '4. Espera meio segundo e lê de novo.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console1, alt: 'Console mostrando valores do LDR mudando' } },
            { tipo: 'nota', texto: 'Cubra o sensor com a mão e veja o número cair. Com o ambiente claro, o número sobe.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'O que são ATTN_11DB e WIDTH_12BIT?',
          texto:
            'São ajustes do bloco. Quando você arrasta o bloco, ele vem com ATTN_0DB e WIDTH_9BIT: assim ele só mede até cerca de 1 volt, e o valor vai só de 0 a 511. Troque para ATTN_11DB e WIDTH_12BIT, como no exemplo. Com eles a placa mede até 3,3 volts e o valor vai de 0 a 4095.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Também dá para usar um módulo sensor de luz externo, como o do Simulador. Ligue o AO do módulo no D36, o GND no GND e o VCC no 3V3. No programa, troque o pino D39 por D36.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.ligacaoLdrExterno, alt: 'Diagrama de ligação do módulo LDR externo: AO no D36, GND no GND e VCC no 3V3' },
          legenda: 'O módulo externo: AO no D36, GND no GND e VCC no 3V3. O pino DO fica livre.',
        },
      ],
    },
    {
      id: 'controlando-o-brilho',
      titulo: 'Controlando o brilho',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para deixar um LED mais fraco ou mais forte, a placa usa um truque chamado PWM. Ela liga e desliga o LED tão rápido que os nossos olhos não percebem. Se fica mais tempo ligado, o LED parece mais forte. Se fica mais tempo desligado, parece mais fraco.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 2: LED azul pela metade',
          texto: 'O bloco PWM acende o LED azul, no pino D2, com metade do brilho.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo2, alt: 'Bloco PWM no pino D2 com frequência 100 e ciclo de trabalho 512' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Usa o pino D2, do LED azul.',
                '2. Frequência 100: quantas vezes por segundo o LED liga e desliga.',
                '3. Ciclo de trabalho 512: o brilho. Vai de 0 (apagado) até 1023 (brilho máximo). 512 é a metade.',
              ],
            },
            { tipo: 'nota', texto: 'Troque o 512 por 100 e por 1000 e compare o brilho.' },
          ],
        },
      ],
    },
    {
      id: 'juntando-os-dois',
      titulo: 'Juntando os dois',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 3: abajur automático',
          texto: 'O LED azul acende mais forte quando o ambiente fica escuro, como um abajur que se ajusta sozinho.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo3, alt: 'Programa que lê a luz, usa o mapear para inverter a escala e manda o brilho para o PWM' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Lê a luz do ambiente e guarda em luz.',
                '2. Usa o mapear do capítulo 09 para transformar a luz (0 a 4095) em brilho (1023 a 0). Muita luz vira pouco brilho, e pouca luz vira muito brilho.',
                '3. Manda esse brilho para o LED com o PWM.',
                '4. Espera um pouquinho e repete.',
              ],
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Use o trimpot no lugar do LDR',
          texto:
            'O trimpot, o botão de girar da placa, também sai no CONN 10. Ligue ele no D39 e controle o brilho do LED girando o trimpot.',
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
            { titulo: 'Noite ou dia', texto: 'Use o se para mostrar Está escuro! no Console quando o valor do LDR ficar baixo.' },
            {
              titulo: 'Pisca suave',
              texto: 'Faça o LED acender devagar, aumentando o ciclo de trabalho de 0 até 1023 com um laço contar.',
            },
            { titulo: 'Outra luz', texto: 'Use o LED vermelho (D32) no abajur automático.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
