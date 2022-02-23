const { Router } = require('express');
const {Videogame, Genre} = require('../db');
const { getVideoGamesDetails } = require('../Services/Videogame');

const router = Router();


router.post('/', async(req,res, next) => {
    const { name, description, released, genre, rating, image, platform } = await req.body;
    if(!name || !description || !platform){
        res.json({error: 500, message: 'Se deben llenar todos los campos necesarios'});
    }
    try{
        const createVideogame = await Videogame.create({name, released, rating, description, image, platform});
        const genreDb = await Genre.findAll({
            where: {name: genre}
        })
        createVideogame.addGenre(genreDb);
        res.json(createVideogame);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async(req,res) => {
    const { id } = req.params
    const regex = /(\w+\-){4}\w+/g;
    let videogame;
    try {
        if(regex.test(id)){
            videogame = await Videogame.findByPk(id, {
                include:{
                    model: Genre,
                        attributes: ['name'],
                        through: { 
                            attributes: [] 
                        }
                    } 
            })
                res.json(videogame);
        } else {
            const videogame = await getVideoGamesDetails(id);
            videogame? res.json(videogame): res.json({error: 504, message: 'There is no game with that ID'});
            
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;