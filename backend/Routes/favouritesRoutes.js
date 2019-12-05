const express = require('express')
const router = express.Router();
const Fav = require('../Schemas/Favourite')

router.get('/', async (req, res) => {
    try {
        var favs = await Fav.find();
        res.send(favs);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:userid', async (req, res) => {
    try {
        var favs = await Fav.find({userID: req.params.userID});
        console.log('favs backend:', favs)
        res.send(favs); 
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const fav = new Fav(req.body);
        fav.save();
    } catch (err) {
        console.log(err);
    }
});

router.delete('/', async (req, res) => {
    try {
        const result = await Fav.findOneAndDelete(req.body);
        fav.save(result);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;