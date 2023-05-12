import { Component } from '@angular/core';
import {environment} from "../../../environments/environment.development";
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
    // const configuration = new Configuration({
    //   apiKey: environment.apiKey,
    // });
    // const openai = new OpenAIApi(configuration);
    // const response = openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: this.getPrompt(topic),
    //   temperature: 0,
    //   max_tokens: 1000,
    // });
    // fromPromise(response).pipe(
    //   map(value => value)
    // ).subscribe((value) => {
    //   // this.response = value;
    //   console.log(value.data.choices[0])
    //   const answer = value.data.choices[0].text;
    //   if (answer) {
    //     this.response = answer;
    //   }
    // });

    const url = 'https://us-central1-ailorem-ipsum.cloudfunctions.net/openAiResponse2?topic=';
    this.http.get(url + this.topic)
      .subscribe((res: any) => {
        this.response = res.completion;
        console.log(res)
      })
  }

  public getPrompt(topic: string) {
    let prompt = environment.prompts.topicIpsum + topic;

    if (this.inHtml) {
      prompt += environment.prompts.incentivizeHTML;
    }

    return prompt;
  }

  public onSubmit(): void {
    if (this.topic) {
      this.getResponse(this.topic);
    }
  }

}
