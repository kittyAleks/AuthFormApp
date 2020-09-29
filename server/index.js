let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const fs = require ("fs");
let bcrypt = require('bcrypt');
let mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mystore",
    password: "kitty_aleks1807"
}).promise();

db.connect(err => {
    if(err) {
        console.log('error')
        throw err
    }
    console.log('MySQL connected')
});



let messages = [];
let users = [];
let avatar = [];

app.use(bodyParser.json());

// /* CREATE users table */
// app.get('/createuserstable', (req, res) => {
//     let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
//     connection.query(sql, (err, result) => {
//         console.log('AAA result',result)
//         if(err) return  err;
//         res.send('Users table created...')
//     })
// });
//
// /* INSERT user */
// app.get('/adduser2', (req, res) => {
//     let user = {title: 'Sasha', body: 'Sasha is a cool girl'};
//     let sql = 'INSERT INTO users SET ?';
//     connection.query(sql, user, (err, result) => {
//         console.log('AAA result',result)
//         if(err) return  err;
//         res.send('User 2 added...')
//     })
// });
//
// /* SELECT user */
// app.get('/selectallusers', (req, res) => {
//     let sql = 'SELECT * FROM users';
//     connection.query(sql, (err, result) => {
//         console.log('AAA result',result)
//         if(err) return  err;
//         res.send('Users selected...')
//     })
// });
//
// /* DELETE user */
// app.get('/deleteuser/:id', (req, res) => {
//     let sql = `DELETE FROM users WHERE id = 5`;
//     console.log('BBB req.params.id',req.params.id);
//     connection.query(sql, (err, result) => {
//         console.log('AAA result',result)
//         if(err) return  err;
//         res.send('User deleted...')
//     })
// });

/* CREATE users_data table email and password */
app.get('/createuserstable', (req, res) => {
    let sql = 'CREATE TABLE users_data(id int AUTO_INCREMENT, email VARCHAR(30), password VARCHAR(30), password_confirmation VARCHAR(30), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        console.log('AAA result',result)
        if(err) return  err;
        res.send('Users table created...')
    })
});

/* INSERT user in mystore DB */
app.post('/register', async (req, res) => {
    try {
        const {email, password, password_confirmation} = req.body;
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(password, salt);
        let user = {email: email, password: hashedPassword};
        let sql = 'INSERT INTO users SET ?';
        let [result] = await db.query(sql, user);
        console.log('register user result',result);
        res.json({});

    } catch (e) {
        res.status(500).json({});
        console.log('Error message', e)
    }
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    let sql = 'SELECT * FROM users';
    let [result] = await db.query(sql);
    const [user] = result.filter(user => (user.email === email && user.password === password));
    console.log('AAA login user', user);

    if (user) {
        res.json({});
    } else {
        res.status('403').json({});
    }

    // try {
    //     if(await bcrypt.compare(password, user.password)) {
    //         res.send('Success')
    //     } else {
    //         res.send('Not Allowed')
    //     }
    // } catch (error) {
    //     console.log('QQQ error', error.message)
    // }

})


/* SELECT user */
app.get('/selectallusers', (req, res) => {
    let sql = 'SELECT * FROM users_data';
    db.query(sql, (err, result) => {
        console.log('AAA result',result)
        if(err) return  err;
        res.send('Users selected...')
    })
});


app.post('/send', (req, res) => {
    messages.push(req.body.message);
    res.json({status: 'OK'});
});

app.get('/get_all', (req, res) => {
    res.json(messages);
});

/* User ProfileScreen */

app.post('/send_user_avatar', async (req, res) => {
    const user_avatar = req.body;
    let sql = 'INSERT INTO user_profile SET ?';
    await db.query(sql, user_avatar);
    res.json({user_avatar, status: 200});

});
app.post('/send_input_user_info', async (req, res) => {
    console.log('AAA req.body', req.body);
    const {location, email, phone} = req.body;
    let user_info = {location: location, email: email, phone: phone}
    let sql = 'INSERT INTO user_info SET ?';
    let [result] = await db.query(sql, user_info);
    console.log('result',[result]);
    res.json({user_info, status: 200});
});

/* GET all products in MainScreen */
app.get('/getallproducts', (req, res) => {
    let sql = 'SELECT * FROM product_data';
    db.query(sql, (err, result) => {
        console.log('AAA result server allproducts',result);
        res.json({result, status: 'All products received'});
    })
});


/* Form Registration */

// app.post('/register', (req, res) => {
//     try {
//         const {email, password, password_confirmation} = req.body;
//
//         // const salt = bcrypt.genSaltSync();
//         // const hashedPassword = bcrypt.hashSync(password, salt);
//         // const hashedPasswordConf = bcrypt.hashSync(password_confirmation, salt);
//
//         users.push({email: email, password: password, password_confirmation: password_confirmation});
//         res.json({users});
//         console.log('QQQ users ', users)
//     } catch (e) {
//         res.status(500).send()
//     }
//
//     // const {email, password, password_confirmation} = req.body;
//     // users.push({email: email, password: password, password_confirmation: password_confirmation})
//     // console.log('QQQ dataForm', users)
// });

/*app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(password, salt);

    const [user] = users.filter(user => (user.email === email && user.password === password));
    if (user) {
        res.json({});
    } else {
        res.status('403').json({});
    }


    // try {
    //     if(await bcrypt.compare(password, user.password)) {
    //         res.send('Success')
    //     } else {
    //         res.send('Not Allowed')
    //     }
    // } catch (error) {
    //     console.log('QQQ error', error.message)
    // }
});*/

app.post('/signout', (req, res) => {
    users = [];
    res.json(users);
});


app.post('/test', (req, res) => {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);

    let result = {
        sum: a + b,
        testKey: "testValue"
    }
    res.json(result);
});

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});
