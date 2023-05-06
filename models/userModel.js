const mongoose = require('mongoose')
const validator = require('validator')

const bcryptjs = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(pass) {
            const myRe = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])")
            if (!myRe.test(pass)) {
                throw new Error('password must contain uppercase , lowercase , numbers, special character')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(email) {
            if (!validator.isEmail(email)) {
                throw new Error('email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 15,
        validate(age) {
            if (age <= 0) {
                throw new Error('age must be positive')
            }
        }
    }
})


UserSchema.pre('save', async function () {
    const user = this
    user.password = await bcryptjs.hash(user.password, 8)

})


UserSchema.statics.findByCredentials = async (emailOfBody, passwordOfBody) => {
    const user = await User.findOne({ email: emailOfBody })

    if (!user) {
        throw new Error('Unable to login')
    }

    const PasswordMatch = await bcryptjs.compare(passwordOfBody, user.password)
    if (!PasswordMatch) {
        throw new Error('Unable to login')
    }

    return user
}


const User = mongoose.model('User', UserSchema)

module.exports = User