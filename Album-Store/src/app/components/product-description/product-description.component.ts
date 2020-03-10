import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { IAlbum } from 'src/app/services/album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: IAlbum | undefined;
  errorMessage: '';
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAlbum(1).subscribe({
      next: albumInfo => this.albumInfo = albumInfo,
      error: err=> this.errorMessage = err 
    })
  }

}
