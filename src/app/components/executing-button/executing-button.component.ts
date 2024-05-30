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

  async execute() {
    const codes = [
      this.codeStorage.code1,
      this.codeStorage.code2,
      this.codeStorage.code3,
      this.codeStorage.code4,
    ];

    for (let code of codes) {
      if (code.trim()) {
        try {
          await this.executeCode(code);
        } catch (error) {
          console.error('Error executing code:', error);
        }
      }
    }
  }

  executeCode(code: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        eval(code);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
