import { Component, Input } from '@angular/core';
import { CopyToClipboardService } from 'src/app/services/copy-to-clipboard.service';
import { GeneratedResponse } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent {
  @Input() generatedResponse!: GeneratedResponse;
  @Input() id!: string;

  constructor(public copyToClipboard: CopyToClipboardService) {}
}
