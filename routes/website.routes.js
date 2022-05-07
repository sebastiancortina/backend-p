const { Router } = require('express');
const {  websiteGet, websitePut, websitePost, websiteDelete, websitePatch } = require('../controllers/website.controllers');
const { validarCampos } = require('../middlewares/website.middlewares');

const router = Router();

router.get('/', websiteGet);

router.put('/:id',  websitePut );

router.post('/', websitePost);

router.delete('/:id', websiteDelete);

//router.patch('/', bannersPatch);*/

module.exports = router;