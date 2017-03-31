let counter = { css: 1, js: 1, img: 1 }
let list = {}

const generators = {
  css: {
    build(fly, opts) {
      return fly.source(opts.source)
        .sass({ outputStyle: 'compressed' })
        .autoprefixer()
        .target(opts.target)
    },
    dev(fly, opts) {
      return fly.source(opts.source)
        .sass({ outputStyle: 'expanded', sourceMapEmbed: true })
        .autoprefixer()
        .target(opts.target)
    }
  }
}

const createGenerator = function(fly, taskDefinition, build=false) {
  return build ?
    generators[taskDefinition.type].build(fly, taskDefinition) :
    generators[taskDefinition.type].dev(fly, taskDefinition)
}

const nextTaskId = function(taskDefinition){
  const c = counter[taskDefinition.type]++;
  return [taskDefinition.type, '_', c].join('')
}

const addTask = function(taskDefinition, build){
  list[nextTaskId(taskDefinition)] = function* (fly) {
    yield createGenerator(fly, taskDefinition, build)
  }
}

const addDefaultTask = function(func){
  list['default'] = func
}

module.exports = {
  list: list,
  add: addTask,
  default: addDefaultTask
}