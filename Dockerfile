FROM node

WORKDIR /opt/app

ADD docs docs
ADD app.js .
ADD package*.json .
ADD nggu2.gif .

RUN npm i

RUN ls -la

CMD [ "npm", "start" ]
