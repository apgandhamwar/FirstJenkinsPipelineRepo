import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  RollNo: any;
  Name: any;
  Address: any;
  Class: any;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
      this.getStudent();
  }

  getStudent():void{
    //this.studentService.getStudent().subscribe(student => this.studentInfo = student);

    // Testing version
    this.studentService.getStudent()
      .then((result:any) => {
        this.RollNo = JSON.parse(JSON.stringify(result['rollNo']));
        this.Name = JSON.parse(JSON.stringify(result['name']));
        this.Address = JSON.parse(JSON.stringify(result['address']));
        this.Class = JSON.parse(JSON.stringify(result['class']));
      })
  }
 
  
}








