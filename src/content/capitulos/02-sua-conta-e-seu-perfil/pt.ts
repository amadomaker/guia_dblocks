import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao: 'Aprenda a entrar no Dblocks com a sua conta Google, a trocar o idioma e a usar o painel de perfil.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.telaDeLogin, alt: 'Tela de entrada do Dblocks com o botão Entrar com o Google e o seletor de idioma no canto' },
    legenda: 'A tela de entrada do Dblocks. No canto, você pode trocar o idioma.',
  },
  secoes: [
    {
      id: 'entrando-no-dblocks',
      titulo: 'Entrando no Dblocks',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para entrar no Dblocks, você usa uma conta Google, a mesma do Gmail ou do YouTube. Não precisa criar uma senha nova. A conta que a escola te deu também funciona.',
        },
        {
          tipo: 'passos',
          itens: [
            { titulo: 'Acesse o Dblocks', texto: 'Entre em dblocks.com.br e clique no botão Comece a programar!' },
            {
              titulo: 'Escolha o idioma, se precisar',
              texto: 'Se quiser outro idioma, clique em PT, no canto da tela, e escolha EN (inglês) ou ES (espanhol).',
            },
            { titulo: 'Clique em Entrar com o Google', texto: 'Escolha a sua conta na janela que abrir. Pronto, o Dblocks abre!' },
          ],
        },
      ],
    },
    {
      id: 'o-primeiro-acesso',
      titulo: 'O primeiro acesso',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Na primeira vez que você entra, aparece a mensagem Bem vindo ao DBLOCKS!. Ela avisa que a placa precisa ter o MicroPython instalado e mostra um link para instalar.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.avisoBoasVindas, alt: 'Janela Bem vindo ao DBLOCKS! com o aviso sobre o MicroPython e a opção Não mostrar esta tela novamente' },
          legenda: 'Se você já instalou, pode fechar. Marque Não mostrar esta tela novamente para a mensagem não voltar.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Ainda não instalou o MicroPython?',
          texto: 'O capítulo 05, Conectando a placa, mostra o passo a passo.',
        },
      ],
    },
    {
      id: 'o-painel-de-perfil',
      titulo: 'O painel de perfil',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'No canto direito da barra de cima aparecem as suas iniciais ou a sua foto. Clique ali para abrir o painel de perfil. Ele tem quatro partes:',
        },
        {
          tipo: 'figuraComItens',
          imagem: { ...img.painelDePerfil, alt: 'Painel de perfil aberto com a saudação, a lista de projetos, Configurações e Sair' },
          itens: [
            { cor: '#2c2d34', titulo: 'Olá, seu nome', texto: 'Mostra o nome da sua conta Google.' },
            { cor: '#fa7324', titulo: 'Projetos', texto: 'Mostra os seus projetos. O botão + cria um projeto novo. O capítulo 21 explica mais.' },
            { cor: '#326eb4', titulo: 'Configurações', texto: 'Aqui você troca o idioma e encontra o botão Limpar cache.' },
            { cor: '#326eb4', titulo: 'Sair', texto: 'Sai da sua conta neste computador.' },
          ],
        },
      ],
    },
    {
      id: 'trocando-o-idioma',
      titulo: 'Trocando o idioma',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Abra Configurações no painel de perfil e clique no idioma que aparece ao lado da bandeira. Escolha entre English, Español, Português (Brasil) e Português (Portugal). Os botões e os blocos mudam para o idioma escolhido.',
        },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.configuracoesAbertas, alt: 'Painel de perfil com a parte Configurações aberta, mostrando o idioma e o botão Limpar cache' },
              legenda: 'Configurações abertas no painel.',
            },
            {
              imagem: { ...img.listaDeIdiomas, alt: 'Lista de idiomas aberta com English, Español, Português (Brasil) e Português (Portugal)' },
              legenda: 'A lista de idiomas.',
            },
          ],
        },
      ],
    },
    {
      id: 'limpar-cache',
      titulo: 'Limpar cache',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Às vezes, depois que o Dblocks é atualizado, ele pode ficar estranho ou travado. Quando isso acontecer, abra Configurações e clique em Limpar cache. O Dblocks pergunta se você tem certeza antes de continuar.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.confirmacaoLimparCache, alt: 'Janela de confirmação de Limpar cache com os botões Cancelar e Limpar' },
          legenda: 'Clique em Limpar para confirmar ou em Cancelar para voltar.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Seus projetos ficam a salvo',
          texto:
            'Limpar o cache só baixa de novo os arquivos do Dblocks e volta algumas preferências ao normal. Os seus projetos salvos continuam lá.',
        },
      ],
    },
    {
      id: 'saindo-da-conta',
      titulo: 'Saindo da conta',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para sair, abra o painel de perfil e clique em Sair, lá embaixo. Faça isso sempre que usar um computador da escola ou de outra pessoa.',
        },
      ],
    },
  ],
};

export default conteudo;
