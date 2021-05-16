const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const sharks = require('./routes/sharks');
const Sentry = require("@sentry/node");

// start of sentry


const Tracing = require("@sentry/tracing");
// or use es6 import statements
// import * as Tracing from '@sentry/tracing';

Sentry.init({
  dsn: "https://4001b8738e0c48b191087ecd53d82467@o673941.ingest.sentry.io/5768416",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

setTimeout(() => {
  try {
    foo();
    // app.js code
    const path = __dirname + '/views/';
    const port = process.env.PORT || 3000;

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path));
    app.use('/sharks', sharks);

    app.listen(port, function () {
      console.log(`Example app listening on port ${port}!`)
    
    })

    // end of app.js 
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);

// end of sentry 




