const { Router } = require('express');
const { menusGet, menusPut, menusPost,  menusDelete } = require('../controllers/menu.controller');
const { validarCampos } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/', menusGet);

router.put('/:id', menusPut);

router.post('/', menusPost);

router.delete('/:id', menusDelete);

//router.patch('/', bannersPatch);*/

module.exports = router;