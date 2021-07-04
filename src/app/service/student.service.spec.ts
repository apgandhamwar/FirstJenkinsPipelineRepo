import { TestBed, inject } from '@angular/core/testing';

import { StudentService } from './student.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentService],
      imports: [
        HttpClientModule
      ],    });
    service = TestBed.inject(StudentService);
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
});
