'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student_Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_Course.init(
    {
      studentId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      grade: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Student_Course',
      tableName: 'student_courses'
    }
  )
  return Student_Course
}
