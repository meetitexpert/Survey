import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingScreenComponent, RouterLink, SurveyComponent, CreateSurveyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Survey';
}
