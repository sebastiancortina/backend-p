const { Router } = require('express');
const { check } = require('express-validator');
const {  sitesGet, sitesPut, sitesPost, sitesDelete } = require('../controllers/site.controller');
const middlewares = require('../middlewares/site.middlewares');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/', sitesGet);

router.put('/:id', sitesPut);

router.post('/', middlewares, sitesPost);

router.delete('/:id', sitesDelete);

//router.patch('/', bannersPatch);

module.exports = router;