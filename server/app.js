const express = require('express');
const app = express();

var peopleData = [
    {
        id: 0,
        name: 'Alden',
        age: 32
    },
    {
        id: 1,
        name: 'Billy',
        age: 27
    },
    {
        id: 2,
        name: 'Clark',
        age: 38
    },
    {
        id: 3,
        name: 'Kayla',
        age: 19
    },
    {
        id: 4,
        name: 'Vanessa',
        age: 30
    },
    {
        id: 5,
        name: 'Mariah',
        age: 22
    }
];

console.log(peopleData);

app.get('/test', function (req, res) {
    res.send('Hello World!')
});

app.get('/api/users', function (req, res) {
    res.json(peopleData);
});

app.get('/api/users/:id', function (req, res) {
    var peopleId = req.params.id;

    res.json(peopleData[peopleId]);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
