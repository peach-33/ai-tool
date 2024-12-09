# 从构建阶段复制必要的文件
FROM node:20 AS builder

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./
RUN npm install

# 复制所有源代码
COPY . ./

# 构建应用
RUN npm run build

# 生产阶段
FROM node:20

WORKDIR /app

# 复制构建产物
COPY --from=builder /app/.next/standalone /app/.next/standalone
COPY --from=builder /app/public /app/public
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# 使用 node 启动 standalone 模式
CMD ["node", ".next/standalone/server.js"]
