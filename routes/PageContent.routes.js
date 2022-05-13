const { Router } = require('express');
const { check } = require('express-validator');

const { pagecontentsGet, pagecontentsPut, pagecontentsPost, pagecontentsDelete } = require('../controllers/pagecontent.controller');
const  middlewares = require('../middlewares/pagecontent.middlewares');

const router = Router();

router.get('/',  pagecontentsGet);

router.put('/:id', middlewares, pagecontentsPut);

router.post('/', middlewares, pagecontentsPost);

router.delete('/:id', pagecontentsDelete);

//router.patch('/', bannersPatch);

module.exports = router;