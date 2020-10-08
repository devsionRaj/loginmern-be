const User = require('../model/User');

const createUser = async (user) => {
    try {
        const userCreate = await User.create(user);
        return { value: userCreate }
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    createUser
}