FROM node:boron-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV SERVER_PORT 8080
EXPOSE 5000
CMD npm start
