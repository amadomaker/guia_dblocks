// Versão completa (com o José). Fonte: Figma, frame 914:83. Usada quando o José está publicado (src/config/recursos.ts).
import type { DocumentoLegal } from '../tipos';

const documento: DocumentoLegal = {
  titulo: 'Termos de Uso',
  descricao:
    'As regras para usar o Dblocks, a IA José e os demais serviços da Amado Maker. Ao acessar a plataforma, você concorda com estes termos.',
  atualizadoEm: '21 de outubro de 2026',
  secoes: [
    {
      id: 'aceitacao',
      titulo: '1. Aceitação dos termos',
      menu: '1. Aceitação',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Estes Termos de Uso regem o acesso ao **Dblocks**, plataforma de programação em blocos da **Amado Maker Editora Ltda** (Amado Maker), CNPJ 36.205.501/0001-51, incluindo o site, o editor, o simulador, o Guia Dblocks, a IA José e o painel administrativo. Ao criar uma conta ou usar a plataforma, você declara que leu e concorda com estes termos e com a Política de Privacidade.',
        },
        { tipo: 'paragrafo', texto: 'Se você não concordar, não use a plataforma.' },
      ],
    },
    {
      id: 'quem-pode-usar',
      titulo: '2. Quem pode usar',
      menu: '2. Quem pode usar',
      blocos: [
        {
          tipo: 'lista',
          itens: [
            '**Qualquer pessoa** pode usar o Dblocks, que é aberto ao público. O acesso é feito com uma conta Google.',
            '**Menores de 18 anos** devem usar a plataforma com autorização dos pais ou responsáveis, e **menores de 12 anos** somente com o acompanhamento deles ou da escola.',
            '**A IA José** é exclusiva para alunos e professores de municípios parceiros do Digitalmente Maker. Eles entram no Dblocks pela plataforma EAD da rede, que cuida do cadastro e das autorizações, inclusive o consentimento dos responsáveis.',
          ],
        },
      ],
    },
    {
      id: 'o-que-oferecemos',
      titulo: '3. O que oferecemos',
      menu: '3. O que oferecemos',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O Dblocks oferece, gratuitamente, um editor de programação em blocos, simulador de circuitos e de robô, conexão com placas como a AmadoBoard, recursos de IoT, música e visão computacional. Recursos exclusivos, como a IA José e o painel administrativo, dependem de contrato com a rede de ensino.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Podemos incluir, alterar ou remover funcionalidades para melhorar a plataforma. Mudanças que afetem redes parceiras seguem o que estiver previsto em contrato.',
        },
      ],
    },
    {
      id: 'sua-conta',
      titulo: '4. Sua conta',
      menu: '4. Sua conta',
      blocos: [
        {
          tipo: 'lista',
          itens: [
            'Você é responsável pela segurança da sua conta (a conta Google ou o acesso pela plataforma EAD da sua rede) e por tudo o que for feito com ela no Dblocks.',
            'Não compartilhe o acesso nem use a conta de outra pessoa.',
            'Avise-nos em privacidade@amadomaker.com.br se perceber uso indevido da sua conta.',
            'Você pode deixar de usar a plataforma e pedir a exclusão da conta a qualquer momento. A conta e os projetos são excluídos 90 dias após o pedido, como descrito na Política de Privacidade.',
          ],
        },
      ],
    },
    {
      id: 'uso-aceitavel',
      titulo: '5. Uso aceitável',
      menu: '5. Uso aceitável',
      blocos: [
        {
          tipo: 'paragrafo',
          texto: 'O Dblocks é um ambiente educacional. Ao usá-lo, você se compromete a **não**:',
        },
        {
          tipo: 'lista',
          itens: [
            'publicar ou enviar conteúdo ofensivo, discriminatório, violento, sexual ou que viole direitos de terceiros;',
            'expor dados pessoais de outras pessoas, especialmente de crianças, em projetos, tópicos de IoT ou conversas com a IA;',
            'tentar acessar contas, dados ou sistemas sem autorização, ou interferir no funcionamento da plataforma;',
            'usar robôs, scripts ou outros meios automatizados para sobrecarregar os serviços (inclusive o EasyMQTT) ou extrair dados;',
            'usar a plataforma para fins ilegais ou comerciais não autorizados.',
          ],
        },
        {
          tipo: 'paragrafo',
          texto:
            'Podemos suspender ou encerrar o acesso de quem descumprir estas regras, avisando a rede de ensino quando se tratar de um aluno de município parceiro.',
        },
      ],
    },
    {
      id: 'ia-jose',
      titulo: '6. Uso da IA José',
      menu: '6. IA José',
      blocos: [
        {
          tipo: 'lista',
          itens: [
            'O José é uma ferramenta de apoio à aprendizagem. **As respostas podem conter erros** e não substituem a orientação do professor.',
            'Não tente fazer o José gerar conteúdo impróprio ou contornar as regras de conteúdo definidas pela plataforma e pelos próprios blocos.',
            'Não envie dados pessoais, senhas ou informações sensíveis nas conversas.',
            'O uso pode ter limites de consumo definidos no contrato com a rede de ensino.',
          ],
        },
      ],
    },
    {
      id: 'seguranca-com-hardware',
      titulo: '7. Segurança com hardware',
      menu: '7. Segurança com hardware',
      blocos: [
        {
          tipo: 'aviso',
          texto:
            '**Atenção:** atividades com placas, sensores, motores e baterias envolvem eletricidade e peças móveis. Crianças e adolescentes devem fazê-las sempre com a supervisão de um adulto ou professor.',
        },
        {
          tipo: 'lista',
          itens: [
            'Siga as orientações do material didático e as especificações de cada componente, como a alimentação de 6 a 12 V da AmadoBoard.',
            'O simulador ajuda a testar programas, mas não garante que um circuito físico esteja montado corretamente.',
            'A Amado Maker não se responsabiliza por danos causados por montagem incorreta, uso de componentes fora da especificação ou uso sem supervisão.',
          ],
        },
      ],
    },
    {
      id: 'propriedade-intelectual',
      titulo: '8. Propriedade intelectual',
      menu: '8. Propriedade intelectual',
      blocos: [
        {
          tipo: 'lista',
          itens: [
            '**Seus projetos são seus.** Programas, circuitos e configurações que você cria continuam de sua autoria. Você nos autoriza a armazená-los e exibi-los apenas para que a plataforma funcione.',
            '**Software livre.** O código do Dblocks é baseado no BIPES e distribuído sob a licença GPLv3, que define como ele pode ser copiado, modificado e redistribuído.',
            '**Marcas e conteúdos.** Os nomes e logotipos Dblocks, Amado Maker, AmadoBoard, José e Digitalmente Maker, a identidade visual e os materiais didáticos são de titularidade da Amado Maker e não podem ser usados sem autorização.',
          ],
        },
      ],
    },
    {
      id: 'redes-parceiras',
      titulo: '9. Redes de ensino parceiras',
      menu: '9. Redes parceiras',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Para municípios e escolas parceiros, o **contrato** firmado com a Amado Maker prevalece sobre estes termos no que for diferente, inclusive quanto a acesso à IA José, limites de uso, suporte e tratamento de dados. Cabe à rede gerenciar quem tem acesso pelo painel administrativo.',
        },
      ],
    },
    {
      id: 'disponibilidade',
      titulo: '10. Disponibilidade e encerramento',
      menu: '10. Disponibilidade',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Trabalhamos para manter o Dblocks no ar, mas a plataforma pode ficar indisponível por manutenção, falhas de fornecedores ou causas fora do nosso controle. Recursos gratuitos são oferecidos **no estado em que se encontram**, sem garantia de funcionamento ininterrupto.',
        },
        {
          tipo: 'paragrafo',
          texto:
            'Se precisarmos encerrar um serviço, avisaremos com antecedência razoável sempre que possível, para que você possa salvar seus projetos.',
        },
      ],
    },
    {
      id: 'responsabilidade',
      titulo: '11. Limitação de responsabilidade',
      menu: '11. Responsabilidade',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'Na extensão permitida pela lei, a Amado Maker não responde por danos indiretos, perda de dados não salvos, mau funcionamento de equipamentos de terceiros ou conteúdo criado por usuários. Nada nestes termos limita direitos garantidos pelo Código de Defesa do Consumidor.',
        },
      ],
    },
    {
      id: 'privacidade',
      titulo: '12. Privacidade',
      menu: '12. Privacidade',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            'O tratamento dos seus dados pessoais é descrito na nossa [Política de Privacidade](/privacidade), que faz parte destes termos. Para entender quais dados coletamos e como exercer seus direitos, consulte a Política de Privacidade.',
        },
      ],
    },
    {
      id: 'disposicoes-finais',
      titulo: '13. Disposições finais',
      menu: '13. Disposições finais',
      blocos: [
        {
          tipo: 'paragrafo',
          texto:
            '**Alterações.** Podemos atualizar estes termos. A data da última atualização fica no topo da página, e mudanças relevantes serão avisadas na plataforma.',
        },
        {
          tipo: 'paragrafo',
          texto:
            '**Lei e foro.** Estes termos seguem a legislação brasileira. Fica eleito o foro da Comarca de Indaiatuba/SP, ressalvado o direito do consumidor de propor ação em seu domicílio.',
        },
        { tipo: 'paragrafo', texto: '**Contato.** privacidade@amadomaker.com.br · R. Cap. Alberto Mendes Júnior, 108, Vila Nossa Sra. Aparecida, Indaiatuba/SP, CEP 13330-560' },
      ],
    },
  ],
};

export default documento;
