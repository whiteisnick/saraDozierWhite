module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    vjs: {
	      src: ['/bootstrap-3.3.2-dist/js/bootstrap.min.js', ''],
	      dest: 'build/js/vendorScripts.min.js',
	    },
	    vcss: {
	    	src: ['/bootstrap-3.3.2-dist/css/bootstrap.min.css', '/bootstrap-3.3.2-dist/css/bootstrap-theme.min.css'],
	    	dest: 'build/css/vendorStyles.min.css',
	    },
	    js: {
	      src: ['js/js1.js', ''],
	      dest: 'js/scripts.js',
	    },
			css: {
	      src: ['css/main.css', ''],
	      dest: '/js/styles.css',
	    },
	  },
	  uglify: {
	    my_target: {
	      files: {
	        'build/js/scripts.min.js': ['js/js1.js', ''],
	        'build/css/styles.min.css': ['css/main.css', '']
	      },
	    },
	  },
		watch: {
		  scripts: {
		    files: ['js/**/*.js'],
		    tasks: ['concat'],
		  },
		  styles: {
		  	files: ['css/**/*.css']
		  	tasks: ['concat'],
		  },
		},
	});

};

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');