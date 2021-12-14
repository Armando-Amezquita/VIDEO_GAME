const { Router } = require('express');
const { getAllInformation } = require('../Services/Videogames');

const router = Router()

router.get('/', async(req,res) => {
    const {name} = req.query;
    const data = await getAllInformation();
    if(name){
        const filterByName = data.filter(game => game.name.toUpperCase().includes(name.toUpperCase()))
        let filterFirstFifteen = [];
        for (let i = 0; i < 15; i++) {
            filterFirstFifteen.push(filterByName[i]);
        }
        filterFirstFifteen = filterFirstFifteen.filter(ele => ele);
        filterFirstFifteen.length? res.json(filterFirstFifteen) : res.json({message: 'No hay un juego con ese nombre', error: 504 });
    }
    else {
        res.json(data);
    }
})

module.exports = router;