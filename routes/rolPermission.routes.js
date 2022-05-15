const { Router } = require('express');
const { check } = require('express-validator');
const { rolPermissionsGet, rolPermissionsPut, rolPermissionsPost, rolPermissionsDelete } = require('../controllers/rolPermission.controller');
const middlewares = require('../middlewares/rolPermission.middleware');

const router = Router();

router.get('/', rolPermissionsGet);

router.put('/:id', middlewares, rolPermissionsPut);

router.post('/',  middlewares, rolPermissionsPost);

router.delete('/:id', rolPermissionsDelete);

//router.patch('/', bannersPatch);

module.exports = router;