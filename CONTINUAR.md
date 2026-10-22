# Codex, continue o meu trabalho no projeto Guia Dblocks

Este arquivo é a passagem de bastão. Ele diz o que já foi feito, como o trabalho está sendo feito e o que falta.
Atualizado a cada etapa concluída. **Última atualização: todas as telas do Figma prontas (1920px). Layout para notebooks / Windows com escala 125% concluído.**

## Contexto

- O Guia Dblocks é a documentação da plataforma Dblocks (baseada no BIPES, personalizada pela Amado Maker).
- O site foi reconstruído do zero em **Vite + React 19 + TypeScript + React Router 7**, com CSS Modules.
- A referência visual é o Figma. **O objetivo é pixel perfect**: cada tela tem que ficar igual ao Figma em 1920px.
  - Arquivo Figma: `ladFObEJwKg8cZFVKfvYtE`
  - Página **"Guia Dblocks"** (id `1010:861`): home, 26 capítulos, "Projetos na prática" e 4 projetos.
  - Política de privacidade e Termos de uso estão na página **"Website"**: frames `911:83` e `914:83`.
- Branch de trabalho: `refatoracao-frontend-react` (criada a partir da `main`). **Nada foi commitado ainda.**
- Comunicação com o dono do projeto em **português (pt-BR)**.

## Decisões já tomadas (não reabrir)

1. **Idioma**: entregar tudo em **pt-BR primeiro**. EN e ES ficam para depois. A estrutura de i18n já existe
   (`src/i18n/`), e EN/ES aparecem no seletor como "em breve" (`idiomasPublicados = ['pt']` em `src/i18n/idiomas.ts`).
   Os dicionários `en.ts`/`es.ts` da interface e o capítulo 01 em EN/ES já estão traduzidos.
2. **Ambientes**: só **production**. Não criar staging. Merge na `main` publica direto em prod
   (`.github/workflows/deploy-gcp.yml`). O dono valida localmente no Docker antes.
3. **PDFs** (`materiais/*.pdf`): vão para um **bucket GCS criado via Terraform** (ainda não feito).
4. **Links do rodapé**: o dono vai mandar alguns links antes do deploy. Os provisórios estão em `src/data/links.ts`
   (marcados com `TODO`).
5. Imagens dos prints: **exportadas do Figma** e convertidas para WebP. Texto e layout ficam em HTML de verdade
   (por causa de i18n, busca, acessibilidade e responsivo). Nunca transformar seções inteiras em imagem.

## Como rodar

```bash
npm install
npm run dev            # http://localhost:5173 (o dono acompanha por aqui)
npm run build          # tsc -b && vite build
npx eslint .
docker build -t guia-dblocks:local . && docker run -d --name guia-dblocks -p 8090:8080 guia-dblocks:local
# (a porta 8080 da máquina do dono está ocupada por outro container; use 8090)
```

## Atualização de outubro de 2026 (branch `feat/revisao-do-guia-no-figma`)

O Figma foi revisado depois da migração para React. Já está no código:

- **Capítulo novo 04 · Conhecendo a AmadoBoard** e renumeração: os antigos 04–25 viraram 05–26 (o José é o 26).
  O antigo 11 virou **12 · Explorando a placa em 3D** (slug `explorando-a-placa-em-3d`). O número vem de
  `src/data/catalogo.ts`; as referências cruzadas ("Capítulo NN", `capitulo: N`, chips dos projetos em
  `src/data/projetos.ts`) foram deslocadas junto.
- Capítulos 03, 05–24 conferidos contra o Figma (textos, prints refeitos e diagramas de ligação novos).
- **Capítulo 25 reescrito**: IoT só pela aba IOT, pelo cabo USB (o EasyMQTT vai ter capítulo próprio, ainda não feito).
- Projetos: diagrama de ligação no Alarme de distância e na Janela automática (a capa do Simulador saiu).
- Novas opções de bloco: `quebra` em `figuras` (as imagens que não cabem descem de linha) e `legendaLivre` em `figura`
  (a legenda não quebra na largura do print). O bloco `blocosEOled` agora recebe a imagem da telinha (`telinha`).

