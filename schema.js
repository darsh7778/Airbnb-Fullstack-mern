const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        country: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().required(),
        image:{
url: Joi.string().allow("", null),
}
     }).required(),
});