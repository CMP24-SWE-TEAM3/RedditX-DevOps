const DEFAULT_EXPIRATION = 60*10;
const Redis = require('redis');
const redisCredentials = {
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
}
const redisClient = Redis.createClient(redisCredentials);
// if you installed redis locally, then no need to the redisCredentials

function getOrSetCache(key, cb) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, async (error, data) => {
            if(error) return reject(error);
            if(data != null) return resolve(JSON.parse(data));
            const freshData = await cb();
            redisClient.setEx(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
            resolve(freshData);
        });
    });
}

//  EXAMPLE
const cached_data = await getOrSetCache(`some_key`, async () => {
    //  the original resource of the data (The DataBase)
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return data;
});