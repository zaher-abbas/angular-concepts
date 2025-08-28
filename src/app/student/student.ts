import {Component, inject} from '@angular/core';
import {ActivatedRoute, ParamMap, RouterLink} from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [
    RouterLink
  ],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  route: ActivatedRoute = inject(ActivatedRoute);
  studentName!: string;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentName = String(params.get('studentName'));
    });
  }
}
