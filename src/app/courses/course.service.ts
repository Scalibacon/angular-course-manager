import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

//Classes de serviõ são meio que imutáveis, estáticas
@Injectable({ //torna a classe injetável
  providedIn: "root" //a partir do 'módulo' root
})
export class CourseService {
  
  constructor(private httpClient: HttpClient){ }

  private courseUrl: string = "http://localhost:3100/api/courses";

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.courseUrl);
    // return COURSES;
  }  

  retrieveById(id: number): Observable<Course>{
    return this.httpClient.get<Course>(`${this.courseUrl}/${id}`)
    // return COURSES.find((courseIterator: Course) => courseIterator.id === id)
  }

  save(course: Course): Observable<Course>{
    if(course.id){
      return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(`${this.courseUrl}`, course);
    }
  }

  deleteById(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.courseUrl}/${id}`)
  }
}