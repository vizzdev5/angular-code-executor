import { Component } from '@angular/core';
import { CodeStorageService } from '../../services/code-storage.service';

@Component({
  selector: 'app-input-code',
  templateUrl: './input-code.component.html',
  styleUrls: ['./input-code.component.css'],
})
export class InputCodeComponent {
  constructor(public codeStorage: CodeStorageService) {}
}
