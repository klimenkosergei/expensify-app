# Expensify App

### 📌Live версия доступна на [sergeyklimenko.com/projects/expensify](https://sergeyklimenko.com/projects/expensify)

#### Учебный проект. Приложение для ведения списка расходов. Доступна регистрация с помощью аккаунта Google, создание расходов, редактирование, фильтрация.

#### В проекте использовались: React, Redux, React-Router, Sass, [Firebase](https://firebase.google.com/), Jest, Enzyme

Для back-end'a в проекте используется сервис [Firebase](https://firebase.google.com/) от Google. Интеграция Firebase позволила добавить в приложение авторизацию, и базу данных для хранения пользователей и их расходов. Также используется React-Router для переходов между страницами авторизации, списка расходов, и страницами создания и редактирования расходов.

Для приложения также написаны unit тесты используя фреймворк Jest и Enzyme для snapshots.

Для запуска проекта с помощью Webpack Dev Server:

```javascript
npm run dev-server
```

Для запуска тестов:

```javascript
npm run test
```

!!! Для запуска тестов на Windows:

```javascript
npm run test:windows
```

Для компиляции проекта:

```javascript
npm run build
```

Для back-end'а используется сервис Firebase. При компиляции Webpack конвертирует env переменные в js. Лист переменных:

```javascript
FIREBASE_API_KEY;
FIREBASE_AUTH_DOMAIN;
FIREBASE_DATABASE_URL;
FIREBASE_PROJECT_ID;
FIREBASE_STORAGE_BUCKET;
FIREBASE_MESSAGING_SENDER_ID;
FIREBASE_APP_ID;
```

Для демо версии и разработки переменные содержатся в файле `.env.development`.

Для тестов переменные находятся в файле `.env.test`, и ведут к отдельной базе данных изолированной для тестов.
