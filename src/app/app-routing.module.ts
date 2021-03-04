import { SProfileComponent } from './Dashboard/student-dashboard/sprofile/sprofile.component';
import { TProfileComponent } from './Dashboard/teacher-dashboard/tprofile/tprofile.component';
import { TClassesComponent } from './Dashboard/teacher-dashboard/tclasses/tclasses.component';
import { TAssignmentComponent } from './Dashboard/teacher-dashboard/tassignment/tassignment.component';
import { TQuizComponent } from './Dashboard/teacher-dashboard/tquiz/tquiz.component';
import { TChatComponent } from './Dashboard/teacher-dashboard/tchat/tchat.component';
import { SChatComponent } from './Dashboard/student-dashboard/schat/schat.component';
import { SAssignmentComponent } from './Dashboard/student-dashboard/sassignment/sassignment.component';
import { SQuizComponent } from './Dashboard/student-dashboard/squiz/squiz.component';
import { SClassesComponent } from './Dashboard/student-dashboard/sclasses/sclasses.component';
import { AuthGuard } from './auth.guard';
import { TeacherDashboardComponent } from './Dashboard/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './Dashboard/student-dashboard/student-dashboard.component';
import { SignupComponent } from './landingpage/signup/signup.component';
import { LoginComponent } from './landingpage/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },

  {
    path:'',component:LandingpageComponent ,children:[
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
    ]
  }
  ,
  
  
  {
    path:'studentDashboard', canActivate:[AuthGuard], component:StudentDashboardComponent ,children:[
      {path:'class',component:SClassesComponent},
      {path:'quiz',component:SQuizComponent},
      {path:'assignment',component:SAssignmentComponent},
      {path:'chat',component:SChatComponent},
      {path:'profile',component:SProfileComponent}
      
    ]
  },
  {
    path:'teacherDashboard', canActivate:[AuthGuard],component:TeacherDashboardComponent,children:[
      {path:'class',component:TClassesComponent},
      {path:'quiz',component:TQuizComponent},
      {path:'assignment',component:TAssignmentComponent},
      {path:'chat',component:TChatComponent},
      {path:'profile',component:TProfileComponent}
    ]
  },
  {
    path:'**', component:PageNotFoundComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
