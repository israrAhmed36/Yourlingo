import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
 value;
 MinPrice;
 rangePrice;
 MaxPrice;
 Document
documents:any[]=[];
public currentuser;

  constructor(public router:Router, 
    public afs:AngularFirestore,
    public af:AngularFireAuth,
    public pickerController:PickerController
    )
   {
     this.currentuser=this.af.auth.currentUser.uid;

    }

  ngOnInit() {
    this.afs.collection<any>(`Bahrain/BH/Services`).get().subscribe((services)=>{
      this.documents=[]
      services.forEach((service)=>{
        this.documents.push({
          Document:service.data().Document,
          MinPrice:service.data().MinPrice,
          MaxPrice:service.data().MaxPrice,
          rangePrice:service.data().rangePrice
        });
      });
    });
  }


  docdetail(name){
 this.router.navigate(['docdetail',{name}])
  }
 
 
}
