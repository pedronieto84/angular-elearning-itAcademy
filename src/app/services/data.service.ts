import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Module, Usuari } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  /* PROPERTIES */
  private baseUrl: string = 'https://us-central1-elearning-vue-itacademy.cloudfunctions.net'; //URL base on es fan les peticions

  constructor(private http: HttpClient) { }

  /* GET: getUsers recupera tots els usuaris */
  getUsers(): Observable<Usuari[]> {
    return this.http.get<Usuari[]>(this.baseUrl);
  }

  /* GET: getCourses recupera tots els cursos */
  getCourses() {

  }

  /* GET: getModules recupera tots els moduls */
  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.baseUrl + '/getModules');
  }

  /* GET: getTopics recupera tots els topics */
  getTopics() {

  }

  /* DELETE: deleteUser elimina un usuari mitjançant la seva id */
  deleteUser(userId: number) {

  }

  /* DELETE: deleteCourse elimina un curs mitjançant la seva id */
  deleteCourse(courseId: number) {

  }

  /* DELETE: deleteModule elimina un mòdul mitjançant la seva id */
  deleteModule(moduleId: number) {

  }

  /* DELETE: deleteTopic elimina un tòpic mitjançant la seva id */
  deleteTopic(topicId: number) {
    
  }
}
