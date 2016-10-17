/**
 * LoginController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var secret =  "Angular server Apps !" ; 
	jwt    = require("jsonwebtoken"); 

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), secret, { expiresIn: 60*60*5 });
}
module.exports = {

	index: function(req, res) {
		// body...		
		var body = req.body ||{};
		var username = body.username ; 
		var password = body.password ;
		if(!username || !password){
			return res.status(400).json({error:"Invalid parametes"})
		}
		User.find({"username":username , "password": password},{username:1})
		.exec(function (error, user) {
			console.log(error , user) ; 	
			 if(error){ return res.status(400).json({error:error}) }
			 if(!user.length){
			 	return res.status(400).json({error:"Invalid Username/Password"})
			 }
			 // delete  user[0].password;
			res.json({id_token: createToken(user[0]) });
		
		})	

	}
};