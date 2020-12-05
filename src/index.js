const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/', (req, res) => {
    res.send("Hello world!");
});

// app.post('/add', (req, res) => {
//     //console.log(typeof req.body.num1);
//     const num1 = req.body.num1;
//     const num2 = req.body.num2;
//     const sum = num1 + num2;
//     if(typeof num1 === "string" || typeof num2 === "string") {
//         const data = {
//             status: 'error',
//             message: 'Invalid data types'
//         };
//         res.send(data);
//     } else if(num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
//         const data = {
//             status: 'error',
//             message: 'Underflow'
//         };
//         res.send(data);
//     } else if(num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
//         const data = {
//             status: 'error',
//             message: 'Overflow',
//         };
//         res.send(data);
//     } else {
//         const data = {
//             status: 'success',
//             message: 'The sum of given two numbers',
//             result: sum
//         };
//         res.send(data);
//     } 
// });

// app.post('/sub', (req, res) => {
//     const num1 = req.body.num1;
//     const num2 = req.body.num2;
//     const diff = num1 - num2;
//     if(typeof num1 === "string" || typeof num2 === "string") {
//         const data = {
//             status: 'error',
//             message: 'Invalid data types'
//         };
//         res.send(data);
//     } else if(num1 < -1000000 || num2 < -1000000 || diff < -1000000) {
//         const data = {
//             status: 'error',
//             message: 'Underflow'
//         };
//         res.send(data);
//     } else if(num1 > 1000000 || num2 > 1000000 || diff > 1000000) {
//         const data = {
//             status: 'error',
//             message: 'Overflow'
//         };
//         res.send(data);
//     } else {
//         const data = {
//             status: 'success',
//             message: 'The difference of given two numbers',
//             result: diff
//         };
//         res.send(data);
//     }
// });

// app.post('/multiply', (req, res) => {
//     const num1 = req.body.num1;
//     const num2 = req.body.num2;
//     const mul = num1 * num2;
//     if(typeof num1 === "string" || typeof num2 === "string") {
//         const data = {
//             status: 'error',
//             message: 'Invalid data types'
//         };
//         res.send(data);
//     } else if(num1 < -1000000 || num2 < -1000000 || mul < -1000000) {
//         const data = {
//             status: 'error',
//             message: 'Underflow'
//         };
//         res.send(data);
//     } else if(num1 > 1000000 || num2 > 1000000 || mul > 1000000) {
//         const data = {
//             status: 'error',
//             message: 'Overflow'
//         };
//         res.send(data);
//     } else {
//         const data = {
//             status: 'success',
//             message: 'The product of given numbers',
//             result: mul
//         };
//         res.send(data);
//     }
// });

// app.post('/divide', (req, res) => {
//     const num1 = req.body.num1;
//     const num2 = req.body.num2;
//     const div = num1 / num2;
//     if(typeof num1 === "string" || typeof num2 === "string") {
//         const data = {
//             status: 'error',
//             message: 'Invalid data types'
//         };
//         res.send(data);
//     } else if(num2 === 0) {
//         const data = {
//             status: 'error',
//             message: 'Cannot divide by zero'
//         };
//         res.send(data);
//     } else if(num1 < -1000000 || num2 < -1000000 || div < -1000000) {
//         res.send(
//             JSON.stringify({
//                     status: 'error',
//                     message: 'Underflow'
//             })
//         );
//     } else if(num1 > 1000000 || num2 > 1000000 || div > 1000000) {
//         const data = {
//             status: 'error',
//             message: 'Overflow'
//         };
//         res.send(data);
//     }
//     else {
//         const data = {
//             status: 'success',
//             message: 'The division of given numbers',
//             result: div
//         };
//         res.send(data);
//     }
// });

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;