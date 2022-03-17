import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  arrEpisodes:string[]=[];

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.parent?.params.subscribe(async params=> {
      const id= parseInt(params['idcharacter']);
      
      const character= await this.charactersService.getById(id);
      this.arrEpisodes= character.episode;
      // console.log(this.arrEpisodios);
      
    })
  }

}
