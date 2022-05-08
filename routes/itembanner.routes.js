const { Router } = require('express');
const { itembannerteGet, itembannerPut, itembannerPost, itembannerDelete, itembannerPatch }= require('../controllers/itembanner.controllers');
//const { validarCampos } = require('../middlewares/');

const router = Router();

router.get('/', itembannerteGet );

router.put('/:id',  itembannerPut);

router.post('/', itembannerPost);

router.delete('/:id', itembannerDelete);

//router.patch('/', bannersPatch);*/

module.exports = router;