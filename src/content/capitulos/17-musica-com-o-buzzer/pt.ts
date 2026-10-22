import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  selo: 'Novo',
  descricao:
    'Faça o buzzer da placa apitar, tocar notas e músicas prontas, e crie as suas próprias melodias na aba Música.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.abaMusica, alt: 'Aba Música com a melodia Dó, Ré, Mi, Fá, Sol, Lá, Si, Dó marcada na grade' },
    legenda: 'A aba Música com a melodia Dó, Ré, Mi, Fá, Sol, Lá, Si, Dó.',
  },
  secoes: [
    {
      id: 'o-buzzer-da-placa',
      titulo: 'O buzzer da placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O buzzer é uma campainha que vem soldada na AmadoBoard, no pino D4. Ele pode apitar como um alarme, tocar notas musicais e até músicas inteiras.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Os blocos ficam em Saídas e atuadores › Campainha. Antes de tocar músicas, instale as bibliotecas: com a placa conectada, clique em Instalar biblioteca: rtttl e depois em Instalar biblioteca: songs. O Console avisa quando terminar.',
        },
        { tipo: 'caminho', itens: ['Saídas e atuadores', 'Campainha'] },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaCampainha, alt: 'Categoria Campainha com os blocos de som e os botões para instalar as bibliotecas' },
          legenda: 'A categoria Campainha, com os botões para instalar as bibliotecas.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Cada biblioteca tem uma função: a rtttl toca as notas e as melodias, e a songs guarda as músicas prontas, como a do Super Mario. Quando a instalação termina, o Console mostra uma mensagem como esta:',
        },
        { tipo: 'console', imagem: { ...img.consoleBiblioteca, alt: 'Console avisando que a biblioteca foi instalada' } },
        {
          tipo: 'paragrafo',
          texto: 'Para conferir, abra a aba Arquivos, atualize a lista do dispositivo e procure os arquivos rtttl.py e songs.py.',
        },
      ],
    },
    {
      id: 'os-blocos-de-som',
      titulo: 'Os blocos de som',
      blocos: [
        {
          tipo: 'exemplo',
          compacto: true,
          titulo: 'Um apito',
          texto:
            'Toca um som pela frequência. Números altos fazem um som fino; números baixos, um som grosso. A duração é em segundos. Com 0, o som não para.',
          blocos: [
            { tipo: 'figura', semSombra: true, imagem: { ...img.blocoApito, alt: 'Bloco que toca um apito com frequência e duração' } },
          ],
        },
        {
          tipo: 'exemplo',
          compacto: true,
          titulo: 'Uma nota musical',
          texto:
            'Toca uma nota, como Dó ou Ré, pelo tempo que você escolher. As notas usam letras: C é Dó, D é Ré, E é Mi, F é Fá, G é Sol, A é Lá e B é Si.',
          blocos: [
            { tipo: 'figura', semSombra: true, imagem: { ...img.blocoNota, alt: 'Bloco que toca uma nota musical por um tempo' } },
          ],
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.notas, alt: 'As sete notas: C é Dó, D é Ré, E é Mi, F é Fá, G é Sol, A é Lá e B é Si' },
        },
        {
          tipo: 'paragrafo',
          texto:
            'O número depois da letra diz se a nota é mais grave ou mais aguda. C4 é o Dó do meio do piano, e C5 é o Dó seguinte, mais agudo.',
        },
        {
          tipo: 'exemplo',
          compacto: true,
          titulo: 'Uma música pronta',
          texto:
            'Toca uma música que já vem pronta, como o tema do Super Mario. Os nomes das músicas ficam no fim da categoria Campainha.',
          blocos: [
            { tipo: 'figura', semSombra: true, imagem: { ...img.blocoMusica, alt: 'Bloco que toca uma música pronta no buzzer' } },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: sirene',
          texto: 'O buzzer troca entre um som agudo e um som grave, como a sirene de uma ambulância.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploSirene, alt: 'Programa que toca 1000 por 0,3 segundo e 600 por 0,3 segundo, repetindo para sempre' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: ['1. Toca 1000 (som agudo) por 0,3 segundo.', '2. Toca 600 (som grave) por 0,3 segundo.', '3. Repete para sempre.'],
            },
          ],
        },
      ],
    },
    {
      id: 'criando-a-sua-melodia',
      titulo: 'Criando a sua melodia',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Na aba Música, o ícone de nota musical na barra da esquerda, você monta uma melodia clicando em quadradinhos. Cada linha é uma nota e cada coluna é um momento da música. Você escolhe uma nota por coluna. Uma coluna vazia é um silêncio.',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.botoesAbaMusica, alt: 'Botões da aba Música: Limpar, Salvar melodia, Tocar, Pausar, BPM, Importar e Exportar' },
        },
        {
          tipo: 'tabela',
          larguraNome: 170,
          respiro: 12,
          itens: [
            { titulo: 'Limpar', texto: 'Apaga a melodia inteira.' },
            { titulo: 'Salvar melodia', texto: 'Guarda a melodia com um nome para usar nos blocos.' },
            { titulo: 'Tocar e Pausar', texto: 'Escuta a melodia no computador, sem a placa.' },
            { titulo: 'BPM', texto: 'A velocidade da música. 120 é o normal; números maiores deixam a música mais rápida.' },
            { titulo: 'Importar e Exportar', texto: 'Abre ou baixa a melodia em um arquivo, para guardar ou mandar para alguém.' },
          ],
        },
        { tipo: 'subtitulo', grande: true, texto: 'Exemplo: Dó, Ré, Mi' },
        {
          tipo: 'passos',
          itens: [
            {
              titulo: 'Monte a escada de notas',
              texto: 'Clique em C4 na primeira coluna, D4 na segunda, e assim por diante até C5. A melodia sobe como uma escada.',
            },
            {
              titulo: 'Escute',
              texto: 'Clique em Tocar. Uma linha vermelha anda da esquerda para a direita mostrando o que está tocando.',
            },
            { titulo: 'Salve', texto: 'Clique em Salvar melodia, dê um nome como do-re-mi e clique em Salvar.' },
          ],
        },
        {
          tipo: 'figuras',
          itens: [
            {
              imagem: { ...img.gradeDoReMi, alt: 'Grade da aba Música com as notas de C4 a C5 marcadas em escada' },
              legenda: 'As notas marcadas ficam mais claras.',
            },
            {
              imagem: { ...img.salvarMelodia, alt: 'Janela para dar nome à melodia antes de salvar' },
              legenda: 'A janela para dar nome à melodia.',
            },
          ],
        },
        {
          tipo: 'figura',
          legendaLivre: true,
          imagem: { ...img.linhaVermelha, alt: 'Grade da aba Música com a linha vermelha passando pela nota que está tocando' },
          legenda: 'Ao clicar em Tocar, a linha vermelha mostra a nota que está tocando.',
        },
      ],
    },
    {
      id: 'tocando-a-sua-melodia-na-placa',
      titulo: 'Tocando a sua melodia na placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Volte para a aba Blocos. Em Saídas e atuadores › Campainha, use o bloco Reproduzir buzzer no pino com melodia. Escolha o pino D4 / BUZZER e a melodia que você salvou. Depois, clique em Executar o programa.',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.blocoComMelodia, alt: 'Bloco Reproduzir buzzer no pino D4 com a melodia do-re-mi' },
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Mais opções da melodia',
          texto: 'Clique com o botão direito no bloco da melodia para apagar ou exportar só aquela melodia.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.menuMelodia, alt: 'Menu do bloco de melodia com as opções Excluir e Exportar' },
          legenda: 'O menu do bloco de melodia, com Excluir e Exportar.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Você também pode usar vários blocos de melodia, um embaixo do outro, para tocar partes diferentes da música em sequência.',
        },
        { tipo: 'subtitulo', grande: true, texto: 'Exemplo: Parabéns pra você' },
        {
          tipo: 'paragrafo',
          texto:
            'Monte as notas C4, C4, D4, C4, F4, E4, deixe duas colunas vazias e continue com C4, C4, D4, C4, G4, F4. Coloque o BPM em 130 para a música ficar um pouco mais rápida.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.parabensPraVoce, alt: 'Grade da aba Música com as notas do Parabéns pra você e o BPM em 130' },
        },
      ],
    },
    {
      id: 'usando-um-buzzer-externo',
      titulo: 'Usando um buzzer externo',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Além do buzzer da placa, você pode ligar um buzzer externo em outro pino digital. Ligue a perna + no pino D19 e a outra perna no GND. Nos blocos, escolha o pino D19 no lugar do D4 / BUZZER.',
        },
        {
          tipo: 'figura',
          imagem: { ...img.ligacaoBuzzerExterno, alt: 'Diagrama de ligação do buzzer externo: perna + no D19 e a outra perna no GND' },
          legenda: 'O buzzer externo: perna + no D19 e a outra no GND.',
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
            { titulo: 'Escada para baixo', texto: 'Faça a melodia descer: de C5 até C4.' },
            { titulo: 'Alarme com botão', texto: 'Toque a sirene só enquanto o botão do capítulo 13 estiver apertado.' },
            { titulo: 'Termine a música', texto: 'Continue o Parabéns pra você até o final.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
