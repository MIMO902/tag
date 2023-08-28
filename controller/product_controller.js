import Product from '../models/product_model.js';
import fs from 'fs';
import __dirname from '../app.js'

let la='ar';
const allproduct= (req, res, next) =>{
  Product.find().then(result => {
    let k=result.length%8;
    if(k>0){
    var c=(parseInt(result.length/8))+1;
    }else{
      var c=(parseInt(result.length/8));
    }
    var h=0;
    res.render('pages/products', {la: la, products: result,count:c,currentValue:h,  user: (req.session.user === undefined ? "" : req.session.user)});
  })
  .catch(err => {
    console.log(err);
  });
}
const singleproduct= (req, res, next) =>{
  var query = { "_id": req.params.id };
  Product.findOne(query).then(result=>{
    console.log(result);
    res.render('pages/single_product', {la: la, product: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })

};
const viewelectric=(req, res, next) =>{
  var query = { type: "electric" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewic=(req, res, next) =>{
  var query = { type: "ic" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewwarhouse=(req, res, next) =>{
  var query = { type: "warhouse" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewheavy=(req, res, next) =>{
  var query = { type: "heavy" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewtractor=(req, res, next) =>{
  var query = { type: "tractor" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewwheel=(req, res, next) =>{
  var query = { type: "wheel" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewspecial=(req, res, next) =>{
  var query = { type: "special" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewother=(req, res, next) =>{
  var query = { type: "other" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const viewattach=(req, res, next) =>{
  var query = { type : "attach" };
  Product.find(query).then(result=>{
    console.log(result);
    res.render('pages/products', {la: la, productw: result,user: (req.session.user === undefined ? "" : req.session.user)});
  })
};
const add=(req, res, next) =>{
  console.log(req.body.name);
  console.log(req.files);
  let imgFile;
  let uploadPath;
  let imgFile1;
  let uploadPath1;
  let imgFile2;
  let uploadPath2;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  imgFile = req.files.productimg;
  imgFile1 = req.files.featureimage;
  imgFile2 = req.files.prameter;

  uploadPath = "./public/img/" + req.body.name + ".png";
  uploadPath1 = "./public/img/" + req.body.name + "features.png";
  uploadPath2 = "./public/img/" + req.body.name + "parameter.png";
  // Use the mv() method to place the file somewhere on your server
  imgFile1.mv(uploadPath1);
  imgFile2.mv(uploadPath2);
  imgFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    console.log(req.body);
    const product = new Product({
      name: req.body.name,
      productimage: req.body.name + ".png",
      details: req.body.details,
      features: req.body.features,
      featureimage:req.body.name + "features.png",
      prameter : req.body.name + "parameter.png",
    });
    product
      .save()
      .then((result) => {
        console.log("unit added succesfully");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
const search=async (req,res,next) =>{
  const { searchtext } = req.query;
  console.log(searchtext);
  const regex = new RegExp(`.*${(searchtext || "").toLowerCase()}.*`, "ig");
  console.log(regex);
  const query = {
    $or: [
      { name: regex },
      { details: regex },
      { features: regex },
      { type: regex },
    ],
  };
  Product.find(query).then(result => {
    let k=result.length%8;
    if(k>0){
    var c=(parseInt(result.length/8))+1;
    }else{
      var c=(parseInt(result.length/8));
    }
    var h=0;
    res.render('pages/products', {la: la, products: result,count:c,currentValue:h,  user: (req.session.user === undefined ? "" : req.session.user)});
  })
  .catch(err => {
    console.log(err);
  });
}
export {
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
};
export default la;