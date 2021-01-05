require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
var cors = require('cors');
const app = express();
const userRoute = require('./routes/user');
const levelRoute = require('./routes/level');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/user', userRoute);
app.use('/level', levelRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	
	console.log(`Listening port ${PORT}`);
});