FROM node:14-slim
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 30000
CMD ["node", "server.js"]
