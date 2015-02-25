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
				{ // copy js library
					expand:true,
					flatten: true,
					cwd: 'bower_components',
					src: [
						'angular/angular.js',
						//'angular-route/angular-route.js',
						'angular-ui-router/release/angular-ui-router.js',
						//'angular-sanitize/angular-sanitize.js',
						//'angularSails/dist/ngsails.io.js',
						'bootstrap/dist/js/bootstrap.js',
						//'lodash/lodash.js',
						'jquery/dist/jquery.js'
					],
					dest: 'assets/js/dependencies'
				},
				{ // copy css
					expand:true,
					flatten: true,
					cwd: 'bower_components',
					src: [
						'bootstrap/dist/css/bootstrap.min.css',
						'font-awesome/css/font-awesome.min.css'
					],
					dest: 'assets/styles'
				},
				{ // copy fonts
					expand:true,
					flatten: true,
					cwd: 'bower_components',
					src: [
						//'bootstrap/dist/fonts/*',
						'font-awesome/fonts/*'
					],
					dest: 'assets/fonts'
				}
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
