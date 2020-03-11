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
  albumInfo: IAlbum[] = [];
  errorMessage: '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAlbumDetails();
  }
  getAlbumDetails(): any{
    this.productService.getAlbums().subscribe({
      next: data => {this.albumInfo = data
      },
      error: err=> this.errorMessage = err
    })
  }
}
