import { TestBed } from '@angular/core/testing';
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe("CourseService", ()=> {

  let coursesService: CoursesService,
  httpTestingController: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CoursesService,

      ]
    });
    coursesService = TestBed.get(CoursesService);
    httpTestingController = TestBed.get(HttpTestingController)
  })

  it('should retrieve all courses', ()=> {
    coursesService.findAllCourses().subscribe(courses => {
      expect(courses).toBeTruthy('no courses returned');
      expect(courses.length).toBe(12,'incorect number');
      const course = courses.find(course => course.id == 12)
    })
  })
})