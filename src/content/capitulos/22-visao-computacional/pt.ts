import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Use a câmera do computador para controlar a placa com gestos da mão, poses do corpo ou cores.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.abaVisao, alt: 'Aba Visão do Dblocks antes de ligar a câmera' },
    legenda: 'A aba Visão antes de ligar a câmera.',
  },
  secoes: [
    {
      id: 'o-que-e-a-visao-computacional',
      titulo: 'O que é a visão computacional',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Visão computacional é quando o computador olha uma imagem e entende o que tem nela. Na aba Visão, a câmera do computador observa as suas mãos e o seu corpo, e o Dblocks reconhece gestos, como mão aberta ou polegar para cima.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Cada gesto reconhecido vira uma ordem para a placa. Assim você pode, por exemplo, acender o LED abrindo a mão e apagar fechando a mão, sem encostar em nada.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'A placa recebe os gestos pelo Wi‑Fi',
          texto:
            'O computador e a placa precisam estar na mesma rede Wi‑Fi. O computador manda o gesto e a placa responde. O capítulo 24 mostra como ligar a placa no Wi‑Fi.',
        },
      ],
    },
    {
      id: 'a-aba-visao',
      titulo: 'A aba Visão',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'Clique na aba Visão, o ícone de uma mão na barra da esquerda. Lá em cima fica a barra de controles:',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.barraVisao, alt: 'Barra de controles da aba Visão com o botão ▶, os modos Mãos, Corpo e Cor, a câmera e o Wi‑Fi' },
        },
        {
          tipo: 'tabela',
          larguraNome: 150,
          respiro: 12,
          itens: [
            { titulo: 'Ligar câmera', texto: 'O botão ▶ liga a câmera. Enquanto ela está ligada, aparece Ao vivo.' },
            {
              titulo: 'Mãos, Corpo e Cor',
              texto: 'Escolhem o que a câmera vai procurar: gestos da mão, poses do corpo ou uma cor que você segura.',
            },
            { titulo: 'Câmera', texto: 'Escolhe qual câmera usar, a do computador (Notebook) ou uma ESP32-CAM.' },
            { titulo: 'Wi‑Fi', texto: 'Onde você escreve o IP da placa, o endereço dela na rede.' },
            { titulo: 'Definir gestos', texto: 'Mostra a lista de gestos que a câmera reconhece. Com os blocos da categoria Visão você não precisa preencher nada aqui: a lista serve para ver os gestos e, se quiser, mandar um gesto para outro endereço.' },
          ],
        },
      ],
    },
    {
      id: 'ligando-a-placa-a-aba-visao',
      titulo: 'Ligando a placa à aba Visão',
      blocos: [
        {
          tipo: 'passosComFigura',
          semSombra: true,
          entrePassos: 16,
          imagem: { ...img.ipPlaca, alt: 'Janela do Wi‑Fi da aba Visão com o IP da placa e os botões Testar e Salvar' },
          itens: [
            {
              titulo: 'Rode o programa na placa',
              texto:
                'Use o exemplo abaixo. O Console mostra quatro endereços entre parênteses: o primeiro é o IP da placa.',
            },
            {
              titulo: 'Escreva o IP na aba Visão',
              texto: 'Clique no ícone do Wi‑Fi, escreva o IP e clique em Testar. Se der certo, clique em Salvar.',
            },
            { titulo: 'Ligue a câmera', texto: 'Clique no ▶ e faça um gesto na frente da câmera.' },
          ],
        },
        {
          tipo: 'figura',
          imagem: { ...img.consoleIp, alt: 'Console mostrando quatro endereços entre parênteses; o primeiro, circulado, é o IP da placa' },
          legenda: 'O primeiro endereço é o IP da placa.',
        },
      ],
    },
    {
      id: 'gestos-poses-e-cores',
      titulo: 'Gestos, poses e cores',
      blocos: [
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.definirGestos, alt: 'Janela Definir gestos com os 7 gestos da mão que a câmera reconhece' },
          legenda: 'Os 7 gestos da mão que a câmera reconhece. Com os blocos da categoria Visão, não precisa preencher os campos de comando.',
        },
        {
          tipo: 'tabela',
          larguraNome: 90,
          respiro: 12,
          itens: [
            {
              titulo: 'Mãos',
              texto:
                'Punho fechado, Mão aberta, Apontando, Polegar para cima, Polegar para baixo, Vitória e Eu te amo. Também mede a posição da mão e a pinça entre os dedos.',
            },
            {
              titulo: 'Corpo',
              texto:
                'Braços para cima, Braços abertos (T), Braço direito levantado, Braço esquerdo levantado, Mãos na cabeça e Braços cruzados.',
            },
            {
              titulo: 'Cor',
              texto: 'Vermelho, Laranja, Amarelo, Verde, Azul, Magenta e Preto. Segure um objeto colorido na frente da câmera.',
            },
          ],
        },
        {
          tipo: 'figuraAoLado',
          gap: 28,
          imagem: { ...img.painelGesto, alt: 'Painel do gesto mostrando Mão aberta, a certeza e os valores da mão' },
          blocos: [
            {
              tipo: 'paragrafo',
              menor: true,
              texto:
                'No canto da tela, um painel mostra o gesto que a câmera está vendo e a certeza que ela tem. Em Valores da mão aparecem a posição da mão (Mão X e Mão Y) e a pinça, de 0 a 100. Enquanto não vê nada, o painel mostra Aguardando.',
            },
          ],
        },
      ],
    },
    {
      id: 'programando-com-gestos',
      titulo: 'Programando com gestos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos ficam na categoria Visão, a cor rosa. O programa precisa de três partes: conectar no Wi‑Fi, iniciar a Visão e dizer o que fazer em cada gesto.',
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: luz controlada pela mão',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: {
                ...img.programaGestos,
                alt: 'Programa que conecta no Wi‑Fi, inicia a Visão e acende o LED com a mão aberta e apaga com a mão fechada',
              },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Conecta a placa na rede Wi‑Fi da escola.',
                '2. Inicia a Visão: a placa fica esperando os gestos que o computador manda.',
                '3. Quando a mão está aberta, acende o LED vermelho.',
                '4. Quando a mão fecha, apaga o LED.',
              ],
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Os blocos de gesto ficam dentro do Iniciar Visão',
          texto: 'Encaixe os blocos Quando fizer o gesto dentro de tratar eventos. Fora dele, a placa não escuta os gestos.',
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
            { titulo: 'Polegar musical', texto: 'Toque uma nota no buzzer quando fizer polegar para cima.' },
            { titulo: 'Semáforo de gestos', texto: 'Use três gestos para acender cada um dos três LEDs.' },
            { titulo: 'Dance com o servo', texto: 'No modo Corpo, gire o servo quando levantar os braços.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Parabéns!',
          texto:
            'Você terminou a Trilha 4. A próxima trilha, Conectividade e IoT, mostra como ligar a placa no Bluetooth, no Wi‑Fi e na internet.',
        },
      ],
    },
  ],
};

export default conteudo;
