import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar"
@Component({
  selector: 'app-register-assignment',
  templateUrl: './register-assignment.component.html',
  styleUrls: ['./register-assignment.component.css']
})
export class RegisterAssignmentComponent implements OnInit {
  message: string;
  registerData:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar) 
    
    {
    this.message = '';
    this.registerData={};
   }

  ngOnInit(): void {}
  registerAssignment() {}
  openSnackBarSuccesfull() {}
  openSnackBarError() {}



}