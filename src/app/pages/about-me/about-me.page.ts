import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {
  Aboutme;
  current;
  constructor(public afs:AngularFirestore,public router:Router,public af:AngularFireAuth) { }

  ngOnInit() {
     this.current= this.af.auth.currentUser.uid;
  }

  aboutme(){
  this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((currents)=>{
   currents.forEach((current)=>{
     if(current.data().uid==this.current)
     {
       this.afs.collection<any>(`Bahrain/Translators/Professionals/${this.current}/MyData`).doc(`${this.current}`).set({
         aboutme:this.Aboutme
       })
     }
   })
  });

  this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`).get().subscribe((currents)=>{
    currents.forEach((current)=>{
      if(current.data().uid==this.current)
      {
        this.afs.collection<any>(`Bahrain/Translators/NonProfessionals/${this.current}/MyData`).doc(`${this.current}`).set({
          aboutme:this.Aboutme
        })
      }
    })
   });

  }
}
