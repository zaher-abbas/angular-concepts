import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  route: Router = inject(Router);
  studentName!: string;

  navigateToStudent() {
    this.route.navigate(['/students', this.studentName]);
  }
}
