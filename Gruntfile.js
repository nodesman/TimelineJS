module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tabtospace: {
          options: {
            spaceCnt: 4
          },
          main: {
            src: ['source/**/*.js']
          }
        },
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                eqnull: true,
                browser: true,
                globals: { jQuery: true },
                boss: true
            },
            sources: {
                src: ['source/**/*.js' ]
            }
        },
        concat: {
            dev: {
                src: [
                    'source/js/Core/Core/VMM.js',
                    'source/js/Core/Core/VMM.Library.js',
                    'source/js/Core/Core/VMM.Browser.js',
                    'source/js/Core/Core/VMM.FileExtention.js',
                    'source/js/Core/Core/VMM.Date.js',
                    'source/js/Core/Core/VMM.Util.js',
                    'source/js/Core/Library/LazyLoad.js',
                    'source/js/Core/Core/VMM.LoadLib.js',
                    'source/js/Core/Language/VMM.Language.js',
                    'source/js/Core/Core/VMM.Core.js',
                    'source/js/Core/Media/VMM.ExternalAPI.js',
                    'source/js/Core/Media/VMM.MediaElement.js',
                    'source/js/Core/Media/VMM.MediaType.js',
                    'source/js/Core/Media/VMM.TextElement.js',
                    'source/js/Core/Media/VMM.Media.js',
                    'source/js/Core/Slider/VMM.DragSlider.js',
                    'source/js/Core/Slider/VMM.Slider.js',
                    'source/js/Core/Slider/VMM.Slider.Slide.js',
                    'source/js/Core/Library/AES.js',
                    'source/js/Core/Library/bootstrap-tooltip.js',
                    'source/js/Core/VMM.StoryJS.js',
                    'source/js/VMM.Timeline.js',
                    'source/js/VMM.Timeline.TimeNav.js',
                    'source/js/VMM.Timeline.DataObj.js'
                ],
                dest: 'build/js/timeline.js'
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-tabtospace');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task
    grunt.registerTask('default', ['uglify']);
};

