FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD NODE_ENV=production node_modules/.bin/sequelize db:migrate:undo:all && node_modules/.bin/sequelize db:migrate && node_modules/.bin/sequelize db:seed:all && npm run start