const router = require('express').Router();
const controller = require('../controller');

router.get('/cars', controller.getAll);

router.get('/cars/:id', controller.getById);

router.post('/cars', controller.post);

router.put('/cars/:id', controller.updateById);

router.patch('/cars/:id', controller.updateById);

router.delete('/cars/:id', controller.deleteById);

module.exports = router;