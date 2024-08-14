import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Iproduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  API = inject(ProductsService)

  productlist:Iproduct[]=[];
  ngOnInit(): void {
    this.API.getAllProduct().subscribe({
      next:(res:any)=>{
        this.productlist=res;
      },
      error:(err)=>{
        console.log(err);
      }
  })
  }

}
