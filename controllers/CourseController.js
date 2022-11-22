const { Course } = require('../models')

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}
const getOneCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id)
    res.send(course)
  } catch (error) {
    throw error
  }
}
const createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body)
    res.send(newCourse)
  } catch (error) {
    throw error
  }
}

const deleteCourse = async (req, res) => {
  try {
    const course = await Course.destroy({ where: { id: req.params.course_id } })
    res.send('course deleted')
  } catch (error) {}
}

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourse,
  deleteCourse
}
