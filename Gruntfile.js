module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
			js: {
	    	src: ['js/js1.js'],
	    	dest: 'build/js/scripts.js',
	    },
			css: {
	    	src: ['css/main.css'],
	    	dest: 'build/css/styles.css',
	    },
	  },
	  watch: {
		  js: {
		    files: ['js/**/*.js'],
		    tasks: ['concat'],
		  },
		  css: {
		  	files: ['css/**/*.css'],
		  	tasks: ['concat'],
		  },
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};