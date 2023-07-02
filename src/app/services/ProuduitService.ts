import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { produits } from "../model/product.module";
import { Observable } from 'rxjs';


@Injectable({providedIn:"root"})  // pour la disponibilite dans la route de l'application
export class  produitService {

constructor(private http:HttpClient){

}

public  host = "http://localhost:3000";

getAllProduits () : Observable<produits[]> {

return this.http.get<produits[]>(this.host+"/products");
}

getSelectedProduits () : Observable<produits[]> {

    return this.http.get<produits[]>(this.host+"/products?selected=true");
    }


    getAvaliableProduits () : Observable<produits[]> {

        return this.http.get<produits[]>(this.host+"/products?available=true");
        }

  getSearchProduits (key:String) : Observable<produits[]> {

    return this.http.get<produits[]>(this.host+"/products?name_like="+key);
  }

  Onselected  (produit:produits) : Observable<produits> {

   produit.selected=!produit.selected;
   return  this.http.patch<produits>(this.host+"/products/"+produit.id,produit);
  }



  OnDelete  (produit:produits) : Observable<void> {
    return  this.http.delete<void>(this.host+"/products/"+produit.id);
  }



OnSave (produit:produits) : Observable<produits> {

  produit.selected=!produit.selected;
  return  this.http.post<produits>(this.host+"/products/",produit);
}

}
