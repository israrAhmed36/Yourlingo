import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  current;
  chatref;
  To;
  From;
  Me=[];
  user=[];
  constructor(public afs:AngularFirestore,public af:AngularFireAuth,public router:Router) {
    this.current=this.af.auth.currentUser.uid;
  this.From=
    // this.chatref=this.afs.collection(`Chats`,ref=>(ref.where("From","==",this.From)
    // .where("To","==",this.To))).snapshotChanges().subscribe((value)=>{
   
    //     console.log(value.data().From)
    
    // })
    this.afs.collection<any>(`Chats`,ref=>(ref
      
    .where("To","==",this.current)))
    .valueChanges().subscribe((value)=>{
    
     value.forEach((user)=>{
       this.afs.collection<any>(`Bahrain/Users/NeedHelp`).valueChanges().subscribe((us)=>{
         us.forEach((u)=>{

         })
       })
     })
        
    }) 

  
  }

}
