import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private courseService: CourseService
  ){}

  course!: Course; // exclamação diz q vai ser inicializada depois

  ngOnInit(): void{
    const queryId = this.activatedRoute.snapshot.paramMap.get('id');
    if(typeof queryId !== 'string'){
      this.router.navigate(['/erro404']);
      return;
    }

    this.courseService.retrieveById(parseInt(queryId)).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log("Salvou com sucesso", course),
      error: err => console.log('Error', err)
    });
  }
}