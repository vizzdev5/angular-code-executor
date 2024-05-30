import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeStorageService {
  textInputs: string[] = ['', '', '', ''];
  constructor() {}
}
