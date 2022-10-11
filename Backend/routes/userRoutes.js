const { Router } = require('express')
const {registerUser, authUser}=require('../controllers/userControllers') 
const express=require('express');
const { model } = require('mongoose')

const router=express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports=router; 