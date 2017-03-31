const p = require('path')
const pkg = require(p.join(__dirname, '..', 'package'))

const flyPluginRegexp = /^(@.*?\/fly-|fly-)/i
let flyPlugins = Object.keys(pkg.dependencies)
  .filter( dep => flyPluginRegexp.test(dep) )
  .map( dep => require(dep) )

module.exports = flyPlugins