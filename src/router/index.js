import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Student from '../views/student.vue'
import AddTask from '../views/addtask.vue'
import Tasks from '../views/tasks.vue'
import Students from '../views/students.vue'
import AddStudent from '../views/addstudent.vue'
import Courses from '../views/courses.vue'
import Course from '../views/course.vue'
import AddCourse from '../views/addcourse.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/student/:slug',
    name: 'Student',
    component: Student,
    props: true
  },
  {
    path: '/addstudent',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/course/:code',
    name: 'Course',
    component: Course,
    props: true
  },
  {
    path: '/addcourse',
    name: 'AddCourse',
    component: AddCourse
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
