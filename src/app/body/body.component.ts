import { Component } from '@angular/core';
import { Plataformas } from "../plataformas";
import { Router } from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(private _router: Router) {
    for (let plataforma in Plataformas) {
      this.plataformas.push(plataforma);
    }

    const userAgent: string = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('windows') > -1) {
      this._router.navigate(['windows']);
    }
    else if (userAgent.indexOf('iphone') > -1) {
      this._router.navigate(['ios']);
    }
    else if (userAgent.indexOf('ipad') > -1) {
      this._router.navigate(['ios']);
    }
    else if (userAgent.indexOf('mac') > -1) {
      this._router.navigate(['mac']);
    }
    else if (userAgent.indexOf('android') > -1) {
      this._router.navigate(['android']);
    }
    else if (userAgent.indexOf('linux') > -1) {
      this._router.navigate(['linux']);
    }
    else {
      this._router.navigate(['linux']);
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

  private _plataformas: string[] = [];

  private _plataformaActiva: string = '';

  setPlataformaActivada(plataforma: string) {
    this.plataformaActiva = plataforma;
  }
}
