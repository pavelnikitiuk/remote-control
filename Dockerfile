FROM resin/raspberry-pi-node:8.0

RUN mkdir -p /usr/src/remote-control
WORKDIR /usr/src/remote-control
COPY package.json /usr/src/remote-control
COPY . /usr/src/remote-control
RUN npm cache clean --force
RUN npm install
RUN npm run init
RUN npm run bootstrap
RUN npm install
EXPOSE 80
RUN cp /usr/share/zoneinfo/Europe/Minsk /etc/localtime

CMD ["sudo", "npm", "run", "start"]