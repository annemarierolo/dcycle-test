import axios from 'axios'

const CovidHistoricalService = { 

    async getCovidHistorical() {
        return new Promise(async (resolve, reject) => {
            const url = `http://localhost:3200/api/covid/historical`
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

}

export default CovidHistoricalService;