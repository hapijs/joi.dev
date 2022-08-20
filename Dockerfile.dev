FROM node:14.20.0-alpine3.15 as dev

WORKDIR /app

ADD ./ .

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]
