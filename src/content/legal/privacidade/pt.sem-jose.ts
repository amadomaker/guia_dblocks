// Versão sem o José (lançamento do Guia). Fonte: Figma, frame 1340:87. Usada enquanto o José está oculto (src/config/recursos.ts).
import type { DocumentoLegal } from '../tipos';

const documento: DocumentoLegal = {
  titulo: 'Política de Privacidade',
  descricao:
    'Como o Dblocks e a Amado Maker tratam os seus dados pessoais, de acordo com a Lei Geral de Proteção de Dados (LGPD).',
  atualizadoEm: '21 de outubro de 2026',
  secoes: [
    {
      id: 'quem-somos',
      titulo: '1. Quem somos e a quem esta política se aplica',
      menu: '1. Quem somos',
      blocos: [
        { tipo: 'paragrafo', texto: 'A **Amado Maker Editora Ltda** (Amado Maker), CNPJ 36.205.501/0001-51, com sede na R. Cap. Alberto Mendes Júnior, 108, Vila Nossa Sra. Aparecida, Indaiatuba/SP, CEP 13330-560, é a responsável pelo Dblocks e explica aqui quais dados pessoais trata, por quê e como você pode exercer seus direitos, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, "LGPD").' },
        { tipo: 'paragrafo', texto: 'Esta política vale para:' },
        { tipo: 'lista', itens: ['o **site** do Dblocks (página de apresentação e formulário "Solicite uma demonstração");', 'o **Guia Dblocks**, com os capítulos, projetos e materiais de apoio da plataforma;', 'a **plataforma Dblocks**: editor de blocos, simulador, abas de Dispositivo, IoT, EasyMQTT, Databoard, Música e Visão;', 'o **painel administrativo** usado por redes de ensino parceiras para gerenciar escolas, turmas e convites.'] },
        { tipo: 'paragrafo', texto: '**Papel de cada parte.** Para quem usa o Dblocks por conta própria, a Amado Maker é a **controladora** dos dados. Quando o acesso ocorre por meio de um município parceiro, o município (ou sua secretaria de educação) é o controlador dos dados de seus alunos e professores, e a Amado Maker atua como **operadora**, seguindo o contrato firmado com a rede.' },
      ],
    },
    {
      id: 'dados-que-coletamos',
      titulo: '2. Quais dados coletamos',
      menu: '2. Dados que coletamos',
      blocos: [
        { tipo: 'paragrafo', texto: 'Coletamos apenas o necessário para cada funcionalidade.' },
        { tipo: 'tabela', colunas: [244, 407, 244], cabecalho: ['Situação', 'Dados tratados', 'Origem'], linhas: [['Visita ao site e à plataforma', 'Endereço IP, navegador e dispositivo, páginas visitadas, data e hora, identificadores de cookies', 'Coletados automaticamente, inclusive pelo Google Analytics'], ['Login com conta Google', 'Nome, e-mail, foto de perfil e identificador único da conta', 'Fornecidos pelo Google com sua autorização'], ['Acesso por uma rede parceira (plataforma EAD)', 'Nome, perfil (aluno, professor, coordenação ou gestão), município, escola e turma; para alunos, a data de nascimento. Não recebemos CPF nem e-mail de alunos', 'Enviados pela plataforma EAD da rede quando você entra no Dblocks'], ['Projetos e telemetria (EasyMQTT, IoT, Databoard)', 'Programas salvos, nomes de tópicos e leituras de sensores', 'Fornecidos por você ou gerados pela sua placa'], ['Formulário "Solicite uma demonstração"', 'Nome, cargo, e-mail institucional, WhatsApp, município, estado, quantidade de escolas e mensagem', 'Fornecidos por você']] },
        { tipo: 'forte', texto: 'O que não sai do seu computador.' },
        { tipo: 'lista', itens: ['**Câmera (aba Visão):** a imagem é processada no próprio navegador para reconhecer mãos, poses e cores. As imagens não são enviadas nem armazenadas pela Amado Maker.', '**Conexão com placas (USB, Bluetooth, Wi-Fi):** o programa vai direto do navegador para o dispositivo, sem passar pelos nossos servidores.', '**Simulador e editor:** o trabalho em andamento fica no armazenamento local do seu navegador até que você o salve ou apague.'] },
        { tipo: 'paragrafo', texto: 'Não coletamos dados sensíveis de forma intencional. Pedimos que alunos não escrevam informações pessoais nos nomes de projetos.' },
      ],
    },
    {
      id: 'criancas-e-adolescentes',
      titulo: '3. Dados de crianças e adolescentes',
      menu: '3. Crianças e adolescentes',
      blocos: [
        { tipo: 'paragrafo', texto: 'O Dblocks é usado em escolas, então tratamos dados de alunos sempre no seu **melhor interesse**, como exigem o art. 14 da LGPD e o Estatuto da Criança e do Adolescente.' },
        { tipo: 'lista', itens: ['**Pelo município parceiro:** alunos e professores das redes parceiras entram no Dblocks pela plataforma EAD da rede, que já traz o cadastro, o perfil, a escola e a turma de cada pessoa. O consentimento dos pais ou responsáveis e as demais autorizações são resolvidos pela rede, por meios formais, antes do acesso, e não dentro do Dblocks. Recebemos só os dados mínimos para o uso: nada de CPF ou e-mail de alunos, e a data de nascimento serve apenas para saber a faixa etária.', '**Uso independente:** o login exige conta Google, cujos termos pedem idade mínima ou supervisão dos responsáveis. Menores de 12 anos devem usar a plataforma apenas com autorização e acompanhamento de um responsável.', '**Minimização:** não pedimos dados além dos necessários e não usamos dados de alunos para publicidade nem perfis comerciais.'] },
      ],
    },
    {
      id: 'finalidades-e-bases-legais',
      titulo: '4. Para que usamos os dados e com qual base legal',
      menu: '4. Finalidades e bases legais',
      blocos: [
        { tipo: 'tabela', colunas: [298, 298, 298], cabecalho: ['Finalidade', 'Dados', 'Base legal (LGPD)'], linhas: [['Criar e manter sua conta e sessão', 'Nome, e-mail, foto, identificador Google', 'Execução de contrato (art. 7º, V)'], ['Salvar projetos e exibir dados de sensores', 'Programas, tópicos e leituras EasyMQTT', 'Execução de contrato (art. 7º, V)'], ['Gerir escolas, turmas, convites e consumo', 'Dados de vínculo e de uso', 'Execução de contrato com o município (art. 7º, V)'], ['Responder a pedidos de demonstração', 'Dados do formulário', 'Consentimento (art. 7º, I)'], ['Medir audiência e melhorar a plataforma', 'Dados de navegação e cookies analíticos', 'Consentimento (art. 7º, I)'], ['Segurança e registros de acesso', 'IP, data, hora, logs', 'Obrigação legal (Marco Civil, art. 15) e legítimo interesse (art. 7º, IX)'], ['Defesa em processos', 'Dados necessários ao caso', 'Exercício regular de direitos (art. 7º, VI)']] },
        { tipo: 'paragrafo', texto: 'Não vendemos dados pessoais e não os usamos para publicidade direcionada.' },
      ],
    },
    {
      id: 'compartilhamento',
      titulo: '5. Com quem compartilhamos',
      menu: '5. Compartilhamento',
      blocos: [
        { tipo: 'paragrafo', texto: 'Compartilhamos dados apenas com quem precisa deles para o Dblocks funcionar, sob contrato e com o mesmo nível de proteção.' },
        { tipo: 'tabela', colunas: [298, 298, 298], cabecalho: ['Quem', 'Para quê', 'Dados'], linhas: [['Google (Firebase, Cloud Run, Firestore, Pub/Sub)', 'Login, hospedagem e banco de dados', 'Conta, projetos, telemetria'], ['Google Analytics', 'Medição de audiência', 'Dados de navegação e cookies'], ['MongoDB Atlas', 'Armazenamento de telemetria', 'Leituras de sensores e tópicos'], ['Município parceiro', 'Gestão pedagógica da rede', 'Dados da própria rede'], ['Autoridades', 'Cumprimento de lei ou ordem judicial', 'O que for exigido']] },
        { tipo: 'paragrafo', texto: '**Transferência internacional.** Os serviços do Google Cloud que usamos (hospedagem, banco de dados e login) ficam na região us-central1, nos Estados Unidos, e o armazenamento de telemetria (MongoDB Atlas) também pode processar dados fora do Brasil. Nesses casos, adotamos as garantias do art. 33 da LGPD, como cláusulas contratuais padrão.' },
      ],
    },
    {
      id: 'cookies',
      titulo: '6. Cookies e armazenamento no navegador',
      menu: '6. Cookies',
      blocos: [
        { tipo: 'paragrafo', texto: 'Usamos recursos necessários, que mantêm a plataforma funcionando, e analíticos, que só são ativados com seu consentimento.' },
        { tipo: 'tabela', colunas: [137, 275, 275, 206], cabecalho: ['Tipo', 'Exemplos', 'Para quê', 'Pode recusar?'], linhas: [['Necessários', 'Sessão de login (Firebase), idioma, programa em andamento no armazenamento local', 'Manter você conectado e não perder seu trabalho', 'Não, sem eles a plataforma não funciona'], ['Analíticos', 'Google Analytics 4 (cookies _ga)', 'Entender quantas pessoas usam o Dblocks e quais recursos usam', 'Sim']] },
        { tipo: 'paragrafo', texto: 'Você pode mudar suas escolhas a qualquer momento no aviso de cookies ou nas configurações do navegador.' },
      ],
    },
    {
      id: 'retencao-dos-dados',
      titulo: '7. Por quanto tempo guardamos os dados',
      menu: '7. Retenção dos dados',
      blocos: [
        { tipo: 'tabela', colunas: [298, 597], cabecalho: ['Dado', 'Prazo'], linhas: [['Conta e projetos', 'Enquanto a conta estiver ativa; excluídos 90 dias após o pedido de exclusão'], ['Dados de alunos de rede parceira', 'Pelo tempo do contrato com o município, depois devolvidos ou eliminados conforme o contrato'], ['Telemetria de sensores', '15 dias'], ['Pedidos de demonstração', '15 dias, ou antes, se você revogar o consentimento'], ['Registros de acesso', '6 meses, conforme o art. 15 do Marco Civil da Internet'], ['Dados analíticos', '2 meses, conforme a configuração do Google Analytics']] },
        { tipo: 'paragrafo', texto: 'Ao fim do prazo, os dados são eliminados ou anonimizados, salvo as hipóteses de conservação do art. 16 da LGPD.' },
      ],
    },
    {
      id: 'seguranca',
      titulo: '8. Como protegemos os dados',
      menu: '8. Segurança',
      blocos: [
        { tipo: 'lista', itens: ['conexões criptografadas (HTTPS) entre o navegador e nossos servidores;', 'login pela conta Google, com verificação de token em cada requisição às nossas APIs;', 'acesso ao painel restrito por perfil (aluno, professor, gestor) e por rede de ensino;', 'infraestrutura em nuvem com controle de acesso por papéis e registros de atividade;', 'processamento da câmera e da conexão com placas no próprio navegador.'] },
        { tipo: 'paragrafo', texto: 'Se ocorrer um incidente de segurança que possa trazer risco ou dano relevante, comunicaremos a ANPD e os titulares afetados, conforme o art. 48 da LGPD.' },
      ],
    },
    {
      id: 'seus-direitos',
      titulo: '9. Seus direitos e como exercê-los',
      menu: '9. Seus direitos',
      blocos: [
        { tipo: 'paragrafo', texto: 'Você pode, a qualquer momento e sem custo, pedir:' },
        { tipo: 'lista', itens: ['confirmação de que tratamos seus dados e acesso a eles;', 'correção de dados incompletos, inexatos ou desatualizados;', 'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;', 'portabilidade dos dados a outro fornecedor;', 'eliminação dos dados tratados com base no consentimento e revogação do consentimento;', 'informação sobre com quem compartilhamos seus dados;', 'revisão de decisões tomadas unicamente com base em tratamento automatizado.'] },
        { tipo: 'paragrafo', texto: '**Como pedir.** Escreva para o Encarregado pelo Tratamento de Dados (DPO) da Amado Maker pelo e-mail **privacidade@amadomaker.com.br**. Respondemos em até 15 dias. Podemos pedir informações para confirmar sua identidade.' },
        { tipo: 'paragrafo', texto: '**Alunos de redes parceiras.** Como o município é o controlador desses dados, pedidos podem ser feitos à escola ou à secretaria de educação. Se chegarem à Amado Maker, encaminhamos à rede e apoiamos o atendimento. Você também pode reclamar à ANPD (gov.br/anpd).' },
      ],
    },
    {
      id: 'disposicoes-finais',
      titulo: '10. Disposições finais',
      menu: '10. Disposições finais',
      blocos: [
        { tipo: 'paragrafo', texto: '**Software livre.** O Dblocks é baseado no BIPES e distribuído sob a licença GPLv3. A licença trata do código-fonte; esta política trata dos dados pessoais tratados na versão hospedada pela Amado Maker.' },
        { tipo: 'paragrafo', texto: '**Alterações.** Podemos atualizar esta política quando o produto ou a lei mudarem. A data da última atualização fica no topo da página, e mudanças relevantes serão avisadas na plataforma ou por e-mail.' },
        { tipo: 'paragrafo', texto: '**Lei e foro.** Esta política segue a legislação brasileira. Fica eleito o foro da Comarca de Indaiatuba/SP.' },
        { tipo: 'paragrafo', texto: '**Contato.** privacidade@amadomaker.com.br · R. Cap. Alberto Mendes Júnior, 108, Vila Nossa Sra. Aparecida, Indaiatuba/SP, CEP 13330-560' },
      ],
    },
  ],
};

export default documento;
