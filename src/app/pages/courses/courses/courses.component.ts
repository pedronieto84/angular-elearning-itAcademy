import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { Course } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  /* PROPERTIES */
  courses: Course[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCourses();  
  }

  /* Mètode que subscriu l'observable que ens donarà l'array de tots els cursos disponibles */
  getCourses() {
    let observable = this.dataService.getCourses() as Observable<Course[]>;
    observable.subscribe(courses => this.courses = courses);
  }

}


