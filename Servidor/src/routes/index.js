const express = require('express');
const router = express.Router();

router.use(express.json())

router.get('/', function (req, res) {
    console.log("colo ", req);
    res.status(200).send({
        api: "Api para trabalho de sistemas distribuidos"
    });
});

router.post('/soma', function (req, res) {
    const result = req.body.valor1 + req.body.valor2
    res.status(200).send({
        result: result
    });
});

router.post('/subtracao', function (req, res) {
    const result = req.body.valor1 - req.body.valor2
    res.status(200).send({
        result: result
    });
});

router.post('/divisao', function (req, res) {
    const result = req.body.valor1 / req.body.valor2
    res.status(200).send({
        result: result
    });
});

router.post('/multiplicacao', function (req, res) {
    const result = req.body.valor1 * req.body.valor2
    res.status(200).send({
        result: result
    });
});
module.exports = router;
