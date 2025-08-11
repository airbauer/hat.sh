# syntax=docker/dockerfile:1
FROM node:20-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.27-alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80