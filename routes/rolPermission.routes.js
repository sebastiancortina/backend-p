const { Router } = require('express');
const { check } = require('express-validator');
const { rolPermissionsGet, rolPermissionsPut, rolPermissionsPost, rolPermissionsDelete } = require('../controllers/rolPermission.controller');
//const { validarCampos, existeId  } = require('../middlewares/banner.middlewares');

const router = Router();

router.get('/', rolPermissionsGet);

router.put('/:id',   rolPermissionsPut);

router.post('/',  rolPermissionsPost);

router.delete('/:id', rolPermissionsDelete);

//router.patch('/', bannersPatch);

module.exports = router;