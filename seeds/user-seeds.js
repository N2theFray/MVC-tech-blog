const { User } = require('../models');

const userdata = [
  {
    username: 'bobthebuilder',
    email: 'email@email.com',
    password: 'password123'
  }
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;