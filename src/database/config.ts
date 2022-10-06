import mongoose from 'mongoose';

import {
    mongoDatabaseName as dbName,
    mongoUrl
} from '../env';

console.log(dbName, mongoUrl);

const conn = mongoose.connection;

function connect() {
    mongoose.connect(mongoUrl, {
        dbName
    });

    conn.on('connected', () => {
        console.log('database is connected successfully 📦');
    });

    conn.on('disconnected', () => {
        console.log('database is disconnected successfully');
    });

    conn.on('error', console.error.bind(console, 'connection error:'));
}


export {
    connect,
};
