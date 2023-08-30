import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    return localStorage.getItem(key)
  }
  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  toJson(value: any) {
    return JSON.stringify(value);
  }

  parseItem(localStorageItem: string) {
    return JSON.parse(localStorageItem);
  }
}
