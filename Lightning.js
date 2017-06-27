let db = require('./lightning.db.js')
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('assets'));

let Lightning = module.exports = exports = {}

Lightning.model = (prop)=>{
  let model = {};
  model.prop = prop;
  model.all = ()=>{
    return db.all(prop._model)    
  }
  model.create = (params)=>{
    let _params = {};
    for(let p in prop) {
      if(params.hasOwnProperty(p) && typeof params[p] !== 'undefined'){
        _params[p] = params[p]
      } else {
        _params[p] = prop[p]
      }
    }
    return db.create(_params) 
  }
  model.update = (id, params)=>{
    let _params = {};
    for(let p in prop) {
      if(params.hasOwnProperty(p) && typeof params[p] !== 'undefined'){
        _params[p] = params[p]
      } else {
        console.log(p, '....')
        _params[p] = prop[p]
      }
    }
    return db.update(id, _params) 
  }

  model.find = db.find
  model.remove = db.remove

  return model
}

Lightning.router = (action, controller)=>{
  let _action = '/' + action
  let map = { 
    all: _action + 's',
    create: _action,
    get: _action + '/:id',
    update: _action + '/:id',
    remove: _action + '/:id' 
  }
  app.route(map.all).get(controller.all)
  app.route(map.create).post(controller.create)
  app.route(map.get).get(controller.get)
  app.route(map.update).put(controller.update)
  app.route(map.remove).delete(controller.remove)
}

Lightning.start = ()=>{
  app.listen(3000);
}