### Como conferir contra o Figma (`tools/figma/`)

- `regressao.py` compara a altura de cada capítulo com a do frame. **Rode com o José ligado**, que é como o Figma foi
  desenhado: `VITE_JOSE_PUBLICADO=true npx vite --port 5174` e depois `python3 tools/figma/regressao.py 5174`.
  Sem o José o rodapé fica 24px mais curto (descrição de 2 linhas em vez de 3).
- `dif_textos.py` + `FIGMA_JS.md`: diff de texto entre o código e o frame (por hash, sem despejar tudo na tela).
- `conferir.sh` + `comparar.mjs`: dizem se um print exportado do Figma é diferente do WebP do repo
  (print refeito com o mesmo tamanho não aparece na comparação por tamanho).
- `alturas.py`, `secoes.py`, `tamanho.py`: altura da página, altura por seção e ajuste de largura/altura no `imagens.ts`.
- O `tools/visual/shot.js` está quebrado (é CommonJS e o `package.json` é `"type": "module"`).

### Diferenças que não são do código

Em 18 dos 24 capítulos a altura bate com o Figma em até 3px. O resto é: uma linha que quebra diferente entre o Figma e o
navegador (07, 09, 19, 20, 23) e o frame do capítulo 22, que no Figma tem o `Corpo` deslocado 100px para baixo.
Itens do **Figma** que ficaram desatualizados: o card do capítulo 25 na home (ainda diz EasyMQTT, 15 min) e os chips
"cap. NN" do capítulo 01 (numeração antiga).

## Arquitetura (onde fica cada coisa)

```
src/
  styles/tokens.css            tokens do Figma (cores, categorias de blocos, sombras)
  components/Icon/icons.ts     paths dos ícones "Ícone/*" do Figma (traço 2px fixo via non-scaling-stroke)
  components/Conteudo/Blocos.tsx       renderizador de TODOS os tipos de bloco dos capítulos
  components/Conteudo/Conteudo.module.css  estilos dos blocos (medidas do Figma)
  components/LayoutDoc/        layout de documentação (barra da trilha à esquerda, "Nesta página" à direita)
  components/FimDoCapitulo/    "Este capítulo ajudou?" + anterior/próximo
  content/tipos.ts             tipos de bloco (Bloco, Secao, ConteudoCapitulo)
  content/capitulos/NN-slug/   pt.ts (+ en.ts/es.ts no futuro) e imagens.ts (imports e tamanhos)
  data/catalogo.ts             trilhas e capítulos (estrutura); textos vêm de src/i18n/textos/pt.ts
  data/projetos.ts             projetos (estrutura); textos no dicionário
  pages/Home/                  home (pronta, igual ao Figma)
  pages/Capitulo/Capitulo.tsx  página de capítulo
  pages/Projetos/              "Projetos na prática" (reaproveita GradeProjetos da home)
  pages/Projeto/Projeto.tsx    página de projeto (mesmo cabeçalho/LayoutDoc do capítulo)
  pages/Legal/                 política de privacidade e termos de uso
  content/projetos/NN-slug/    conteúdo dos 4 projetos
  content/legal/<slug>/pt.ts   conteúdo dos documentos legais ({{...}} = pendência do jurídico)
  data/materiais.ts            cards de materiais de apoio (home e página de projetos)
infra/modules/public-bucket/   bucket GCS público com os PDFs de materiais/
scripts/
  baixar-figma.sh              baixa exports do Figma para .figma-cache/ e gera WebP em src/assets/
  gerar-imagens-ts.py          gera o imagens.ts de um capítulo
  otimizar-imagens.mjs         PNG -> WebP (npm run imagens)
tools/visual/                  screenshot (Playwright), diff (pixelmatch), recorte e condensador do Figma
```

