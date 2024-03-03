import { Component, Input } from '@angular/core';
import { CopyToClipboardService } from 'src/app/services/copy-to-clipboard.service';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent {
  @Input() value: string = '';
  
  constructor(public copyToClipboard: CopyToClipboardService) {
    
  }
}
