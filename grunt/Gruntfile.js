module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
    * Erase files and folders. During the build process
    * directories are generated and require clean up.
    */
    clean: {
      options: {
        force: true
      },
      build: {
        src: ['../dist']
      }
    },

    copy: {
      build: { 
        files: [
          //{expand: true, cwd: '../src/', src: ['*.md'], dest: '../dist/'},
          //{expand: true, cwd: '../src/', src: ['*.ico'], dest: '../dist/src/'},
          //{expand: true, cwd: '../src/font/', src: ['**'], dest: '../dist/src/font/'},
          //{expand: true, cwd: '../src/img/', src: ['**'], dest: '../dist/src/img/'},
          {expand: true, cwd: '../libs/font-awesome/fonts/', src: ['**'], dest: '../fonts/'},
          //{expand: true, cwd: '../libs/modernizr/', src: ['modernizr.js'], dest: '../dist/src/js/'},
          //{expand: true, cwd: '../libs/bootstrap/fonts', src: ['**'], dest: '../dist/src/font/'}
        ]
      }
    },

    /*
    * Concatenate .js
    */
    concat: { 
      options: {
        separator: ';'
      },
      build: {
        src: [
          '../js/breakpoint-label.js',
          '../js/mobile-first-demo.js'
        ],
        dest: '../js/rwd.min.js',
        nonull: true
      }
    },

    less: {
      build: {
        options: {
          yuicompress: false
        },
        files: {
          "../css/base.css": "../less/base.less",
          '../css/grid.css': "../less/grid.less",
          '../css/devices.css': "../less/devices.less",
          '../css/media-queries.css':'../less/media-queries.less'
        }
      }
    },

    /*
    * Sync properties across the various package.json files
    */
    package_sync: {
      package: {
        options: {
          master: "../package.json",
          properties: [
            "name",
            "description",
            "repository",
            "maintainers",
            "contributors",
            "homepage"
          ]
        },
        files: {
          "default" : ['../grunt/package.json','../bower.json']
        }
      }
    },

    /*
    * Minify the .js created by the concat task
    * and save it to the dist
    */
    uglify: { // !
      options: {
        mangle: false
      },
      build: {
        files: {
          //'../dist/src/js/app.min.js': ['../dist/src/js/app.js']
        }
      }
    },
    
    watch: { // !
      files: ['../less/**',"../*.html"],
      tasks: ['default'],
      options: {
        livereload: false
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-docs');
  grunt.loadNpmTasks('grunt-package-sync');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-regex-replace');
  grunt.loadNpmTasks('grunt-groundskeeper');
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.loadNpmTasks('grunt-docpad-styleguide-color');
  grunt.loadNpmTasks('grunt-docpad-styleguide-keyval');

  grunt.registerTask(
    'default', 
    [
      'clean',
      'less',
      'concat',
      'copy',
      'package_sync'
    ]);



};