const { Router } = require('express');
const { check } = require('express-validator');

const {  bannersGet, bannersPut, bannersPost, bannersDelete, bannersPatch } = require('../controllers/banner.controller');
const middlewares = require('../middlewares/banner.middlewares');


const router = Router();

router.get('/',  bannersGet);

router.put('/:id', middlewares, bannersPut);

router.post('/',  middlewares, bannersPost);

router.delete('/:id', bannersDelete);

//router.patch('/', bannersPatch);

module.exports = router;