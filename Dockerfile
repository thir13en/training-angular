FROM node:12-alpine
WORKDIR /frontend
COPY . .
RUN npm ci && npm run build:prod

FROM httpd:2-alpine
RUN rm -r /usr/local/apache2/htdocs/*
COPY --from=0 /frontend/dist/uwb-fira/ /usr/local/apache2/htdocs/
