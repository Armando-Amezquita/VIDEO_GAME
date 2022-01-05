const { Router } = require('express');
const { Platform } = require('../db');
const { getPlatforms } = require('../Services/Platforms')

const router = Router();

router.get('/', async(req,res) => {
    const dataApi = await getPlatforms();
    dataApi.forEach(element => {
        Platform.findOrCreate({
            where: {name: element}
        })
    });
    const allPlatforms = await Platform.findAll()
    res.json(allPlatforms)
})

module.exports = router;