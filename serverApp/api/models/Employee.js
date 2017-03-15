/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
	attributes: {
		"id": {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true		
		},
		"firstName": {
			type: 'string',
			defaultsTo: null,
			required: false
		},
		"lastName": {
			type: 'string',
			defaultsTo: null,
			required: false
		},
		"locationId": {
			type: 'string',
			defaultsTo: null,
			required: false
		},
		"doj": {
			type: 'string',
			defaultsTo: null,
			required: false
		}
	}
};