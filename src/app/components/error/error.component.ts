  /**
   * Date: 8/22/2020
   * Description: Error class
   * Author: Yiwei Yao
  */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  // error define
  public error: string = "default error name";
  public error_code: string = "default error code";
  public error_description: string = "This a default error description";


  constructor() { }

  ngOnInit(): void {
  }

}
