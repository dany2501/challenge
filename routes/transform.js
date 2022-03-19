var express = require('express');
var router = express.Router();
const { auth } = require('../controller/AuthController');
const { transform } = require('../controller/TransformController');

router.post('/transform',
    //middleware de validación de usuario
    [auth],
    // Controlador que transforma la url
    transform
);


module.exports = router;
