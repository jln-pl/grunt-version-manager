'use strict';

var grunt = require('grunt'),
cp = require('child_process');

function callGrunt(filename, callback) {
    var command = '../node_modules/.bin/grunt --gruntfile ' + filename + ' version_manager',
    options = {cwd: 'test/'};

    cp.exec(command, options, callback);
}

function getJsonFromOutput(output) {
    var start = output.indexOf('{'),
    end = output.indexOf('}') - start + 1;

    return output.substr(start, end);
}

exports.version_manager = {
    pass: function (test) {
        var actual, expected;

        test.expect(1);

        callGrunt('gruntfile-pass.js', function (error, stdout) {
            expected = '{"version":"0.1.0"}';

            actual = getJsonFromOutput(stdout);

            test.equal(actual, expected, 'should return given options unchanged');
            test.done();
        });
    },

    failed: function (test) {
        var actual, expected;

        callGrunt('gruntfile-fail.js', function (error, stdout) {
            expected = '{"version":"0.1.0-SNAPSHOT"}';

            actual = getJsonFromOutput(stdout);

            test.equal(actual, expected, 'should return given options with snapshot version');
            test.done();
        });
    }
};
