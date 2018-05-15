module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        watch: {
            files: 'sass/*.scss', 
            tasks: ['sass'],
                options: {
                    spawn: false,
                }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        './*.html',
                        'scripts/*.js',
                    ]
                },
                options: {
                    watchTask: true,
                    server: './.'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserSync', 'watch']);
  
  };