import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './componets/produits/produits.component';
import {HomeComponent} from './componets/home/home.component';
import {AjouterProuduitComponent} from  './componets/ajouter-prouduit/ajouter-prouduit.component';

const routes: Routes = [
  {path:"produit" ,component:ProduitsComponent},
  {path:"newproduit" ,component:AjouterProuduitComponent},
  {path :"" , component :HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
