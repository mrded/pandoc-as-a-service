FROM node:6.10

LABEL maintainer "dmitry@demenchuk.me"
LABEL version="1.0"
LABEL description="If you need to convert text from one markup format into another, pandoc is your swiss-army knife."

# Create app directory
RUN mkdir -p /usr/src/pandoc-as-a-service
COPY . /usr/src/pandoc-as-a-service
WORKDIR /usr/src/pandoc-as-a-service

# Install packages
RUN apt-get update --fix-missing
RUN apt-get install -y pandoc

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install service
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
