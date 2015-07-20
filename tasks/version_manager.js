/*
 * grunt-version-manager
 * https://github.com/jln/grunt-version-manager
 *
 * Copyright (c) 2015 JLN
 * Licensed under the MIT license.
 */

'use strict';

var git = require('git-rev');

module.exports = function (grunt) {
  function copyOptions(options) {
    var results = {};

    for (var option in options) {
      if (option !== 'branch' && options.hasOwnProperty(option)) {
        results[option] = options[option];    
      }
    }

    return results;
  }

  function markIfSnapshot(gitBranch, optionsBranch, metadata) {
      if (gitBranch !== optionsBranch) {
        metadata.version += "-SNAPSHOT"
      }
  }

  grunt.registerTask('version_manager', 'Plugin for managing applications version, based on git branch.', function() {
    var options = this.options(),
        done = this.async();

    git.branch(function (branch) {
      var metadata = copyOptions(options);
      
      markIfSnapshot(branch, options.branch, metadata);

      grunt.log.writeln(JSON.stringify(metadata));
      done();
    });
  });
};
