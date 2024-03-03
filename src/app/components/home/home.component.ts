import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import {
	FirebaseService,
	GeneratedResponse
} from "src/app/services/firebase.service";
import { CopyToClipboardService } from "src/app/services/copy-to-clipboard.service";
import { ResponseService } from "src/app/services/response.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
	public responses: { content: string; topic: string }[] = [];
	public topic!: any;
	public inHtml!: boolean;

	generatedResponses$: Observable<GeneratedResponse[]>;

	constructor(
		private firebase: FirebaseService,
		public copyToClipboard: CopyToClipboardService,
		private response: ResponseService
	) {
		this.generatedResponses$ = from(this.firebase.getGeneratedResponses());
	}

	public onSubmit(): void {
		this.response.getResponse(this.topic).subscribe(res => {
			this.responses.push({ content: res.completion, topic: this.topic });
		});
	}

	public clearSearch(): void {
		const topicsInput = document.getElementById("topics") as HTMLInputElement;
		topicsInput.value = "";
	}
}
