import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClassroomComponent } from './home/register-classroom/register-classroom.component';
import { RegisterStudentComponent } from './home/register-student/register-student.component';
import { RegisterAssignmentComponent } from './home/register-assignment/register-assignment.component';
import { RegisterTeacherComponent } from './home/register-teacher/register-teacher.component';



const routes: Routes = [
  {
    path: '', //Ruta inicial de la pagina 
    component: RegisterClassroomComponent, //Carga de X componente
    pathMatch: 'full', //Debe estar 10/10
  },
  {
    path: 'registerClassroom', 
    component: RegisterClassroomComponent, 
    pathMatch: 'full', 
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerAssignment',
    component: RegisterAssignmentComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}