/* Angular Imports */
import {AfterViewInit, Component, ViewChild, OnInit, Input} from '@angular/core';

/* Angular Material Imports */
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';

/* App Imports */
import { Course } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.sass']
})


export class CoursesTableComponent implements OnInit, AfterViewInit {
  /* PROPERTIES */
  courses: Course[] = [];

  /* ANGULAR MATERIAL PROPERTIES */
  displayedColumns: string[] = [ 'courseId', 'title', 'description'];
  // Assign the data to the data source for the table to render
  dataSource: MatTableDataSource<Course> = new MatTableDataSource(this.courses);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* Mètode propi del component table de angular material */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clickedRows(row:any){
    console.log(row);
    
  }

  /* Mètode que subscriu l'observable que ens donarà l'array de tots els cursos disponibles */
  getCourses() {
    let observable = this.dataService.getCourses() as Observable<Course[]>;
    observable.subscribe(courses => this.dataSource.data = courses as Course[]);
  }

}
