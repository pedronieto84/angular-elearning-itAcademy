import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Module } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass']
})
export class ModulesComponent implements OnInit {
  /* PROPERIES */
  courseId?: string | null;
  modules: Module[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.checkRoute(); //Comprobem si hi ha courseId a la ruta

    if (this.courseId) {
      this.getModules(parseInt(this.courseId));
    }
    else {
      this.getModules();
    }
  }

  /* Mètode que determina si hem passat alguna subruta */
  checkRoute() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
  }

  /* Mètode que subscriu l'observable que ens donarà l'array de tots els mòduls disponibles o de tots els mòduls d'un curs */
  getModules(courseId?: number) {
    if (courseId) {
      this.dataService.getModules(courseId).subscribe(modules => this.modules = modules);
    }
    else {
      this.dataService.getModules().subscribe(modules => this.modules = modules);
    }
  }
}
