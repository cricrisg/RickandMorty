import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  arrCharacters: Character[]=[];
  next:string="";
  prev:string="";


  constructor(
    private characterService: CharactersService
  ) { }

  async ngOnInit(): Promise< void> {

    const response= await this.characterService.getByPage();
    this.repartirDatos(response)

    
  }

  repartirDatos(pResponse:any):void {
    this.next=pResponse.info.next;
    this.prev= pResponse.info.prev;
    this.arrCharacters=pResponse.results;
  }

  async prevPage() {
    if(this.prev !== null) {
      const response= await this.characterService.getByPage(this.prev);
      this.next=response.info.next;
      this.prev= response.info.prev;
      this.arrCharacters=response.results;
    }
  }
  async nextPage() {
    if(this.next !== null) {
      const response= await this.characterService.getByPage(this.next);
      this.next=response.info.next;
      this.prev= response.info.prev;
      this.arrCharacters=response.results;

  }

}


}
