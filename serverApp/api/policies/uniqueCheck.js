/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  	if(!req.body.firstName || !req.body.lastName || !req.body.locationId || !req.body.doj ){
  		return res.status(400).json({error: "Parameters missing"}); 
  	}

  	Employee.findOne({firstName: req.body.firstName,lastName:req.body.lastName,locationId:req.body.locationId}).exec(function(e,s){
  		if(s){
  			return res.status(412).json({error: "Duplicate record"})
  		}
	    return next();
  	})



  // if (req.session.authenticated) {
  // }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  // return res.forbidden('You are not permitted to perform this action.');
};

