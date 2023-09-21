const express = require("express");

const { PORT } = require('./config/serverConfig');

const setUpAndStartServer = async () => {
    
    //create the xpress object
    const app = express();

    const PORT = 3000;

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)

    });

}

setUpAndStartServer();