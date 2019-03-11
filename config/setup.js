const path = require('path');
const fs = require('fs');
const { MongoMemoryServer } = require('mongodb-memory-server');

const globalConfigPath = path.join(__dirname, 'globalConfig.json');
const mongod = new MongoMemoryServer({
    autoStart: false
});

module.exports = async () => {
    console.log('a'.repeat(1500));

    if (!mongod.isRunning) {
        await mongod.start();
    }

    const mongoConfig = {
        mongoDBName: 'jest',
        mongoUri: await mongod.getConnectionString()
    };

    // Write global config to disk because all tests run in different contexts.
    fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

    // Set reference to mongod in order to close the server during teardown.
    global.__MONGOD__ = mongod;
};
