import type { IconName } from '../components/Icon/Icon';
import type { Idioma } from '../i18n/idiomas';
import { dicionarios } from '../i18n/textos';
import { catalogoEm, corDaCategoria, numeroDoCapitulo, rotaDoCapitulo } from './catalogo';
import { projetosEm, rotaDoProjeto } from './projetos';

export type ResultadoBusca = {
  titulo: string;
  contexto: string;
  rota: string;
  icone: IconName;
  cor: string;
};

/** Termos extras por capítulo: componentes, blocos e sinônimos que não aparecem no título. */
const palavrasChave: Record<string, string> = {
  'o-que-e-o-dblocks': 'introdução plataforma bipes blocos micropython',
  'sua-conta-e-seu-perfil': 'login google conta perfil idioma limpar cache',
  'conhecendo-a-interface': 'abas toolbox caixa de ferramentas área de trabalho executar play stop salvar',
  'conectando-a-placa': 'usb serial driver micropython instalador conexão falhou esp32 bluetooth wi-fi conectar',
  'seu-primeiro-programa': 'pisca led blink gravar placa',
  'variaveis-e-valores': 'variável lista número texto console print imprimir',
  'lacos-e-tempo': 'loop repetir enquanto para esperar delay contar',
  'matematica-e-logica': 'se senão if else comparação operadores e ou não aritmética',
  'funcoes-e-texto': 'função procedimento texto string juntar',
  'do-bloco-ao-python': 'python micropython código gerado',
  'conhecendo-a-amadoboard': 'placa pinos pinout 3d dispositivo esp32 componentes tour',
  'entradas-e-saidas-digitais': 'botão led digital gpio ligar desligar',
  'entradas-e-saidas-analogicas': 'analógico ldr potenciômetro pwm brilho adc',
  sensores: 'dht11 temperatura umidade ultrassônico distância infravermelho ir rfid tcrt5000',
  'atuadores-e-motores': 'relé servo motor dc ponte h',
  'musica-com-o-buzzer': 'buzzer nota melodia som frequência',
  displays: 'display oled tela ssd1306 texto',
  'simulador-de-circuitos': 'simulador circuito fios componentes virtual',
  'console-e-arquivos': 'console terminal repl arquivos gerenciador',
  'projetos-salvar-e-compartilhar': 'salvar exportar importar compartilhar multiprojetos',
  'visao-computacional': 'câmera gestos mão mediapipe esp32-cam visão',
  bluetooth: 'bluetooth ble celular app plotter',
  'wi-fi-e-internet': 'wifi rede servidor web http requisição access point',
  'iot-e-paineis-de-dados': 'iot mqtt easymqtt painel dashboard databoard gráfico nuvem',
  'conhecendo-o-jose': 'josé ia inteligência artificial chat robô',
};

const normalizar = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u2011\u2013-]/g, ' ')
    .toLowerCase();

type Entrada = ResultadoBusca & { titulo_n: string; texto_n: string };

function montarIndice(idioma: Idioma): Entrada[] {
  const t = dicionarios[idioma];
  const { todosOsCapitulos, trilhaDoCapitulo } = catalogoEm(idioma);
  return [
    ...todosOsCapitulos.map((c) => {
      const trilha = trilhaDoCapitulo(c.slug);
      return {
        titulo: c.titulo,
        contexto: `${t.comum.capitulo} ${numeroDoCapitulo(c.numero)}${trilha ? ` · ${trilha.titulo}` : ''}`,
        rota: rotaDoCapitulo(c),
        icone: c.icone,
        cor: corDaCategoria(c.categoria),
        titulo_n: normalizar(c.titulo),
        // As palavras-chave técnicas (nomes de componentes) valem para todos os idiomas.
        texto_n: normalizar(`${c.resumo} ${palavrasChave[c.slug] ?? ''}`),
      };
    }),
    ...projetosEm(idioma).projetos.map((p) => ({
      titulo: p.tituloCurto,
      contexto: `${t.busca.projeto} · ${t.comum.niveis[p.nivel]} · ${p.minutos} ${t.comum.min}`,
      rota: rotaDoProjeto(p),
      icone: p.icone,
      cor: corDaCategoria(p.categoria),
      titulo_n: normalizar(p.titulo),
      texto_n: normalizar(p.resumo),
    })),
  ];
}

const indices = new Map<Idioma, Entrada[]>();

export function buscar(termo: string, idioma: Idioma): ResultadoBusca[] {
  if (!indices.has(idioma)) indices.set(idioma, montarIndice(idioma));
  const indice = indices.get(idioma)!;
  const palavras = normalizar(termo).split(/\s+/).filter(Boolean);
  if (!palavras.length) return [];
  return indice
    .map((e) => {
      let pontos = 0;
      for (const p of palavras) {
        if (e.titulo_n.includes(p)) pontos += e.titulo_n.startsWith(p) ? 4 : 3;
        else if (e.texto_n.includes(p)) pontos += 1;
        else return null;
      }
      return { e, pontos };
    })
    .filter((r): r is { e: Entrada; pontos: number } => r !== null)
    .sort((a, b) => b.pontos - a.pontos)
    .map(({ e }) => ({ titulo: e.titulo, contexto: e.contexto, rota: e.rota, icone: e.icone, cor: e.cor }));
}
