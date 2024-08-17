import { Routes } from '@angular/router';
import { ExperienceComponent } from '../pages/experience/experience.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { AboutComponent } from '../pages/about/about.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
