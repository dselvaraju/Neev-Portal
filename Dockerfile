FROM scratch
FROM node:21.6.1

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY ./src ./src
COPY ./public ./public
COPY next.config.js next.config.js
COPY next-env.d.ts next-env.d.ts
COPY .env.local .env.local
COPY tsconfig.json tsconfig.json

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

RUN npm run build

CMD ["npm", "run", "start"]
