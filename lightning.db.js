let Datastore = require('nedb')
let db  = new Datastore({ filename: 'data.db', autoload: true })
let bluebird = require('bluebird')
let Cursor  = db.find().constructor

bluebird.promisifyAll(Datastore.prototype);
bluebird.promisifyAll(Cursor.prototype);

let DAO = module.exports = exports = {
  all: async(model)=>{
    return db.findAsync({ _model: model })
  },
  find: async (id)=>{
    return await db.findOneAsync({ _id: id })
  },
  create: async (params)=>{
    return await db.insertAsync(params)
  },
  update: async (id, params)=>{
    return await db.updateAsync({ _id: id }, { $set: params })
  },
  remove: async (id)=>{
    return db.removeAsync({ _id: id }, {})
  }
}
