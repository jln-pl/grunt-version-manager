/*
 * grunt-version-manager
 * https://github.com/jln/grunt-version-manager
 *
 * Copyright (c) 2015 JLN
 * Licensed under the MIT license.
 */

'use strict';

var git = require('git-rev');

module.exports = function(grunt) {
  grunt.registerTask('version_manager', 'Plugin for managing applications version, based on git branch.', function() {
    var options = this.options();
    var done = this.async();

    git.branch(function (str) {
      grunt.log.writeln(str);
      done();
    });

    grunt.log.writeln(options.version);
  });
};
