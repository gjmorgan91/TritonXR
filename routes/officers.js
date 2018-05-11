var data = require('../committees.json');

exports.view = function(req, res){

	res.render('officers', data);

};