Regras visuais já descobertas:
- Etiqueta "CAPÍTULO NN", número do item atual, barra de progresso, destaque do "caminho" e "PASSO N":
  **sempre laranja da marca**, não a cor da categoria.
- O ícone da trilha na barra lateral usa a cor da categoria da trilha.
- O selo (Novo/Atualizado) da página às vezes difere do card da home: use `selo` no `pt.ts` do capítulo.
- Rótulos de navegação: "Anterior · Capítulo NN", "Trilha anterior · …" e "Próxima trilha · …" na virada de trilha.
  O capítulo 25 termina com "Fim do guia / Voltar ao início" (já implementado).

## Como uma tela foi validada (use o mesmo fluxo ao mexer em algo)

Todas as telas do Figma já estão implementadas. Para ajustar uma delas:

1. Pegue o código do frame no Figma (`get_design_context` com `forceCode: true`). Se a saída vier salva em
   arquivo, condense com `python3 tools/visual/condensar.py <arquivo>`.
2. Prints: `scripts/baixar-figma.sh <pasta> nome=<asset-id>.png ...` e
   `scripts/gerar-imagens-ts.py <pasta-do-conteudo> <pasta-dos-assets> var:arquivo:larg:alt ...`.
3. Conteúdo dos capítulos em `src/content/capitulos/NN-slug/pt.ts`, dos projetos em `src/content/projetos/NN-slug/pt.ts`
   (mesmos blocos, veja `src/content/tipos.ts`) e das páginas legais em `src/content/legal/<slug>/pt.ts`.
4. Compare com o Figma: screenshot do frame inteiro (`get_screenshot` com `maxDimension` = altura do frame) e
   `tools/visual/shot.js` + `diff.js`. **Critério: mesma altura total do frame e diff < ~1%.**
   (O `shot.js` aponta para o Chromium em `~/.cache/ms-playwright/chromium-1243/`; ajuste se precisar.)
5. Ao mexer em `Blocos.tsx`/CSS de blocos ou no `LayoutDoc`, rode a regressão em todas as telas.

Frames de referência: projetos `1193:1794`, `1193:2231`, `1193:2699`, `1193:3223`; "Projetos na prática" `1192:1746`;
privacidade `911:83` e termos `914:83` (página "Website" do Figma; no Guia usam a navbar e o rodapé do próprio Guia).

## Concluído: layout em 1280–1536px (Windows com escala 125%)

**Problema (relatado pelo dono):** o Windows 11 vem com escala 125% por padrão. Num monitor 1920, o navegador passa
a ter **1536px** de largura CSS (1920 ÷ 1,25). Em notebooks 1366/1280 é parecido. O Figma só tem frames de 1920px.

**Decisão do dono (não reabrir):** seguir a **opção 1**. Ajustar o layout para ficar bom nessa faixa de largura,
mantendo o tamanho de texto que o sistema escolheu. **Não** usar `zoom`/`transform: scale` na página inteira
nem detectar `devicePixelRatio`. Isso anularia o Ctrl+ do usuário (acessibilidade, WCAG 1.4.4).

**Diagnóstico já feito (em 1536×864):**
- Nenhuma página tem rolagem horizontal (home, capítulo, /projetos, /privacidade).
- Capítulos/projetos (LayoutDoc) ficam bons: breakpoints em 1440 (colunas 240/760/200) e 1240 (some "Nesta página").
- **Home / hero:** os blocos coloridos flutuantes somem por causa de `@media (max-width: 1560px) { .blocos { display: none } }`
  em `src/pages/Home/Hero.module.css`. É a diferença mais visível. **Primeiro item a corrigir.**

