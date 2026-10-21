import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Monte circuitos na tela, ligue os fios e teste o programa sem precisar da placa. Ainda dá para testar um robô em 3D.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.simuladorCodigoAberto, alt: 'Simulador com um servo motor ligado na AmadoBoard e o painel de blocos aberto ao lado' },
    legenda: 'O Simulador com um servo motor ligado na AmadoBoard e os blocos do programa ao lado.',
  },
  secoes: [
    {
      id: 'para-que-serve-o-simulador',
      titulo: 'Para que serve o Simulador',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O Simulador é um laboratório dentro do computador. Você monta o circuito na tela, ligando a placa, os fios e os componentes, e testa o programa sem precisar ter nada nas mãos. Se algo der errado, nada queima!',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Ele é ótimo para quem ainda não tem a placa, para testar uma ideia antes de montar de verdade e para estudar em casa. Para abrir, clique na aba Simulador, o ícone de uma sirene na barra da esquerda.',
        },
      ],
    },
    {
      id: 'as-partes-do-simulador',
      titulo: 'As partes do Simulador',
      blocos: [
        {
          tipo: 'figura',
          imagem: { ...img.telaSimulador, alt: 'Tela do Simulador com a lista de componentes, a área de montagem, o botão Código e a barra de ferramentas' },
        },
        {
          tipo: 'tabela',
          larguraNome: 170,
          respiro: 12,
          itens: [
            {
              titulo: 'Componentes',
              texto: 'À esquerda: as peças que você pode usar, como bateria, LED, resistor, botão e sensores. Use Categoria e a busca para achar.',
            },
            { titulo: 'Área de montagem', texto: 'No meio: onde você monta o circuito arrastando as peças.' },
            { titulo: 'Código', texto: 'O botão Código, à direita, abre os blocos do programa.' },
            { titulo: 'Barra de ferramentas', texto: 'Embaixo: rodar, salvar, desfazer, girar peças e mais.' },
          ],
        },
      ],
    },
    {
      id: 'montando-um-circuito',
      titulo: 'Montando um circuito',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Arraste as peças', texto: 'Escolha um componente na lista da esquerda e arraste para a área de montagem.' },
            {
              titulo: 'Ligue os fios',
              texto: 'Clique em um pino e depois em outro para ligar um fio entre eles. Escolha a cor do fio na barra de baixo.',
            },
            {
              titulo: 'Ajuste a posição',
              texto: 'Clique em uma peça para selecionar. Use os botões de girar e inverter para deixar do jeito certo.',
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Para rodar programas, use a placa',
          texto:
            'Para o programa funcionar, o circuito precisa ter a AmadoBoard. Ela está na lista de componentes, como no seu kit de verdade.',
        },
      ],
    },
    {
      id: 'programando-no-simulador',
      titulo: 'Programando no Simulador',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Clique em Código para abrir os blocos. Monte o programa do mesmo jeito que na aba Blocos e clique no Play da barra de baixo. As peças na tela reagem: o LED acende, o servo gira, o display mostra o texto.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.simuladorRodando, alt: 'Simulador rodando um programa, com o botão Play transformado em Pause' },
          legenda: 'Programa rodando: o botão Play vira Pause.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'O Simulador tem os seus próprios blocos',
          texto:
            'Os blocos do Simulador são parecidos com os da aba Blocos, mas não são os mesmos. Por isso, um programa montado na aba Blocos não aparece aqui, e o contrário também. Monte o programa no lugar onde vai usar.',
        },
      ],
    },
    {
      id: 'a-barra-de-ferramentas',
      titulo: 'A barra de ferramentas',
      blocos: [
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.barraFerramentas, alt: 'Barra de ferramentas do Simulador com os botões de rodar, remover, salvar, carregar e mais' },
        },
        {
          tipo: 'tabela',
          larguraNome: 170,
          respiro: 12,
          itens: [
            { titulo: 'Play / Pause', texto: 'Roda ou pausa a simulação.' },
            { titulo: 'Remover', texto: 'Limpar tudo ou Excluir seleção.' },
            {
              titulo: 'Salvar',
              texto: 'Salvar projeto, para continuar depois, ou Salvar diagrama, que baixa uma imagem do circuito.',
            },
            { titulo: 'Carregar', texto: 'Abre um projeto salvo.' },
            { titulo: 'Console', texto: 'Mostra as mensagens do programa.' },
            { titulo: 'Desfazer e Refazer', texto: 'Volta ou refaz a última ação.' },
            { titulo: 'Rotacionar e Inverter', texto: 'Gira ou espelha a peça selecionada.' },
            { titulo: 'Cor do fio', texto: 'Escolhe a cor do fio.' },
            { titulo: 'Tutorial', texto: 'Um passeio guiado pelos botões do Simulador.' },
            { titulo: 'Laboratório', texto: 'Peças prontas para montar e imagens de fundo.' },
            { titulo: 'Robô 3D', texto: 'Abre o simulador de robô.' },
          ],
        },
      ],
    },
    {
      id: 'laboratorio-e-robo-3d',
      titulo: 'Laboratório e Robô 3D',
      blocos: [
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.laboratorio, alt: 'Laboratório do Simulador com semáforo, portão, painel solar e outras peças prontas' },
              legenda: 'Laboratório: semáforo, portão, painel solar, robô e outras peças prontas.',
            },
            {
              imagem: { ...img.robo3d, alt: 'Robô 3D: um carrinho em uma arena' },
              legenda: 'Robô 3D: um carrinho em uma arena para testar o seu programa.',
            },
          ],
        },
        {
          tipo: 'paragrafo',
          texto:
            'O Laboratório traz peças maiores para deixar o projeto com cara de maquete, como um semáforo ou um portão. O Robô 3D abre um carrinho em uma arena, onde dá para testar programas de robôs, como seguidor de linha e labirintos.',
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
            { titulo: 'Acenda um LED', texto: 'Monte uma bateria, um resistor e um LED, como na primeira montagem do Simulador.' },
            { titulo: 'Servo dançante', texto: 'Ligue um servo na placa e faça ele ir para 0, 90 e 180 graus.' },
            { titulo: 'Salve o seu circuito', texto: 'Salve o projeto e baixe a imagem do diagrama.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
