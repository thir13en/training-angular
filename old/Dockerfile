FROM node:16-alpine
WORKDIR /frontend
COPY . .
RUN npm ci && npm run build:prod

FROM httpd:2-alpine
RUN rm -r /usr/local/apache2/htdocs/*
COPY --from=0 /frontend/dist /usr/local/apache2/htdocs/
