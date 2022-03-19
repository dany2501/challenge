var express = require('express');
var router = express.Router();
const { clean } = require('../controller/CleanController');

router.post('/clean',
    // Controlador que limpia el objeto
    clean
);


module.exports = router;
