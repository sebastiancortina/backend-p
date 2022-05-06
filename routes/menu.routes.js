const { Router } = require('express');
const { menusGet, menusPut, menusPost,  menusDelete } = require('../controllers/menu.controller');
const { validarCampos } = require('../middlewares/menu.middlewares');

const router = Router();

router.get('/', menusGet);

router.put('/:id', validarCampos ,menusPut);

router.post('/', validarCampos, menusPost);

router.delete('/:id', menusDelete);

//router.patch('/', bannersPatch);*/

module.exports = router;