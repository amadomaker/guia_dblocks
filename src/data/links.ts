// Links externos usados no Guia. Os marcados com TODO ainda não foram definidos no Figma.
// `||`: o Dockerfile define a variável vazia quando o build-arg não é passado.
const pdfBase = import.meta.env.VITE_PDF_BASE_URL || 'https://storage.googleapis.com/guia-dblocks-materiais';

export const links = {
  dblocks: 'https://dblocks.com.br',
  siteDblocks: 'https://dblocks.com.br',
  // TODO: link direto para a aba Simulador.
  simulador: 'https://dblocks.com.br',
  bipes: 'https://bipes.net.br/wp/',
  digitalmenteMaker: 'https://amadomaker.com.br/ee/',
  salaMaker: 'https://amadomaker.com.br/ambientes-de-aprendizagem/',
  contato: 'https://amadomaker.com.br/contato/',
  // Link do Figma sem URL; usando a página oficial de drivers da Silicon Labs.
  driverCp210x: 'https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers',
  instaladorMicropython: 'https://amadomaker.github.io/Instalador_Micropython/',
  exemplos: '/exemplos',
  pdfGuiaAmadoBoard: `${pdfBase}/guia-completo-amadoboard.pdf`,
  pdfDblocksNaPratica: `${pdfBase}/dblocks-na-pratica.pdf`,
} as const;
