import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  courseId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const queryId = this.activatedRoute.snapshot.paramMap.get('id');
    if(typeof queryId !== 'string'){
      this.router.navigate(['/erro404']);
      return;
    }

    this.courseId = parseInt(queryId);
  }

}