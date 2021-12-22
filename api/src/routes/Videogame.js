const { Router } = require('express');
const {Videogame, Genre} = require('../db');
const { getAllInformation } = require('../Services/Videogames');

const router = Router();

router.post('/', async(req,res, next) => {
    const { name, description, released, genre, rating,image, platform } = await req.body;
    if(!name || !description || !platform){
        res.json({error: 500, message: 'Se deben llenar todos lo campos necesarios'});
    }
    try{
        const createVideogame = await Videogame.create({name, released, rating, description, platform, image})
        const genreDb = await Genre.findAll({
            where: {name: genre}
        })
        createVideogame.addGenre(genreDb)
        return res.json(createVideogame)
    } catch (error) {
        next(error)
    }
});

router.get('/:id', async(req, res) =>{
    const { id } = req.params;
    const regex = /(\w+\-){4}\w+/g;
    let videogame;
    if(regex.test(id)){
    videogame = await Videogame.findByPk(id,{
        include:{
            model: Genre
            }
        })
        res.json(videogame)  
    }
    else{
        videogame = await getAllInformation();
        let filterByID = videogame.filter(game => game.id === parseInt(id));
        filterByID.length ? res.json(filterByID) : res.json({error: 504, message: 'There is no game with that ID'}); 
    }
})

module.exports = router;

