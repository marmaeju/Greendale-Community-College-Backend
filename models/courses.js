'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.Student, {
        foreignKey: 'StudentId'
      })
      Course.belongsToMany(models.Student, {
        foreignKey: 'CourseId',
        through: models.Student_Course
      })
    }
  }
  Course.init(
    {
      courseName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return courses
}
