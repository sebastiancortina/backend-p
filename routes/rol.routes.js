const { Router } = require('express');
const { check } = require('express-validator');
const { rolsGet, rolsPut, rolsPost, rolsDelete } = require('../controllers/rol.controller');
const  middlewares = require('../middlewares/rol.middleware');

const router = Router();

router.get('/', rolsGet);

router.put('/:id', middlewares, rolsPut);

router.post('/',  middlewares, rolsPost);

router.delete('/:id', rolsDelete);

//router.patch('/', bannersPatch);

module.exports = router;