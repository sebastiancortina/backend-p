const { Router } = require('express');
const { check } = require('express-validator');
const { postsGet, postsPut, postsPost, postsDelete, postsPatch  } = require('../controllers/post.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/',  postsGet);

router.put('/:id',  postsPut);

router.post('/',  postsPost);

router.delete('/:id', postsDelete);

//router.patch('/', bannersPatch);

module.exports = router;