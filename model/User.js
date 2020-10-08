const mongoose = require('mongoose');
const { v1: uuidv1 } = require('uuid');
const crypto = require('crypto');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastName: {
        type: String,
        maxlength: 32,
        trim: true
    },
    encryPassword: {
        type: String,
        required: true
    },
    salt: String,
    username: {
        type: String,
        maxlength: 32,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

userSchema.virtual('password').set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encryPassword = this.securePassword(password)
}).get(function () {
    return this._password
})


userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encryPassword
    },
    securePassword: function (plainpassword) {
        if (!plainpassword) return '';
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(plainpassword)
                .digest('hex');
        } catch (error) {
            return ''
        }
    }
}

module.exports = mongoose.model('User', userSchema)