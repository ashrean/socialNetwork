const connection = require('../config/connection')
const { Thought, User } = require('../models')
const {faker} = require('@faker-js/faker')

connection.on('error', (err) => console.log(err))

connection.once('open', async () => {
    console.log('connected to db');

    await User.deleteMany({});

    const users = [];

    for (i = 0; i < 10; i++) {
        users.push({
            username: faker.internet,userName(),
            email: faker.internet.email(),
        });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.info('seeded ${users.length} users')
    process.exit(0);
});
