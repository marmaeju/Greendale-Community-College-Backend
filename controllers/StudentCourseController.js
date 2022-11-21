const { Student_Course } = require('../models')

const getAllStudentCourses = async (req, res) => {
  try {
    const studentCourses = await Student_Course.findAll()
    res.send(studentCourses)
  } catch (error) {
    throw error
  }
}

const createStudentCourse = async (req, res) => {
  try {
    const newStudentCourse = await Student_Course.create(req.body)
    res.send(newStudentCourse)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllStudentCourses,
  createStudentCourse
}
