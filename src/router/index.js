import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tasks from '../views/tasks.vue'
import Students from '../views/students.vue'
import AddStudent from '../views/addstudent.vue'
import Courses from '../views/courses.vue'
import AddCourse from '../views/addcourse.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
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
