import type { ConteudoCapitulo } from '../../tipos';
import { links } from '../../../data/links';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Prepare o computador e a AmadoBoard para trabalharem juntos e conecte a placa ao Dblocks. Se algo der errado, no final tem a solução para cada aviso.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.painelCanaisAberto, alt: 'Dblocks com o painel de conexão aberto mostrando os canais Serial (USB), Bluetooth e Rede (Wi‑Fi)' },
    legenda: 'O painel de conexão, aberto pelo primeiro botão da barra de cima.',
  },
  secoes: [
    {
      id: 'antes-de-comecar',
      titulo: 'Antes de começar',
      blocos: [
        {
          tipo: 'requisitos',
          itens: [
            {
              titulo: 'Google Chrome ou Microsoft Edge',
              texto: 'O Dblocks conversa com a placa pelo navegador. Só esses dois navegadores sabem fazer isso no computador.',
            },
            {
              titulo: 'Um cabo USB que passe dados',
              texto:
                'Alguns cabos servem só para carregar o celular e não funcionam com a placa. Se a placa não aparecer, tente outro cabo.',
            },
            {
              titulo: 'O driver da placa',
              texto:
                'No Windows, o computador precisa de um programinha chamado driver para reconhecer a placa. Veja a próxima seção.',
            },
          ],
        },
      ],
    },
    {
      id: 'instalando-o-driver',
      titulo: 'Instalando o driver',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para o computador reconhecer a placa pelo cabo, primeiro instalamos um driver, o CP210x. Você só precisa fazer isso uma vez em cada computador.',
        },
        {
          tipo: 'passos',
          itens: [
            {
              titulo: 'Baixe o driver CP210x',
              texto: 'Ele fica no site da Silicon Labs. Procure por Downloads e baixe a versão do seu computador.',
            },
            {
              titulo: 'Instale e reconecte a placa',
              texto: 'Abra o arquivo baixado e siga a instalação. Depois, tire o cabo da placa e coloque de novo.',
            },
          ],
        },
        { tipo: 'link', texto: 'Baixar o driver CP210x', href: links.driverCp210x, recuado: true },
      ],
    },
    {
      id: 'instalando-o-micropython',
      titulo: 'Instalando o MicroPython',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para a placa entender os programas do Dblocks, ela precisa ter o MicroPython instalado. Você faz isso uma vez só, e depois a placa está pronta para usar.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.instaladorMicropython, alt: 'Página do Instalador MicroPython com o botão Conectar e um vídeo explicativo' },
          legenda: 'A página do Instalador MicroPython. Ela tem um vídeo que mostra tudo passo a passo.',
        },
        {
          tipo: 'passos',
          itens: [
            {
              titulo: 'Abra o instalador',
              texto: 'Clique no botão Instalar MicroPython, na barra de cima do Dblocks, ou no link da mensagem de boas‑vindas.',
            },
            {
              titulo: 'Conecte a placa e clique em Conectar',
              texto:
                'Ligue a placa no computador e clique em Conectar. Vai abrir uma janela com uma lista: escolha a placa e confirme.',
            },
            {
              titulo: 'Aguarde a instalação',
              texto: 'Leva uns 2 minutos, às vezes um pouco mais. Não tire o cabo enquanto isso.',
            },
          ],
        },
      ],
    },
    {
      id: 'escolhendo-o-canal',
      titulo: 'Escolhendo o canal',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Antes de conectar, você escolhe por qual caminho o Dblocks vai falar com a placa. Clique no primeiro botão da barra de cima, Escolha o canal de conexão, para abrir o painel.',
        },
        {
          tipo: 'figuraComLista',
          layout: { itens: 18, topo: 6, titulo: 17, entreTitulo: 3, linhaTexto: 23 },
          imagem: { ...img.painelCanais, alt: 'Painel Escolha o canal de conexão com as opções Serial (USB), Bluetooth, Rede (Wi‑Fi) e Procurar placas' },
          itens: [
            {
              titulo: 'Serial (USB)',
              texto:
                'Pelo cabo. É o jeito mais fácil e o melhor para começar. A opção Reiniciar a placa ao conectar faz a placa reiniciar toda vez que você conecta.',
            },
            { titulo: 'Bluetooth', texto: 'Sem fio, com a placa perto do computador. O capítulo 22 explica.' },
            {
              titulo: 'Rede (Wi‑Fi)',
              texto: 'Sem fio, pela rede Wi‑Fi. Precisa do Endereço e da Senha da placa. O capítulo 23 explica.',
            },
            { titulo: 'Procurar placas', texto: 'Procura placas que estão por perto.' },
          ],
        },
      ],
    },
    {
      id: 'conectando-pela-usb',
      titulo: 'Conectando pela USB',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Escolha Serial (USB)', texto: 'Abra o painel de conexão e marque Serial (USB).' },
            { titulo: 'Clique em Conectar/Desconectar', texto: 'É o botão com o desenho de uma tomada, logo ao lado.' },
            {
              titulo: 'Escolha a porta da placa',
              texto: 'Vai abrir uma janela com uma lista. Escolha a AmadoBoard e clique em Conectar.',
            },
            { titulo: 'Pronto, a placa está conectada', texto: 'A tomada fica azul e com as duas partes encaixadas.' },
          ],
        },
        {
          tipo: 'estados',
          itens: [
            {
              imagem: { ...img.barraDesconectado, alt: 'Botões da barra com a tomada separada' },
              titulo: 'Desconectado',
              texto: 'A tomada aparece separada.',
            },
            {
              imagem: { ...img.barraConectado, alt: 'Botões da barra com a tomada azul e encaixada' },
              titulo: 'Conectado',
              texto: 'A tomada fica azul e encaixada.',
            },
            {
              imagem: { ...img.barraExecutando, alt: 'Botões da barra com o botão Executar transformado em um quadrado' },
              titulo: 'Executando um programa',
              texto: 'O botão Executar o programa vira um quadrado. Clique nele para parar o programa.',
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Feche outros programas que usam a placa',
          texto:
            'Se a placa estiver aberta em outra aba do Dblocks ou em outro programa, como o Thonny ou a Arduino IDE, o Dblocks não consegue usar a placa. Feche os outros antes de conectar.',
        },
      ],
    },
    {
      id: 'se-nao-conectar',
      titulo: 'Se não conectar',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Quando a placa não conecta, o Dblocks mostra uma mensagem azul na parte de baixo da tela explicando o motivo. Veja o que fazer em cada caso:',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.avisoDeFalha, alt: 'Mensagem azul do Dblocks avisando que a placa pode estar sem MicroPython, com o botão Instalar MicroPython' },
          legenda: 'Mensagem de placa sem MicroPython, com um atalho para instalar.',
        },
        {
          tipo: 'tabela',
          itens: [
            {
              titulo: 'Nenhuma porta foi escolhida.',
              texto: 'Clique para conectar de novo e, na janela que abrir, escolha a placa.',
            },
            {
              titulo: 'Não foi possível abrir a porta da placa.',
              texto:
                'Confira se a placa está ligada no cabo. Veja também se ela não está aberta em outra aba do Dblocks ou em outro programa, como o Thonny ou a Arduino IDE.',
            },
            {
              titulo: 'Não foi possível conectar pela USB.',
              texto: 'Tente outro cabo, porque ele precisa passar dados. Confira também se o driver está instalado.',
            },
            {
              titulo: 'A placa pode estar sem MicroPython.',
              texto: 'Clique em Instalar MicroPython, na própria mensagem, e siga os passos da seção de instalação.',
            },
            { titulo: 'A placa foi desconectada.', texto: 'Confira se o cabo não soltou e conecte de novo.' },
            { titulo: 'Este navegador não conecta pela USB.', texto: 'Use o Google Chrome ou o Microsoft Edge no computador.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
