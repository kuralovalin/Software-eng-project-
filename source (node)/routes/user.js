const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('./db');
const _ = require('lodash');
const verifyToken = require('../helpers/verifyToken');
const {joi_registerSchema, joi_loginSchema} = require('../models/Joi_schemas');

router.post('/register', async(req,res) => {
		
		if(req.method !== 'POST') return res.status(400).send("Invalid Request")
		//Validate request body
		const {error} = joi_registerSchema.validate(req.body);
		if(error) return res.status(400).send(error.details[0].message);
		const eml = req.body.email;
		let resp = await db.collection("users").where("email", "==", eml).get()
		
		if(resp.docs.length != 0) return res.status(400).send("Email already registered");
		//Hash Password
		const salt = await bcrypt.genSalt(10);
		const hashPass = await bcrypt.hash(req.body.password, salt);
		
		//saveDB
		//	Level includes user completed 
		const user = {
			//id: resp.docs[0].id,
			name: req.body.name,
			email: req.body.email,
			password: hashPass,
			level : [
				{type:"mb", completed: -1},
				{type:"st", completed: -1}
			],
			completedEx:[]

		}
		
		resp = await db.collection("users").add(user);


		const token = jwt.sign(_.pick(user,["name","email"]), process.env.ACCESS_SECRET_TOKEN);
		
		res.header('http-auth',token).json({username:user.name, aTo : token});
		res.end();
		
	
	
})

router.post('/login' , async(req,res) => {
	
	//if(req.method !== 'POST') return res.status(400).send("Invalid Request")
	//Validate input
	const {error} = joi_loginSchema.validate(req.body);
	if(error) return res.status(400).send(error.details[0].message);
	//Find from db
	const ml = req.body.email;
	const resp = await db.collection("users").where("email", "==", ml).get()
	if(!resp.docs) return res.status(400).send("Email or password incorrect");
	const user = {id: resp.docs[0].id,...resp.docs[0].data()};
	//console.log(user);
	const validatePass = bcrypt.compare(req.body.password, user.password);
	
	if(!validatePass) return res.status(403).send("Email or password incorrect");
	
	//if username and hash correct return access_token
	const token = jwt.sign(_.pick(user,["name","email"]), process.env.ACCESS_SECRET_TOKEN);
		
	res.header('http-auth',token).json({username:user.name, aTo : token});
	res.end();	
	
})

router.get('/profile', verifyToken, async(req,res) => {
	
	if(req.method !== 'GET') return res.status(400).send("Invalid Request")
	
	if(!req.email) return res.status(403).send("Bad request!! Token error");
	//Get user detail from db
	console.log("req.email", req.email);
	const ml = req.email;
	const resp = await db.collection("users").where("email","==" ,ml).get();
	//console.log("req.name = ", req.name);
	if(!resp.docs) return res.status(404).send("Could not find user");
	console.log("Found the user");
	const userData = resp.docs[0].data();

	//return details
	//Dummy data : 
		res.send(_.pick(userData, ["name", "email", "level"]));
});

//Update profile info 
/**
 * router.put('/profile', ...)
 * 
 */

//Get Levels of User
// Levels include
router.get("/completed", verifyToken, async (req,res) => {
	if(!req.email) return res.status(403).send("Bad request!! Token error");

	const ml = req.email;
	const resp = await db.collection("users").where("email","==" ,ml).get();
	//console.log("req.name = ", req.name);
	if(!resp.docs) return res.status(404).send("Could not find user");
	const userData = resp.docs[0].data();
	res.send(userData.completedEx);
})
router.get("/logout", verifyToken, async (req,res) => {
	if(!req.email) return res.status(403).send("Bad request!! Token error");

	res.header('http-auth',"").send("Logged out");
})

module.exports = router;





