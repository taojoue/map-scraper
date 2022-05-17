FROM ubuntu:latest

RUN apt-get update -yqq && \
    apt-get install -yqq curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | sh \
    && apt-get update -yqq \
    apt-get install -y nodejs \
    # nodejs -yqq \
    npm -yqq

COPY ./ ./

RUN npm install

RUN chmod +x ./scraper.js

RUN mkdir ./images && mkdir ./output

CMD ["node", "scrapper.js"]