import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

import { ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
value;
mydetail=[];
type;
currentuser;
about=[];
document=[];
prof:boolean=false;
non:boolean=false;
user:boolean=false;
  constructor(public route:ActivatedRoute,
     public afs:AngularFirestore,
     public af:AngularFireAuth,
     
     ) { 

this.type="Overview";
this.currentuser= this.af.auth.currentUser.uid;

  }

  ngOnInit() {
    this.value= this.route.snapshot.paramMap.get('uid')
    console.log(this.value)
    this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((detail)=>{
      detail.forEach((det)=>{
        if(det.data().uid == this.value){
          this.prof=true;
          this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.value}`).get().subscribe((user)=>{
            this.mydetail.push({
              fname:user.data().fname,
              lname:user.data().lname,
              Education:user.data().Education,
              Gender:user.data().Gender,
              JoinedAt:user.data().JoinedAt.toDate(),
              Languages:user.data().Languages,
              ServiceType:user.data().ServiceType,
              userPhoto:user.data().userphoto
            });
          });
        }
      });
    });


    this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`).get().subscribe((detail)=>{
      detail.forEach((det)=>{
        if(det.data().uid == this.value){
          this.non=true;
          this.afs.doc<any>(`Bahrain/Translators/NonProfessionals/${this.value}`).get().subscribe((user)=>{
            this.mydetail.push({
              fname:user.data().fname,
              lname:user.data().lname,
              Education:user.data().Education,
              Gender:user.data().Gender,
              JoinedAt:user.data().JoinedAt.toDate(),
              Languages:user.data().Languages,
              ServiceType:user.data().ServiceType,
              userPhoto:user.data().userphoto
            });
          });
        }
      });
    });

    this.afs.collection<any>(`Bahrain/Users/NeedHelp`).get().subscribe((detail)=>{
      detail.forEach((det)=>{
        if(det.data().uid == this.value){
          this.user=true;
          this.afs.doc<any>(`Bahrain/Users/NeedHelp/${this.value}`).get().subscribe((user)=>{
            this.mydetail.push({
              fname:user.data().fname,
              lname:user.data().lname,
              Gender:user.data().Gender,
              Email:user.data().Email,
              Phone:user.data().PhoneNumber,
              JoinedAt:user.data().JoinedAt.toDate(),
              userPhoto:user.data().userphoto
          
            });
          });
        }
      });
    });

    //
    this.documents();
    this.aboutme();

    // this.afs.collection<any>(`Bahrain/`)
  }
  aboutme(){

    this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((all)=>{
      all.forEach((each)=>{
      
        if(each.data().uid== this.currentuser)
        {
        
          this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}/MyData/${this.currentuser}`).get().subscribe((about)=>{
            this.about.push({
              aboutme:about.data().aboutme
            })
            
          })
        }
      })
    })
  }
  
  documents(){
  
    this.afs.collection<any>(`Bahrain/Translators/Professionals/${this.currentuser}/MyService`)
    .get().subscribe((doc)=>{
      doc.forEach((d)=>{
      
 this.document.push({
   name:d.data().Document,
   price:d.data().Price
 })
      })
    })
  }
  
}
