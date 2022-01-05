const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    // platform: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://i.blogs.es/27d6c6/halo-infinite1/1366_2000.jpeg'
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  },
  {
    timestamps: false
  });
};
