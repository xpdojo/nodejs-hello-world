FROM node:12.18.3-alpine3.9
COPY . .
RUN ["npm", "install"]
ENTRYPOINT ["npm", "start"]
