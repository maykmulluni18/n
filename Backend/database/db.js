import { Sequelize } from "sequelize";

const db = new Sequelize('almacen','root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;