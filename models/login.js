const mongoose = require('mongoose')
const { Schema } = mongoose //destructuring
// import { isEmail } from 'validator';

const loginSchema = new Schema(
    { 
        email: { 
            type: String,
            required: [true, 'Email required'],
            unique: [true, 'Email should be unique'],
            // validate: [ validateEmail, 'Invalid email' ]
            // validate: {
            //     validator: v => {
            //         return /[A-Za-z0-9.-]@[A-Za-z0-9.-]+\.[a-z]/.test(v)
            //     }
            // }
        },
        password: {
            type: String,
            required: [true, 'Password required'],
            max: 255
            
        }
    }
);

// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };


//Generate the model from the schema and export for use elsewhere
module.exports = mongoose.model('Login', loginSchema)

