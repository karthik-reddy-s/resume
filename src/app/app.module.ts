import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InternshipsComponent } from './internships/internships.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    InternshipsComponent,
    AchievementsComponent,
    HobbiesComponent,
    PersonalInformationComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
