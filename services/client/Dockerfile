FROM mhart/alpine-node:14 AS builder

WORKDIR /app

ARG VITE_REACT_APP_CLERK_FRONTEND_API

COPY . .

RUN yarn install

RUN yarn run build

FROM nginx:1.16.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
