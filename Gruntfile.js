module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    vjs: {
	      src: ['bootstrap-3.3.2-dist/js/bootstrap.min.js'],
	      dest: 'build/js/vendorScripts.min.js',
	    },
	    vcss: {
	    	src: ['bootstrap-3.3.2-dist/css/bootstrap.min.css', 'bootstrap-3.3.2-dist/css/bootstrap-theme.min.css'],
	    	dest: 'build/css/vendorStyles.min.css',
	    },
			js: {
	    	src: ['js/js1.js'],
	    	dest: 'build/js/scripts.js',
	    },
			css: {
	    	src: ['css/main.css'],
	    	dest: 'build/css/styles.css',
	    },
	  },
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
};