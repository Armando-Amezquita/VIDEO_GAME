// const { API_URL_PLATSFORMS } = require('../../Constantes');
// const axios = require('axios');
const {getAllInformation} = require('../Services/Videogames')

const getPlatform = async() => {
    const dataApi = await getAllInformation();
    const platforms = dataApi.map(plat => plat.platforms);
    const total = platforms.flat();
    let set = new Set(total);
    const ConvertirArray = [...set];
    return ConvertirArray;

}

// const getPlatforms = async() => {
//     const dataApi = await axios(API_URL_PLATSFORMS);
//     const dataPlatformsApi = await dataApi.data.results.map(platform => platform.name)
//     return dataPlatformsApi;
// }

module.exports ={
    getPlatform
}