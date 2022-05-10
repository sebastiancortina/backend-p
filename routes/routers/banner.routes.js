const { Router } = require('express');
const { check } = require('express-validator');

const {  bannersGet, bannersPut, bannersPost, bannersDelete, bannersPatch } = require('../../controllers/controllers/banner.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/',  bannersGet);

router.put('/:id', bannersPut);

router.post('/',  bannersPost);

router.delete('/:id', bannersDelete);

//router.patch('/', bannersPatch);

module.exports = router;