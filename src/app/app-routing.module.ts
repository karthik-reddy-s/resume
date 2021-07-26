import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EducationComponent} from './education/education.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import{HobbiesComponent} from './hobbies/hobbies.component';
import{InternshipsComponent} from './internships/internships.component';
import{SkillsComponent} from './skills/skills.component';
import{ProjectsComponent} from './projects/projects.component';


const routes: Routes = [{path:'',component:FirstpageComponent,pathMatch:"full"},{path:'education',component:EducationComponent},{path:'hobbies',component:HobbiesComponent},{path:'firstpage',component:FirstpageComponent}
,{path:'internships',component:InternshipsComponent},{path:'skills',component:SkillsComponent},{path:'projects',component:ProjectsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
