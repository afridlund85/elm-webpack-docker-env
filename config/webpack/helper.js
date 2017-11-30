let path = require('path')

const PROJECT_ROOT = path.resolve(__dirname, '../..')

exports.SRC = path.resolve(PROJECT_ROOT, 'src')
exports.DIST = path.resolve(PROJECT_ROOT, 'dist')

exports.rootPath = function(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [PROJECT_ROOT].concat(args))
}
