var program = require('commander')
var canaryPerch = require('canary-perch')
var debug = require('debug')('karoo')

program.option('-e --host <host>', 'ElasticSearch host (including port)', {required: true})
.option('-i --index <index>', 'index to extract facts from', {required: true})
.option('-o --output <index>', 'index to putput extracted facts to', {required: true})
.option('-x --input-type <input-type>', 'elastic search input document type')
.option('-y --output-type <output-type>', 'elastic seach output document type')
.option('-d --dict-dir <dict-dir>', 'dictionary directory', {required: true})

program.parse(process.argv)

var inputType = program.inputType ? program.inputType : 'unstructured'
var outputType = program.outputType ? program.outputType : 'snippets'

debug(program.dictDir)

var extractor = new canaryPerch.extract([program.host],
  program.index,
  program.output,
  inputType,
  outputType,
  program.dictDir
)

extractor.readDictionaries()