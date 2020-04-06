const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        validate: function(value){
           
            if(!validator.isEmail(value)){
                throw "this is not valid email"
            }

        },
        unique:true

    },
    password: {
        type:String,
        required:true
    }
},{
    timestamps: true
})

userSchema.statics.findByCredentilas = async (email, password) =>{
    const user = await User.findOne({email})
    if(!user) throw {msg: 'Email isn\'t found'} 

    const match = user.password === password
    if(!match) throw {msg: 'password is not right'} 

    return user
}



const User = mongoose.model('User', userSchema)

module.exports = User 