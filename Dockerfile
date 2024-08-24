FROM --platform=linux/amd64 node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Sử dụng Nginx để phục vụ ứng dụng đã build

# FROM --platform=linux/amd64 nginx:alpine
# # FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]

EXPOSE 3000
CMD ["npm", "run", "start"]