const mongoose = require('mongoose');

const MONGO_USERNAME = 'lokka';
const MONGO_PASSWORD = 'nUYpQ9M26J3v';
const MONGO_HOSTNAME = 'node-circleci.3qzzb.mongodb.net';
const MONGO_PORT = '5432';
const MONGO_DB = 'sharkinfo';

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, {useNewUrlParser: true});