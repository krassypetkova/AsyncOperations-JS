const express = require('express');
const app = express();

var people = [
    {
        id: 1,
        name: 'Alden',
        age: 32
    },
    {
        id: 2,
        name: 'Billy',
        age: 27
    },
    {
        id: 3,
        name: 'Clark',
        age: 38
    },
    {
        id: 4,
        name: 'Kayla',
        age: 19
    },
    {
        id: 5,
        name: 'Vanessa',
        age: 30
    },
    {
        id: 6,
        name: 'Mariah',
        age: 22
    }
];

console.log(people);

app.get('/test', function (req, res) {
    res.send('Hello World!')
});

app.get('/api/users', function (req, res) {
    res.json(people);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
