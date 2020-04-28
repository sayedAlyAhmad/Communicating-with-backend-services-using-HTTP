import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent implements OnInit {

  public  employess =[];
  public errorMsg;

  constructor(private _empService: EmpService) { }

  ngOnInit(): void {
   this._empService.getEmp()
   .subscribe(data => this.employess = data,
              error => this.errorMsg = error
              );
  }

}
