import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Episode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient) {
  }

  getByUrl(url:string): Promise<Episode> {
    return lastValueFrom(this.httpClient.get<Episode>(url))
  }
}
