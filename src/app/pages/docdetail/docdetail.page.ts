import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-docdetail',
  templateUrl: './docdetail.page.html',
  styleUrls: ['./docdetail.page.scss'],
})
export class DocdetailPage implements OnInit {
name;
detail=[];
checked: boolean = false;
currentuser;
document=[];
rangeVal:string;
  constructor(public route:ActivatedRoute,
    public afs:AngularFirestore,public af:AngularFireAuth,
    public loadingController:LoadingController,
    public platform:Platform,
    public toastController:ToastController) { 

this.name= this.route.snapshot.paramMap.get('name');
this.currentuser=this.af.auth.currentUser.uid;

this.platform.ready().then(()=>{
  this.rangeVal="1"
})
  }

  ngOnInit() {

this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}/MyService/${this.name}`).valueChanges()
.subscribe((doct)=>{
  this.document=[];
  this.document.push({
    name:doct.Document,
    Price:doct.Price
  });

});

    this.afs.doc<any>(`Bahrain/BH/Services/${this.name}`).valueChanges().subscribe((doc)=>{
      this.detail=[];
      this.detail.push({
        Min:doc.MinPrice,
        Max:doc.MaxPrice,
        Range:doc.rangePrice
      });
    });
  }



  add(item){

if(item==''){
  console.log("select price")
}else{
  this.afs.collection<any>(`Bahrain/Translators/Professionals/${this.currentuser}/MyService`).get().subscribe((doc)=>{
    if(doc.empty){
     this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}/MyService/${this.name}`).set({
       Document:this.name,
       Price:item
  }) 
    }
    doc.forEach((d)=>{
      if(d.data().Document === this.name){
        console.log("exist")
      }else{
       this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}/MyService/${this.name}`).set({
         Document:this.name,
         Price:item
    }).then(()=>{
      this.presentToast();
    });
      }
    });
  });
 
}

 

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      cssClass: 'toast',
    });
    toast.present();
  }

  checkboxClick(e){
    var statement = true;
    if(statement){
      e.target.checked = true;
    }
  }

}
