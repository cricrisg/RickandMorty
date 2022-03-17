import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  arrLocations:any[] = [];

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(async params=> {
      const id= parseInt(params['idcharacter']);
      const character= await this.charactersService.getById(id);
      this.arrLocations.push(character.location) ;
      // console.log(this.arrLocations);
      
    })
  }

}
