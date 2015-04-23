module.exports = function(grunt) {

  grunt.initConfig({

    pkg : grunt.file.readJSON('package.json'),

    jshint : {
      files : ['Gruntfile.js', 'k-alert.js'],
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
    jscs : {
      src : ['*.js', 'test/**/*.js'],
      options : {
        config : ".jscs.json"
      }
    },
    watch : {
      files : ['<%= jshint.files %>'],
      tasks : ['jshint']
    },
    // karma : {
    // unit : {
    // options : {
    // files : ['test/**/*.js']
    // }
    // }
    // },
    karma : {
      unit : {
        options : {
          frameworks : ['jasmine'],
          singleRun : true,
          browsers : ['PhantomJS'],
          files : ['bower_components/angular/angular.js', 'bower_components/angular-mocks/angular-mocks.js', 'src/*.js', 'test/*.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};
