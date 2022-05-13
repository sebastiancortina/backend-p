const { Router } = require('express');
//const { check } = require('express-validator');

const { footersGet, footersPut, footersPost, footersDelete} = require('../controllers/footer.controller');
const middlewares = require('../middlewares/footer.middleware');

const router = Router();

router.get('/',  footersGet);

router.put('/:id', middlewares , footersPut);

router.post('/', middlewares ,footersPost);

router.delete('/:id', footersDelete);

//router.patch('/', bannersPatch);

module.exports = router;