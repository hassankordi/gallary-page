import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private _HttpClient:HttpClient) { }


  getImages():Observable<any>{
    return this._HttpClient.get(`https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy`)
  }
}
