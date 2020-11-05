module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    project_uuid: DataTypes.STRING,
    post: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  })

  return Post
}
