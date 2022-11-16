import db from '../database/db.js';
import { Sequelize } from "sequelize";
import ModelsAdministrdores from "./Models.js";
import ModelsBienes from './ModelsBienes.js';
import ModelsSedes from './ModelsSedes.js';

const { DataTypes } = Sequelize;
const ModelsNeaEntradas = db.define('nea_entradas', {

    id_administradores: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_sedes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tipo_de_ingreso: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recibido_por: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    tipo_de_obra: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    tipo_de_moneda: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    tipo_de_almacen: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    tipo_de_cambio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_de_uso: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_de_nea: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_de_registro: {
        type: DataTypes.DATE,
        allowNull: false,
    }

}, {
    freezeTableName: true
});

ModelsBienes.belongsToMany(ModelsNeaEntradas, { through: "nea_bien" })
ModelsNeaEntradas.belongsToMany(ModelsBienes, { through: "nea_bien" })


ModelsNeaEntradas.belongsTo(ModelsAdministrdores, { foreignKey: "id_administradores" })
ModelsAdministrdores.hasOne(ModelsNeaEntradas, {
    foreignKey: {
        name: 'id',
    }
})

ModelsNeaEntradas.belongsTo(ModelsSedes, { foreignKey: "id_sedes"})
ModelsSedes.hasOne(ModelsNeaEntradas,{foreignKey: "id" })

export default ModelsNeaEntradas