import { Router } from 'express';

const router = Router();
router.get('/', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/Home',{ user: (req.session.user === undefined ? "" : req.session.user)});
});
router.get('/about', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/about',{ user: (req.session.user === undefined ? "" : req.session.user)});
});
router.get('/products', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/products',{ user: (req.session.user === undefined ? "" : req.session.user)});
});
router.get('/singleprodct', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/single_product',{ user: (req.session.user === undefined ? "" : req.session.user)});
});


export default router;