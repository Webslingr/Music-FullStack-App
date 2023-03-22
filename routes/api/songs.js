var express = require('express')
var router = express.Router()
var validateToken = require("../../middleware/validateToken")

//import the Song model
const Song = require('../../models/song')

//define endpoints for songs resource


//GET ALL SONGS
router.get('/', (req, res) => {
    // res.send('GET ALL SONGS ENDPOINT WAS REACHED')
    // console.log('GET ALL SONGS ENDPOINT WAS REACHED')

    Song.find((err, songs) => {

        //Handle if err occured
        if(err) {
            console.log(err)
            res.status(500).send('An error occured')
        }

        console.log(songs)
        res.json(songs)
    })
})

//GET ONE SONG BY ID
router.get('/:id', (req, res) => {
    // res.send(`GET ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`)

    Song.findById(req.params.id, (err, song) => {
        if(err) {
            return res.status(400).send(`Error: ${ err.message }`)
        }

        if(!song) {
            return res.status(404).send()
        }

        res.send(song)
    })
})

//CREATE SONG
router.post('/', (req, res) => {
    // res.send('CREATE SONG ENDPOINT WAS REACHED')

    Song.create(req.body, (err, savedSong) => {
        console.log(savedSong)
        res.status(201).send()
    })

})

//UPDATE SONG BY ID
router.put('/:id', validateToken, (req, res) => {
    // res.send(`UPDATE SONG ENDPOINT WAS REACHED and the ID is ${req.params.id}`)

    Song.updateOne(req.body, (err, savedSong) => {
        console.log(savedSong)
        res.status(202).send()
    })
})

//DELETE SONG BY ID
router.delete('/:id', validateToken, (req, res) => {
    // res.send(`DELETE SONG ENDPOINT WAS REACHED and the ID is ${req.params.id}`)

    Song.deleteOne(req.body, (err, savedSong) => {
        console.log(savedSong)
        res.status(204).send()
    })
})

module.exports = router