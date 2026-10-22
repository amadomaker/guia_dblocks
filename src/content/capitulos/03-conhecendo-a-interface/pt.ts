import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Conheça cada parte da tela do Dblocks: onde ficam os botões, os blocos e o espaço onde você monta o programa.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figuraAnotada',
    imagem: { ...img.visaoGeral, alt: 'Tela do Dblocks com cinco marcadores numerados sobre as partes da tela' },
    marcadores: [
      { x: 560, y: 10 },
      { x: -22, y: 150 },
      { x: 150, y: 108 },
      { x: 470, y: 250 },
      { x: 712, y: 330 },
    ],
    legenda: 'A tela do Dblocks tem cinco partes. Os números são explicados logo abaixo.',
  },
  secoes: [
    {
      id: 'as-partes-da-tela',
      titulo: 'As partes da tela',
      blocos: [
        {
          tipo: 'listaNumerada',
          itens: [
            { titulo: 'Barra superior', texto: 'Os botões para conectar a placa, rodar o programa, salvar e pedir ajuda.' },
            { titulo: 'Abas', texto: 'Trocam o que aparece na tela, como os blocos, o simulador ou o console.' },
            { titulo: 'Caixa de blocos', texto: 'Onde ficam todos os blocos, separados por cor.' },
            { titulo: 'Área de trabalho', texto: 'O espaço onde você encaixa os blocos para montar o programa.' },
            { titulo: 'Controles da área de trabalho', texto: 'Botões para centralizar, aumentar e diminuir os blocos, e a lixeira.' },
          ],
        },
      ],
    },
    {
      id: 'barra-superior',
      titulo: 'Barra superior',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os botões da barra de cima não têm o nome escrito. Pare o mouse em cima de um deles e o nome aparece. Da esquerda para a direita, eles são:',
        },
        { tipo: 'figura', imagem: { ...img.barraSuperior, alt: 'Barra superior do Dblocks com os onze botões, da esquerda para a direita' } },
        {
          tipo: 'listaNumerada',
          itens: [
            {
              titulo: 'Escolha o canal de conexão',
              texto:
                'Escolhe o caminho que o computador usa para falar com a placa: pelo cabo (USB), por Bluetooth ou por Wi‑Fi. O capítulo 04 explica.',
            },
            { titulo: 'Conectar/Desconectar', texto: 'Liga e desliga a conexão com a placa.' },
            { titulo: 'Selecionar Placa', texto: 'Mostra qual placa você está usando: a AmadoBoard.' },
            {
              titulo: 'Executar o programa',
              texto:
                'Manda o programa para a placa e começa a rodar. Enquanto o programa roda, o botão vira um quadrado. Clique nele para parar.',
            },
            {
              titulo: 'Salvar na placa (main.py)',
              texto: 'Guarda o programa dentro da placa. Assim, ele roda sozinho toda vez que a placa ligar, mesmo longe do computador.',
            },
            { titulo: 'Instalar MicroPython', texto: 'Abre a página que instala o MicroPython na placa. Você só precisa fazer isso uma vez.' },
            {
              titulo: 'Salvar blocos para arquivo.',
              texto: 'Baixa o seu programa para o computador, como um arquivo. Assim você pode guardar ou mandar para alguém.',
            },
            { titulo: 'Carregar blocos de arquivo.', texto: 'Abre um programa que você salvou no computador.' },
            { titulo: 'Painel de notificações.', texto: 'Mostra os avisos do Dblocks, como quando a placa não conecta.' },
            { titulo: 'Fórum de ajuda.', texto: 'Abre o fórum, onde você pode tirar dúvidas.' },
            { titulo: 'Perfil', texto: 'Abre o painel de perfil. O capítulo 02 explica.' },
          ],
        },
      ],
    },
    {
      id: 'abas-da-lateral',
      titulo: 'Abas da lateral',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'A barra da esquerda tem as abas. Cada aba mostra uma parte diferente do Dblocks. Pare o mouse em cima de um ícone para ver o nome.',
        },
        {
          tipo: 'figuraComTabela',
          imagem: { ...img.abasDaLateral, alt: 'Barra lateral do Dblocks com os ícones das dez abas, um embaixo do outro' },
          itens: [
            { titulo: 'Blocos', texto: 'Onde você monta o programa com os blocos.' },
            { titulo: 'Console', texto: 'Mostra as mensagens que a placa manda. Capítulo 20.' },
            { titulo: 'Arquivos', texto: 'Mostra os arquivos guardados dentro da placa. Capítulo 20.' },
            { titulo: 'Dispositivo', texto: 'A AmadoBoard em 3D. Capítulo 12.' },
            { titulo: 'IOT', texto: 'Mostra em gráficos os dados que a placa envia pela internet. Capítulo 25.' },
            { titulo: 'EasyMQTT', texto: 'Mostra os dados enviados com o EasyMQTT. Capítulo 25.' },
            { titulo: 'Música', texto: 'Monte músicas para o buzzer tocar. Capítulo 17.' },
            { titulo: 'Simulador', texto: 'Teste circuitos e programas sem a placa. Capítulo 19.' },
            { titulo: 'Visão', texto: 'Controle a placa com gestos, usando a câmera. Capítulo 22.' },
            { titulo: 'IA', texto: 'O José. Capítulo 26.', recurso: 'jose' },
          ],
        },
      ],
    },
    {
      id: 'caixa-de-blocos',
      titulo: 'Caixa de blocos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos ficam guardados em grupos chamados categorias, cada um com uma cor. Clique em uma categoria para ver os blocos dela. Depois, é só arrastar o bloco que você quer para a área de trabalho. Algumas categorias têm grupos menores dentro. Em Controle, por exemplo, ficam Laços e Temporização.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaControle, alt: 'Caixa de blocos com a categoria Controle aberta e os blocos de Laços ao lado' },
          legenda: 'A categoria Controle aberta, com os blocos de Laços ao lado.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Fixar',
          texto:
            'A caixa de blocos fica sempre aberta. Se você clicar na tachinha de Fixar, ela passa a se esconder quando você clica fora dela. Para ela voltar, clique no ícone Blocos, na barra da esquerda.',
        },
      ],
    },
    {
      id: 'area-de-trabalho',
      titulo: 'Área de trabalho',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'É o espaço onde você monta o programa. Arraste um bloco para perto de outro e solte: se as pontas combinarem, eles se encaixam, como peças de quebra‑cabeça. O bloco Dados do projeto já vem pronto. Nele você pode escrever o seu nome e o que o programa faz.',
        },
        {
          tipo: 'figuraComLista',
          centralizar: true,
          imagem: { ...img.controlesAreaTrabalho, alt: 'Botões do canto da área de trabalho: centralizar, diminuir, aumentar e lixeira' },
          itens: [
            { titulo: 'Centralizar', texto: 'Traz os blocos de volta para o meio da tela.' },
            { titulo: 'Zoom out', texto: 'Deixa os blocos menores, para ver o programa inteiro.' },
            { titulo: 'Zoom in', texto: 'Deixa os blocos maiores, para ler melhor.' },
            { titulo: 'Lixeira', texto: 'Guarda os blocos que você apagou.' },
          ],
        },
      ],
    },
    {
      id: 'menu-de-contexto',
      titulo: 'Menu de contexto',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'Clique com o botão direito do mouse em um bloco. Abre um menu com mais opções para aquele bloco:',
        },
        {
          tipo: 'figuraComLista',
          imagem: { ...img.menuDeContexto, alt: 'Menu que abre ao clicar com o botão direito em um bloco' },
          itens: [
            { titulo: 'Duplicar', texto: 'Faz uma cópia do bloco.' },
            { titulo: 'Adicionar comentário', texto: 'Cola um bilhete no bloco, para explicar o que ele faz.' },
            { titulo: 'Colapsar Bloco', texto: 'Fecha o bloco para ele ocupar menos espaço.' },
            { titulo: 'Desabilitar bloco', texto: 'O bloco continua na tela, mas o programa pula ele.' },
            { titulo: 'Deletar', texto: 'Apaga o bloco e tudo o que estiver dentro dele.' },
          ],
        },
      ],
    },
    {
      id: 'campos-e-comentarios',
      titulo: 'Campos e comentários',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Campos são as partes de um bloco que você pode mudar, como um número ou um pino. É só clicar no campo para trocar. Os comentários são bilhetes presos ao bloco. Eles aparecem como um ponto de interrogação: clique nele para abrir ou fechar o bilhete.',
        },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.campoDePino, alt: 'Bloco com o campo de pino aberto, mostrando a lista de pinos da placa' },
              legenda: 'Clicando no pino, aparece a lista de pinos da placa.',
            },
            {
              imagem: { ...img.comentarioNoBloco, alt: 'Bloco com um comentário aberto ao lado' },
              legenda: 'Um comentário aberto no bloco.',
            },
          ],
        },
      ],
    },
    {
      id: 'lixeira',
      titulo: 'Lixeira',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para apagar um bloco, arraste ele até a lixeira, no canto direito da tela. Também dá para clicar no bloco e apertar a tecla Delete. Apagou sem querer? Clique na lixeira, encontre o bloco e arraste ele de volta.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.blocosNaLixeira, alt: 'Blocos apagados aparecendo em uma coluna ao lado da lixeira' },
          legenda: 'Os blocos apagados aparecem ao lado da lixeira.',
        },
      ],
    },
  ],
};

export default conteudo;
