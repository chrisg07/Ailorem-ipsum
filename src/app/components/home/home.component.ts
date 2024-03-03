import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { FirebaseService, GeneratedResponse } from 'src/app/services/firebase.service';
import { CopyToClipboardService } from 'src/app/services/copy-to-clipboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public responses: {content: string, topic: string}[] = [];
  public response!: string;
  public topic!: any;
  public inHtml!: boolean;

  generatedResponses$: Observable<GeneratedResponse[]>;

  constructor(private http: HttpClient, private firebase: FirebaseService, public copyToClipboard: CopyToClipboardService) {
    this.generatedResponses$ = from(this.firebase.getGeneratedResponses());
  }

  private getResponse(topic: string): void {
    const url = 'https://us-central1-ailorem-ipsum.cloudfunctions.net/openAiResponse2?topic=';
    this.http.get(url + this.topic)
      .subscribe((res: any) => {
        this.response = res.completion;
        this.responses.push({content: res.completion, topic: this.topic});
        setTimeout(() => {
          const container = document.getElementById('response-carousel');
          if (container) {
            container.scrollLeft = container.scrollWidth;
          }
        }, 5)
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