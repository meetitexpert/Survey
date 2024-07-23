import { Component, inject,  } from '@angular/core';

import { CreateSurveyComponent } from '../create-survey/create-survey.component';
import { SurveyComponent } from '../survey/survey.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  standalone: true,
  imports: [SurveyComponent, CreateSurveyComponent, RouterLink],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.css'
})
export class LandingScreenComponent {

  router= inject(Router)

  createSurvey(){
    this.router.navigateByUrl('createSurvey')
  }

  loadSurvey(){
    this.router.navigateByUrl('loadSurvey')
  }

}
