const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI 
        ? process.env.MONGODB_URI
        : 'mongodb://127.0.0.1/database';

mongoose.connect(URI, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB in connected');
});