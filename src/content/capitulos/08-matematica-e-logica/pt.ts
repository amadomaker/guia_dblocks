import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Faça contas, compare números e ensine o programa a tomar decisões, como: se estiver calor, ligue o ventilador.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.matematicaESe, alt: 'Categoria Matemática aberta e um programa com o bloco se decidindo pela temperatura e pela umidade' },
    legenda: 'A categoria Matemática aberta e um programa que decide o que fazer com a temperatura e a umidade.',
  },
  secoes: [
    {
      id: 'para-que-servem-esses-blocos',
      titulo: 'Para que servem esses blocos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos de matemática fazem contas, como somar, multiplicar ou arredondar um número. Os blocos de lógica ajudam o programa a decidir: eles comparam valores e escolhem o que fazer.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Eles aparecem em quase todo projeto. É com eles que o robô decide parar quando vê um obstáculo, ou que a placa liga o ventilador quando esquenta. Todos ficam em Matemática, nos grupos Lógica e Operadores.',
        },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.grupoLogica, alt: 'Grupo Lógica com os blocos se, comparar, e/ou, não e mapear' },
              legenda: 'Lógica: se, comparar, e/ou, não e mapear.',
            },
            {
              imagem: { ...img.grupoOperadores, alt: 'Grupo Operadores com blocos de contas, raiz quadrada, arredondar e resto da divisão' },
              legenda: 'Operadores: contas, raiz quadrada, arredondar e resto da divisão.',
            },
          ],
        },
      ],
    },
    {
      id: 'decidindo-com-o-se',
      titulo: 'Decidindo com o se',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O bloco se funciona como uma pergunta. Se a resposta for sim, o programa faz o que está dentro dele. Se a resposta for não, ele pula. Com o senão, você diz o que fazer quando a resposta for não.',
        },
        { tipo: 'caminho', itens: ['Matemática', 'Lógica', 'se'] },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 1: o número é maior que 10?',
          texto:
            'Este programa guarda um número e pergunta se ele é maior que 10. Dependendo da resposta, mostra uma mensagem diferente no Console.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemplo1, alt: 'Programa que guarda 15 em numero e usa se/senão para comparar com 10' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Guarda o número 15 na variável numero.',
                '2. Pergunta: o numero é maior que 10?',
                '3. Se sim, mostra Maior que 10. Se não, mostra Menor ou igual a 10.',
              ],
            },
            { tipo: 'console', imagem: { ...img.console1, alt: 'Console mostrando Maior que 10' } },
          ],
        },
      ],
    },
    {
      id: 'comparando-valores',
      titulo: 'Comparando valores',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'Para fazer a pergunta, usamos o bloco de comparar. Clique no sinal do meio para escolher o tipo de comparação:',
        },
        {
          tipo: 'simbolos',
          itens: [
            { simbolo: '=', texto: 'é igual a' },
            { simbolo: '≠', texto: 'é diferente de' },
            { simbolo: '<', texto: 'é menor que' },
            { simbolo: '≤', texto: 'é menor ou igual a' },
            { simbolo: '>', texto: 'é maior que' },
            { simbolo: '≥', texto: 'é maior ou igual a' },
          ],
        },
      ],
    },
    {
      id: 'mais-de-uma-pergunta',
      titulo: 'Mais de uma pergunta',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Às vezes uma pergunta não basta. Clique na engrenagem azul do bloco se: abre uma janelinha. Arraste senão se ou senão para dentro do se, do lado direito da janelinha. Cada senão se é uma nova pergunta.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.engrenagemSe, alt: 'Janelinha da engrenagem do bloco se com senão se e senão adicionados' },
          legenda: 'A janelinha da engrenagem. Aqui o se ganhou um senão se e um senão.',
        },
        { tipo: 'paragrafo', texto: 'Para juntar duas perguntas em uma, use o bloco e ou o bloco ou:' },
        {
          tipo: 'simbolos',
          tamanho: 'medio',
          itens: [
            { simbolo: 'e', texto: 'As duas coisas precisam ser verdade. Está calor e está úmido?' },
            { simbolo: 'ou', texto: 'Basta uma das coisas ser verdade. Está calor ou está úmido?' },
            { simbolo: 'não', texto: 'Inverte a resposta: o que era verdadeiro vira falso.' },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 2: um ventilador esperto',
          texto: 'Este programa imagina um ventilador que olha a temperatura e a umidade do ar para decidir o que ligar.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploVentilador, alt: 'Programa com se, senão se e senão usando os blocos e e ou com temperatura e umidade' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Guarda a temperatura (32) e a umidade (75).',
                '2. Se está calor (mais de 30) e úmido (mais de 70), mostra Ativar ventilador e desumidificador.',
                '3. Senão, se está calor ou úmido, mostra Ativar apenas ventilador.',
                '4. Senão, mostra Ambiente confortável.',
              ],
            },
            { tipo: 'console', imagem: { ...img.consoleVentilador, alt: 'Console mostrando Ativar ventilador e desumidificador' } },
            { tipo: 'nota', texto: 'Troque os números da temperatura e da umidade e rode de novo. A resposta muda!' },
          ],
        },
      ],
    },
    {
      id: 'mudando-a-escala-com-o-mapear',
      titulo: 'Mudando a escala com o mapear',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Alguns sensores da placa medem valores de 0 a 4095. É difícil saber o que esse número quer dizer. O bloco mapear transforma o número para outra escala mais fácil, como de 0 a 100, que é a porcentagem.',
        },
        { tipo: 'caminho', itens: ['Matemática', 'Lógica', 'mapear'] },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 3: transformando em porcentagem',
          texto:
            'Para testar sem sensor, o programa pede para você digitar um número no Console, como se fosse a leitura de um sensor.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploMapear, alt: 'Programa que lê um número do Console e usa o mapear de 0 a 4095 para 0 a 100' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Pede um número de 0 a 4095 no Console.',
                '2. Usa o mapear para transformar esse número em um valor de 0 a 100.',
                '3. Mostra o resultado no Console.',
              ],
            },
            { tipo: 'console', imagem: { ...img.consoleMapear, alt: 'Console com o número 2048 digitado e o resultado 50' } },
            {
              tipo: 'nota',
              texto: 'Você digita o número no próprio Console e aperta Enter. Aqui, 2048 virou 50, ou seja, metade.',
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
            { titulo: 'Mude o número', texto: 'No exemplo 1, troque 15 por 5. Qual mensagem aparece agora?' },
            { titulo: 'Dia fresquinho', texto: 'No exemplo 2, use temperatura 25 e umidade 50. O que o ventilador decide?' },
            { titulo: 'Nova escala', texto: 'Use o mapear para transformar 0 a 4095 em 0 a 10.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
