FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY render-env.sh /usr/share/nginx/html/render-env.sh
RUN chmod +x /usr/share/nginx/html/render-env.sh
CMD ["sh", "-c", "/usr/share/nginx/html/render-env.sh && nginx -g 'daemon off;' "]