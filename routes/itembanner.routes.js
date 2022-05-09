const { Router } = require('express');
const { itembannerteGet, itembannerPut, itembannerPost, itembannerDelete, itembannerPatch }= require('../controllers/itembanner.controllers');
const { validarCampos } = require('../middlewares/itembanner.middleware');

const router = Router();

router.get('/', itembannerteGet );

router.put('/:id', validarCampos, itembannerPut);

router.post('/', validarCampos, itembannerPost);

router.delete('/:id', itembannerDelete);

//router.patch('/', bannersPatch);*/

module.exports = router;