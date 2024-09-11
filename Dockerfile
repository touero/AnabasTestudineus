FROM node:20.12.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN if [ -d dist ]; then rm -rf dist; fi && npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
