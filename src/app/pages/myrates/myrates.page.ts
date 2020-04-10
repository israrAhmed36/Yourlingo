import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-myrates',
  templateUrl: './myrates.page.html',
  styleUrls: ['./myrates.page.scss'],
})
export class MyratesPage implements OnInit {
  value;
  currentuser;
  myrates
  constructor(public af:AngularFireAuth,public afs:AngularFirestore,public toastController:ToastController) {
    this.currentuser=this.af.auth.currentUser.uid;
   }
   
  ngOnInit() {
    this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((all)=>{
      all.forEach((each)=>{
        if(each.data().uid== this.currentuser){
          this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}/Myrates/${this.currentuser}`)
          .snapshotChanges().subscribe((rate)=>{
                this.myrates=rate.payload.data().Hourrate
          })
         
        }
      })
    })
  }
  rates(){
    this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((all)=>{
      all.forEach((each)=>{
        if(each.data().uid== this.currentuser){
          this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}/Myrates/${this.currentuser}`)
          .set({
              Hourrate:this.value
          }).then(()=>{
            this.presentToast();
          })
        }
      })
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      cssClass: 'toast',
    });
    toast.present();
  }
}
