# Sử dụng image node phiên bản 22.3.0
FROM --platform=linux/amd64 node:22.3.0

# Đặt thư mục làm thư mục làm việc mặc định
WORKDIR /app

# Sao chép package.json và package-lock.json nếu có để cài đặt các dependency
COPY package*.json ./

# Cài đặt các dependency
RUN npm install

# Sao chép mã nguồn ứng dụng vào container
COPY . .

RUN npm run build

# Cổng mà ứng dụng sẽ lắng nghe
EXPOSE 3000

# Lệnh chạy ứng dụng khi container được khởi động
CMD ["npm", "run", "start"]

