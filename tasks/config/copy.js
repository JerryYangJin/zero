/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
		bower: {
			files: [
				{
					expand:true,
					flatten: true,
					cwd: 'bower_components',
					src: [
						'angular/angular.js'
						//'angular/angular.js.map'
						//'angular-route/angular-route.js',
						//'angular-route/angular-route.js.map',
						//'angular-resource/angular-resource.js',
						//'angular-resource/angular-resource.js.map',
						//'angular-sanitize/angular-sanitize.js',
						//'angular-sanitize/angular-sanitize.js.map',
						//'angular-bootstrap/ui-bootstrap-tpls.js',
						//'angular-bootstrap/ui-bootstrap.js',
						//'requirejs/require.js'
						//'requirejs-domready/domReady.js',
						//'requirejs-text/text.js',
						//'bootstrap/dist/js/bootstrap.js',
						//'jquery/dist/jquery.js',
						//'jquery/dist/jquery.map'
					],
					dest: 'assets/js/dependencies'
				},
				{
					expand:true,
					flatten: true,
					cwd: 'bower_components',
					src: [
					//'bootstrap/dist/css/bootstrap.min.css'
					],
					dest: 'assets/styles'
				},
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
