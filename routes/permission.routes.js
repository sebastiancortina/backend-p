const { Router } = require('express');
const { check } = require('express-validator');
const {  permissionsGet, permissionsPut, permissionsPost, permissionsDelete } = require('../controllers/permission.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/', permissionsGet);

router.put('/:id',  permissionsPut);

router.post('/',  permissionsPost);

router.delete('/:id', permissionsDelete);

//router.patch('/', bannersPatch);

module.exports = router;