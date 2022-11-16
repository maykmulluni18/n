//const {ModelsBienes} = require('./ModelsBienes')
//const {ModelsNea} = require('./ModelsNea')
//const {ModelsSedes} = require('./ModelsSedes')
//const {Models} = require('./Models')

import ModelsBienes from './ModelsBienes.js'
import ModelsNea from './ModelsNea.js'
import ModelsSedes from './ModelsSedes.js'
import Models from './Models.js'
 
ModelsNea.belongsTo(ModelsBienes,{foreignKey: "binenes_idbinenes"})
ModelsBienes.hasOne(ModelsNea,{foreignKey: "id"})

ModelsNea.belongsTo(ModelsSedes,{foreignKey: "sedes_idsedes"})
ModelsSedes.hasOne(ModelsNea,{foreignKey: "id"})


module.exports ={
    Models,
    ModelsBienes,
    ModelsNea,
    ModelsSedes
}


