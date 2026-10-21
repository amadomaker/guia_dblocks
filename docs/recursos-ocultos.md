# Recursos ocultos: o José (IA)

O José ainda não foi lançado, mas tudo o que é dele já está pronto no Guia. Em vez de apagar, o código
**esconde** o José enquanto ele não sai. Nada foi excluído: para colocar no ar, basta ligar uma variável no build.

## Como está hoje

O interruptor fica em [`src/config/recursos.ts`](../src/config/recursos.ts):

```ts
jose: import.meta.env.VITE_JOSE_PUBLICADO === 'true',
```

Sem a variável (ou com qualquer valor diferente de `true`), **o José fica oculto**. Esse é o padrão.

## O que muda com o José oculto

| Onde | Com o José oculto | Arquivo |
|---|---|---|
| Navbar | some o link "IA José" | `src/components/Navbar/Navbar.tsx` |
| Home | some a seção do José | `src/pages/Home/Home.tsx` (o componente continua em `Jose.tsx`) |
| Home, números do hero | 24 capítulos e 8 capítulos novos (em vez de 25 e 9) | `src/pages/Home/Hero.tsx` |
| Capítulo 25 (`/capitulos/conhecendo-o-jose`) | sai do catálogo: vira 404, some da busca e da navegação | `src/data/catalogo.ts` (o conteúdo continua em `src/content/capitulos/25-conhecendo-o-jose/`) |
| Capítulo 24 | o "Próximo" vira "Fim do guia"; o "Parabéns" não apresenta o José | `src/content/capitulos/24-iot-e-paineis-de-dados/pt.ts` |
| Capítulo 1 | some o card da aba IA | `src/content/capitulos/01-o-que-e-o-dblocks/{pt,en,es}.ts` |
| Capítulo 3 | some a linha "IA" da tabela de abas | `src/content/capitulos/03-conhecendo-a-interface/pt.ts` |
| Rodapé | frase sem "inteligência artificial" | `src/components/Footer/Footer.tsx` (`rodape.descricaoSemJose` nos dicionários) |
| Política de Privacidade | versão sem a seção do José (10 seções) | `src/content/legal/privacidade/pt.sem-jose.ts` |
| Termos de Uso | versão sem a seção do José (12 seções) | `src/content/legal/termos/pt.sem-jose.ts` |

No Figma, as duas versões dos documentos legais ficam na página **Website**:

| Documento | Completo (com o José) | Sem o José (no ar agora) |
|---|---|---|
| Política de Privacidade | frame `911:83` | frame `1340:87` |
| Termos de Uso | frame `914:83` | frame `1340:596` |

## Como colocar o José no ar

1. **Produção (GitHub Actions):** em **Settings → Secrets and variables → Actions → Variables**, ambiente
   `production`, crie (ou mude) a variável **`GUIA_JOSE_PUBLICADO`** com o valor `true`. O `deploy-gcp.yml` já passa
   essa variável para o build (`--build-arg VITE_JOSE_PUBLICADO`). Faça um novo deploy (merge na `main`).
2. **Local:** `VITE_JOSE_PUBLICADO=true npm run dev`, ou ponha `VITE_JOSE_PUBLICADO=true` no `.env.local`.
   Docker: `docker build --build-arg VITE_JOSE_PUBLICADO=true -t guia-dblocks:local .`
3. Confira:
   - a navbar mostra "IA José" e a home mostra a seção do José;
   - o hero mostra 25 capítulos e 9 capítulos novos;
   - `/capitulos/conhecendo-o-jose` abre, e o capítulo 24 termina com "Próximo · José";
   - `/privacidade` tem 11 seções (com "5. Inteligência artificial") e `/termos` tem 13 (com "6. Uso da IA José").
4. Revise se a Política e os Termos completos (frames `911:83` e `914:83`) ainda estão atualizados. Se o Figma
   mudou, atualize `src/content/legal/privacidade/pt.ts` e `src/content/legal/termos/pt.ts`.

Para esconder de novo, volte a variável para vazio (ou `false`) e faça outro deploy.

## Como marcar novos trechos que dependem do José

No conteúdo dos capítulos e projetos (`src/content/**/pt.ts`), qualquer bloco ou item de lista aceita:

- `recurso: 'jose'`: **só aparece** com o José publicado;
- `semRecurso: 'jose'`: só aparece **enquanto o José está oculto** (texto alternativo).

```ts
{ recurso: 'jose', tipo: 'destaque', variante: 'dica', icone: 'sparkles', titulo: 'Parabéns!', texto: '… conheça o José …' },
{ semRecurso: 'jose', tipo: 'destaque', variante: 'dica', icone: 'sparkles', titulo: 'Parabéns!', texto: '… crie os seus projetos!' },
```

O filtro (`filtrarPorRecurso`, em `src/config/recursos.ts`) roda quando o conteúdo é carregado, em qualquer
profundidade. Fora do conteúdo, use `publicado('jose')` no componente.

Para outro recurso no futuro, acrescente o nome em `Recurso` e em `recursosPublicados`, no mesmo arquivo.
