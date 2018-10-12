const express = require('express');
const app = express();

const users = [
    {
        id: 123,
        name: 'Alden',
        age: 32
    },
    {
        id: 456,
        name: 'Billy',
        age: 27
    },
    {
        id: 789,
        name: 'Clark',
        age: 38
    },
    {
        id: 987,
        name: 'Kayla',
        age: 19
    },
    {
        id: 654,
        name: 'Vanessa',
        age: 30
    },
    {
        id: 321,
        name: 'Mariah',
        age: 22
    }
];

console.log(users);

app.get('/test', function (req, res) {
    res.send('Hello World!')
});

app.get('/api/users', function (req, res) {
    res.json(users);
});

app.get('/api/users/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const user = users.find(function (element) {
        return element.id === id;
    });

    if (user) {
        res.json(user);
    } else {
        res.json({
            success: false,
            message: 'No such user with id: ' + id
        });
    }

});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
