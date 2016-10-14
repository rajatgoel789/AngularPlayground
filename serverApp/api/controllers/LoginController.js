/**
 * LoginController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res) {
		// body...		


		console.log("req.body" , req.body);
		res.json({"ok":"ok"});
	}
};