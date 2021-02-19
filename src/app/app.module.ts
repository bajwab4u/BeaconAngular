import { ProfileService } from './Services/profile.service';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgParticlesModule } from 'ng-particles';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';
import { LoginComponent } from './landingpage/login/login.component';
import { SignupComponent } from './landingpage/signup/signup.component';
import { StudentDashboardComponent } from './Dashboard/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './Dashboard/teacher-dashboard/teacher-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TClassesComponent } from './Dashboard/teacher-dashboard/tclasses/tclasses.component';
import { TChatComponent } from './Dashboard/teacher-dashboard/tchat/tchat.component';
import { TQuizComponent } from './Dashboard/teacher-dashboard/tquiz/tquiz.component';
import { TAssignmentComponent } from './Dashboard/teacher-dashboard/tassignment/tassignment.component';
import { SClassesComponent } from './Dashboard/student-dashboard/sclasses/sclasses.component';
import { SChatComponent } from './Dashboard/student-dashboard/schat/schat.component';
import { SQuizComponent } from './Dashboard/student-dashboard/squiz/squiz.component';
import { SAssignmentComponent } from './Dashboard/student-dashboard/sassignment/sassignment.component';
import { SProfileComponent } from './Dashboard/student-dashboard/sprofile/sprofile.component';
import { TProfileComponent } from './Dashboard/teacher-dashboard/tprofile/tprofile.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    LoginComponent,
    SignupComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    PageNotFoundComponent,
    TClassesComponent,
    TChatComponent,
    TQuizComponent,
    TAssignmentComponent,
    SClassesComponent,
    SChatComponent,
    SQuizComponent,
    SAssignmentComponent,
    SProfileComponent,
    TProfileComponent
    
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    NgParticlesModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ClipboardModule
 
  ],
  providers: [AuthService,CookieService ,AuthGuard ,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
