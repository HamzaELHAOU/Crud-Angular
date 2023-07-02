import { Component } from '@angular/core';
import { produits } from 'src/app/model/product.module';
import { produitService } from 'src/app/services/ProuduitService';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {Statement} from "@angular/compiler";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

  produits?:produits[];

  constructor(private service : produitService , private  router:Router){

  }

  showAllProducts(){
    this.service.getAllProduits().subscribe(data=>{

      this.produits=data;
    })
       }



    showSelectedProducts(){

    this.service.getSelectedProduits().subscribe(data=>{

      this.produits=data;
    })

  }


  showAvailableProducts(){

    this.service.getAvaliableProduits().subscribe(data=>{

      this.produits=data;
    })

  }

       showSearchProducts(dataForm :any){
           this.service.getSearchProduits(dataForm.key).subscribe(data=>{
                  this.produits=data;

              })
        }

        OnSelect (p:produits){
    this.service.Onselected(p).subscribe(data=>{
      p.selected=data.selected;
    })

        }


  deleteProduct(prouduit : produits) {
    this.service.OnDelete(prouduit).subscribe(data=>{
      this.showAllProducts();
    });

  }

  showAddProductForm() {
this.router.navigateByUrl("/newproduit") ;
  }
}
