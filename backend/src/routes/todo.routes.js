const express = require('express');
const controller = require('../controllers/todos.controller');

const router = express.Router();


router.get('/todo/:id', controller.oneGet);

router.get('/create/:id', controller.createGet);

router.post('/create', controller.createPost);

router.get('/edit/:id', controller.editGet);

router.put('/edit', controller.editPost);

router.delete('/todo/delete/:id', controller.deletePost);


router.get('/:userId', controller.indexGet);


module.exports = router;