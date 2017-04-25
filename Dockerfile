FROM node:6.10

COPY *.* /app/
COPY views/ /app/
COPY public /app/

WORKDIR /app/

RUN apt-get update \
    && apt-get install -y pandoc \
    && npm install

EXPOSE 8080

CMD ["npm", "start"]
