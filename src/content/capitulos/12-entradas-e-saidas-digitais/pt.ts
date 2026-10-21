import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Aprenda a ler um botão e a acender uma luz: as duas formas mais simples de a placa conversar com o mundo, com ligado e desligado.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.botaoAcendeLed, alt: 'Programa no Dblocks que acende o LED azul enquanto o botão está apertado' },
    legenda: 'Um programa que acende o LED azul enquanto o botão está apertado.',
  },
  secoes: [
    {
      id: 'ligado-ou-desligado',
      titulo: 'Ligado ou desligado',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Digital quer dizer que só existem dois jeitos: ligado ou desligado. É como um interruptor de luz. Para a placa, ligado vale 1 (verdadeiro) e desligado vale 0 (falso).',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Uma entrada digital é quando a placa pergunta para o mundo: o botão está apertado ou solto? Uma saída digital é quando a placa manda no mundo: acende o LED ou apaga o LED.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos para as duas coisas ficam em Pinos entrada/saída: ajustar pino de saida para mandar e ler entrada digital para perguntar.',
        },
        { tipo: 'caminho', itens: ['Pinos entrada/saída'] },
      ],
    },
    {
      id: 'lendo-uma-entrada',
      titulo: 'Lendo uma entrada',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 1: testando com um fio',
          texto: 'Este programa lê o pino D16 sem parar e mostra no Console se ele está ligado (1) ou desligado (0).',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo1, alt: 'Programa que lê o pino D16, guarda em x e imprime o valor a cada 500 milisegundos' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Repete para sempre.',
                '2. Lê o pino D16 com o bloco ler entrada digital e guarda na variável x.',
                '3. Mostra Valor de x: e o número no Console.',
                '4. Espera 500 milisegundos (meio segundo) e lê de novo.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console1, alt: 'Console mostrando Valor de x: 0 e Valor de x: 1' } },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Como testar na placa',
          texto:
            'Ligue um fio (jumper) no pino D16. Encoste a outra ponta no GND e o Console mostra 0. Encoste no 3V3 e o Console mostra 1. Assim você vê a entrada mudando na hora.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 2: lendo um botão',
          texto:
            'Agora com um botão de verdade, ligado no pino D39. O programa mostra 1 quando o botão está apertado e 0 quando está solto.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo2, alt: 'Programa que lê o pino D39, guarda em valorBotao e imprime o valor' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Repete para sempre.',
                '2. Lê o pino D39 e guarda na variável valorBotao.',
                '3. Mostra o valor no Console a cada meio segundo.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console2, alt: 'Console mostrando 0 e 1 conforme o botão é apertado' } },
          ],
        },
        {
          tipo: 'explicacao',
          variante: 'montagem',
          titulo: 'Como montar o botão',
          itens: [
            '1. Uma perna do botão vai no pino D39.',
            '2. A outra perna vai no 3V3.',
            '3. Ligue um resistor de 10kΩ entre o D39 e o GND.',
            'O resistor mantém o pino em 0 quando o botão está solto. Por isso, no bloco ler entrada digital, o Pull-up fica em falso.',
          ],
        },
        {
          tipo: 'destaque',
          variante: 'aviso',
          icone: 'book',
          titulo: 'Use o 3V3, não o 5V',
          texto: 'Os pinos da placa trabalham com até 3,3 volts. Ligar 5V direto em um pino pode estragar a placa.',
        },
      ],
    },
    {
      id: 'mandando-numa-saida',
      titulo: 'Mandando numa saída',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 3: piscando o LED azul',
          texto: 'Você já fez isso no capítulo 05 com o LED vermelho. Aqui o LED azul, no pino D2, pisca a cada meio segundo.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo3, alt: 'Programa que liga e desliga o pino D2 com esperas de meio segundo' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Repete para sempre.',
                '2. Liga o pino D2: o LED azul acende.',
                '3. Espera meio segundo.',
                '4. Desliga o pino D2: o LED apaga.',
                '5. Espera mais meio segundo.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'juntando-entrada-e-saida',
      titulo: 'Juntando entrada e saída',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 4: o botão acende a luz',
          texto: 'Agora a placa lê o botão e decide o que fazer com o LED, usando o se do capítulo 08.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo4, alt: 'Programa com se/senão que acende o LED azul quando o botão no D39 está apertado' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Repete para sempre.',
                '2. Se o botão no D39 estiver apertado (valor 1), acende o LED azul.',
                '3. Senão, apaga o LED azul.',
              ],
            },
            {
              tipo: 'nota',
              texto: 'Esse é o jeito que muitos aparelhos funcionam: um sensor percebe alguma coisa e a placa responde.',
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
            { titulo: 'Outra cor', texto: 'No exemplo 4, troque o LED azul pelo vermelho (D32).' },
            { titulo: 'Ao contrário', texto: 'Faça o LED ficar aceso quando o botão estiver solto e apagar quando for apertado.' },
            { titulo: 'Contador', texto: 'Conte quantas vezes o botão foi apertado e mostre o número no Console.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
