/**
 * Configuration values
 */
module.exports = {
  global: {
    gulpPath: 'gulp/',
    outputPath: 'build/',
    cleanWhitelist: ['index.html']
  },
  js: {
    fileGlob: '**/*.js',
    testFileGlob: '**/*.spec.js',
    srcPath: 'src/',
    entryFile: 'parse-srt.js',
    libraryName: 'parseSRT',
    outputPath: '',
    outputFile: 'parse-srt.js',
    outputMinFile: 'parse-srt.min.js'
  },
  unitTests: {
    karmaConfigFile: 'karma.conf.js',
    entryFile: 'tests/unit-tests.js',
    coverageOutputPath: 'tests/'
  }
}
