const { Router } = require('express');
const { check } = require('express-validator');
const { rolsGet, rolsPut, rolsPost, rolsDelete } = require('../controllers/rol.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/', rolsGet);

router.put('/:id',  rolsPut);

router.post('/',  rolsPost);

router.delete('/:id', rolsDelete);

//router.patch('/', bannersPatch);

module.exports = router;