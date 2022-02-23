const { Router } = require('express');
const { Genre } = require('../db');
const { getGenres } = require('../Services/Genre')

const router = Router();

router.get('/', async(req,res) => {
    const dataGenresApi = await getGenres();
    dataGenresApi.forEach(element => {
        Genre.findOrCreate({
            where: {name: element}
        })
    });
    const allGenres = await Genre.findAll()
    res.json(allGenres)
})

module.exports = router;