// get the client
const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'kitty_aleks1807'
}).promise();

const testDB = async () => {
    try {
        await db.query(`INSERT INTO users (name, age, city) VALUES ('Anton', 32, 'Kiev')`);
        await db.query(`DELETE FROM users WHERE name='Anton'`);

        let [res] = await db.query('SELECT * FROM users');

        console.log(res);
        let users = {};
        res.forEach(row => {
            users[row.id] = {name: row.name, age: row.age, city: row.city};
        });
        console.log('QQQ users', res);

    } catch (e) {
        console.log('ERROR', e);
    }
};

testDB();
