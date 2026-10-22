import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Veja as mensagens que a placa manda no Console e conheça os arquivos que ficam guardados dentro dela.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.abaConsole, alt: 'Aba Console do Dblocks com a placa conectada' },
    legenda: 'A aba Console com a placa conectada.',
  },
  secoes: [
    {
      id: 'o-console',
      titulo: 'O Console',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O Console é a janela de conversa entre você e a placa. Tudo o que o programa mostra com o bloco imprime aparece aqui. Ele também mostra avisos, como a mensagem de quando a placa conecta.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Para abrir, clique na aba Console, o ícone >_ na barra da esquerda. A placa precisa estar conectada para o Console mostrar alguma coisa.',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.mensagensConsole, alt: 'Mensagens da placa no Console, terminando com o sinal >>>' },
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Conversando direto com a placa',
          texto:
            'Depois do sinal >>>, você pode escrever um comando em Python e apertar Enter. A placa responde na hora. Experimente escrever 2 + 3.',
        },
      ],
    },
    {
      id: 'os-botoes-do-console',
      titulo: 'Os botões do Console',
      blocos: [
        {
          tipo: 'figuraAoLado',
          imagem: { ...img.botoesConsole, alt: 'Coluna de botões do Console: executar, parar, reinicializar, executar Python, limpar e dica' },
          blocos: [
            {
              tipo: 'tabela',
              larguraNome: 150,
              respiro: 12,
              itens: [
                { titulo: 'Executar', texto: 'Executar programa baseado em blocos: roda o programa da aba Blocos.' },
                { titulo: 'Parar', texto: 'Parar programa em execução.' },
                { titulo: 'Reinicializar', texto: 'Reinicializar dispositivo: a placa recomeça do zero.' },
                {
                  titulo: 'Executar Python',
                  texto: 'Executar arquivo Python editado: roda o arquivo que você abriu na aba Arquivos.',
                },
                { titulo: 'Limpar', texto: 'Limpar saída do terminal: apaga as mensagens da tela.' },
                {
                  titulo: 'Dica (i)',
                  texto: 'Mostra os atalhos para copiar e colar: Ctrl+Insert copia e Shift+Insert cola.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'a-aba-arquivos',
      titulo: 'A aba Arquivos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'A placa tem uma memória onde guarda arquivos, como um pen drive pequeno. Na aba Arquivos, o ícone de uma folha, você vê o que está guardado nela.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.abaArquivos, alt: 'Aba Arquivos com a lista dos arquivos guardados na placa' },
          legenda: 'A aba Arquivos com a lista dos arquivos guardados na placa.',
        },
        { tipo: 'subtitulo', texto: 'No dispositivo' },
        {
          tipo: 'figuraComLista',
          semSombra: true,
          layout: { itens: 14, topo: 4, linhaTexto: 23 },
          imagem: { ...img.listaArquivos, alt: 'Painel No dispositivo com boot.py, main.py, uma pasta e os botões de cada arquivo' },
          itens: [
            {
              titulo: 'Lista de arquivos',
              texto:
                'Aparece quando a placa está conectada. Clique em atualizar, o botão com setas em círculo, para ver a lista mais nova.',
            },
            {
              titulo: 'Roda no boot',
              texto:
                'Os arquivos boot.py e main.py rodam sozinhos quando a placa liga. O main.py é o que o botão Salvar na placa cria.',
            },
            { titulo: 'Pasta', texto: 'Uma pasta guarda outros arquivos dentro dela.' },
            { titulo: 'Botões de cada arquivo', texto: 'Executar, baixar para o computador e apagar.' },
            {
              titulo: 'Enviar arquivo',
              texto: 'O botão com a seta para cima, no alto do painel, manda um arquivo do computador para a placa.',
            },
          ],
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'As bibliotecas também aparecem aqui',
          texto:
            'Quando você instala uma biblioteca, como a rtttl do buzzer ou a ssd1306 do display, o arquivo dela aparece nessa lista. É um jeito de conferir se a instalação deu certo.',
        },
        { tipo: 'subtitulo', texto: 'Blocos para código' },
        {
          tipo: 'paragrafo',
          texto:
            'Embaixo ficam dois arquivos que o Dblocks cria sozinho a partir dos seus blocos: o .py, com o código em Python, e o workspace.dblocks.xml, de uso interno. Clique no .py para ver o código. O capítulo 10 explica como ler esse código.',
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
            { titulo: 'Olá pelo Console', texto: 'Escreva print("Olá!") depois do >>> e aperte Enter.' },
            { titulo: 'Confira a biblioteca', texto: 'Instale a biblioteca do buzzer e encontre o arquivo rtttl.py na aba Arquivos.' },
            { titulo: 'Guarde e confira', texto: 'Use Salvar na placa e veja o main.py aparecer na lista.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
