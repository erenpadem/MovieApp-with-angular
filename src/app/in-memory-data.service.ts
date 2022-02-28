import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {id:1,name:"Movie 1",description:"Güzel film",imageUrl:"img1.jpg"},
      {id:2,name:"Movie 2",description:"Güzel film",imageUrl:"img2.jpg"},
      {id:3,name:"Movie 3",description:"Güzel film",imageUrl:"img3.jpg"},
      {id:4,name:"Movie 4",description:"Güzel film",imageUrl:"img4.jpg"},
      {id:5,name:"Movie 5",description:"Güzel film",imageUrl:"img5.jpg"},
  ];
  return {movies};
  }
  constructor() { }
}
