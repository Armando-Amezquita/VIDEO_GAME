const {getAllInformation} = require('../Services/Videogames')

const getPlatform = async() => {
    const dataApi = await getAllInformation();
    const platforms = dataApi.map(plat => plat.platforms);
    const total = platforms.flat();
    let set = new Set(total);
    const ConvertirArray = [...set];
    return ConvertirArray;

}

module.exports ={
    getPlatform
}