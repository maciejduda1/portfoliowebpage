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
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 1 version']})
                ]
            },
            dist: {
                src: 'public/css/style.css' 
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
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['browserSync', 'postcss', 'watch']);
  
  };