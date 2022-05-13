const { Router } = require('express');
const { check } = require('express-validator');
const {  itembannersGet, itembannersPut, itembannersPost, itembannersDelete } = require('../controllers/itembanner.controller');
const middlewares = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/',  itembannersGet);

router.put('/:id', middlewares, itembannersPut);

router.post('/', middlewares, itembannersPost);

router.delete('/:id', itembannersDelete);

//router.patch('/', bannersPatch);

module.exports = router;