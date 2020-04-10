import { Component, OnInit, ɵConsole, Query } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
text: string;
chatref: any;
From:string;
other:string;
current:boolean=false;
currentuser;
Me:any[]=[];

  constructor(public af:AngularFireAuth , public afs:AngularFirestore
    ,public route:ActivatedRoute,
    public chatservice: ScheduleService
    ) { 
    this.currentuser=this.af.auth.currentUser.uid;
    this.other=this.route.snapshot.paramMap.get('uid');
     
    
this.afs.collection<any>(`Chats`).valueChanges().subscribe((all)=>{
  this.Me=[];
  all.forEach((each)=>{
 
    if(each.From == this.currentuser && each.To == this.other || each.From == this.other && each.To ==this.currentuser ){
      this.Me.push({
        From:each.From,
        To:each.To,
        text:each.text,
        Date:each.Date.toDate()
      })
    }
  })
})
// this.afs.collection<any>(`Chats`).valueChanges().subscribe((all)=>{
  
//   all.forEach((each)=>{
 
//     if(each.From == this.other && each.To == this.currentuser )
//     {
//       this.Me.push({
//         From:each.From,
//         To:each.To,
//         text:each.text,
//         Date:each.Date.toDate()
//       })
//     }
    
//   })
// })


  // this.afs.collection<any>(`Chats`, ref => (ref
  //     .where("From", "==", this.currentuser)
  //     .where("To", "==", this.other)
  //   ))
  //     .valueChanges().subscribe((value) => { 
  //       this.Me=[];      
  //       value.forEach((snap) => {
  //         console.log(snap)
  //         this.Me.push(snap);
  //         // this.current= this.Me.includes(snap.Date)
      
  //           // {
  //           //   this.Me.push({
  //           //     From: snap.From,
  //           //     To: snap.To,
  //           //     text: snap.text,
  //           //     Date: snap.Date
  //           //   })
  
  //           // }
           
       

  //       })

  //     })





    // this.afs.collection<any>(`Chats`,ref=>(ref
    //   .where("From","==",this.other)
    // .where("To","==",this.currentuser)))
    // .valueChanges().subscribe((value)=>{
    //   this.Me=[]; 
    //   value.forEach((snap)=>{
    //     this.Me.push(snap);
    //       // {
    //       //   this.Me.push({
    //       //     From: snap.From,
    //       //     To: snap.To,
    //       //     text:snap.text,
    //       //     Date: snap.Date
    //       //   })
    //       // }
    //   })      
    // }) 
  }

  ngOnInit() {

    
  }

  sendmsg(){

  
  if(this.text!=""){

    this.currentuser=this.af.auth.currentUser.uid;
    this.afs.collection<any>(`Chats`).add({
       From:this.af.auth.currentUser.uid,
       To:this.other,
       text:this.text,
       Date: new Date
    })
    this.text='';
    
  }
}
}
