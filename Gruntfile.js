module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        html2js: {
            main: {
                src: ['src/**/*.html'],
                dest: 'src/templates.js'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false,
                autoWatch: true
            },
            coverage: {
                configFile: 'karma.conf.js'
            }
        },

        open:{
            coverage: {
                path: './coverage/view/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['html2js', 'karma:unit']);
    grunt.registerTask('test', ['html2js', 'karma:unit', 'open:coverage']);
    grunt.registerTask('coverage', ['html2js', 'karma:coverage', 'open:coverage']);
}; 

