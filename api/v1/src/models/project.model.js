module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    uuid: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false
    },
    name: DataTypes.STRING,
  }, {
    freezeTableName: true,
    timestamps: false
  })

  return Project
}