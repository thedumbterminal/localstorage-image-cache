//requirejs setup
requirejs.config({
	baseUrl: './',
	paths: {
		'localstorage-image-cache': '../src/localstorage-image-cache',
		'jquery': '../bower_components/jquery/dist/jquery.min'
	}
});
requirejs(['./app/main']);
