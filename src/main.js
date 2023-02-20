import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import NotFound from './components/NotFound/404';
import Home from './components/Pages/home/home.vue';
import List from './components/Pages/list/list.vue';
import Hotel from './components/Pages/hotel/Hotel.vue';
import NavBar from './components/Navbar/Navbar.vue';
import Header from './components/header/Header.vue';
import DatePicker from './components/datePicker/formPicker.vue';
import store from './components/Store/store.js';
import featuredComp from './components/Featured/featuredComp.vue';
import Footer from './components/footer/Footer.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBed, faCalendarDays, faCar, faCity, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBed, faTaxi, faPlane, faPerson, faCalendarDays, faCar, faCity)
// creating an instance of DatePicker
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
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('nav-bar', NavBar);
app.component('app-header', Header);
app.component('app-date-picker', DatePicker);
app.component('app-feature', featuredComp);
app.component('app-footer', Footer);
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(store);
app.mount('#app');


