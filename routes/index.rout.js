import { Router } from 'express';
import la from'../controller/product_controller.js'
const router = Router();
router.get('/', function (req, res, next) {
  console.log(la);
  if(la==='en'){
    console.log('the laguage english');
  }else{
    console.log('the laguage arabic');
  }
  console.log('index.js: GET /');
  res.render('pages/Home',{la: la, user: (req.session.user === undefined ? "" : req.session.user)});
});
router.get('/about', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/about',{la: la, user: (req.session.user === undefined ? "" : req.session.user)});
});
router.get('/makeen', function (req, res, next) {
  console.log('index.js: GET /');
  la='en'
  //res;
});
router.get('/makear', function (req, res, next) {
  console.log('index.js: GET /');
  la='ar'
  //res;
});

export default router;