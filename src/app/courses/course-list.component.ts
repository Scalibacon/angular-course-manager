import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit{
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular Forms",
        imgUrl: "/assets/images/forms.png",
        price: 99.99,
        code: "ANG-P1NT0",
        duration: 120,
        rating: 4,
        releaseDate: "December, 2, 2019"
      },
      {
        id: 2,
        name: "Angular HTTP",
        imgUrl: "/assets/images/http.png",
        price: 27.99,
        code: "RCT-L1ND0",
        duration: 300,
        rating: 5,
        releaseDate: "July, 6, 2021"
      },
    ]
  }
}