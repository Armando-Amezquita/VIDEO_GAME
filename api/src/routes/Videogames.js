const { Router } = require('express');
const router = Router();
const { getAllInformation, getSearchInformationApi } = require('../Services/Videogames');
const {Videogame, Genre} = require('../db')

router.get('/', async(req,res) => {
    const {name} = req.query;
    if(name){
        try {
            const dataDb = await Videogame.findAll({
                where: {
                    name: name.charAt(0).toUpperCase() + name.slice(1)
                },
                include:{
                    model: Genre,
                    attributes: ['name'],
                    through: { 
                        attributes: [] 
                    }
                }
            });
            const dataApi = await getSearchInformationApi(name);
            const allVideogames = dataDb.concat(dataApi);
            res.json(allVideogames);
        } catch (error) {
            console.log(error)
        }
    }else{
        try {
            const data = await getAllInformation();
            res.json(data);
        } catch (error) {
            console.log(error)
        }
    }
});

module.exports = router;