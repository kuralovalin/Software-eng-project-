const jwt = require('jsonwebtoken');

//Middleware for verifyToken
module.exports = function(req,res,next){
	
	const token = req.header('http-auth');
	if(!token) return res.status(403).send('Missing access token');
	const isValidToken = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, obj) => {
		if(err) return res.status(403).send("Invalid Token");
		req.userId = obj.id;//Getting userId from deserialized object
	});
		next();
	
}