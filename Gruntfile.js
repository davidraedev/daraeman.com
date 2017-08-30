const mozjpeg = require( "imagemin-mozjpeg" );

module.exports = function( grunt ) {
	require( "jit-grunt" )( grunt );

	grunt.initConfig({
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: "img/full",
					src: [ "*.{png,jpg,gif}" ],
					dest: "img/min/",
				}]
			}
		},
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"css/main.css": "less/main.less"
				}
			}
		},
		watch: {
			styles: {
				files: [ "less/*.less" ],
				tasks: [ "less" ],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.registerTask( "default", [ "less", "imagemin" ] );
	grunt.registerTask( "minify_images", [ "imagemin" ] );
};