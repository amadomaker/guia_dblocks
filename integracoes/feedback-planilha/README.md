# Feedback do Guia → Google Planilhas

O "Este capítulo ajudou?" (e "Este projeto ajudou?") envia cada resposta para a planilha
**guiadblocks-feedback** por meio de um Apps Script publicado como App da Web.
O código fica em [`Codigo.gs`](./Codigo.gs).

## O que vai para a planilha

Aba **Respostas**, uma linha por clique:

| Data/hora | ID | Tipo | Página | Caminho | Idioma | Resposta | O que faltou | Motivo enviado em |
|---|---|---|---|---|---|---|---|---|
| 21/10/2026 10:02 | 6f1c… | capitulo | sensores | /capitulos/sensores | pt | nao | Faltou explicar o DHT22 | 21/10/2026 10:03 |

- **Resposta** é `sim` ou `nao`. No "Não", o Guia mostra um campo opcional "O que faltou?".
  Se a pessoa escrever, o texto entra na coluna **O que faltou** da mesma linha.
- Não guardamos dados pessoais: nem IP, nem e-mail, nem nome. O campo de motivo avisa para não
  escrever dados pessoais.

## Publicar (uma vez)

1. Abra a planilha **guiadblocks-feedback** no Google Planilhas (com a conta da Amado Maker).
2. Menu **Extensões → Apps Script**. Abre o editor do script, já ligado a essa planilha.
3. Apague o conteúdo de `Código.gs` e cole o conteúdo de [`Codigo.gs`](./Codigo.gs). Salve (Ctrl+S).
   Se quiser, renomeie o projeto para `guia-dblocks-feedback`.
4. No seletor de funções, escolha **configurar** e clique em **Executar**.
   - O Google pede autorização: escolha a conta, clique em **Avançado → Acessar guia-dblocks-feedback (não seguro)**
     e **Permitir**. O aviso aparece porque o script é da própria empresa e não passou por verificação do Google; é normal.
   - Isso cria a aba **Respostas** com o cabeçalho.
5. Clique em **Implantar → Nova implantação**.
   - Engrenagem ao lado de "Selecionar tipo" → **App da Web**.
   - Descrição: `v1`.
   - **Executar como:** *Eu* (a conta da Amado Maker; é ela que escreve na planilha).
   - **Quem pode acessar:** *Qualquer pessoa*. Isso é o que torna a URL pública. Quem chama a URL não ganha
     acesso à planilha: o script só aceita respostas no formato do Guia.
   - Clique em **Implantar** e copie a **URL do app da Web** (termina em `/exec`).
6. Teste: abra a URL no navegador. Deve aparecer `{"ok":true,"servico":"guia-dblocks-feedback"}`.

## Ligar o Guia à URL

A URL entra no build como variável `VITE_FEEDBACK_URL`. Sem ela, o Guia funciona normalmente e só não envia nada.

- **Produção (GitHub Actions):** no repositório, **Settings → Secrets and variables → Actions → Variables**,
  ambiente `production`, crie a variável **`GUIA_FEEDBACK_URL`** com a URL `/exec`. O `deploy-gcp.yml` já passa
  essa variável para o build.
- **Local:** crie um arquivo `.env.local` na raiz com `VITE_FEEDBACK_URL=https://script.google.com/macros/s/…/exec`
  e reinicie o `npm run dev`. Para o Docker local: `docker build --build-arg VITE_FEEDBACK_URL=… -t guia-dblocks:local .`

## Atualizar o script depois

Editar o código não muda a URL publicada sozinho. Depois de colar a nova versão:
**Implantar → Gerenciar implantações → (lápis) → Versão: Nova versão → Implantar**. A URL continua a mesma.

## Proteções do script

- Aceita só `tipo` = capitulo/projeto, `resposta` = sim/nao, idioma pt/en/es e slugs/caminhos no formato do Guia.
- No máximo 120 chamadas por minuto (no total).
- Um motivo só entra em linha cuja resposta é `nao`, e só uma vez (ninguém sobrescreve o motivo de outra pessoa).
- Motivo cortado em 1000 caracteres; texto que começa com `=`, `+`, `-` ou `@` é gravado como texto, não como fórmula.
- Reenvio do mesmo clique (mesmo ID) não duplica a linha.
