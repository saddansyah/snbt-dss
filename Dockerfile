FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./
COPY vite.config.js ./
RUN chmod 755 vite.config.js
RUN bun install
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
