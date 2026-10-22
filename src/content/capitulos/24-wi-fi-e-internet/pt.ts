import type { ConteudoCapitulo } from '../../tipos';
import { img } from './imagens';

const conteudo: ConteudoCapitulo = {
  descricao:
    'Ligue a placa no Wi‑Fi, crie uma página que controla um LED pelo navegador e busque a previsão do tempo na internet.',
  atualizadoEm: 'outubro de 2026',
  abertura: {
    tipo: 'figura',
    imagem: { ...img.servidorLed, alt: 'Exemplo pronto do Dblocks com um LED controlado pelo navegador' },
    legenda: 'Exemplo pronto do Dblocks: um LED controlado pelo navegador.',
  },
  secoes: [
    {
      id: 'conectando-na-internet',
      titulo: 'Conectando na internet',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Com o Wi‑Fi, a placa entra na mesma rede que o seu celular e o seu computador. Assim eles conseguem conversar. Dá para acender uma lâmpada pelo celular, mandar as leituras dos sensores para a internet ou criar uma pequena página na placa.',
        },
        { tipo: 'caminho', itens: ['Comunicação', 'WiFi'] },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaWifi, alt: 'Categoria WiFi com os blocos de conexão, ponto de acesso, lista de redes e IP' },
          legenda: 'Os blocos de Wi‑Fi.',
        },
        {
          tipo: 'tabela',
          larguraNome: 200,
          respiro: 12,
          itens: [
            { titulo: 'conectar na rede wifi', texto: 'Liga a placa na rede Wi‑Fi. Escreva o nome da rede e a senha.' },
            { titulo: 'Configurar Modo Ponto de Acesso', texto: 'Faz a placa criar a própria rede Wi‑Fi.' },
            { titulo: 'listar redes wifi', texto: 'Mostra no Console as redes que a placa encontra.' },
            { titulo: 'Endereço IP Atual', texto: 'Diz o endereço da placa na rede.' },
          ],
        },
      ],
    },
    {
      id: 'ligando-a-placa-no-wi-fi',
      titulo: 'Ligando a placa no Wi‑Fi',
      blocos: [
        {
          tipo: 'exemplo',
          titulo: 'Conectar e mostrar o IP',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: { ...img.exemploConectar, alt: 'Programa que conecta na rede Wi‑Fi e mostra o IP no Console' },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: ['1. Liga a placa na rede Rede da escola.', '2. Mostra no Console o endereço da placa na rede, o IP.'],
            },
          ],
        },
        { tipo: 'console', imagem: { ...img.consoleWifi, alt: 'Console mostrando Connected e o IP 192.168.1.124' } },
        {
          tipo: 'paragrafo',
          texto:
            'Quando aparece Connected, a placa entrou na rede. O primeiro número, 192.168.1.124, é o IP. Ele é como o endereço de uma casa: é com ele que os outros aparelhos encontram a placa.',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'A rede precisa ser de 2,4 GHz',
          texto:
            'A placa só encontra redes de 2,4 GHz. Se ela não conectar, confira também o nome e a senha da rede. Letras maiúsculas e minúsculas fazem diferença.',
        },
        { tipo: 'subtitulo', grande: true, altura: 28, texto: 'Sem roteador: a placa cria a rede' },
        {
          tipo: 'paragrafo',
          texto:
            'O bloco Configurar Modo Ponto de Acesso faz a placa virar um pequeno roteador. Ela cria uma rede com o nome e a senha que você escolher, e o celular se conecta direto nela. É ótimo para feiras e aulas onde não tem Wi‑Fi.',
        },
        {
          tipo: 'figura',
          semSombra: true,
          imagem: { ...img.exemploPontoAcesso, alt: 'Bloco Configurar Modo Ponto de Acesso com o nome e a senha da rede da placa' },
        },
        { tipo: 'paragrafo', texto: 'Nessa rede, o endereço da placa costuma ser 192.168.4.1.' },
      ],
    },
    {
      id: 'servidor-uma-pagina-feita-pela-placa',
      titulo: 'Servidor: uma página feita pela placa',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Um servidor é quem responde quando você abre um endereço no navegador. A placa também pode fazer isso! Você digita o IP dela no navegador e ela mostra uma página.',
        },
        { tipo: 'caminho', itens: ['Rede e Internet', 'Servidor HTTP'] },
        {
          tipo: 'figura',
          imagem: { ...img.categoriaServidorHttp, alt: 'Categoria Servidor HTTP com os blocos do servidor e os botões de exemplos prontos' },
          legenda: 'Os blocos do servidor e os botões de exemplos prontos.',
        },
        {
          tipo: 'tabela',
          larguraNome: 200,
          respiro: 12,
          itens: [
            { titulo: 'Iniciar servidor HTTP Web', texto: 'Liga o servidor. Use a porta 80.' },
            { titulo: 'Aguarde cliente HTTP', texto: 'Espera alguém abrir a página no navegador.' },
            { titulo: 'Página web solicitada', texto: 'Diz qual endereço foi aberto, como on ou off.' },
            { titulo: 'Enviar resposta HTTP', texto: 'Manda para o navegador o texto da página.' },
            { titulo: 'Fechar HTTP web server', texto: 'Desliga o servidor.' },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: LED pelo navegador',
          texto: 'Clique em Carregar exemplo: led_webserver e troque o nome e a senha da rede pelos da sua rede.',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: {
                ...img.exemploLedWeb,
                alt: 'Programa led_webserver que liga o Wi‑Fi, inicia o servidor e acende ou apaga o LED conforme o endereço',
              },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Liga a placa no Wi‑Fi, inicia o servidor e mostra o IP no Console.',
                '2. Espera alguém abrir a página.',
                '3. Se o endereço terminar em on, acende o LED azul (D2). Se terminar em off, apaga.',
                '4. Responde com uma página que tem os links Ligar LED e Desligar LED.',
              ],
            },
          ],
        },
        {
          tipo: 'navegador',
          url: '192.168.1.124/on',
          imagem: { ...img.paginaPlaca, alt: 'Página feita pela placa com os links Ligar LED e Desligar LED' },
          legenda:
            'Abra o IP da placa no navegador do celular ou do computador, na mesma rede. Clique em Ligar LED e veja a luz azul acender.',
        },
        {
          tipo: 'destaque',
          variante: 'info',
          icone: 'book',
          titulo: 'Também funciona com o Ponto de Acesso',
          texto:
            'Troque o bloco conectar na rede wifi pelo Configurar Modo Ponto de Acesso, conecte o celular na rede da placa e abra 192.168.4.1. Pode ficar um pouco mais lento.',
        },
      ],
    },
    {
      id: 'cliente-buscando-dados-na-internet',
      titulo: 'Cliente: buscando dados na internet',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Agora é ao contrário: a placa pede uma informação para um site. É como abrir uma página, só que quem lê a resposta é a placa. Aqui vamos buscar a temperatura de uma cidade.',
        },
        { tipo: 'caminho', itens: ['Rede e Internet', 'Cliente HTTP'] },
        {
          tipo: 'tabela',
          larguraNome: 200,
          respiro: 12,
          itens: [
            { titulo: 'Requisição HTTP GET', texto: 'Pede uma informação para um endereço da internet.' },
            { titulo: 'Status da resposta HTTP', texto: 'Diz se deu certo. 200 quer dizer OK.' },
            { titulo: 'Conteúdo da resposta HTTP', texto: 'O que o site respondeu.' },
            { titulo: 'Fazer requisição HTTP POST', texto: 'Manda dados para um site, como uma leitura de sensor.' },
          ],
        },
        {
          tipo: 'exemplo',
          titulo: 'Exemplo: previsão do tempo',
          blocos: [
            {
              tipo: 'figura',
              semSombra: true,
              imagem: {
                ...img.exemploPrevisao,
                alt: 'Programa que pede a previsão do tempo ao open-meteo e mostra a resposta ou o número do erro',
              },
            },
            {
              tipo: 'explicacao',
              titulo: 'O que esse programa faz?',
              itens: [
                '1. Liga a placa no Wi‑Fi.',
                '2. Pede a previsão do tempo para o site open-meteo.',
                '3. Se o status for 200, mostra a resposta no Console.',
                '4. Se der erro, mostra o número do erro.',
              ],
            },
          ],
        },
        {
          tipo: 'paragrafo',
          texto:
            'A resposta tem vários dados. Os principais são temperature (temperatura em graus), windspeed (velocidade do vento) e is_day (1 é dia, 0 é noite).',
        },
        {
          tipo: 'endereco',
          texto: 'https://api.open-meteo.com/v1/forecast?latitude=-23.0885&longitude=-47.2094&current_weather=true',
        },
        {
          tipo: 'destaque',
          variante: 'dica',
          icone: 'sparkles',
          titulo: 'Quer outra cidade?',
          texto:
            'Troque os números de latitude e longitude. Você encontra esses números no Google Maps. Não precisa de cadastro nem senha.',
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
            { titulo: 'Mais botões', texto: 'Coloque mais um link na página para acender o LED verde (D33).' },
            { titulo: 'Página do sensor', texto: 'Mostre na página a temperatura lida pela placa.' },
            { titulo: 'Termômetro da cidade', texto: 'Busque a temperatura da sua cidade e mostre no Console.' },
          ],
        },
      ],
    },
  ],
};

export default conteudo;
