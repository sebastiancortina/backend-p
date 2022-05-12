const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPut, usersPost, usersDelete } = require('../controllers/user.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/', usersGet);

router.put('/:id',  usersPut);

router.post('/',  usersPost);

router.delete('/:id', usersDelete);

//router.patch('/', bannersPatch);

module.exports = router;