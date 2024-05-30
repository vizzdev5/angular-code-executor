import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { InputCodeComponent } from '../input-code/input-code.component';
import { CodeStorageService } from '../../services/code-storage.service';

@Component({
  selector: 'app-executing-button',
  templateUrl: './executing-button.component.html',
  styleUrls: ['./executing-button.component.css'],
})
export class ExecutingButtonComponent {
  constructor(private codeStorage: CodeStorageService) {}

  execute(): void {
    const codeBlocks = this.codeStorage.textInputs;
    this.executeCodeBlock(codeBlocks, 0);
  }

  executeCodeBlock(codeBlocks: string[], index: number): void {
    if (index >= codeBlocks.length) {
      return;
    }

    const code = codeBlocks[index];
    try {
      eval(code);
    } catch (error) {
      console.error(`Error executing code block ${index + 1}:`, error);
    }

    setTimeout(() => {
      this.executeCodeBlock(codeBlocks, index + 1);
    }, 1000);
  }
}
