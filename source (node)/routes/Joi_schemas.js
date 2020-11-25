const Joi = require('joi');

const joi_registerSchema = Joi.object({
	name: Joi.string().min(2).max(250),
	email: Joi.string().min(2).max(250).email(),
	password: Joi.string().min(6).max(20)
	
});
const joi_loginSchema = Joi.object({
	email: Joi.string().min(2).max(250).email(),
	password: Joi.string().min(6).max(20)
});

module.exports.joi_registerSchema = joi_registerSchema;
module.exports.joi_loginSchema = joi_loginSchema;
