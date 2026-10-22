import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Monte um painel com medidores e gráficos e acompanhe as leituras da placa em tempo real, pelo cabo USB.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.painelIot, alt: 'Painel de exemplo na aba IOT com medidores de temperatura e umidade' },
    legenda: 'O painel de exemplo na aba IOT, com medidores de temperatura e umidade.',
  },
  secoes: [
    {
      id: 'o-que-e-iot',
      titulo: 'O que é IoT',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'IoT quer dizer Internet das Coisas. São objetos do dia a dia ligados na internet, como uma lâmpada que você acende pelo celular ou um termômetro que mostra a temperatura de longe.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Neste capítulo você usa a aba IOT do Dblocks: a placa lê um sensor e manda o valor pelo cabo USB, e o painel mostra tudo com medidores e gráficos. Mais adiante, com o EasyMQTT, esses mesmos valores vão para a internet.',
        },
      ],
    },
    {
      id: 'como-o-valor-chega-no-painel',
      titulo: 'Como o valor chega no painel',
      blocos: [
        {
          tipo: 'tabela',
          larguraNome: 130,
          respiro: 12,
          itens: [
            { titulo: '1. A placa', texto: 'Lê o sensor e manda o valor com o bloco mostrar na aba IoT.' },
            {
              titulo: '2. O cabo USB',
              texto:
                'O valor viaja pelo mesmo cabo que grava o programa na placa. Não precisa de internet nem de Wi‑Fi.',
            },
            { titulo: '3. O painel', texto: 'Na aba IOT, a fonte de dados pega esse valor e o quadro mostra ele.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Cada valor tem um ID',
          texto:
            'No bloco mostrar na aba IoT você escolhe um número de ID, como 1. Na aba IOT, a fonte de dados usa esse mesmo número para achar o valor.',
        },
      ],
    },
    {
      id: 'programando-a-placa',
      titulo: 'Programando a placa',
      blocos: [
        { tipo: 'caminho', itens: ['Funções', 'BIPES'] },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaBipes, alt: 'Categoria BIPES com o bloco mostrar na aba IoT' },
          legenda: 'O bloco mostrar na aba IoT, na categoria BIPES.',
        },
        {
          tipo: 'tabela',
          larguraNome: 230,
          respiro: 12,
          itens: [
            {
              titulo: 'mostrar na aba IoT',
              texto: 'Manda um valor para o painel. Você escolhe o número do ID e o valor que vai aparecer.',
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 1: a luz da sala no painel',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.programaPainel, alt: 'Programa que lê o LDR no D39 e manda o valor para a aba IoT com o ID 1, a cada 1 segundo' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Lê a luz do ambiente no sensor LDR (D39).',
                '2. Manda o valor para a aba IoT com o ID 1.',
                '3. Espera 1 segundo e repete.',
              ],
            },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo 2: luz e temperatura juntas',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: {
                ...img.programaPainel2,
                alt: 'Programa que lê a luz no LDR e a temperatura no DHT11 e manda cada uma para a aba IoT, com os IDs 1 e 2',
              },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Lê a luz no LDR (D39) e a temperatura no sensor DHT11 (D17).',
                '2. Manda a luz com o ID 1 e a temperatura com o ID 2.',
                '3. No painel, cada ID vira uma fonte de dados e um quadro.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'montando-o-painel',
      titulo: 'Montando o painel',
      blocos: [
        { tipo: 'paragrafo', texto: 'Clique na aba IOT, na barra da esquerda. Lá em cima fica a barra do painel:' },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.barraPainel, alt: 'Barra do painel da aba IOT com os botões de adicionar, carregar, salvar e fontes de dados' },
        },
        {
          tipo: 'tabela',
          larguraNome: 250,
          respiro: 12,
          itens: [
            { titulo: 'Adicionar painel (+)', texto: 'Cria um quadro novo no painel.' },
            { titulo: 'Carregar painel', texto: 'Abre um painel salvo no computador.' },
            { titulo: 'Salvar painel', texto: 'Guarda o painel no computador.' },
            { titulo: 'Gerar painel a partir do programa', texto: 'Carrega um painel de exemplo pronto.' },
            { titulo: 'Fonte de dados', texto: 'Mostra de onde o painel está lendo os valores.' },
            { titulo: 'Adicionar fonte de dados', texto: 'Cria a fonte que lê os valores que chegam pelo cabo.' },
          ],
        },
        {
          tipo: 'passos',
          itens: [
            {
              titulo: 'Adicione a fonte de dados',
              texto:
                'Clique em Adicionar fonte de dados e escolha o tipo BIPES Serial, USB ou Bluetooth. Dê um nome, escreva o ID da mensagem (o mesmo número que você usou no bloco) e clique em Salvar.',
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.fonteDeDados, alt: 'Janela da fonte de dados Luz, do tipo BIPES Serial, USB ou Bluetooth, com o ID da mensagem 1' },
          legenda: 'A fonte de dados Luz, lendo a mensagem de ID 1.',
        },
        {
          tipo: 'passos',
          inicio: 2,
          itens: [
            {
              titulo: 'Crie um quadro',
              texto:
                'Clique em Adicionar painel (+), na barra de cima. Um quadro vazio aparece. No canto dele ficam três botões: o + coloca um gráfico dentro, o lápis edita o quadro e a lixeira apaga.',
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.quadroNovo, alt: 'Quadro novo, ainda vazio, com os botões +, lápis e lixeira no canto' },
          legenda: 'O quadro recém-criado, ainda vazio, com os botões +, lápis e lixeira.',
        },
        {
          tipo: 'passos',
          inicio: 3,
          itens: [
            {
              titulo: 'Dê um nome ao quadro',
              texto:
                'Clique no lápis. Na janela Painel, escreva o TÍTULO do quadro, por exemplo Luz da sala. LINHA e COLUNAS mudam a posição do quadro no painel; pode deixar como está. Clique em SALVAR.',
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.janelaPainel, alt: 'Janela Painel com os campos Título, Linha e Colunas' },
          legenda: 'A janela Painel, onde o quadro ganha nome.',
        },
        {
          tipo: 'passos',
          inicio: 4,
          itens: [
            {
              titulo: 'Escolha o tipo de quadro',
              texto:
                'Clique no + do quadro. Na janela Widget, abra a lista TIPO: são 12 tipos, de medidores a gráficos. Para começar, escolha Medidor.',
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.listaDeTipos, alt: 'Lista TIPO da janela Widget com os 12 tipos de quadro' },
          legenda: 'Os 12 tipos de quadro que aparecem na lista TIPO.',
        },
        {
          tipo: 'passos',
          inicio: 5,
          itens: [
            {
              titulo: 'Ligue o quadro na fonte de dados',
              texto:
                'Os campos mudam conforme o tipo. No Medidor, preencha TÍTULO, UNIDADE, MÍNIMO e MÁXIMO. Em VALOR, clique em DATASOURCE e escolha a fonte que você criou: o campo fica datasources["Luz"]. Clique em SALVAR.',
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.janelaMedidor, alt: 'Janela do Medidor preenchida com título Luz, valor datasources["Luz"], unidade % e escala de 0 a 100' },
          legenda: 'A janela do Medidor preenchida: o valor vem da fonte Luz e a escala vai de 0 a 100.',
        },
        {
          tipo: 'passos',
          inicio: 6,
          itens: [
            {
              titulo: 'Veja o resultado',
              texto: 'Com a placa rodando o programa, o medidor se mexe a cada leitura que chega.',
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.medidorComValor, alt: 'Medidor mostrando a luz da sala em tempo real' },
          legenda: 'O medidor mostrando a luz da sala em tempo real.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'O quadro não mostra nada?',
          texto:
            'Confira três coisas: o programa está rodando na placa, o ID do bloco mostrar na aba IoT é o mesmo da fonte de dados, e em Fonte de dados a hora da Última atualização muda a cada leitura.',
        },
        {
          tipo: 'figura',
          legendaLivre: true,
          imagem: { ...img.fontesAtualizando, alt: 'Menu Fonte de dados com a hora da última atualização de cada fonte' },
          legenda: 'Em Fonte de dados dá para ver a hora da última atualização de cada fonte.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Salve o seu painel',
          texto: 'Clique em Salvar painel para guardar no computador. Depois é só usar Carregar painel para abrir de novo.',
        },
      ],
    },
    {
      id: 'grafico-no-tempo',
      titulo: 'Gráfico no tempo',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O medidor mostra o valor de agora. Para ver como ele mudou, use o quadro Gráfico no tempo (Highcharts): ele desenha uma linha com as leituras e vai andando sozinho. Crie outro quadro, clique no + e escolha esse tipo na lista.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.janelaGrafico, alt: 'Janela do Gráfico no tempo com duas séries, Luz e Temperatura' },
          legenda: 'A janela do Gráfico no tempo com duas séries: Luz e Temperatura.',
        },
        {
          tipo: 'tabela',
          larguraNome: 250,
          respiro: 12,
          itens: [
            { titulo: 'Janela de tempo (s)', texto: 'Quantos segundos o gráfico mostra. Com 60, fica sempre o último minuto na tela.' },
            { titulo: 'Altura (nº de blocos)', texto: 'O tamanho do gráfico. 4 é uma boa altura para começar.' },
            { titulo: 'Tipo de gráfico', texto: 'Área, com o fundo pintado, ou Linha suave.' },
            { titulo: 'Título', texto: 'O nome que aparece em cima do gráfico.' },
            {
              titulo: 'Eixo X e Eixo Y',
              texto: 'Já vêm preenchidos com Tempo e Valores. Para trocar o nome, mude o texto entre aspas.',
            },
            {
              titulo: 'Série 1, 2 e 3',
              texto:
                'Cada série é uma linha. Em Fonte de dados clique em DATASOURCE e escolha a fonte; em Rótulo escreva o nome que aparece na legenda. Dá para desenhar até três linhas no mesmo gráfico.',
            },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.painelPronto, alt: 'Painel do Exemplo 2 funcionando, com um medidor para cada sensor e o gráfico com as duas linhas' },
          legenda: 'O painel do Exemplo 2 funcionando: um medidor para cada sensor e o gráfico com as duas linhas.',
        },
      ],
    },
    {
      id: 'tipos-de-quadro',
      titulo: 'Tipos de quadro',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Cada quadro mostra o valor de um jeito. O tipo é escolhido na lista TIPO da janela Widget e pode ser trocado depois pelo lápis do quadro.',
        },
        {
          tipo: 'tabela',
          larguraNome: 250,
          respiro: 12,
          itens: [
            { titulo: 'Medidor', texto: 'Mostra o valor num mostrador redondo, com ponteiro. Bom para temperatura e luz.' },
            { titulo: 'Medidor linear horizontal', texto: 'A mesma ideia, numa barra deitada. Ocupa menos espaço.' },
            { titulo: 'Minigráfico', texto: 'Desenha uma linha com os últimos valores. É o jeito de ver a mudança com o tempo.' },
            { titulo: 'Ponteiro', texto: 'Uma seta que gira. Boa para direção, como a do vento.' },
            { titulo: 'Luz indicadora', texto: 'Acende quando o valor passa do limite que você escolher. Serve de alarme.' },
            { titulo: 'Texto', texto: 'Mostra o valor escrito, com unidade. Dá para incluir um minigráfico junto.' },
            { titulo: 'Imagem', texto: 'Mostra uma figura, que pode trocar conforme o valor.' },
            {
              titulo: 'Interruptor e Atuador',
              texto: 'Em vez de só mostrar, mandam um comando quando você mexe no quadro. Uso mais avançado.',
            },
            {
              titulo: 'Gráfico no tempo',
              texto: 'Desenha a linha das leituras ao longo do tempo, com até três séries. É o quadro da seção anterior.',
            },
            { titulo: 'Controle deslizante', texto: 'Uma barra que você arrasta para escolher um número.' },
            { titulo: 'HTML', texto: 'Mostra um texto ou uma figura montada por você em HTML.' },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.tiposLadoALado, alt: 'Medidor, medidor linear, minigráfico, texto e luz indicadora mostrando a mesma leitura de luz' },
          legenda: 'Medidor, medidor linear, minigráfico, texto e luz indicadora mostrando a mesma leitura de luz.',
        },
      ],
    },
    {
      id: 'painel-de-exemplo',
      titulo: 'Painel de exemplo',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Quer ver como fica um painel pronto? Clique em Gerar painel a partir do programa, o botão das estrelinhas, e depois em Sim. Aparece um painel com medidores de temperatura e umidade, um gráfico, um relógio e a luz de um relé.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'O exemplo troca o painel atual',
          texto: 'Antes de gerar o exemplo, salve o seu painel se quiser guardar.',
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
            {
              titulo: 'Termômetro no painel',
              texto: 'Mande a temperatura da placa com outro número de ID e mostre em um Medidor.',
            },
            { titulo: 'Gráfico da luz', texto: 'Coloque um Minigráfico para ver a luz mudar com o tempo.' },
            { titulo: 'Alarme no painel', texto: 'Use uma Luz indicadora que acende quando a sala fica escura.' },
          ],
        },
        {
          recurso: 'jose',
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Parabéns!',
          texto:
            'Você terminou a Trilha 5 e todas as trilhas do guia. Agora conheça o José, a IA que a turma monta por blocos.',
        },
        {
          // Enquanto o José não é lançado (src/config/recursos.ts).
          semRecurso: 'jose',
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Parabéns!',
          texto: 'Você terminou a Trilha 5 e todas as trilhas do guia. Agora é só criar os seus projetos!',
        },
      ],
    },
  ],
};

export default conteudo;
