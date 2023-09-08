FROM node:20.5.1-alpine

WORKDIR /app

COPY .. .

RUN apk update && apk upgrade
RUN apk add git curl bash
ENV HOME /home/root

COPY ./package*.json /app/

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
ENV NVM_DIR="${HOME}/.nvm"
RUN chmod +x "$NVM_DIR/nvm.sh"
RUN source "$NVM_DIR/nvm.sh" && nvm use 20.5.1

RUN npm install
RUN npx nuxi build --no-cache

CMD [ "node", ".output/server/index.mjs" ]
