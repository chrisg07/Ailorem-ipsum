import { Component } from '@angular/core';
import {environment} from "../../../environments/environment.example";
import {Configuration, OpenAIApi} from "openai";
import {map, Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public response!: string;
  public topic!: any;
  public inHtml!: boolean;

  constructor(private http: HttpClient) {}

  private getResponse(topic: string): void {

    //clear previous response
    this.response = '';

    //add loading spinner while waiting for response
    const spinnerDiv = document.getElementById('spinner-container');

    const url = 'https://us-central1-ailorem-ipsum.cloudfunctions.net/openAiResponse2?topic=';
    this.http.get(url + this.topic)
      .subscribe((res: any) => {
        this.response = res.completion;
        console.log(res)
        //remove loading spinner after getting the response
        if (spinnerDiv) {
          spinnerDiv.classList.remove("hidden");
        }
      })
  }

  public onSubmit(): void {
    if (this.topic) {
      this.getResponse(this.topic);
    }
  }

  public clearSearch(): void {
    const topicsInput = document.getElementById("topics") as HTMLInputElement;
    topicsInput.value = "";

    this.response = '';

  }

}