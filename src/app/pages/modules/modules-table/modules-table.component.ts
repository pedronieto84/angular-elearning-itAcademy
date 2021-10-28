/* Angular Imports */
import {AfterViewInit, Component, ViewChild, OnInit, Input} from '@angular/core';

/* Angular Material Imports */
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';

/* App imports */
import { DataService } from 'src/app/services/data.service';
import { Module } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modules-table',
  templateUrl: './modules-table.component.html',
  styleUrls: ['./modules-table.component.sass']
})
export class ModulesTableComponent implements OnInit, AfterViewInit {
  /* PROPERTIES */
  @Input() courseId?: string | null; //Rebrà (o no) si s'ha passat courseId per url
  modules: Module[] = [];

  /* ANGULAR MATERIAL PROPERTIES */
  displayedColumns: string[] = [ 'moduleId', 'title', 'description'];
  // Assign the data to the data source for the table to render
  dataSource: MatTableDataSource<Module> = new MatTableDataSource(this.modules);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (this.courseId) {
      this.getModules(parseInt(this.courseId));
    }
    else {
      this.getModules();
    }
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

  /* Mètode que subscriu l'observable que ens donarà l'array de tots els mòduls disponibles o de tots els mòduls d'un curs */
  getModules(courseId?: number) {
    if (courseId) {
      this.dataService.getModules(courseId).subscribe(modules => this.dataSource.data = modules as Module[]);
    }
    else {
      this.dataService.getModules().subscribe(modules => this.dataSource.data = modules as Module[]);
    }
  }

}
