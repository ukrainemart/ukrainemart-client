# Dockerfile-nuxt

# Используем официальный образ Node.js
FROM node:lts-alpine

WORKDIR /app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости
RUN npm install

# Собираем проект
RUN npm run build

# Команда для запуска Nuxt.js
CMD ["npm", "start"]

EXPOSE 3000