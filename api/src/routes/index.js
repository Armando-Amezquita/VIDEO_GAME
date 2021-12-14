const { Router } = require('express');
const routerVideogames = require('./Videogames');
const routerGenre = require('./Genre');
const routePostVideogame = require('./Videogame');

const router = Router();

router.use('/videogames', routerVideogames);
router.use('/genres', routerGenre);
router.use('/videogame', routePostVideogame);



module.exports = router;
