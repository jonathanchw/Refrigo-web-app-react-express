module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('categorias', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombreCategoria: DataTypes.STRING(200)
  },
    {
      freezeTableName: true,
      timestamps: false
    });
    
  Categorias.associate = (models) => {
    Categorias.hasMany(models.items);
  };
  return Categorias;

}