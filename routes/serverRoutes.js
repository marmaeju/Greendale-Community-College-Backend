const Router = require('express').Router()
const studentController = require('../controllers/StudentController')
const courseController = require('../controllers/CourseController')
const studentCourseController = require('../controllers/StudentCourseController')

Router.get('/student', studentController.getAllStudents)
Router.get('/student/:id', studentController.getOneStudent)
Router.post('/student', studentController.createStudent)
Router.put('/student/:student_id', studentController.updateStudent)

Router.get('/course', courseController.getAllCourses)
Router.get('/course/:id', courseController.getOneCourse)
Router.post('/course', courseController.createCourse)

Router.get('/studentcourse', studentCourseController.getAllStudentCourses)
Router.post('/studentcourse', studentCourseController.createStudentCourse)
Router.get(
  '/studentcourse/roster/:course_id',
  studentCourseController.getRoster
)
Router.get(
  '/studentcourse/schedule/:student_id',
  studentCourseController.getClassSchedule
)

// Router.get('/studentcourse/roster/:course_id', studentCourseController.getClassRoster)
Router.get('/schedule/:student_id', studentCourseController.getStudentClasses)

module.exports = Router
