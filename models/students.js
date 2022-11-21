'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Student.hasMany(models.Course, {
      //   foreignKey: 'id'
      // })

      Student.belongsToMany(models.Course, {
        as:"schedule",
        foreignKey: 'studentId',
        through: models.Student_Course
      })
    }
  }
  Student.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
      gpa: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
