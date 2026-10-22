import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Descubra como os seus blocos viram um programa escrito e aprenda a ler o código que o Dblocks cria para você.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.codigoPiscaLed, alt: 'Aba Arquivos com o código MicroPython do Pisca LED aberto ao lado dos blocos' },
    legenda: 'O código do Pisca LED aberto na aba Arquivos.',
  },
  secoes: [
    {
      id: 'a-placa-nao-entende-blocos',
      titulo: 'A placa não entende blocos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos foram feitos para pessoas. A placa só entende programas escritos em uma linguagem chamada MicroPython, que usa palavras em inglês.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Por isso, o Dblocks funciona como um tradutor: cada bloco que você encaixa vira uma ou mais linhas de código. Quando você clica em Executar o programa, é esse código que vai para a placa.',
        },
      ],
    },
    {
      id: 'onde-ver-o-codigo',
      titulo: 'Onde ver o código',
      blocos: [
        {
          tipo: 'passosComFigura',
          imagem: { ...img.painelBlocosParaCodigo, alt: 'Painel Blocos para código com o arquivo .py marcado como AUTOMÁTICO e o workspace.dblocks.xml como INTERNO' },
          itens: [
            { titulo: 'Abra a aba Arquivos', texto: 'É o ícone de uma folha, na barra da esquerda.' },
            {
              titulo: 'Clique no arquivo .py',
              texto:
                'Em Blocos para código, clique no arquivo com a etiqueta AUTOMÁTICO. O nome dele vem da descrição do seu projeto.',
            },
            {
              titulo: 'Leia o código',
              texto: 'O código aparece do lado direito da tela. Ele muda sozinho sempre que você mexe nos blocos.',
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'E o arquivo workspace.dblocks.xml?',
          texto:
            'Ele está marcado como INTERNO e guarda os seus blocos do jeito que estão na tela. Quem usa esse arquivo é o próprio Dblocks, então você não precisa mexer nele.',
        },
      ],
    },
    {
      id: 'lendo-o-codigo-do-pisca-led',
      titulo: 'Lendo o código do Pisca LED',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'Vamos comparar os blocos do Pisca LED, do capítulo 06, com o código que o Dblocks criou para eles:',
        },
        {
          tipo: 'figuras',
          itens: [
            { imagem: { ...img.blocosPiscaLed, alt: 'Blocos do programa Pisca LED' }, legenda: 'Os blocos.' },
            { imagem: { ...img.trechoCodigo, alt: 'Trecho do código com while True, gpio_set e time.sleep' }, legenda: 'O código que eles viraram.' },
          ],
        },
        {
          tipo: 'blocoECodigo',
          itens: [
            {
              bloco: 'repita enquanto verdadeiro',
              codigo: 'while True:',
              texto: 'while quer dizer enquanto. True quer dizer verdadeiro. Repete para sempre.',
            },
            {
              bloco: 'ajustar pino de saida D32 para verdadeiro',
              codigo: 'gpio_set((32), True)',
              texto: 'Liga o pino 32, que é o LED vermelho.',
            },
            { bloco: 'esperar 1 segundos', codigo: 'time.sleep(1)', texto: 'sleep quer dizer dormir. O programa dorme por 1 segundo.' },
            {
              bloco: 'ajustar pino de saida D32 para falso',
              codigo: 'gpio_set((32), False)',
              texto: 'Desliga o pino 32. False quer dizer falso.',
            },
          ],
        },
      ],
    },
    {
      id: 'e-o-comeco-do-codigo',
      titulo: 'E o começo do código?',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'As primeiras linhas preparam o programa. from machine import Pin e import time trazem as ferramentas para usar os pinos e o tempo. Logo depois, o Dblocks cria uma pequena função para ligar e desligar pinos, como as funções do capítulo 10.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'As linhas que começam com # são comentários: a placa ignora, eles servem só para pessoas lerem. Ali aparecem o autor e a descrição que você escreveu no bloco Dados do projeto.',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.comecoCodigo, alt: 'Começo do código com os comentários, os imports e a função gpio_set' },
          legenda: 'O começo do código: as ferramentas, a função gpio_set e os comentários.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Aprenda comparando',
          texto: 'Mude um bloco e olhe o que mudou no código. É um jeito fácil de começar a aprender Python sem pressa.',
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
            { titulo: 'Ache o número', texto: 'No Pisca LED, troque esperar 1 por 0.5. Qual número mudou no código?' },
            { titulo: 'Outra cor', texto: 'Troque o pino para D33 / LED VERDE. O que muda no código?' },
            { titulo: 'Laço de contar', texto: 'Abra o código do exemplo da tabuada do capítulo 08 e encontre a palavra for.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Parabéns!',
          texto:
            'Você terminou a Trilha 2. Na próxima trilha, AmadoBoard e eletrônica, você vai usar os sensores, os motores e o som da placa.',
        },
      ],
    },
  ],
};

export default conteudo;
