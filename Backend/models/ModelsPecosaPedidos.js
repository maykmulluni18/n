import db from '../database/db.js';
import { Sequelize } from "sequelize";
import ModelsBienes from './ModelsBienes.js';
import ModelsAdministrativos from './Models.js';
import ModelsSedes from './ModelsSedes.js';
const { DataTypes } = Sequelize;
const ModelsPecosaPedidos = db.define('pecosa_pedidos', {

    dependencias: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_administrativos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_sedes: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,

    },
    almacen: {
        type: DataTypes.STRING,
        allowNull: false,

    },

}, {
    freezeTableName: true
});

ModelsBienes.belongsToMany(ModelsPecosaPedidos, { through:"precosa_bienes" })
ModelsPecosaPedidos.belongsToMany(ModelsBienes, { through:"pecosa_bienes" })

ModelsPecosaPedidos.belongsTo(ModelsAdministrativos, { foreignKey: "id_administrativos" })
ModelsAdministrativos.hasOne(ModelsPecosaPedidos, {
    foreignKey: {
        name: 'id',
    }
})

ModelsPecosaPedidos.belongsTo(ModelsSedes, { foreignKey: "id_sedes"})
ModelsSedes.hasOne(ModelsPecosaPedidos,{
    foreignKey: {
        name: 'id',
    }
})

export default ModelsPecosaPedidos