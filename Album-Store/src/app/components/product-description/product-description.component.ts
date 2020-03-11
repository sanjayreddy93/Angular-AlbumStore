import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { IAlbum } from 'src/app/services/album';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  pageTitle: string = "Album Details"
  public albumDetails: IAlbum | undefined;
  errorMessage: '';
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const param = +this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getAlbumDetails(id);
    }
  }

  getAlbumDetails(id: number) {
  
    this.productService.getAlbum(id).subscribe(
      data => {
        this.albumDetails = data
      },
      err => console.log(err)
    )
  }

  deleteTrack(track){
    console.log("Hardcoded Json data of "+ track.trackNumber +' '+track.trackName +" cannot be deleted")
  }

  onBack(): void {
    this.router.navigate(['./albums']);
  }
}


