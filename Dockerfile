FROM node:8.2

RUN mkdir -p /tmp
WORKDIR /tmp
COPY ./package.json ./elm-package.json /tmp/
RUN npm install && ./node_modules/.bin/elm-package install -y


RUN mkdir -p /usr/src/app
COPY . /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app/ \
  && cp -a /tmp/elm-stuff /usr/src/app/ \
  && chown -R node:node /usr/src/app/

USER node
WORKDIR /usr/src/app
CMD ["npm", "start"]