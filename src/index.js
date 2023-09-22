const express = require("express");

const { PORT } = require('./config/serverConfig');

require('dotenv').config();

const setUpAndStartServer = async () => {
    
    //create the xpress object
    const app = express();

    const PORT = process.env.PORT ;

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)

    });

}

setUpAndStartServer();