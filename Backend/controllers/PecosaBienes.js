import ModelsPecosaBienes from "../models/ModelsPecosaBienes.js";
import ModelsPecosaPedidos from "../models/ModelsPecosaPedidos.js";
import ModelsBienes from "../models/ModelsBienes.js";

export const getPecosaBienes = async (req, res ) => {
    try {
        const pecosabienes = await ModelsPecosaBienes.findAll({
            include: [ModelsBienes, ModelsPecosaPedidos]
        })
        res.json(pecosabienes) 
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getPecosaBienesId = async (req, res) => {
    try {
        const pecosabienes = await ModelsPecosaBienes.findAll({
            where: {id: req.params.id}
        })
        res.json(pecosabienes[0])
    } catch (error) {
        res.json({message: error.message})
    }
}


export const createPecosaBienes = async (req, res) => {
    try {
        const pecosabienes = await ModelsPecosaBienes.create(req.body)
        res.json({'message':'Pecosa de bienes creado con exito'})
    } catch (error) {
        res.json({message: error.messages})
    }
}

export const updatePecosaBienes = async (req, res) => {
    try {
        const pecosabienes = await ModelsPecosaBienes.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({'message':'Pecosa bienes actualizado con exito'})
    } catch (error) {
        res.json({message: error.messages})
    }
}

export const deletePecosaBienes = async (req, res) => {
    try {
        const pecosabienes = await ModelsPecosaBienes.destroy({
            where: {id: req.params.id}
        })
        res.json({'message': 'Pecosa bienes eliminado con exito'})
    } catch (error) {
        res.json({message: error.messages})
    }
}