import axios from 'axios'
import CountriesService from "./countries";

const ProbabilityService = { 

    async getCharacteristic(characteristic, name) {
        return new Promise(async (resolve, reject) => {
            const url = `http://localhost:3200/api/${characteristic}/${name}`
            await axios.get(url)
            .then((res) => {
                resolve(res.data)
            })
            .catch((error) => {
                console.log("Error", error);
                reject(error)
            });
        })
        
    },

    async getNationalize(name) {
        const countries = await this.getCharacteristic("nationalize", name);
        const countriesPromiseArr = await countries.country.map(country => 
            CountriesService.getCountry(country.country_id, country.probability)
        ); 
        const res = await Promise.all(countriesPromiseArr)
        console.log(res);
        return res;
        
        
    },

    async getGenderize(name) {
        return this.getCharacteristic("genderize", name);
    },

    async getAgify(name) {
        return this.getCharacteristic("agify", name);
    }
}

export default ProbabilityService;