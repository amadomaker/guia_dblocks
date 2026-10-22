import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Dê nome ao seu projeto, trabalhe com vários projetos ao mesmo tempo e salve um arquivo para guardar ou mandar para outra pessoa.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.painelProjetos, alt: 'Painel de perfil do Dblocks com três projetos, o aberto destacado em laranja' },
    legenda: 'O painel de perfil com três projetos. O projeto aberto aparece em laranja.',
  },
  secoes: [
    {
      id: 'dando-nome-ao-projeto',
      titulo: 'Dando nome ao projeto',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Todo projeto começa com o bloco Dados do projeto. Nele você escreve o seu nome em Autor e o que o programa faz em Descrição. O IOT ID só é usado nos projetos de internet, do capítulo 25.',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.blocoDadosProjeto, alt: 'Bloco Dados do projeto com os campos Autor, Descrição e IOT ID' },
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'A descrição vira o nome',
          texto:
            'A descrição é usada como nome do projeto na lista e como nome do arquivo quando você salva. Escreva algo curto, como Pisca LED ou Semáforo.',
        },
      ],
    },
    {
      id: 'varios-projetos',
      titulo: 'Vários projetos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Você pode ter vários projetos e trocar entre eles quando quiser. Abra o painel de perfil, no canto direito da barra de cima, e clique em Projetos.',
        },
        {
          tipo: 'figuraComLista',
          semSombra: true,
          layout: { itens: 14, topo: 4, linhaTexto: 23 },
          imagem: { ...img.listaProjetos, alt: 'Lista de projetos com o botão +, e os botões de baixar e apagar em cada projeto' },
          itens: [
            { titulo: 'Criar um projeto', texto: 'Clique em + Novo projeto. Um projeto novo, vazio, abre na hora.' },
            { titulo: 'Trocar de projeto', texto: 'Clique no nome do projeto que você quer abrir. O que está aberto fica em laranja.' },
            { titulo: 'Baixar', texto: 'A seta para baixo salva aquele projeto em um arquivo no computador.' },
            { titulo: 'Apagar', texto: 'A lixeira apaga o projeto.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'aviso',
          icone: 'book',
          titulo: 'Os projetos ficam neste navegador',
          texto:
            'O Dblocks guarda os projetos sozinho, mas só no navegador que você está usando. Em outro computador, ou se o histórico do navegador for apagado, eles não aparecem. Para não perder, salve um arquivo, como mostra a próxima seção.',
        },
      ],
    },
    {
      id: 'salvando-e-abrindo-arquivos',
      titulo: 'Salvando e abrindo arquivos',
      blocos: [
        { tipo: 'paragrafo', texto: 'Na barra de cima ficam dois botões para isso:' },
        {
          tipo: 'figuras',
          semSombra: true,
          itens: [
            {
              imagem: { ...img.salvarArquivo, alt: 'Botão Salvar blocos para arquivo na barra de cima' },
              legenda: 'Salvar blocos para arquivo.: baixa o projeto para o computador.',
            },
            {
              imagem: { ...img.carregarArquivo, alt: 'Botão Carregar blocos de arquivo na barra de cima' },
              legenda: 'Carregar blocos de arquivo.: abre um projeto salvo antes.',
            },
          ],
        },
        {
          tipo: 'paragrafo',
          texto: 'O arquivo salvo termina em .xml e guarda todos os blocos do projeto. Ele não ocupa quase nada de espaço.',
        },
      ],
    },
    {
      id: 'compartilhando-um-projeto',
      titulo: 'Compartilhando um projeto',
      blocos: [
        {
          tipo: 'passos',
          itens: [
            {
              titulo: 'Salve o arquivo',
              texto: 'Clique em Salvar blocos para arquivo. O arquivo vai para a pasta de downloads do computador.',
            },
            {
              titulo: 'Mande o arquivo',
              texto: 'Envie por e‑mail, pen drive ou pela plataforma da escola, como qualquer outro arquivo.',
            },
            {
              titulo: 'Abra no outro computador',
              texto: 'Quem receber clica em Carregar blocos de arquivo e escolhe o arquivo. Os blocos aparecem na hora.',
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Salvar arquivo não é o mesmo que salvar na placa',
          texto:
            'Salvar blocos para arquivo guarda o projeto no computador. Para o programa ficar dentro da placa e rodar sozinho, use Salvar na placa (main.py), como no capítulo 06.',
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
            { titulo: 'Organize', texto: 'Crie um projeto para cada capítulo que você já fez.' },
            { titulo: 'Troca de projetos', texto: 'Salve o seu Pisca LED em um arquivo e abra no computador de um colega.' },
            { titulo: 'Nome certo', texto: 'Mude a descrição de um projeto e veja o nome mudar na lista.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
