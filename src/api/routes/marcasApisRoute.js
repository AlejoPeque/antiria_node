const express = require('express');
const router = express.Router();
const Controller = require ('../controller/marcasApisController')

router.get('/', Controller.list);


module.exports = router