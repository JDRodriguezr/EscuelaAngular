import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar"
@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {


  message: string;
  registerData:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number=2;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar) 
    
    {
    this.message = '';
    this.registerData={};
   }

   ngOnInit(): void {}
   registerTeacher() {
     if (!this.registerData.name || !this.registerData.sex || !this.registerData.className ) {//validacion de que la infromacionm llego
       console.log("Failed Process: Incomplete data f")
       this.message = 'Failed Process: Incomplete data f';
       this.openSnackBarError();
       this.registerData = {};
     } 
     else {
       this._userService.registerTeacher(this.registerData).subscribe(
       (res) => {
         console.log(res); 
         this._router.navigate(['/registerClassroom']);
         this.message = 'Teacher registered successfully'
         this.openSnackBarSuccesfull();
         this.registerData= {}
       },
       (err) =>{
 
         console.log(err);
         this.message = err.error
         this.openSnackBarError();
         
       }
       )
     }
   }
   openSnackBarSuccesfull() {
     this._snackBar.open(this.message, 'X', {
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
       duration: this.durationInSeconds * 1000,
       panelClass: ['style-snackBarTrue'] 
     })
   }
   openSnackBarError() {
 
     this._snackBar.open(this.message, 'X', {
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
       duration: this.durationInSeconds * 1000,
       panelClass: ['style-snackBarFalse'] 
     })
   }


}
