// const {Videogame, Genre, Platform} = require('../db');
const { API_DETAILS } = require('../../Constantes');
const { API_KEY } = require('../db');
const axios = require('axios');

const getVideoGamesDetails = async(id) => {
    let videogame = await axios(`${API_DETAILS}${id}${API_KEY}`);
    videogame = videogame.data;
        const game = {
            id: videogame.id,
            name: videogame.name,
            description: videogame.description,
            released: videogame.released,
            rating: videogame.rating,
            image: videogame.background_image,
            platforms: videogame.platforms.map(ele => ele.platform.name),
            genres: videogame.genres.map(ele => ele.name)
        }
        return(game)
}

// router.get('/:id', async(req,res) => {
//     const {id} = req.params;
//     const regex = /(\w+\-){4}\w+/g;
//     let videogame;
//     if(regex.test(id)){
//     videogame = await Videogame.findByPk(id,{
//         include:{
//             model: Genre
//             }
//         })
//         res.json(videogame)  
//     }
//     else{
//         const game = await getVideoGamesDetails(id);
//         res.json(game)
//     }
// });

// const postVideogame = async({name, description, released, genre, rating,image, platform}) => {
//     if(!name || !description || !platform){
//         res.json({error: 500, message: 'Se deben llenar todos los campos necesarios'});
//     }
//     try{
//         const createVideogame = await Videogame.create({name, released, rating, description, platform, image})
//         const genreDb = await Genre.findAll({
//             where: {name: genre}
//         })
//         createVideogame.addGenre(genreDb)
//         return createVideogame
//     } catch (error) {
//         next(error)
//     }
// }
// const postVideogame = async({name, description, released, genre, rating, image, platform}) => {
//     if(!name || !description || !platform){
//         res.json({error: 500, message: 'Se deben llenar todos los campos necesarios'});
//     }
//     try{
//         const createVideogame = await Videogame.create({name, released, rating, description, image})
//         const genreDb = await Genre.findAll({
//             where: {name: genre}
//         })
//         const platformDb = await Platform.findAll({
//             where: {name: platform}
//         })
//         createVideogame.addGenre(genreDb);
//         createVideogame.addPlatform(platformDb)
//         return createVideogame;
//     } catch (error) {
//         next(error)
//     }
// }

module.exports = {
    getVideoGamesDetails, 
    // postVideogame
}


// router.post('/', async(req,res, next) => {
//         const { name, description, released, genre, rating,image, platform } = await req.body;
//         const game = await postVideogame({ name, description, released, genre, rating,image, platform })
//         res.json(game)
//     });



// const postVideogame = async({name, description, released, genre, rating,image, platform}) => {
//     if(!name || !description || !platform){
//         res.json({error: 500, message: 'Se deben llenar todos los campos necesarios'});
//     }
//     try{
//         const createVideogame = await Videogame.create({name, released, rating, description, platform, image})
//         const genreDb = await Genre.findAll({
//             where: {name: genre}
//         })
//         createVideogame.addGenre(genreDb)
//         // return res.json(createVideogame)
//         return createVideogame
//     } catch (error) {
//         next(error)
//     }
// }