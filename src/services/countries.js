import axios from 'axios'

const CountriesService = { 

    async getCountryInfo(countryCode) {
        return new Promise(async (resolve, reject) => {
            const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
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

    async getCountry(countryCode, probability) {
       const country = await this.getCountryInfo(countryCode);    
       return {info: country[0], probability}
    }


}

export default CountriesService;