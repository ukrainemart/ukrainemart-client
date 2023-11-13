# Dockerfile-nuxt

# Используем официальный образ Node.js
FROM node:lts-alpine

WORKDIR /app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости
RUN npm install

# Глобально устанавливаем nodemon
RUN npm install -g nodemon

# Команда для запуска Nuxt.js с nodemon
CMD ["nodemon", "--exec", "npm", "run", "dev"]

EXPOSE 3000
