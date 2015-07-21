# grunt-version-manager

> Plugin for managing applications version (release, snapshot), based on git branch.

This plugin adds "-SNAPSHOT" suffix to given 'version'* if it is called from any other branch then 'release branch'*.

*version and release branch should be defined in plugin options

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-version-manager --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-version-manager');
```

## The "version_manager" task

### Overview
In your project's Gruntfile, add a section named `version_manager` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  version_manager: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

Only two options are required - 'branch' and 'version'. You can add any other string options. They will be displayed with 'version' on the stdout.

#### options.branch
Type: `String`
Default value: `master`

A string value that describes release branch.

#### options.version
Type: `String`
Default value: `0.0.0`

A string value that describes version of your project.

### Usage Examples

#### Simple config

```js
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  version_manager: {
    options: {
      branch: 'master',
      version: '<%= pkg.version %>'
    }
  },
});
```

#### Config with custom options
```js
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  version_manager: {
    options: {
      branch: 'master',
      version: '<%= pkg.version %>',
      desc: 'some description',
      author: 'some author'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
