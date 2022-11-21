const { Student } = require('../models')

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const getOneStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    res.send(student)
  } catch (error) {
    throw error
  }
}
const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body)
    res.send(newStudent)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllStudents,
  getOneStudent,
  createStudent
}
