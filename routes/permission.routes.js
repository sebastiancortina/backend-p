const { Router } = require('express');
const { check } = require('express-validator');
const {  permissionsGet, permissionsPut, permissionsPost, permissionsDelete } = require('../controllers/permission.controller');
const middlewares = require('../middlewares/permission.middleware');

const router = Router();

router.get('/', permissionsGet);

router.put('/:id', middlewares, permissionsPut);

router.post('/', middlewares, permissionsPost);

router.delete('/:id', permissionsDelete);

//router.patch('/', bannersPatch);

module.exports = router;