import { RouteRecordRaw } from "vue-router";

const auth:RouteRecordRaw[] = [
    {
        path:'/',
        component: ()=>import('layouts/authLayout.vue'),
        children:[
            {path:'', name:'main_page', component:()=>import('pages/IndexPage.vue')},
            {path:'info/:unique', name:'book_info', component:()=>import('pages/bookInfoPage.vue')},
            {path:'login', name:'login_page', component:()=>import('pages/authPages/loginPage.vue')},
            {path:'registration', name:'registration_page', component:()=>import('pages/authPages/registrationPage.vue')},
            {path:'borrowedBooks', name:'borrowed_books', component:()=>import('pages/borrowedBooksPage.vue')},
    ]
    }
]
export default auth