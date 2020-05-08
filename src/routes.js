import Home from './components/home/Index.vue'
import PageNotFound from './components/PageNotFound.vue';
export default [
 {
   path:"/",
   name:"home",
   component: Home
 },
 {
   path: '*',
   component: PageNotFound,
 },
];
