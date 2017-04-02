module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    console: true
                }
            },
            '<%= pkg.name %>': {
                src: ['js/**/*.js']
            }
        },
        
        concat: {
            dists: {
                src: ['js/file1.js', 'js/file2.js'],
                dest: 'dest/build.js'
            }
        },
        
        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            
            build: {
                src: 'dest/build.js',
                dest: 'dest/build.min.js'
            }
        },
        
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },
                
                files: {
                    'dest/style.min.css': ['css/style.css', 'css/style2.css']
                }
            }
        },
        watch: {
            scripts: {
                 files: ['js/*.js'],  
                 tasks: ['jshint', 'concat', 'uglify'] 
            },
            css: {
                 files: ['css/*.css'],  
                 tasks: ['cssmin']
            }
              
        }
    });
    
    
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'watch']);
    grunt.registerTask('test', ['']);
};