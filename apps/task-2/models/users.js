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
    if(!user) throw new Error('wrong email')

    const match = user.password === password
    if(!match) throw new Error('wrong password')

    return user
}



const User = mongoose.model('User', userSchema)

module.exports = User 