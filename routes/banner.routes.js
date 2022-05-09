const { Router } = require('express');
const { check } = require('express-validator');

const {  bannersGet, bannersPut, bannersPost, bannersDelete, bannersPatch } = require('../controllers/banner.controllers');
const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/',  bannersGet);

router.put('/:id', validarCampos, bannersPut);

router.post('/', validarCampos, bannersPost);

router.delete('/:id', bannersDelete);

//router.patch('/', bannersPatch);

module.exports = router;