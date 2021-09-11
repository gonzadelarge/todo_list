const express = require('express');
const controller = require('../controllers/todos.controller');

const router = express.Router();


router.get('/', controller.indexGet);

router.get('/todo/:id', controller.oneGet);

router.get('/create', controller.createGet);

router.post('/create', controller.createPost);

router.get('/edit', controller.editGet);

router.put('/edit', controller.editPost);

router.delete('/delete/:id', controller.deletePost);




module.exports = router;