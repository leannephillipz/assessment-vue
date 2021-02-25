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
import CourseStudents from '../views/courseStudents.vue'
import Login from '../views/auth/login.vue'
import Signup from '@/views/auth/signup.vue'
import Profile from '@/views/profile.vue'
import NotFound from '@/views/404.vue'
import Assessment from '@/views/assessment.vue'
import AddAssessment from '@/views/addassessment.vue'

//route guards

import { projectAuth } from '@/firebase/config'
const requireAuth =  (to, from, next) => {
  // we need to wait for firebase to get connection or it will redirect on refresh so we set up the app in main.js
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Login'})
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask,
    beforeEnter: requireAuth
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    beforeEnter: requireAuth
  },
  {
    path: '/assessment',
    name: 'Assessment',
    component: Assessment,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/addassessment',
    name: 'AddAssessment',
    component: AddAssessment,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/students',
    name: 'Students',
    component: Students,
    beforeEnter: requireAuth
  },
  {
    path: '/student/:slug',
    name: 'Student',
    component: Student,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/addstudent',
    name: 'AddStudent',
    component: AddStudent,
    beforeEnter: requireAuth
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    beforeEnter: requireAuth
  },
  {
    path: '/course/:code',
    name: 'Course',
    component: Course,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/course/students/:code/:course',
    name: 'CourseStudents',
    component: CourseStudents,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/addcourse',
    name: 'AddCourse',
    component: AddCourse,
    beforeEnter: requireAuth
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
