const express=require('express');
const mainController=require('../controllers/mainController.js')
const router=express.Router();
const path=require('path');


router.get("/", mainController.home);
router.get("/about", mainController.about );



module.exports=router;

