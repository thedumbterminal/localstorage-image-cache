define(function(require){

	var lsic = require('localstorage-image-cache');
	
	//activate caching of all supported images on the page
	lsic.loadImages();
});