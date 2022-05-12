const { Router } = require('express');
const { check } = require('express-validator');

const { pagecontentsGet, pagecontentsPut, pagecontentsPost, pagecontentsDelete } = require('../controllers/pagecontent.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/',  pagecontentsGet);

router.put('/:id',pagecontentsPut);

router.post('/',  pagecontentsPost);

router.delete('/:id', pagecontentsDelete);

//router.patch('/', bannersPatch);

module.exports = router;