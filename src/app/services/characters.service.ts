import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl:string;
  

  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl='https://rickandmortyapi.com/api/character'
  }

  getByPage(url:string=this.baseUrl) : Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(url))
    
}

  getById(pId:number): Promise<Character> {
    return lastValueFrom(this.httpClient.get<Character>(this.baseUrl+'/' +pId))

}
}
