FROM node
COPY ./ /srv/www
WORKDIR /srv/www
RUN npm install -d
CMD ["node", "app.js"]