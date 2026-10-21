import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Mande as leituras da placa para a internet e acompanhe tudo em um painel com medidores e gráficos, de qualquer lugar.',
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
            'Com a AmadoBoard, você faz o mesmo: a placa lê um sensor e manda o valor para a internet. Na aba IOT do Dblocks, você monta um painel para ver esses valores com medidores e gráficos.',
        },
      ],
    },
    {
      id: 'como-os-dados-viajam',
      titulo: 'Como os dados viajam',
      blocos: [
        {
          tipo: 'tabela',
          larguraNome: 130,
          respiro: 12,
          itens: [
            { titulo: '1. A placa', texto: 'Lê o sensor e publica o valor com o bloco publicar dado com EasyMQTT.' },
            {
              titulo: '2. O EasyMQTT',
              texto:
                'Funciona como um mural de recados na internet. Cada recado tem um tópico, que é o nome do recado, como luz.',
            },
            { titulo: '3. O painel', texto: 'Na aba IOT, o painel lê o recado do mural e mostra o valor.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'A sessão é o código do seu mural',
          texto:
            'Ao colocar o bloco iniciar EasyMQTT, o Dblocks cria um código de sessão, como k3x9pz. A placa e o painel precisam usar o mesmo código.',
        },
      ],
    },
    {
      id: 'programando-a-placa',
      titulo: 'Programando a placa',
      blocos: [
        { tipo: 'caminho', itens: ['Rede e Internet', 'EasyMQTT'] },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaEasymqtt, alt: 'Categoria EasyMQTT com os blocos de iniciar, publicar, inscrever e receber dados' },
          legenda: 'Os blocos do EasyMQTT.',
        },
        {
          tipo: 'tabela',
          larguraNome: 230,
          respiro: 12,
          itens: [
            { titulo: 'iniciar EasyMQTT', texto: 'Liga o EasyMQTT e mostra o código da sessão.' },
            { titulo: 'publicar dado com EasyMQTT', texto: 'Manda um valor para a internet com o nome de um tópico.' },
            { titulo: 'incrição no tópico EasyMQTT', texto: 'Faz algo quando chega um valor novo nesse tópico.' },
            { titulo: 'receber dados EasyMQTT', texto: 'Busca os valores novos que chegaram.' },
            { titulo: 'Desconectar EasyMQTT', texto: 'Desliga o EasyMQTT.' },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: luz da sala na internet',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: {
                ...img.programaEasymqtt,
                alt: 'Programa que liga o Wi‑Fi, inicia o EasyMQTT, lê o LDR e publica no tópico luz a cada 5 segundos',
              },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Liga a placa no Wi‑Fi.',
                '2. Inicia o EasyMQTT com a sessão k3x9pz.',
                '3. Lê a luz do ambiente no sensor LDR (D39).',
                '4. Publica o valor no tópico luz.',
                '5. Espera 5 segundos e repete.',
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
            { titulo: 'Adicionar fonte de dados', texto: 'Liga o painel a um tópico do EasyMQTT.' },
          ],
        },
        {
          tipo: 'passos',
          itens: [
            {
              titulo: 'Adicione a fonte de dados',
              texto:
                'Clique em Adicionar fonte de dados e escolha o tipo BIPES EasyMQTT. Dê um nome, escreva a sessão e o tópico, e clique em Salvar.',
            },
          ],
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.fonteEasymqtt, alt: 'Janela da fonte de dados Luz, do tipo BIPES EasyMQTT, com a sessão k3x9pz e o tópico luz' },
          legenda: 'A fonte de dados Luz, lendo o tópico luz da sessão k3x9pz.',
        },
        {
          tipo: 'passos',
          inicio: 2,
          itens: [
            { titulo: 'Crie um quadro', texto: 'Clique em Adicionar painel (+). Um quadro vazio aparece.' },
            {
              titulo: 'Coloque um widget',
              texto:
                'No quadro, clique no + e escolha um tipo, como Medidor. Dê um título e, em VALOR, clique em DATASOURCE para escolher a fonte que você criou.',
            },
          ],
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.widgetMedidor, alt: 'Lista de widgets do painel: Medidor, Minigráfico, Texto, Luz indicadora e outros' },
          legenda: 'Os widgets mostram os valores de jeitos diferentes: Medidor, Minigráfico, Texto, Luz indicadora e outros.',
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
              titulo: 'Termômetro na internet',
              texto: 'Publique a temperatura da placa em um tópico novo e mostre em um Medidor.',
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
