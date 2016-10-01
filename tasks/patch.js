/*
 * grunt-patcher
 * https://github.com/leider/grunt-patch
 *
 * Licensed under the MIT license.
 */

module.exports = grunt => {
  'use strict';

  grunt.registerMultiTask('patch', 'Grunt Plugin to patch files.', function () {
    const options = this.options({
      patch: false
    });

    if (!options.patch) {
      grunt.log.error('The option `patch` must either be a patch string or path to a patch file.');
      return false;
    }

    if (grunt.file.exists(options.patch) && grunt.file.isDir(options.patch)) {
      grunt.log.error('The location `' + options.patch + '` is not a valid file.');
      return false;
    }

    if (this.files.length > 1) {
      grunt.log.warn('You may only patch one file per task.');
      return false;
    }

    this.files.forEach(f => {
      const result = require('diff').applyPatch(grunt.file.read(f.src), grunt.file.read(options.patch));
      
      if (!result) {
        grunt.log.warn('Patch failed. Please check your patch and its corresponding version.');
        return false;
      }
      // Write the destination file.
      grunt.file.write(f.dest, result);

      // Print a success message.
      grunt.log.writeln('File "' + f.src + '" was patched successfully. Output file: "' + f.dest + '".');
    });
  });

};
