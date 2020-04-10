import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


import { ModalController, AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-editschedule',
  templateUrl: './editschedule.page.html',
  styleUrls: ['./editschedule.page.scss'],
})
export class EditschedulePage implements OnInit {
value;
clicked:boolean=false;
currentuser;
startTime=new Date().toISOString();
endTime=new Date().toISOString();
id;
 time:any []=[];

  constructor(public route:ActivatedRoute,
    public afs:AngularFirestore,
    public af:AngularFireAuth,
    public modalCtrl:ModalController,
    public alertController:AlertController,
    public router:Router
   
    ) { 
 this.value= this.route.snapshot.paramMap.get('id')
 this.currentuser=this.af.auth.currentUser.uid;

 
  }
  ngOnInit() {

    this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/${this.value}`).valueChanges().subscribe((users)=>{
      this.time=[]
      users.forEach((user)=>{
       this.time.push({
        docref:user.docref,
        day:user.day,
         startTime: user.startsAt,
         endTime: user.endsAt
       })
      })
    })
  
  }
isclicked(){
   this.clicked=true;
   return this.isclicked;
}
isUnclicked(){
  this.clicked=false;
  return this.isUnclicked;
}


addschedule(){

    // this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/${this.value}`).get().subscribe((times)=>{
    //   times.forEach((time)=>{
    //     if( Date.parse(time.data().startsAt) === Date.parse(this.startTime) && Date.parse(time.data().endsAt) === Date.parse(this.endTime)){
    //             this.alreadypresent();
    //             return;
    //        }
    //   });
    // });

     if(Date.parse(this.startTime) === Date.parse(this.endTime) || Date.parse(this.endTime) === Date.parse(this.startTime) ){
      this.presentAlert();
     }
  this.id = this.afs.createId(); 
   if(Date.parse(this.endTime) > Date.parse(this.startTime)){

      this.afs.doc<any>(`Bahrain/Translators/Schedule/${this.currentuser}/${this.value}/${this.id}`).set({
        docref:this.id,
        uid:this.currentuser,
        day: this.value,
        startsAt:this.startTime,
          endsAt:this.endTime
      }).then(()=>{
       this.AddedAlert();
      });

}else{
  this.presentAlert();
}
}


async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'End date should be greater than start date',
    buttons: ['OK']
  });

  await alert.present();
}

async AddedAlert() {
  const alert = await this.alertController.create({
    header: 'Schedule Edited',
    message: 'Your Schedule has been updated',
    buttons:['OK']
  });

  await alert.present();
}

async alreadypresent(){
  const alert= await this.alertController.create({
    header:'Duplicate time',
    message:'Time range already present',
    buttons:['OK']
  });
  await alert.present();
}

async showConfirmAlert(key) {
  let alert = this.alertController.create({
      header: 'Confirm delete',
      message: 'Delete time range permanently',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.afs.doc<any>(`Bahrain/Translators/Schedule/${this.currentuser}/${this.value}/${key}`).delete()
          }
      },
          {
              text: 'No',
              handler: () => {
                  console.log('Cancel clicked');
              }
          }
         
      ]
  });
  await (await alert).present();
}
}
