# base image
FROM node:erbium-alpine

WORKDIR /app

COPY ./frontend /app

RUN yarn add global @vue/cli
RUN yarn
# RUN npm install -g @vue/cli@latest
# RUN npm install

EXPOSE 8080

CMD ["yarn", "serve"]
# CMD ["npm", "run", "serve"]
