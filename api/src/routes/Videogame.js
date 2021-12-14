const { Router } = require('express');
const {Videogame, Genre} = require('../db')

const router = Router();

router.post('/', async(req,res, next) => {
    const { name, description, released, genre, rating,image, platform } = req.body;
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

module.exports = router;

