import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Aprenda a guardar números e palavras em variáveis e a ver esses valores na tela do computador com o bloco imprime.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.programaComVariaveis, alt: 'Programa no Dblocks que guarda um nome e um número em variáveis e mostra os dois no Console' },
    legenda: 'Um programa que guarda um nome e um número e mostra os dois no Console.',
  },
  secoes: [
    {
      id: 'o-que-e-uma-variavel',
      titulo: 'O que é uma variável',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Pense numa variável como uma caixinha com uma etiqueta. Você escreve um nome na etiqueta e guarda um valor dentro, como um número ou uma palavra. Depois, o programa pode olhar o que tem na caixinha ou trocar o que está guardado. Como o valor pode mudar, ela se chama variável.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Nos projetos com a placa, as variáveis guardam o que os sensores medem, como a temperatura ou a distância. Com o valor guardado, o programa pode fazer contas, decidir o que fazer ou mostrar o resultado.',
        },
      ],
    },
    {
      id: 'criando-uma-variavel',
      titulo: 'Criando uma variável',
      blocos: [
        { tipo: 'caminho', itens: ['Variáveis', 'Variáveis criadas', 'Criar variável...'] },
        {
          tipo: 'passos',
          itens: [
            {
              titulo: 'Abra Variáveis criadas',
              texto: 'Clique em Variáveis e depois em Variáveis criadas. No começo, só aparece o botão Criar variável...',
            },
            {
              titulo: 'Clique em Criar variável... e escolha um nome',
              texto:
                'Dê um nome que mostre o que a caixinha guarda, como temperatura ou nome. Assim fica fácil entender o programa depois.',
            },
            {
              titulo: 'Use os blocos que aparecem',
              texto: 'Depois de criada, a sua variável aparece em Variáveis criadas, com blocos só dela.',
            },
          ],
        },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.variaveisCriadasVazia, alt: 'Grupo Variáveis criadas só com o botão Criar variável...' },
              legenda: 'Antes: só o botão Criar variável...',
            },
            {
              imagem: { ...img.variaveisCriadasNomeValor, alt: 'Grupo Variáveis criadas com os blocos das variáveis nome e valor' },
              legenda: 'Depois de criar as variáveis nome e valor.',
            },
          ],
        },
        {
          tipo: 'tabela',
          larguraNome: 200,
          itens: [
            { titulo: 'definir valor para', texto: 'Guarda um valor na caixinha.' },
            { titulo: 'alterar valor por 1', texto: 'Soma um número ao que já está na caixinha.' },
            { titulo: 'valor', texto: 'Pega o que está guardado para usar em outro bloco.' },
          ],
        },
      ],
    },
    {
      id: 'tipos-de-valores',
      titulo: 'Tipos de valores',
      blocos: [
        { tipo: 'paragrafo', texto: 'O que vai dentro da caixinha fica nos outros grupos de Variáveis:' },
        {
          tipo: 'galeria',
          itens: [
            {
              imagem: { ...img.subBoleanas, alt: 'Blocos do grupo Boleanas: verdadeiro, falso e nulo' },
              titulo: 'Boleanas',
              texto: 'Verdadeiro ou falso. Servem para o programa decidir alguma coisa.',
            },
            {
              imagem: { ...img.subNumericas, alt: 'Blocos do grupo Numéricas: número, π e blocos de sorteio' },
              titulo: 'Numéricas',
              texto: 'Números. Tem também o π e blocos que sorteiam um número.',
            },
            {
              imagem: { ...img.subTexto, alt: 'Blocos do grupo Texto, como o criar texto com' },
              titulo: 'Texto',
              texto: 'Palavras e frases. O criar texto com junta vários pedaços em uma frase só.',
            },
            {
              imagem: { ...img.subListas, alt: 'Blocos do grupo Listas' },
              titulo: 'Listas',
              texto: 'Vários valores guardados juntos, como uma lista de compras.',
            },
          ],
        },
      ],
    },
    {
      id: 'mostrando-valores-no-console',
      titulo: 'Mostrando valores no Console',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O bloco imprime mostra um texto ou o que está dentro de uma variável no Console, a tela de mensagens do Dblocks. É o jeito mais fácil de ver se o programa está guardando o valor certo.',
        },
        { tipo: 'caminho', itens: ['Funções', 'Texto', 'imprime'] },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.funcoesTextoImprime, alt: 'Grupo Funções › Texto com o bloco imprime' },
              legenda: 'O bloco imprime em Funções › Texto.',
            },
            {
              imagem: { ...img.exemploImprime, alt: 'Programa que define as variáveis nome e valor e mostra as duas com o bloco imprime' },
              legenda: 'Duas variáveis guardadas e mostradas com o imprime.',
            },
          ],
        },
        { tipo: 'paragrafo', texto: 'Rode o programa com a placa conectada e abra a aba Console para ver o resultado:' },
        {
          tipo: 'figura',
          imagem: { ...img.consoleSaida, alt: 'Aba Console mostrando o nome e o número guardados nas variáveis' },
          legenda: 'O Console mostrando o nome e o número guardados nas variáveis.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Imprima dentro de um laço',
          texto:
            'Coloque o imprime dentro de um laço para ver o valor mudando enquanto o programa roda. É assim que você acompanha um sensor medindo ao vivo.',
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
            { titulo: 'Troque os valores', texto: 'Mude Maker para o seu nome e 10 para a sua idade.' },
            { titulo: 'Junte os dois', texto: 'Use criar texto com para mostrar uma frase só, como Maria tem 12 anos.' },
            { titulo: 'Conte com alterar', texto: 'Use alterar valor por 1 e depois mostre o valor de novo. Ele aumentou?' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
