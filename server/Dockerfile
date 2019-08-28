FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD NODE_ENV=production node_modules/.bin/sequelize db:seed:all && npm run start