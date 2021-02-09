FROM node:12.18.3

WORKDIR /src


COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]