import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import *as firebase from 'firebase';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/File/ngx';
@Component({
  selector: 'app-set-document',
  templateUrl: './set-document.page.html',
  styleUrls: ['./set-document.page.scss'],
})
export class SetDocumentPage implements OnInit {
document;
uid;
num=1;
splitter;
price=0;
ttoal=0;
images:any=[];
desc;
docId;
imageRef;
currentuser;
captureDataUrl: string;
accepted:boolean=false;
rejected: boolean=false;
  constructor(public route:ActivatedRoute,
    public actionSheetController:ActionSheetController,
    public fileChooser:FileChooser,
    public file:File,
    public afs:AngularFirestore,
    public af:AngularFireAuth,
    public alertController: AlertController,
    public router:Router
       
    ) { 

       this.currentuser=this.af.auth.currentUser.uid;

  this.splitter=this.route.snapshot.paramMap.get('id').split('#');
  this.document= this.splitter[0];
this.uid=this.splitter[1];
this.price=parseFloat(this.splitter[2]) ;
this.ttoal=this.price;

  }

  ngOnInit() {
  }
  minus(){
    this.num+=1;
    this.ttoal= this.price*this.num;
  
  }
  add(){
    if(this.num!=1){
      this.num-=1;
      this.ttoal=this.price*this.num;
    }
  }



getfile(){
  this.fileChooser.open().then((url)=>{
    alert(url)
    this.file.resolveLocalFilesystemUrl(url).then((newurl)=>{
alert(JSON.stringify(newurl));
let dirPath=newurl.nativeURL;
let dirPathSegment= dirPath.split('/');
dirPathSegment.pop();
dirPath=dirPathSegment.join('/');
this.file.readAsArrayBuffer(dirPath, newurl.name).then(async( buffer)=>{
  await this.upload(buffer,newurl.name)
})
    })
  })
}
 async upload(buffer,name){
let blob= new Blob([buffer],{type:"image/jpg"});
let storage=firebase.storage();
storage.ref('images/'+name).put(blob).then((d)=>{
  alert("Done")
}).catch((error)=>{
  alert(JSON.stringify(error))
})
 }


submitbooking(){
this.docId= this.afs.createId();
this.afs.doc<any>(`Bahrain/Users/NeedHelp/${this.currentuser}`).get().subscribe((curr)=>{
  this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.uid}`).get().subscribe((wit)=>{
  this.afs.doc<any>(`Bahrain/Booking/Pending/${this.docId}`).set({
  docId:this.docId,
  fname:curr.data().fname,
  lname:curr.data().lname,
  tfname:wit.data().fname,
  tlname:wit.data().lname,
    By:this.currentuser,
    with: this.uid,
    SubmitOn: new Date,
    totalPrice:this.ttoal,
    NoPages:this.num,
    Document: this.document,
    Description:this.desc,
    Accepted:this.accepted,
    Status:'Pending'
     
    

  }).then(()=>{
this.presentAlertConfirm();
  })

  })
})

}


async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Document Submitted',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.router.navigate(['/translatordetail'])
        }
      }
    ]
  });

  await alert.present();
}

  



}
