const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPut, usersPost, usersDelete } = require('../controllers/user.controller');
const middlewares = require('../middlewares/user.middleware');

const router = Router();

router.get('/', usersGet);

router.put('/:id', middlewares, usersPut);

router.post('/', middlewares, usersPost);

router.delete('/:id', usersDelete);

//router.patch('/', bannersPatch);

module.exports = router;