import { Component, OnInit } from '@angular/core';
import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { SurveyModule } from 'survey-angular-ui';
import { json } from "./json";
import { themeJson } from './theme';


@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [SurveyModule,],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit {

  surveyModel: Model = new Model();
  surveyJson = {
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  };

  constructor(){
    this.surveyJson = JSON.parse(sessionStorage.getItem('surveyForm')!)
  }


  ngOnInit(): void {
    const survey = new Model(this.surveyJson)
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
    });
    this.surveyModel = survey;
  }


}
