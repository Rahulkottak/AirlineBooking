const express = require("express");
const bodyParser = require("body-parser");
const { City } = require('./models/index');
const { PORT } = require('./config/serverConfig');
const CityRepo = require('./repository/city-repo');

require('dotenv').config();

const setUpAndStartServer = async () => {
    
    //create the xpress object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // const PORT = process.env.PORT ;

    app.listen(PORT, async ()=>{
        console.log(`Server is running on port ${PORT}`)
        await City.create({
            name: "New Delhi",
        })

        const repo = new CityRepo();
        repo.create({city: "New Zealand"})
        
    });

}

setUpAndStartServer();