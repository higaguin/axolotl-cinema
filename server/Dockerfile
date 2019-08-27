FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
RUN node_modules/.bin/sequelize db:migrate
CMD ["npm", "run", "start"]