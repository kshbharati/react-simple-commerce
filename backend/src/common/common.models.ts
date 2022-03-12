const dbConfig = require("../config/db.config");

export default class dbconfig {;
    Sequelize = require("sequelize");

    sequelize = new this.Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    });
}
