FROM node:14

WORKDIR /bezkoder-api
COPY . .
RUN mv builder /usr/local/bin
RUN mkdir artifact
RUN builder -d -v

WORKDIR /bezkoder-api/artifact
RUN unzip *
CMD npm start
