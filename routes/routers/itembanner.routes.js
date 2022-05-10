const { Router } = require('express');
const { check } = require('express-validator');
const {  itembannersGet, itembannersPut, itembannersPost, itembannersDelete } = require('../../controllers/controllers/itembanner.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/',  itembannersGet);

router.put('/:id',  itembannersPut);

router.post('/',  itembannersPost);

router.delete('/:id', itembannersDelete);

//router.patch('/', bannersPatch);

module.exports = router;