#!/usr/bin/env node
const L = require('./Lightning.js');
const program = require('commander');
const chalk = require('chalk');
const gn = require('./generater.northern.js');
const router = require('../../config/router.js');

program
  .command('generate <action> [props...]')
  .alias('g')
  .action((action, props)=>{
    gn.controller(action)
    gn.model(action, props)
  });

program
  .command('server')
  .alias('s')
  .action(()=>{
    L.start()
    console.log('server start at http://localhost:3000')
  })
program.parse(process.argv);