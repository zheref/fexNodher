
/*
 * GET home page.
 */

exports.index = function(req, res)
{
	res.render
  	(
 		'index', 
 		{
			title: 'fexNodher!!!',
			description: 'Esta es una prueba de NodeJS, con el framework ExpressJS, con LessCSS y HoganJS bajo el PaaS Heroku para Node'
		}
 	);
};