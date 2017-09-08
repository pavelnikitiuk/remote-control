FROM resin/raspberry-pi-node:8.0

RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY package.json /usr/src/backend
RUN npm cache clean --force
RUN npm install
COPY . /usr/src/backend
EXPOSE 80
RUN cp /usr/share/zoneinfo/Europe/Minsk /etc/localtime

CMD ["sudo", "npm", "run", "dev"]