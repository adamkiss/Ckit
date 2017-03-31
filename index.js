#!/usr/bin/env node
"use strict"

const p = require('path')
const cwd = process.cwd()
const pkg = require(p.join(cwd, 'package'))

const Fly = require('Fly')
const plugins = require('./src/load-plugins')
const tasks = require('./src/tasks')

pkg.ckit.taskDefinitions.forEach((taskDef) => {
  tasks.add(taskDef, false)
})
tasks.default(function* (fly) {
  fly.start('css_1')
})

const fly = new Fly({ tasks: tasks.list, plugins, cwd })
fly.start()