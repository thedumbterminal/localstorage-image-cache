define('localstorage-image-cache', ['jquery'], function($){

	var lsic = {};

	lsic.loadImages = function(){
		$("img[data-src]").each(function(){
			lsic._loadImage(this);
		});
	};

	lsic._loadImage = function(image){
		var dataUrl = window.localStorage.getItem(image.dataset.src);
		if(dataUrl){
			image.src = dataUrl;
		}
		else{
			image.crossOrigin = 'Anonymous';
			image.onload = lsic._saveImageData;
			image.src = image.dataset.src;
		}
		delete image.dataset['src'];
	};

	lsic._saveImageData = function(){
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');
		canvas.height = this.height;
		canvas.width = this.width;
		ctx.drawImage(this, 0, 0);
		var dataUrl = canvas.toDataURL();
		window.localStorage.setItem(this.src, dataUrl);
	};

	return lsic;
});
