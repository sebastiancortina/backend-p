const { Router } = require('express');
const { check } = require('express-validator');
const {   profilesGet, profilesPut, profilesPost, profilesDelete  } = require('../controllers/profile.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/', profilesGet);

router.put('/:id',  profilesPut);

router.post('/',  profilesPost);

router.delete('/:id', profilesDelete);

//router.patch('/', bannersPatch);

module.exports = router;