import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = ""

  constructor() {
    this.url = "http://localhost:3000/locations"
   }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    return await data.json() ?? [];
  
  }

   async getHousingLocationById(idToFind: number): Promise<HousingLocation |  undefined> {
    //console.log(typeof idToFind);
    const data = await fetch(`${this.url}/${idToFind}`)
    return await data.json() ?? {};
  }
  submitAplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
