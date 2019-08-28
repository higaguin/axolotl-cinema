FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD node_modules/.bin/sequelize db:migrate && npm run start