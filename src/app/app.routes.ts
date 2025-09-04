import {Routes} from '@angular/router';
import {Search} from './Components/search/search';
import {Student} from './Components/student/student';
import {Home} from './Components/home/home';

export const routes: Routes = [

  {
    path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'search',
    component: Search
  },
  {
    path: 'students/:studentName',
    component: Student
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
