import { Routes } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { SurveyComponent } from './survey/survey.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';

export const routes: Routes = [
    {
        path:'',
        component:LandingScreenComponent,
    },
    {
        path:'createSurvey',
        component:CreateSurveyComponent
    },
    {
        path:'loadSurvey',
        component:SurveyComponent
    }
];
