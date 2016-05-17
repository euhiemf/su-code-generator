var sjcl = require('sjcl');
var fs = require('fs');


// data format xxyyyy where xx is year prefix and yyyy is random unique code

var email = 'xxx';
var pass = 'yyy';

fs.readFile('./data.txt', 'utf8', function (err, data) {

	var PassPhrase = email.toLowerCase()+pass;
	var new_gist_content = sjcl.encrypt(PassPhrase, data);

	fs.writeFile('./gist-content.txt', new_gist_content, function (err) {
		console.log('Done!')
	});
});


