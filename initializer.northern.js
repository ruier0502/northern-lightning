#!/usr/bin/env node
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const chalk = require('chalk');

const root_dir = "../../"

let write_file = (path, content, message)=>{
  fs.writeFile(path, content, (e)=>{
    if(e)  console.log(chalk.red(e))
    else   console.log(chalk.bold.cyan(message))
  })
}

let g_router = ()=>{
  const path = root_dir+ "config/router.js"
  const content = `let L = require('northern-lightning')

// L.router('<url pattern>', <action controller>)
// example: L.router('user', UserController)`
  const message = "project initialized"
  write_file(path, content, message)
}

let create_folders = async ()=>{
  const folder_list = ['assets', 'config', 'controllers', 'models', 'public']
  for(let d in folder_list){
    if (!fs.existsSync(folder_list[d])){
      await fs.mkdirSync(root_dir+ folder_list[d]);
    }
  }
  g_router()
}

create_folders()
