const mongoose = require('mongoose')
const { Schema } = mongoose //destructuring


const songSchema = new Schema(
    { 
        // id: {
        //     type: Number,
        //     required: true
        // },
        title: {
            type: String,
            max: [40, 'Too many characters!'],
            required: true
        },
        image: {
            type: String
        },
        album: { 
            type: String
        },
        artist: {
            type: String,
            
        },
        genre: [{
            type: String,
            // required: true
        }]
    }
    // ,
    // { }
);

//Generate the model from the schema and export for use elsewhere
module.exports = mongoose.model('Song', songSchema)

