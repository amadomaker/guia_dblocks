# syntax=docker/dockerfile:1

# ---- Build: gera o site estático em /app/dist ----
FROM node:22.14-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
# URL pública do bucket com os PDFs (materiais de apoio). Muda por ambiente.
ARG VITE_PDF_BASE_URL
ENV VITE_PDF_BASE_URL=${VITE_PDF_BASE_URL}
# URL do Apps Script que grava o "ajudou?" na planilha (integracoes/feedback-planilha). Vazia = não envia.
ARG VITE_FEEDBACK_URL
ENV VITE_FEEDBACK_URL=${VITE_FEEDBACK_URL}
# "true" mostra o José (IA). Vazio/qualquer outro valor = oculto. Veja docs/recursos-ocultos.md.
ARG VITE_JOSE_PUBLICADO
ENV VITE_JOSE_PUBLICADO=${VITE_JOSE_PUBLICADO}
RUN npm run build

# ---- Runtime: nginx servindo na 8080 (porta esperada pelo Cloud Run) ----
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
