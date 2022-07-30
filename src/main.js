import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import NotFound from './components/NotFound/404';
import Home from './components/Pages/home/home.vue';
import List from './components/Pages/list/list.vue';
import Hotel from './components/Pages/hotel/Hotel.vue';
import NavBar from './components/Navbar/Navbar.vue';
import Header from './components/header/Header.vue';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: Home},
        {path:'/:notFound(.*)', component: NotFound},
        {path:'/hotels', component: List},
        {path:'/hotels/:id', component: Hotel},
    ]
})

const theData = (route) =>{
    console.log(route);
    return{
        crazyProp: route.path + ' some other prop'
    }
}
app.component('nav-bar', NavBar);
app.component('app-header', Header);
app.use(router);
app.mount('#app');


