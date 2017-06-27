const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const chalk = require('chalk');

let upper_first_letter = (word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1)
}

let write_file = (path, content, message)=>{
  fs.writeFile(path, content, (e)=>{
    if(e)  console.log(chalk.red(e))
    else   console.log(chalk.bold.cyan(message))
  })
}

let g_controller = (action)=>{
  const path = "./controllers/"+ action +".controller.js";
  const content = `let ${action} = require("../models/${action}.model.js");
let ${upper_first_letter(action)}Controller = module.exports = exports = {
    all: async (req, res)=>{
      let d = await ${action}.all()
      res.send(d)
    },
    get: async (req, res)=>{
      let d = await ${action}.find(req.params.id)
      res.send(d)
    },
    create: async (req, res)=>{
      let params = req.body
      let d = await ${action}.create(params)
      res.send(d)
    },
    update: async (req, res)=>{
      let params = req.body
      let d = await ${action}.update(req.params.id, params)
      res.send({ changedNum: d })
    },
    remove: async (req, res)=>{
      let d = await ${action}.remove(req.params.id)
      res.send({ removedNum: d })
    }
}
`
  const message = `${action}.controller.js generated, found in controllers please.` 
  write_file(path, content, message)
}
let g_model = (action, props)=>{
  let prop_tmp = `_model: '${action}',
  `
  props.forEach((p, i)=>{ 
    if(i < props.length -1){
      prop_tmp += `${p}: '',
  `
    }else{
      prop_tmp += `${p}: ''`
    }
  })
  const path = "./models/"+ action + ".model.js"
  const content = `let L = require('northern-lightning')
let prop = {
  ${prop_tmp}  
}
let ${upper_first_letter(action)} = L.model(prop)

module.exports = exports = ${upper_first_letter(action)}`

  const message = `${action}.model.js generated, found in models please.` 
  write_file(path, content, message)
}

module.exports = exports = {
  controller: g_controller,
  model: g_model
}