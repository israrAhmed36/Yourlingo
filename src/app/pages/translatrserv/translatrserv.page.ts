
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-translatrserv',
  templateUrl: './translatrserv.page.html',
  styleUrls: ['./translatrserv.page.scss'],
})

export class TranslatrservPage implements OnInit {
 docId;
 document=[];
 splitter;
 ById;
 WithId;
 prof:boolean=false;
 non:boolean=false;
currentuser;
  constructor(public route:ActivatedRoute,
  public afs:AngularFirestore,
  public alertController:AlertController,
  public router:Router,
  public af:AngularFireAuth,
  public loadingController:LoadingController) { 
   

 this.splitter=this.route.snapshot.paramMap.get('id').split('#');
  this.ById= this.splitter[0];
this.WithId=this.splitter[1];
this.docId=this.splitter[2];

   this.currentuser=this.af.auth.currentUser.uid;
this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((all)=>{
  all.forEach((each)=>{
    if(each.data().uid == this.currentuser){
  this.prof=true;
    }
  });
});

this.afs.collection<any>(`Bahrain/Users/NeedHelp`).get().subscribe((all)=>{
  all.forEach((each)=>{
    if(each.data().uid == this.currentuser){
  this.non=true;
    }
  });
});

    this.afs.doc<any>(`Bahrain/Booking/Pending/${this.docId}`).valueChanges().subscribe((doc)=>{
this.document.push({
   firstname:doc.fname,
  lastname:doc.lname,
  tfname:doc.tfname,
  tlname:doc.tlname,
   docId:doc.docId,
    By:doc.By,
    with: doc.with,
    SubmitOn: doc.SubmitOn.toDate(),
    totalPrice:doc.totalPrice,
    NoPages:doc.NoPages,
    Document: doc.Document,
    Description:doc.Description,
    Accepted:doc.Accepted,
    Status:doc.Status
});
    });
   

  }

  ngOnInit() {
  }



AcceptDoc(docId){
this.presentAlert(docId)
}

RejectDoc(docId){

this.presentAlertConfirm(docId);
}

async presentAlertConfirm(docId) {
  console.log(docId)
  const alert = await this.alertController.create({
    header: 'Reject Document',
    buttons: [
      {
        text: 'Yes',
        handler: () => {
 this.delete(docId);
        }
      }
    
    ]
  });

  await alert.present();
}

async presentAlert(docId) {
  console.log(docId)
  const alert = await this.alertController.create({
    header: 'Document Accepted',
    buttons: [
      {
        text: 'OK',
        handler: () => {
 this.Accept(docId);
        }
      }
    
    ]
  });

  await alert.present();
}


Accept(docId){
  this.afs.doc<any>(`Bahrain/Booking/Pending/${docId}`).get().subscribe((doc)=>{
    this.afs.doc<any>(`Bahrain/Booking/Accepted/${docId}`).set({
      firstname:doc.data().fname,
      lastname:doc.data().lname,
      tfname:doc.data().tfname,
      tlname:doc.data().tlname,
       docId:doc.data().docId,
By:doc.data().By,
with: doc.data().with,
SubmitOn: doc.data().SubmitOn.toDate(),
totalPrice:doc.data().totalPrice,
NoPages:doc.data().NoPages,
Document: doc.data().Document,
Description:doc.data().Description,
Accepted: 'True',
Status:'Accepted'
    }).then(()=>{
      this.afs.doc<any>(`Bahrain/Booking/Pending/${docId}`).delete();
      
    }).then(()=>{
      this.presentLoading()
    })
  })
}

delete(docId){
          this.afs.doc<any>(`Bahrain/Booking/Pending/${docId}`).get().subscribe((doc)=>{
           this.afs.doc<any>(`Bahrain/Booking/Rejected/${docId}`).set({
             firstname:doc.data().fname,
             lastname:doc.data().lname,
             tfname:doc.data().tfname,
             tlname:doc.data().tlname,
              docId:doc.data().docId,
    By:doc.data().By,
    with: doc.data().with,
    SubmitOn: doc.data().SubmitOn.toDate(),
    totalPrice:doc.data().totalPrice,
    NoPages:doc.data().NoPages,
    Document: doc.data().Document,
    Description:doc.data().Description,
    Accepted: 'False',
    Status:'Rejected'
           }).then(()=>{
             this.afs.doc<any>(`Bahrain/Booking/Pending/${docId}`).delete();
             
           }).then(()=>{
             this.presentLoading()
           })
         })
}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
   this.router.navigate(['/tabs/tab1']);
  }
}
