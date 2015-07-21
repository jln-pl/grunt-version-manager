'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        version_manager: {
            options: {
                version: '0.1.0',
                branch: 'not-master'
            }
        }
    });

    grunt.loadTasks('./../tasks');
};
