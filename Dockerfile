FROM node:6.10

# Create app directory
COPY . /usr/src/pandoc-as-a-service
WORKDIR /usr/src/pandoc-as-a-service

# Install packages
RUN apt-get update --fix-missing \
  && apt-get install -y pandoc \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && npm install

EXPOSE 8080

CMD ["npm", "start"]

LABEL maintainer "dmitry@demenchuk.me"
LABEL version="1.0"
LABEL description="If you need to convert text from one markup format into another, pandoc is your swiss-army knife."
