const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Login
app.get('/login/email/:email/password/:password',(req, res)=>{
	//Firebase Auth 
	
});
//Register
app.post('/register/email/:email/password/:password', (req, res)=>{
	//Firebase Register
	
});
//User Homepage
app.get('/user/:guid' (req,res)=>{
	//res.cookie => JWT Token
	
	//Check if token is valid
	
	//If valid get data from firebase
	
	//Return data
	const dummyData = {
		name: "John Doe",
		level : 12,
		email: "abc@test.com",
	}
	res.send(dummyData);
	res.end();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	
	console.log(`Listening port ${PORT}`);
});