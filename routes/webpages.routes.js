const { Router } = require('express');
const { webpagesGet, webpagesPut, webpagesPost,webpagesDelete,  webpagesPatch } = require('../controllers/webpages.controllers');
const { validarCampos } = require('../middlewares/webpage.middlewares');

const router = Router();

router.get('/', webpagesGet);

router.put('/:id', validarCampos, webpagesPut );

router.post('/', validarCampos, webpagesPost);

router.delete('/:id', webpagesDelete);

//router.patch('/', bannersPatch);*/

module.exports = router;