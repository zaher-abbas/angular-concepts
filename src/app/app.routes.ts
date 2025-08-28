import {Routes} from '@angular/router';
import {Search} from './search/search';
import {Student} from './student/student';
import {Home} from './home/home';

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
