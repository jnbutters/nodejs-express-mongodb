FROM node:16.14.0

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_ENV production

ADD package.json /home/node/app/package.json
ADD server.js /home/node/app/server.js
ADD ./backend /home/node/app/backend


ENV MONGODB_URI = "mongodb://mongodb:27017/tutorials"
ENV FRONTEND_URI = "http://frontend.macbook.local"


RUN chown -R node:node /home/node/app 

USER node
WORKDIR /home/node/app
RUN npm install --save

EXPOSE 8080

CMD node server.js
#CMD exec /bin/bash -c "trap : TERM INT; sleep infinity & wait"
