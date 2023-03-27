import { Injectable } from '@angular/core';
import { Song } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private songsList: Song[] = [
    {
      id: 1,
      title: 'Break My Heart',
      author: 'Dua Lipa',
      year: 1997,
      album: 'Elegants',
      genre: 'Funky',
      label: 'Label',
      country: 'EEUU'
    },
    {
      id: 2,
      title: 'Levitating',
      author: 'Dua Lipa',
      year: 1967,
      album: 'Liverpool concert',
      genre: 'Pop',
      label: 'Label',
      country: 'EEUU'
    },
    {
      id: 3,
      title: 'Dua Lipa-Love Again',
      author: 'Dua Lipa',
      year: 1937,
      album: 'The Three Degrees',
      genre: 'Funk',
      label: 'Label',
      country: 'EEUU'
    }
  ];
  constructor() { }

  public getSong(): Song {
    return this.songsList[0];
  }

  public getSongsList(): Song[] {
    return this.songsList;
  }
}
