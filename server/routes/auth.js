const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../keys")
const requireLogin = require('../middleware/requireLogin')

router.post('/signup',(req,res)=>{
	
	const {name,email,password} = req.body
	if(!email||!password||!name){
		return res.status(422).json({error:" Required Field not found"})
	}
	User.findOne({email:email})
	.then((SavedUser)=>{
		if(SavedUser){
			return res.status(422).json({error:"User exists with given mail"})
		}
		bcrypt.hash(password,12)
		.then(hashedpassword=>{
				const user = new User({
				name,
				email,
				password:hashedpassword
			})

			user.save()
			.then(user=>{
				res.json({message:"Created User"})
			})
			.catch(err=>{
				console.log(err)
			})
		})
		
	})
	.catch(err=>{
			console.log(err)
		})
})

router.post('/signin',(req,res)=>{
	const {email,password}= req.body
	if(!email||!password){
		return res.status(422).json({error:"Invalid email or password"})
	}
	User.findOne({email:email})
	.then(savedUser=>{
		if(!savedUser)
		{
			return res.status(422).json({error:"Invalid email or password"})	
		}
		bcrypt.compare(password,savedUser.password)
		.then(doMatch=>{
			if(doMatch){
				//res.json({message:"Successfully signed in"})
				const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
				const{_id,name,email} = savedUser
				res.json({token,user:{_id,name,email}})
			}
			else{

				return res.status(422).json({error:"Invalid email or password"})
			}
		})
		.catch(err=>{
			console.log(err)
		})

	})
	.catch(err=>{
		console.log(err)
	})
	
})

module.exports = router