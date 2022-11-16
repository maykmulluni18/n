import ModelsPecosaPedidos from "../models/ModelsPecosaPedidos.js";
import ModelsBienes from "../models/ModelsBienes.js";
import ModelsAdministrativos from "../models/Models.js";
import ModelsSedes from "../models/ModelsSedes.js";

export const getPecosaPedidos = async(req, res)=>{
    try {
        const pecosapedidos = await ModelsPecosaPedidos.findAll({
            include: [ModelsAdministrativos, ModelsSedes, ModelsBienes]
        })
        res.json(pecosapedidos)
    } catch (error) {
        res.json({message: error.message})
    }
} 

export const getPecosaPedidosId = async(req, res) => {
    try {
        const pecosapedidos = await ModelsPecosaPedidos.findAll({
            where: {id: req.params.id},
            include: [ModelsAdministrativos, ModelsSedes, ModelsBienes]
        })
        res.json(pecosapedidos[0])
    } catch (error) {
        res.json({message: error.message})
    }
}


export const createPecosaPedidos = async(req, res) => {
    try {
        const pecosapedidos = await ModelsPecosaPedidos.create(req.body)
        res.json({'message':'Pecosa Pedidos creado con exito'})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updatePecosaPedidos = async(req, res) => {
    try {
        const pecosapedidos = await ModelsPecosaPedidos.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({'message':'Pecosa pedidos actualizado con exito'})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deletePecosaPedidos = async(req, res) => {
    try {
        const pecosapedidos = await ModelsPecosaPedidos.destroy({
            where: {id: req.params.id}
        })
        res.json({'message':'Pecosa pedidos eliminado con exito'})
    } catch (error) {
        res.json({message: error.message}) 
    }
}