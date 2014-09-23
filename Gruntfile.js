module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.initConfig({
		bowercopy: {
			options: {
				srcPrefix: 'bower_components'
			},
			scripts: {
				options: {
					destPrefix: 'js/vendor'
				},
				files: {
					 'jquery.js': 'jquery/dist/jquery.js'
					 ,'jquery-ui.js': 'jquery-ui/jquery-ui.js'
				     ,'angular.js': 'angular/angular.js'
				}
			},
			css: {
				options: {
					destPrefix: 'css/vendor'
				},
				files: {
					'bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
					,'bootstrap.css.map': 'bootstrap/dist/css/bootstrap.css.map'
					,'jquery.fileupload.css': 'jquery-file-upload/css/jquery.fileupload.css'
					,'jquery.fileupload-ui.css': 'jquery-file-upload/css/jquery.fileupload-ui.css'
					,'jquery.fileupload-noscript.css': 'jquery-file-upload/css/jquery.fileupload-noscript.css'
					,'jquery.fileupload-ui-noscript.css': 'jquery-file-upload/css/jquery.fileupload-ui-noscript.css'
				}
			},
			fonts: {
				files: {
					'css/fonts': 'bootstrap/dist/fonts'
				}
			}
		}
	});
};