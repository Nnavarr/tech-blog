const { User } = require('../models');

const userdata = [
    {
        username: 'nnavarr',
        email: 'noe@email.com',
        password: 'password1234'
    },

    {
        username: 'user2',
        email: 'user@email.com',
        password: 'password222'
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;