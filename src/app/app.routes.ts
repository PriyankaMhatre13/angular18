import { Routes } from '@angular/router';
import { DashboardComponent } from './feature-component/dashboard/dashboard.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
      {
        path:'dashboard',
        title:'dashboard',
        component:DashboardComponent
    },
    // {
    //     path:'comp1',
    //     title:'componenet1',
    //     // component: ComponenetOneComponent
    //     // loadComponent:()=> import('./componenet-one/componenet-one.component').then((c)=> c.ComponenetOneComponent)
    // },
    // {
    //     path:'comp2',
    //     title:'componenet2',
    //     // component: ComponenetTwoComponent
    // }
];
