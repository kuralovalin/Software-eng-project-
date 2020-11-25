const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
const {joi_registerSchema, joi_loginSchema} = require('./Joi_schemas');
const testPassword = "memovercity";
const usr = {
		name: "Test User",
		id: "1",
		email: "test@gtu.edu.tr",		
	}

router.post('/register', async(req,res) => {
		
		if(req.method !== 'POST') return res.status(400).send("Invalid Request")
		//Validate request body
		const {error} = joi_registerSchema.validate(req.body);
		if(error) return res.status(400).send(error.details[0].message);
		
		//Check if email exists
			//Db operations will be here
			//Dummy check for now
		if(req.body.email === "test2@gtu.edu.tr") res.status(400).send("Email already registered");
		//hash password
		const salt = await bcrypt.genSalt(10);
		const hashPass = await bcrypt.hash(testPassword, salt);
		
		//saveDB
			//DB operations will be here
		//Return jwt token that expires in 10 days
		
		const token = jwt.sign(usr, process.env.ACCESS_SECRET_TOKEN);
		
		res.header('http-auth',token).json({aTo: token});
		res.end();
		
	
	
})

router.post('/login' , async(req,res) => {
	
	if(req.method !== 'POST') return res.status(400).send("Invalid Request")
	
	//Validate input
	const {error} = joi_loginSchema.validate(req.body);
	if(error) return res.status(400).send(error.details[0].message);
	//Find from db
		//Db operation will be here
	const validatePass = bcrypt.compare(testPassword, req.body.password);
	if(!validatePass) return res.status(403).send("Email or password incorrect");
	
	//if username and hash correct return access_token
	const token = jwt.sign(usr, process.env.ACCESS_SECRET_TOKEN);
		
	res.header('http-auth',token).json({aTo: token});
	res.end();	
	
})

router.get('/profile', verifyToken, async(req,res) => {
	
	if(req.method !== 'GET') return res.status(400).send("Invalid Request")
	
	//Get user detail from db
	
	//return details
	//Dummy data : 
		res.send(usr);
});

module.exports = router;





