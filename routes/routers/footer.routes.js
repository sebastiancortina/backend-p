const { Router } = require('express');
//const { check } = require('express-validator');

const { footersGet, footersPut, footersPost, footersDelete} = require('../../controllers/controllers/footer.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/',  footersGet);

router.put('/:id', footersPut);

router.post('/',  footersPost);

router.delete('/:id', footersDelete);

//router.patch('/', bannersPatch);

module.exports = router;