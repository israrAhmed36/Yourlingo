import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  type;
  upcoming=[];
  completed=[];
  canceled=[];
  myBooking=[]
  currentuser;
  userid;
  helpp;
  help:boolean=false;
  can:boolean=false;
  constructor(public af:AngularFireAuth,
  public afs:AngularFirestore,
  
  public router:Router) {
      

 this.currentuser=this.af.auth.currentUser.uid;

this.afs.collection<any>(`Bahrain/Users/NeedHelp`).valueChanges().subscribe((all)=>{
  all.forEach((each)=>{
   if(this.currentuser == each.uid){
    this.help=true;
    this.helpp="PENDING";
   }
     });
if(this.help){
this.afs.collection<any>(`Bahrain/Booking/Pending`,ref=>(ref.where("By","==",this.currentuser)))
.valueChanges().subscribe((all)=>{
  this.upcoming=[];
all.forEach((each)=>{
   this.upcoming.push({
     fname:each.fname,
     lname:each.lname,
     tfname:each.tfname,
     tlname:each.tlname,
        By:each.By,
    with: each.with,
    SubmitOn:each.SubmitOn.toDate(),
    totalPrice:each.totalPrice,
    NoPages:each.NoPages,
    Document: each.Document,
    Description:each.Description,
    Accepted:each.accepted,
    docId:each.docId,
    Status:each.Status
   });
});
});

this.afs.collection<any>(`Bahrain/Booking/Accepted`,ref=>(ref.where("By","==",this.currentuser)))
.valueChanges().subscribe((all)=>{
  this.completed=[];
all.forEach((each)=>{
   this.completed.push({
     fname:each.firstname,
     lname:each.lastname,
     tfname:each.tfname,
     tlname:each.tlname,
        By:each.By,
    with: each.with,
    SubmitOn:each.SubmitOn.toDate(),
    totalPrice:each.totalPrice,
    NoPages:each.NoPages,
    Document: each.Document,
    Description:each.Description,
    Accepted:each.accepted,
    docId:each.docId,
    Status:each.Status
   });
});
});

this.afs.collection<any>(`Bahrain/Booking/Rejected`,ref=>(ref.where("By","==",this.currentuser)))
.valueChanges().subscribe((all)=>{
  this.canceled=[];
all.forEach((each)=>{
   this.canceled.push({
     fname:each.firstname,
     lname:each.lastname,
     tfname:each.tfname,
     tlname:each.tlname,
        By:each.By,
    with: each.with,
    SubmitOn:each.SubmitOn.toDate(),
    totalPrice:each.totalPrice,
    NoPages:each.NoPages,
    Document: each.Document,
    Description:each.Description,
    Accepted:each.accepted,
    docId:each.docId,
    Status:each.Status
   });
});
});

}


});

//Professionals
 this.afs.collection<any>(`Bahrain/Translators/Professionals`).valueChanges().subscribe((all)=>{
   all.forEach((each)=>{
     if(this.currentuser == each.uid ){
this.can=true;
 this.type="PENDING";
     }
      });
     if(this.can){
    
       this.afs.collection<any>(`Bahrain/Booking/Pending`,ref=>(ref.where("with","==",this.currentuser)))
.valueChanges().subscribe((all)=>{
  this.upcoming=[];
all.forEach((each)=>{
   this.upcoming.push({
      fname:each.fname,
     lname:each.lname,
     tfname:each.tfname,
     tlname:each.tlname,
        By:each.By,
    with: each.with,
    SubmitOn:each.SubmitOn.toDate(),
    totalPrice:each.totalPrice,
    NoPages:each.NoPages,
    Document: each.Document,
    Description:each.Description,
    Accepted:each.Accepted,
    docId:each.docId
   });
});
});


this.afs.collection<any>(`Bahrain/Booking/Accepted`,ref=>(ref.where("with","==",this.currentuser)))
.valueChanges().subscribe((all)=>{
  this.completed=[];
all.forEach((each)=>{
   this.completed.push({
      fname:each.fname,
     lname:each.lname,
     tfname:each.tfname,
     tlname:each.tlname,
        By:each.By,
    with: each.with,
    SubmitOn:each.SubmitOn.toDate(),
    totalPrice:each.totalPrice,
    NoPages:each.NoPages,
    Document: each.Document,
    Description:each.Description,
    Accepted:each.Accepted,
    docId:each.docId
   });
});
});


       this.afs.collection<any>(`Bahrain/Booking/Rejected`,ref=>(ref.where("with","==",this.currentuser)))
.valueChanges().subscribe((all)=>{
  this.canceled=[];
all.forEach((each)=>{
   this.canceled.push({
      fname:each.fname,
     lname:each.lname,
     tfname:each.tfname,
     tlname:each.tlname,
        By:each.By,
    with: each.with,
    SubmitOn:each.SubmitOn.toDate(),
    totalPrice:each.totalPrice,
    NoPages:each.NoPages,
    Document: each.Document,
    Description:each.Description,
    Accepted:each.Accepted,
    docId:each.docId
   });
});
});

     }
    
  
 })

  }

 ngOnInit() {
   
  }
openDoc(ById,withId,id){
 this.afs.doc<any>(`Bahrain/Booking/Pending/${id}`).update({
   Status:'Document Reviewed'
 }).then(()=>{
  this.router.navigate(['translatrserv/'+ ById + '#' + withId +'#'+id]);
 }) 
}

openMyDoc(ById,withId,id){
  this.router.navigate(['translatrserv/'+ ById + '#' + withId +'#'+id]);
}
}



