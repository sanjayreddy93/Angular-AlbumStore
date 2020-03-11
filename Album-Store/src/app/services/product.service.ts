import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import{tap, map, catchError} from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { IAlbum } from './album';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private albumUrl: string = "assets/album.json";
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbum[]>{
   return this.http.get<IAlbum[]>(this.albumUrl).pipe(
      tap(), catchError(this.handleError)
        );
}

getAlbum(id: number): Observable<IAlbum | undefined>{
  return this.getAlbums().pipe(map((albums: IAlbum[]) =>
        albums.find(a => a.id === id)
      ));
      
}


private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
if(err.error instanceof ErrorEvent ){
  errorMessage = 'Gibt es ein Fehler :' + err.error.message;
  
}
else{
  errorMessage = 'Server Error code '+err.status + ' , error message is '+ err.message;
}
console.error(errorMessage);
  return throwError(errorMessage);

}
}
