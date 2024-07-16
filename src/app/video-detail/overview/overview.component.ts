import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseApiService } from '@app/core';
import { ICourseDetail } from '@app/shared/models/course-item.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() course: ICourseDetail;

  constructor(private router: Router,
    private courseApi: CourseApiService
  ) {}

  openQuiz() {
    this.router.navigateByUrl('lms/quiz/'+this.course.courseId);
  }
}
