FROM node:10.23-alpine
WORKDIR /usr/src/fec
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]