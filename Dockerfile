FROM node:18-alpine as development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --non-interactive && yarn cache clean

COPY ./tsconfig*.json ./

COPY . .

RUN yarn run build

################
## PRODUCTION ##
################

FROM node:18-alpine

WORKDIR /app

COPY --from=building /app/dist ./dist
COPY --from=building /app/node_modules ./node_modules
COPY ./package.json ./

USER node

HEALTHCHECK --interval=60s --timeout=10s --retries=3 \
  CMD sh -c "wget -nv -t1 --spider http://localhost:$PORT/health" || exit 1

CMD ["yarn", "start:prod"]