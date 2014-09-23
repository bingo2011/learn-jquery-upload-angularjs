module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.initConfig({
		bowercopy: {
			options: {
				srcPrefix: 'bower_components'
			},
			scripts: {
				options: {
					destPrefix: 'scripts/vendor'
				},
				files: {
					 'jquery.js': 'jquery/dist/jquery.js'
				    ,'angular.js': 'angular/angular.js'
				}
			}
		}
	});
};