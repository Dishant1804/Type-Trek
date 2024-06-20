FROM node:20

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5173


CMD ["npm", "run", "dev"]