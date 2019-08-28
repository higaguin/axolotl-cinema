FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD node_modules/.bin/sequelize db:migrate:undo:all && node_modules/.bin/sequelize db:migrate && node_modules/.bin/sequelize db:seed:all && npm run start