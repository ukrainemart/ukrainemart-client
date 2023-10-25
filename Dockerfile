# Используйте официальный образ Node.js
FROM node:18

# Рабочая директория
WORKDIR /app

# Копирование кода Nuxt.js в контейнер
COPY . .

# Установите зависимости Nuxt.js
RUN npm install

# Соберите Nuxt.js приложение
RUN npm run build

# Внешний порт, на котором будет работать Nuxt.js (по умолчанию 3000)
EXPOSE 3000