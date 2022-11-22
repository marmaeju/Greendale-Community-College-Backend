const { Student_Course, Student, Course } = require('../models')

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

const getClassSchedule = async (req, res) => {
  try {
    const classSchedule = await Student.findByPk(req.params.student_id, {
      include: [
        {
          model: Course,
          as: 'schedule',
          through: { attributes: ['grade'] }
        }
      ]
    })
    res.send(classSchedule)
  } catch (error) {
    throw error
  }
}
const getRoster = async (req, res) => {
  try {
    const classRoster = await Course.findByPk(req.params.course_id, {
      include: [
        {
          model: Student,
          as: 'roster',
          through: { attributes: ['grade'] }
        }
      ]
    })
    res.send(classRoster)
  } catch (error) {
    throw error
  }
}

const getStudentClasses = async (req, res) => {
  try {
    const classSchedule = await Student.findAll({
      where: {
        id: req.params.student_id
      },
      include: {
        model: Course,
        as: 'class_schedule',
        through: { attributes: [] }
      }
    })
    res.send(classSchedule)
  } catch (error) {
    throw error
  }
}

// const getClassRoster=async (req,res)=>{
//   try {
//     const classRoster = await Course.findByPk(req.params.course_id,{
//       include:[
//         {
//           model:Student,
//           as:'class_roster',
//           through:{attributes:[]}
//         }
//       ]
//     })
//     res.send(classRoster)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  getAllStudentCourses,
  createStudentCourse,
  getClassSchedule,
  getRoster,
  getStudentClasses
}
