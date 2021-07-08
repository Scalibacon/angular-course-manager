import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course!: Course; // exclamação diz q vai ser inicializada depois

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private courseService: CourseService
  ){}

  ngOnInit(): void{
    const queryId = this.activatedRoute.snapshot.paramMap.get('id');
    if(typeof queryId !== 'string'){
      this.router.navigate(['/erro404']);
      return;
    }

    this.course = this.courseService.retrieveById(parseInt(queryId)) ?? new Course();
  }

  save(): void {
    this.courseService.save(this.course);
  }

}