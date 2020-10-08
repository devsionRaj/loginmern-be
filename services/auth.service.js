const UserDao = require('../dao/user');
const expressJwt = require('express-jwt')

const registerUser = async (user) => {
    try {
        const { value, error } = await UserDao.createUser(user);
        if (error) {
            return { error: error }
        }
        return { value: value }
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    registerUser
}