import { Component, OnInit } from '@angular/core';
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreatorModule } from 'survey-creator-angular';

@Component({
  selector: 'app-create-survey',
  standalone: true,
  imports: [SurveyCreatorModule],
  templateUrl: './create-survey.component.html',
  styleUrl: './create-survey.component.css'
})
export class CreateSurveyComponent implements OnInit {
  surveyCreatorModel?: SurveyCreatorModel | undefined;

  createdJson = {}

  creatorOptions = {
    showLogicTab: true,
    isAutoSave: true,
    showThemeTab: true
  };

  ngOnInit(): void {
    const creator = new SurveyCreatorModel(this.creatorOptions);
    creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
      // If you use localStorage:
      window.localStorage.setItem("survey-json", creator.text);
      

      // If you use a web service:
      console.log(creator.JSON)
      this.createdJson = creator.JSON
      sessionStorage.setItem('surveyForm', JSON.stringify(this.createdJson))
      
    };
    this.surveyCreatorModel = creator;
  }

}
