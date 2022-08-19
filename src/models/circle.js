module.exports = (sequelize, DataTypes) => {
  const Circle = sequelize.define('Circle', {
    title: DataTypes.STRING,
    acDate: DataTypes.STRING,
    acPlace: DataTypes.STRING,
    overview: DataTypes.TEXT,
    inCollege: DataTypes.STRING,
    member: DataTypes.NUMBER,
    shinkan: DataTypes.TEXT,
    picture: DataTypes.STRING,
    shinkan_info: DataTypes.STRING,
    genre: DataTypes.STRING
  })
  return Circle
}