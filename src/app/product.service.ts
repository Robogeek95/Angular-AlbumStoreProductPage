import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';

import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/AlbumStorePage.json'

  constructor(private _http:Http) { }

  getAlbum(id: number) {
   return this._http.get(this._albumUrl)
  }
}
