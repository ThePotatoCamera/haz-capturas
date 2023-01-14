import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor() {
    const userAgent: string = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('windows') > -1) {
      this.plataformaActiva = 'Windows';
    }
    else if (userAgent.indexOf('iphone') > -1) {
      this.plataformaActiva = 'iOS';
    }
    else if (userAgent.indexOf('ipad') > -1) {
      this.plataformaActiva = 'iOS';
    }
    else if (userAgent.indexOf('mac') > -1) {
      this.plataformaActiva = 'Mac';
    }
    else if (userAgent.indexOf('android')) {
      this.plataformaActiva = 'Android';
    }
    else if (userAgent.indexOf('linux') > -1) {
      this.plataformaActiva = 'Linux';
    }
    else {
      this.plataformaActiva = 'Linux';
    }
  }
  get plataformaActiva(): string {
    return this._plataformaActiva;
  }

  private set plataformaActiva(value: string) {
    this._plataformaActiva = value;
  }
  get plataformas(): string[] {
    return this._plataformas;
  }

  private _plataformas: string[] = ['Windows', 'Mac', 'Linux', 'Android', 'iOS'];

  private _plataformaActiva: string = '';

  setPlataformaActivada(plataforma: string) {
    this.plataformaActiva = plataforma;
  }
}
