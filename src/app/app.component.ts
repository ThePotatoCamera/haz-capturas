import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get darkMode(): boolean {
    return this._darkMode;
  }

  set darkMode(value: boolean) {
    if (value) {
      localStorage['theme'] = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage['theme'] = 'light';
      document.documentElement.classList.remove('dark');
    }
    this._darkMode = value;
  }
  title = 'haz-capturas';

  private _darkMode: boolean = false;

  constructor() {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this._darkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
