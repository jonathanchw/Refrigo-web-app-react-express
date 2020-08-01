module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('items', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING(200),
    precio: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING(200),
    oferta: DataTypes.BOOLEAN,
    novedades: DataTypes.BOOLEAN
  },
    {
      freezeTableName: true,
      timestamps: false
    });
  Items.associate = (models) => {
    Items.belongsTo(models.categorias);
  };
  return Items;

}