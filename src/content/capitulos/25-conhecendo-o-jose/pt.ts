import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  titulo: 'José',
  selo: null,
  descricao: 'Monte com blocos o jeito e a cara do José, a IA da Amado Maker, e converse com ele na aba IA.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.abaIa, alt: 'Aba IA com o José montado com blocos: nome Faísca, carcaça laranja e olhos amendoados' },
    legenda: 'O José montado com blocos: nome Faísca, carcaça laranja e olhos amendoados.',
  },
  secoes: [
    {
      id: 'quem-e-o-jose',
      titulo: 'Quem é o José',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O José é o robô de inteligência artificial da Amado Maker. O nome quer dizer Jovem Orientador de Soluções Educacionais. Ele ajuda professores e alunos nas salas maker.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Na aba IA, você não só usa uma IA: você monta a sua, com blocos. Assim dá para entender do que uma IA é feita por dentro, como o nome, as regras, o que ela sabe e o jeito de falar.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'lock',
          enfase: true,
          titulo: 'Para escolas parceiras',
          texto: 'Disponível para escolas das redes parceiras do Digitalmente Maker',
        },
      ],
    },
    {
      id: 'a-aba-ia',
      titulo: 'A aba IA',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Clique em IA, o último ícone da barra da esquerda. No meio aparece a cabeça do José em 3D. Arraste para girar e use a rodinha do mouse para chegar mais perto.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Na borda direita fica a setinha que abre o painel. Ele tem duas abas: Código, para montar o José com blocos, e Chat, para conversar com ele. O botão Minimizar fecha o painel.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Ele tem sentimentos!',
          texto:
            'Passe o mouse várias vezes na testa do José e ele fica feliz com o carinho. Se você girar a cabeça dele muitas vezes, ele fica tonto!',
        },
      ],
    },
    {
      id: 'as-pecas-de-uma-ia',
      titulo: 'As peças de uma IA',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos ficam separados na mesma ordem em que uma IA pensa antes de responder: quem eu sou, o que eu não faço, o que eu sei, o que eu posso fazer e como eu falo.',
        },
        {
          tipo: 'figuraComFaixas',
          imagem: {
            ...img.categoriasIa,
            alt: 'Categorias de blocos da aba IA: Identidade, Regras e Limites, Conhecimento, Ferramentas, Tom de voz e Aparência',
          },
          itens: [
            { cor: '#e0793c', titulo: 'Identidade', texto: 'Quem a IA é: o nome, com o que ela ajuda e a personalidade.' },
            { cor: '#c0392b', titulo: 'Regras e Limites', texto: 'O que ela não faz e o que responde quando o assunto foge do tema.' },
            { cor: '#2e86ab', titulo: 'Conhecimento', texto: 'Os fatos que ela sabe e o que diz quando não sabe.' },
            { cor: '#27ae60', titulo: 'Ferramentas', texto: 'O que ela pode fazer, como acender um LED, e quando usar.' },
            { cor: '#8e44ad', titulo: 'Tom de voz', texto: 'O jeito de falar e o tamanho das respostas.' },
            { cor: '#d4ac0d', titulo: 'Aparência', texto: 'A cor e o rosto do José.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Algumas regras ninguém tira',
          texto:
            'Toda IA no Dblocks já vem com regras de segurança que não aparecem como bloco e não podem ser removidas.',
        },
      ],
    },
    {
      id: 'montando-o-seu-jose',
      titulo: 'Montando o seu José',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: o Faísca',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: {
                ...img.programaJose,
                alt: 'Blocos Montar minha IA com o nome Faísca, a missão, a personalidade, a cor laranja e o rosto',
              },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esses blocos fazem?',
              itens: [
                '1. Montar minha IA é o começo. Todos os outros blocos encaixam embaixo dele.',
                '2. Dão o nome Faísca, a missão de ajudar a aprender eletrônica e dois traços de personalidade.',
                '3. Pintam a carcaça de laranja e mudam os olhos, a boca e as sobrancelhas.',
              ],
            },
          ],
        },
        { tipo: 'subtitulo', grande: true, altura: 28, texto: 'A aparência muda na hora' },
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos de Aparência mudam o José assim que você encaixa ou troca uma opção. Não precisa apertar nada.',
        },
        {
          tipo: 'figuras',
          semSombra: true,
          gap: 20,
          itens: [
            { imagem: { ...img.joseAntes, alt: 'José com a aparência padrão' }, legenda: 'Antes: o José de sempre.' },
            {
              imagem: { ...img.joseDepois, alt: 'José com a carcaça laranja e olhos amendoados' },
              legenda: 'Depois: carcaça laranja e olhos amendoados.',
            },
          ],
        },
      ],
    },
    {
      id: 'conversando-com-o-jose',
      titulo: 'Conversando com o José',
      blocos: [
        {
          tipo: 'figuraAoLado',
          gap: 28,
          imagem: { ...img.chatJose, alt: 'Aba Chat do painel com uma conversa com o José' },
          blocos: [
            {
              tipo: 'paragrafo',
              menor: true,
              texto:
                'Clique em Chat no painel. Escreva sua pergunta em Envie uma mensagem e clique na setinha para enviar.',
            },
            {
              tipo: 'paragrafo',
              menor: true,
              texto:
                'No botão de menu, no canto de cima, você vê as suas conversas e começa uma nova. Ficam guardadas as 5 conversas mais recentes.',
            },
            {
              tipo: 'paragrafo',
              menor: true,
              texto: 'Como toda IA, o José pode errar. Por isso, confira as informações importantes com o professor.',
            },
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
            { titulo: 'Um robô com a sua cara', texto: 'Escolha a cor e o rosto que mais combinam com você.' },
            { titulo: 'Dê uma missão', texto: 'Troque a missão para algo que você gosta, como robótica ou música.' },
            { titulo: 'Pense nas regras', texto: 'Que assuntos a sua IA não deve falar? Monte os blocos de Regras e Limites.' },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Parabéns!',
          texto: 'Você chegou ao fim do guia. Agora é só criar os seus projetos!',
        },
      ],
    },
  ],
};

export default conteudo;
