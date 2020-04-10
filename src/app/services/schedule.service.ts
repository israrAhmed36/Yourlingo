import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
chatref;
From:any;
messages=[];
currentuser
  constructor(public afs:AngularFirestore,public af:AngularFireAuth) {
    this.currentuser=this.af.auth.currentUser.uid;
   }


 submitmsg(text: string,other:string,msgId:string)
 {
 
    msgId= this.afs.createId();
        this.currentuser=this.af.auth.currentUser.uid;
        this.afs.doc<any>(`Chats/${msgId}`).set({
          msgId:msgId,
           From:this.af.auth.currentUser.uid,
           To:other,
           text:text,
           Date: new Date
        })
        text='';
        
      
 }

 getmsg(){
   
   
 }
}
