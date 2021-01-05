const Joi = require('joi');

const joi_tokenSchema = Joi.object({
	token: Joi.string().min(2).required
	
});

module.exports.joi_registerSchema = joi_registerSchema;