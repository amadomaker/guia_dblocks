import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Crie os seus próprios blocos para não repetir trabalho e aprenda a juntar, transformar e medir textos.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.funcaoPiscar, alt: 'Programa com a função piscar criada com os blocos de Funções' },
    legenda: 'Um programa com a função piscar, criada com os blocos de Funções.',
  },
  secoes: [
    {
      id: 'o-que-e-uma-funcao',
      titulo: 'O que é uma função',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Uma função é como uma receita com nome. Você ensina uma vez como fazer alguma coisa, dá um nome para essa receita e, depois, é só chamar pelo nome sempre que precisar.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Imagine que o seu programa precisa piscar o LED em vários momentos. Em vez de montar os mesmos quatro blocos toda vez, você cria a função piscar e usa um bloco só. O programa fica menor e mais fácil de entender.',
        },
        { tipo: 'caminho', itens: ['Funções', 'Funções criadas'] },
        {
          tipo: 'figuras',
          quebra: true,
          itens: [
            {
              imagem: { ...img.funcoesCriadasComeco, alt: 'Grupo Funções criadas com os blocos para criar funções' },
              legenda: '1. No começo: os blocos para criar funções.',
            },
            {
              imagem: { ...img.funcaoPiscarMontada, alt: 'A função piscar montada na área de trabalho' },
              legenda: '2. Monte a função piscar na área de trabalho.',
            },
            {
              imagem: { ...img.funcoesCriadasPiscar, alt: 'Grupo Funções criadas com o bloco novo piscar' },
              legenda: '3. Depois: a função piscar vira um bloco novo na lista.',
            },
          ],
        },
      ],
    },
    {
      id: 'criando-a-sua-funcao',
      titulo: 'Criando a sua função',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Arraste o bloco para faça algo', texto: 'Ele fica em Funções › Funções criadas. É o primeiro bloco da lista.' },
            { titulo: 'Dê um nome para a função', texto: 'Clique em faça algo e escreva um nome que diga o que ela faz, como piscar.' },
            { titulo: 'Coloque os blocos dentro', texto: 'Monte dentro dela o que a função deve fazer.' },
            {
              titulo: 'Use a função',
              texto:
                'Agora a função aparece como um bloco novo em Funções criadas. Coloque esse bloco onde quiser que ela aconteça.',
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: piscar três vezes',
          texto:
            'A função piscar acende o LED, espera meio segundo, apaga e espera mais meio segundo. Embaixo, o repita chama a função três vezes. Resultado: o LED pisca três vezes.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploPiscar, alt: 'Função piscar e um repita 3 vezes chamando a função' },
            },
          ],
        },
      ],
    },
    {
      id: 'funcoes-que-devolvem-um-valor',
      titulo: 'Funções que devolvem um valor',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O segundo bloco da lista, o que tem retorna, cria uma função que faz uma conta e devolve o resultado, como uma calculadora. Para a função receber um número, clique na engrenagem dela e adicione uma entrada.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: o dobro de um número',
          texto:
            'A função dobro recebe um número e devolve esse número vezes 2. Embaixo, o imprime pede o dobro de 5 e mostra o resultado no Console.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploDobro, alt: 'Função dobro que retorna o número vezes 2 e um imprime com o dobro de 5' },
            },
            { tipo: 'console', imagem: { ...img.consoleDobro, alt: 'Console mostrando 10' } },
          ],
        },
      ],
    },
    {
      id: 'trabalhando-com-texto',
      titulo: 'Trabalhando com texto',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'Texto é tudo o que tem letras: palavras, nomes e frases. Em Funções › Texto ficam os blocos para mexer com eles:',
        },
        { tipo: 'caminho', itens: ['Funções', 'Texto'] },
        {
          tipo: 'figuraComLista',
          layout: { colunas: 24, itens: 14, topo: 4 },
          imagem: { ...img.funcoesTexto, alt: 'Grupo Funções › Texto com os blocos tamanho de, para MAIÚSCULAS, imprime e Pede um texto' },
          itens: [
            { titulo: 'tamanho de', texto: 'Conta quantas letras o texto tem.' },
            { titulo: 'para MAIÚSCULAS', texto: 'Deixa tudo em letras grandes. Também dá para escolher minúsculas.' },
            { titulo: 'imprime', texto: 'Mostra o texto no Console.' },
            { titulo: 'Pede um texto', texto: 'Pede para a pessoa digitar alguma coisa no Console.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Para juntar pedaços de texto',
          texto: 'Use o criar texto com, que fica em Variáveis › Texto. Clique na engrenagem dele para juntar mais pedaços.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: brincando com um nome',
          texto:
            'O programa guarda o nome Maria. Depois, mostra uma saudação, o nome em letras maiúsculas e quantas letras ele tem.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploNome, alt: 'Programa que guarda Maria e imprime uma saudação, o nome em maiúsculas e o tamanho' },
            },
            { tipo: 'console', imagem: { ...img.consoleNome, alt: 'Console mostrando Olá, Maria, MARIA e 5' } },
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
            { titulo: 'Diga olá', texto: 'Crie uma função ola que mostra Olá! no Console e chame ela duas vezes.' },
            { titulo: 'Triplo', texto: 'Faça uma função triplo, parecida com o dobro, que devolve o número vezes 3.' },
            { titulo: 'O seu nome', texto: 'Mostre o seu nome em letras maiúsculas e quantas letras ele tem.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
