import { Router } from 'express';
import {
  allproduct,
  singleproduct,
  add,
  viewelectric,
  viewic,
  viewwarhouse,
  viewheavy,
  viewtractor,
  viewwheel,
  viewspecial,
  viewother,
  viewattach,
  search,
 } from "../controller/product_controller.js";


const router = Router();

router.post('/addproduct', add);
router.get('/products', allproduct);
router.get('/singleprodct/:id',singleproduct);
router.get('/electric', viewelectric);
router.get('/ic', viewic);
router.get('/warhouse', viewwarhouse);
router.get('/heavy', viewheavy);
router.get('/tractor', viewtractor);
router.get('/wheel', viewwheel);
router.get('/special', viewspecial);
router.get('/other', viewother);
router.get('/attach', viewattach);
router.get('/search', search);
export default router;