**Plano (marque o que for concluindo).** O dono pediu para fazer isso em **todas as telas**:
1. [x] Hero (feito: `--fx` = fração de 1920, `--escala` 0.85 abaixo de 1600px, escondidos abaixo de 1400px). Original: manter os blocos flutuantes entre ~1180 e 1919px, com posições relativas à largura (ex.: % / `clamp()`)
   e um pouco menores. Esconder só quando realmente encostarem no texto (abaixo de ~1180px).
2. [x] (feito: Materiais agora encolhe os 4 cards até 1080px em vez de quebrar 3 + 1; o resto da home já estava bom em 1536/1366) Revisar as outras seções da home em 1536 e 1366 (Trilhas, Projetos, José, Materiais, Chamada final)
   e os breakpoints existentes (1400, 1180, 1080). Ajustar o que ficar apertado ou desalinhado.
3. [x] (feito: sem vazamento nem sobreposição em 1536/1366) Revisar capítulo, projeto, /projetos, /privacidade e /termos em 1536 e 1366.
4. [x] (feito: regressão completa ok) Garantir que em 1920 continua idêntico ao Figma: rodar a regressão completa (diff < 1%, mesma altura).
5. [x] Rebuild do Docker na porta 8090 para o dono validar.

**Como testar em 1536:** Playwright com `viewport: { width: 1536, height: 864 }, deviceScaleFactor: 1.25`
(exemplo de script nas ferramentas em `tools/visual/`; o `shot.js` aceita a largura como 3º argumento).
Verifique também `document.documentElement.scrollWidth === innerWidth` (sem rolagem lateral).

## Status

| Item | Situação |
|---|---|
| Home | pronta (diff < 1%) |
| Capítulos 01 a 26 | prontos (ver "Atualização de outubro de 2026"); altura conferida com `tools/figma/regressao.py` |
| Página "Projetos na prática" (`/projetos`) | pronta (diff < 1%; reaproveita `GradeProjetos` e `CardMaterial` da home) |
| 4 projetos (`/projetos/:slug`) | prontos (altura exata, diff < 1%); conteúdo em `src/content/projetos/NN-slug/`, página `src/pages/Projeto/` |
| Política de privacidade e Termos de uso | prontas (`/privacidade`, `/termos`; conteúdo em `src/content/legal/`; textos `{{...}}` são pendências do jurídico, destacadas em laranja-escuro como no Figma) |
| Dockerfile (multi-stage + nginx 8080) | pronto |
| Bucket GCS dos PDFs (Terraform) | pronto no código, **não aplicado**: módulo `infra/modules/public-bucket` (leitura pública, um objeto por `materiais/*.pdf`), usado em `environments/production` como `guia-dblocks-materiais`; `materiais/**` dispara o workflow de infra; `deploy-gcp.yml` passa `VITE_PDF_BASE_URL` no build. Aplica no merge na main (precisa a org permitir `allUsers`) |
| Links do rodapé | definidos (Digitalmente Maker, Sala Maker, Solicitar demonstração); "Código-fonte" removido a pedido do dono |
| Layout 1280–1536px (escala 125%) | pronto (hero e materiais ajustados; demais telas verificadas em 1536 e 1366) |
| Feedback "ajudou?" → Google Planilhas | código pronto: `integracoes/feedback-planilha/` (Apps Script + passo a passo), `src/data/feedback.ts`, campo "O que faltou?" no "Não". **Falta o dono publicar o App da Web** e criar a variável `GUIA_FEEDBACK_URL` no GitHub (ambiente production) |
| José (IA) oculto no lançamento | feito: interruptor `VITE_JOSE_PUBLICADO` (padrão: oculto), nada foi apagado. Política e Termos têm versão completa e sem José (Figma `911:83`/`914:83` e `1340:87`/`1340:596`). Como reativar: **docs/recursos-ocultos.md** |
| Traduções EN/ES | depois de tudo (só ligar `idiomasPublicados` quando estiverem completas) |
| Commit / PR | não feito; pedir autorização ao dono antes |
