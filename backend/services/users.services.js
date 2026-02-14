const {User} = require('../models/models.index');

const createUser = async (user) => {
    return await User.create(user);
}

const getUserByEmail = async (email) => {
    return await User.findOne({email});
}

module.exports = {createUser, getUserByEmail};