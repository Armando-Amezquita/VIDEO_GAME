const { Router } = require('express');
const routerVideogames = require('./Videogames');
const routerGenre = require('./Genre');
const routePostVideogame = require('./Videogame');
const routerPlatforms = require('./Platforms');

const router = Router();

router.use('/videogames', routerVideogames);
router.use('/genres', routerGenre);
router.use('/videogame', routePostVideogame);
router.use('/platforms', routerPlatforms);



module.exports = router;
