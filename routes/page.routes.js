const { Router } = require('express');
const { check } = require('express-validator');
const { pagesGet, pagesPut, pagesPost, pagesDelete } = require('../controllers/page.controller');
const middlewares = require('../middlewares/page.middlewares');

const router = Router();

router.get('/',  pagesGet);

router.put('/:id', pagesPut);

router.post('/',  middlewares,  pagesPost);

router.delete('/:id', pagesDelete);

//router.patch('/', bannersPatch);

module.exports = router;