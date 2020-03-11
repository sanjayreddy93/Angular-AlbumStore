import { DecimalPipe } from '@angular/common';

export interface IAlbum {
  id: number,
  artist: string,
  album: Albums
  
}

export interface Albums{
  
    name: string,
    releaseDate: string,
    coverImage: string,
    tracks: Tracks[]
  
}

export interface Tracks{
 
    trackNumber: number,
    trackName: string,
    trackLength: string,
    trackPrice: number
  
}