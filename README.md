localstorage-image-cache
========================

Cache images into local storage for offline use.

Usage
-----

This module is used in two parts, correct HTML image tag usage and a JS function to perform the image loading and caching.

To setup an image for caching.

Original image tag:

	<img src="http://server.com/image.jpg">

Cacheable image tag:

	<img src="somelocalloadingimage.jpg" data-src="http://server.com/image.jpg">

To load all images setup for caching on a page:

	var lsic = require('localstorage-image-cache');
	lsic.loadImages();

Example
-------

See the example app in the `example` directory.

	cd example
	bower install

Open `example/index.html` in your browser, hit reload and you'll notice the 2 example images are not loaded from the remote site.

Credit
------

[The Dumb Terminal](http://www.thedumbterminal.co.uk/)
