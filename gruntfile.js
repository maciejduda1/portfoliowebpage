module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'public/css/style.css': 'public/sass/style.scss'
                }
            }
        },
        watch: {
            files: 'public/sass/*.scss', 
            tasks: ['sass'],
                options: {
                    spawn: false,
                }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'public/css/*.css',
                        'public/*.html',
                        'public/scripts/*.js',
                    ]
                },
                options: {
                    watchTask: true,
                    server: 'public/.'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserSync', 'watch']);
  
  };