# Expensify App

#### Client built using React

#### Firebase used for backend to store users and their expenses

[Live Demo](https://expensify-sk.netlify.com)

To start development server use:

```javascript
npm run dev-server
```

To run test suite use:

```javascript
npm run test
```

As Firebase used for backend, project relies on list of environment variables:

```javascript
FIREBASE_API_KEY;
FIREBASE_AUTH_DOMAIN;
FIREBASE_DATABASE_URL;
FIREBASE_PROJECT_ID;
FIREBASE_STORAGE_BUCKET;
FIREBASE_MESSAGING_SENDER_ID;
FIREBASE_APP_ID;
```

When run in development, project will look for these variables in `.env.development` file.
When test suit is ran, project will look for these variables in `.env.test` file to have seperate from live database for testing.
