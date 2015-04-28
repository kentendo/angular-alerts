module.exports = function(grunt) {

  grunt.initConfig({

    pkg : grunt.file.readJSON('package.json'),

    jshint : {
      files : ['Gruntfile.js', 'src/*.js'],
      options : {
        globals : {
          jQuery : true
        }
      }
    },
    uglify : {
      options : {
        mangle : false
      },
      alert : {
        files : {
          'dist/k-alert.min.js' : ['src/k-alert.js']
        }
      }
    },
    cssmin : {
      alert : {
        files : {
          'dist/k-alert.min.css' : ['src/k-alert.css']
        }
      }
    },
    watch : {
      files : ['<%= jshint.files %>'],
      tasks : ['jshint']
    },
    karma : {
      unit : {
        configFile : 'test/karma.conf.js'
      },
      continuous : {
        configFile : 'test/karma.conf.js',
        singleRun : true,
        browsers : ['PhantomJS']
      },
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'karma', 'uglify', 'cssmin']);

};
