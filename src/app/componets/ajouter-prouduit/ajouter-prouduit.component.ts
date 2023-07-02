import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {produitService} from "../../services/ProuduitService";



@Component({
  selector: 'app-ajouter-prouduit',
  templateUrl: './ajouter-prouduit.component.html',
  styleUrls: ['./ajouter-prouduit.component.css']
})


export class AjouterProuduitComponent  implements  OnInit{

  formGroup! :FormGroup
  constructor(private  fb:FormBuilder , private  service:produitService) {
    this.formGroup=this.fb.group({
      name:["",Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      price:[0,Validators.required],
      available:[true,Validators.required],
    })
  }



  ngOnInit(): void {
    this.formGroup=this.fb.group({
      name:["",Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      price:[0,Validators.required],
      available:[true,Validators.required],
    })
  }

  onSaveProduct() {
this.service.OnSave(this.formGroup.value).subscribe(data=>{
  alert("prouduit bien ajouter ")
});
  }
}
