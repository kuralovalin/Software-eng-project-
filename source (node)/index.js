require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const app = express();
const userRoute = require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/user',userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	
	console.log(`Listening port ${PORT}`);
});