var express = require('express')

var router = express.Router()

// Getting the Controller that we just created
var MeanController = require('../../controllers/mean.controller');

// Map each API to the Controller FUnctions

router.get('/', MeanController.getTodos)

router.post('/', MeanController.createTodo)

router.put('/', MeanController.updateTodo)

router.delete('/:id',MeanController.removeTodo)


// Export the Router

module.exports = router;