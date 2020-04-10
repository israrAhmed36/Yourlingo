import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  image:any;
  userphoto;
public myphotoref:any;
  constructor(private http:HttpClient,public af:AngularFireAuth) { 
    this.myphotoref= firebase.storage().ref(this.af.auth.currentUser.uid)
  }

  ngOnInit() {
  }
  
// captureImage () {
// this.camera.getPicture({
//   quality:50,
//   destinationType: this.camera.DestinationType.DATA_URL,
//   sourceType: this.camera.PictureSourceType.CAMERA,
//   targetHeight: 300,
//   targetWidth:300,
//   saveToPhotoAlbum:true
// }).then(imageData=>{
//   this.image=imageData;
//   this.upload();
// },error=>{
//   console.log("ERROR->"+JSON.stringify(error));
// }
// )
// }
// upload(){
// this.myphotoref.child('Photo.png')
// .putString(this.image,'base64',{contentType:'image/png'})
// .then((savedPicture)=>{

//   this.showuploadedpic();
// });
// }
// showuploadedpic(){
//   this.myphotoref.child('Photo.png').getDownloadURL().then((url)=>{
//     console.log(url);
//     this.userphoto=url;
//   })
// }
}
