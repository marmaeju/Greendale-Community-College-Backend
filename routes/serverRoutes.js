const Router = require('express').Router()
const studentController = require('../controllers/StudentController')
const courseController = require('../controllers/CourseController')

Router.get('/student', studentController.getAllStudents)
Router.get('/student/:id', studentController.getOneStudent)
Router.post('/student', studentController.createStudent)

Router.get('/course', courseController.getAllCourses)
Router.get('/course/:id', courseController.getOneCourse)
Router.post('/course', courseController.createCourse)

module.exports = Router
