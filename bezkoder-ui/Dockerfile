# Stage 1
FROM node:14 as build-stage

WORKDIR /bezkoder-ui
COPY . .
RUN mv builder /usr/local/bin
RUN mkdir artifact
RUN builder -d -v

WORKDIR /bezkoder-ui/artifact
RUN unzip *

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /bezkoder-ui/artifact/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'
