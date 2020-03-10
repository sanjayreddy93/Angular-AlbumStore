import { Component, OnInit } from '@angular/core';


import { ProductService } from 'src/app/services/product.service';
import { IAlbum } from 'src/app/services/album';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  pageTitle: string = "List of Albums"
  albums: IAlbum[] =[];
  errorMessage: '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAlbums().subscribe({
      next: albums => {this.albums = albums
      },
      error: err=> this.errorMessage = err
    })
  }

}
