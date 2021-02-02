import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/index.vue";
import Page from "@/pages/page.vue";
import Students from "@/pages/students.vue";
import Student from "@/pages/student.vue";
import NotFound from "@/pages/404.vue";
import AddStudent from "@/pages/addstudent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page",
    name: "page",
    component: Page,
  },
  {
    path: "/students",
    name: "students",
    component: Students,
  },
  {
    path: "/students/:slug",
    name: "student",
    component: Student,
    props: true,
  },
  {
    path: "/addstudent",
    name: "addstudent",
    component: AddStudent,
    props: true,
  },
  //redirects
  {
    path: '/allstudents',
    redirect: "/students",
  },
  //catchall 404
  {
    path:'/:catchALL(.*)',
    name: '404',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;