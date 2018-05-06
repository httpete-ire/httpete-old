FROM node:10

COPY package.json ./package.json

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["yarn", "start"]