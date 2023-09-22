const { City } = require('../models/index')

class CityRepo {
    async createCity({ name }){
        try {
            const city = await City.creat({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in creating city")
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in deleting city")
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update( data ,{ where: {id: cityId} });
            return city;
        } catch (error) {
            console.log("Something went wrong in updating city");
        }

    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;

        } catch (error) {
            console.log("Soemthing went wrong in getting city")

        }
    }



}

module.exports = new CityRepo();