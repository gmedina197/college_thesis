FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
