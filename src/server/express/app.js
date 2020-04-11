const express = require('express');
const dotenv = require('dotenv');

const userRouter = require('./router/internal/users');
const githubRouter = require('./router/external/github');


const app = express();

dotenv.config({ path: './config/settings.env' });

const port = process.env.PORT;

module.exports = {
    HttpServer : function() {

        app.use(express.json());

        app.use('/api/v1/users', userRouter);
        
        app.use('/api/external/github', githubRouter)

        app.listen(port, console.log(`HTTP Server started on port ${port}`));
    }
};