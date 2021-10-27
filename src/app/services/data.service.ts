import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course, Module, UserId, Usuari } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  /* PROPERTIES */
  private baseUrl: string = 'https://us-central1-elearning-vue-itacademy.cloudfunctions.net'; //URL base on es fan les peticions

  constructor(private http: HttpClient) { }

  /* GET: getUsers recupera tots els usuaris */
  getUsers(userId?: UserId ) {
    
  }

  /* GET: getCourses recupera:
            Si passem paràmetre un curs concret
            Si no passem paràmetre tots els cursos disponibles
  */
  getCourses(courseId?: number): Observable<Course> | Observable<Course[]> {
    if (courseId) {
      return this.http.get<Course>(this.baseUrl +  '/getCourses?courseId=' + courseId);
    }
    else {
      return this.http.get<Course[]>(this.baseUrl + '/getCourses');
    }
  }

  /* GET: getModules recupera:
            Si passem paràmetre tots els mòduls d'un curs concret
            Si no passem paràmetre tots els mòduls disponibles
  */
  getModules(courseId?: number): Observable<Module[]> {
    if (courseId) {
      return this.http.get<Module[]>(this.baseUrl + '/getModules?courseId=' + courseId);
    }
    else {
      return this.http.get<Module[]>(this.baseUrl + '/getModules');
    }
  }

  /* GET: getModule recupera un mòdul concret en funció de la seva id */
  getModule(moduleId: number): Observable<Module> {
    return this.http.get<Module>(this.baseUrl + '/getModule/' + moduleId);
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
