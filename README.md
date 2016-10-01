# grunt-patch [![Build Status](https://travis-ci.org/leider/grunt-patch.svg?branch=master)](https://travis-ci.org/leider/grunt-patch.svg?branch=master)

> Grunt Patch is a grunt plugin which can be used to patch files using grunt.

## Getting Started
This is a fork based on https://github.com/nettantra/grunt-patch. Main reason is to have current dependencies.

This plugin requires Grunt `^1` and node `>=4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-patcher --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-patcher');
```
Note: This will be registered as `patch`.

### Breaking changes to `grunt-patch'
* Option for patch to be a string removed. Patch *must* be a patch-file's name now.

## The "patch" task

### Overview
In your project's Gruntfile, add a section named `patch` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  patch: {
    myPatchTask: {
      options: {
        patch: 'test/fixtures/default.patch'
      },
      files: {
        'tmp/output.default.patched': 'test/fixtures/input.default'
      }
    }
  },
});
```

### Options

#### options.patch
Type: `String`
Default value: `false`

This is a string value which must be the path of a patch file. This is a required option.

### Usage Examples

#### Default Options
In this example, the default options are used to patch an input file named `input.default` with `default.patch` to output a patched file named `output.default.patched`.

```js
grunt.initConfig({
  patch: {
    options: {
      patch: 'test/fixtures/default.patch'
    },
    files: {
      'tmp/output.default.patched': 'test/fixtures/input.default'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License

  - [The MIT License](http://opensource.org/licenses/MIT)


## Release History
 * 2016-10-01   v1.0.0 rename to grunt-patcher in package.json
 * 2014-07-31   v0.1.7  Updating verbose.
 * 2014-07-31	v0.1.6	Added exceptions to fail patch.
 * 2014-07-31	v0.1.5	Updates to README.
 * 2014-07-31	v0.1.2	Added Travis CI to README.
 * 2014-07-31	v0.1.1	Updated the README file with Release History.
 * 2014-07-31	v0.1.0	First release of grunt-patch.

no copyright by myself.

original Copyright (c) [NetTantra Technologies](http://www.nettantra.com/)

---
