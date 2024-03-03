import { Component, Input } from '@angular/core';
import { CopyToClipboardService } from 'src/app/services/copy-to-clipboard.service';
import { GeneratedResponse } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-response-table',
  templateUrl: './response-table.component.html',
  styleUrls: ['./response-table.component.scss']
})
export class ResponseTableComponent {
  @Input() responses: GeneratedResponse[] = [];

  constructor(public copyToClipboard: CopyToClipboardService) {}
}
