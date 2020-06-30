let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let messages = [];
let users = [];

app.use(bodyParser.json());

app.post('/send', (req, res) => {
    messages.push(req.body.message);
    res.json({status: 'OK'});
});

app.get('/get_all', (req, res) => {
    res.json(messages);
});

/* Form Registration */
app.post('/register', (req, res) => {
    const {email, password, password_confirmation} = req.body;
    users.push({email: email, password: password, password_confirmation: password_confirmation})
    res.json({});
    console.log('QQQ dataForm', users)
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    const [user] = users.filter(user => (user.email === email && user.password === password));
    if (user) {
        res.json({});
    } else {
        res.status('403').json({});
    }
});

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
