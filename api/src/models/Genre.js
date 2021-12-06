const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre', {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false
    });
}
