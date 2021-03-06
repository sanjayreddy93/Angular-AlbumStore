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
  albums: IAlbum[] = [];
  errorMessage: '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAlbums().subscribe({
      next: data => {
        this.albums = data
      },
      error: err=> this.errorMessage = err
    })
  }

  deleteAlbum(id :number) : void{
    console.log("Delete feature can't be added to hardcoded json");
  }
}
