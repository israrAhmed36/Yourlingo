import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userimage = null;
  currentuser;
  captureDataUrl: string;
  myPhotosRef;
  imageRef;
  DownloadUrl;
  myPhoto;
  loading;
  profile: any[] = [];
  myphotoref


  constructor(public afs: AngularFirestore,
    public af: AngularFireAuth,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authser: AuthService,
    public router: Router,
    public actionSheetController: ActionSheetController
  ) {



  }

  ngOnInit() {
    this.currentuser = this.af.auth.currentUser.uid;
 
    this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`).snapshotChanges().subscribe((users) => {
      users.forEach((user) => {
        if (this.currentuser == user.payload.doc.data().uid) {
          this.profile=[];
          this.profile.push({         
            fname: user.payload.doc.data().fname,
            lname: user.payload.doc.data().lname,
            uid: user.payload.doc.data().uid,
            servicetype: user.payload.doc.data().ServiceType,
            JoinedAt: user.payload.doc.data().JoinedAt.toDate(),
            userPhoto:user.payload.doc.data().userphoto
          });
         
        }
        return;
      });


    });
    this.afs.collection<any>(`Bahrain/Translators/Professionals`).snapshotChanges().subscribe((prof) => {
      prof.forEach((prouser) => {
        if (this.currentuser == prouser.payload.doc.data().uid) {
          this.profile=[];
          this.profile.push({
            fname: prouser.payload.doc.data().fname,
            lname: prouser.payload.doc.data().lname,
            uid: prouser.payload.doc.data().uid,
            servicetype: prouser.payload.doc.data().ServiceType,
            JoinedAt: prouser.payload.doc.data().JoinedAt.toDate(),
            userPhoto:prouser.payload.doc.data().userphoto
          });
          
        }
       
        return;
      });
    })
    this.afs.collection<any>(`Bahrain/Users/NeedHelp`).snapshotChanges().subscribe((prof) => {
     
      prof.forEach((prouser) => {
        if (this.currentuser == prouser.payload.doc.data().uid) {
          this.profile=[];
          this.profile.push({
            fname: prouser.payload.doc.data().fname,
            lname: prouser.payload.doc.data().lname,
            uid: prouser.payload.doc.data().uid,
            JoinedAt: prouser.payload.doc.data().JoinedAt.toDate(),
            userPhoto:prouser.payload.doc.data().userphoto
          });
          
        }
        return;
      });
    })

 


  }

  
  translatr(value) {
    this.router.navigate(['/translatorset', { value }]);
  }

  openprofile(uid) {
    this.router.navigate(['myprofile', { uid }])
  }


  capture() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      targetWidth: 300,
      targetHeight: 300,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
    };

    Camera.getPicture(cameraOptions).then((imageData) => {
      this.presentLoading();
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    }).then(() => {
      this.upload();
    })
  }

  selectPhoto() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 300,
      targetHeight: 300,
      encodingType: Camera.EncodingType.JPEG,
    };
    Camera.getPicture(cameraOptions).then((imageData) => {
      this.presentLoading();
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }).then(() => {
      this.upload();
    })
  }

  async upload() {

    // Create a timestamp as filename


    // Create a reference to 'images/todays-date.jpg'
    this.imageRef = firebase.storage().ref().child(`Profilepic/${this.currentuser}.jpg`);

    this.imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
      // Do something here when the data is succesfully uploaded!

    }).then(() => {

      this.showupload();
    })

  }

  showupload() {
    firebase.storage().ref().child(`Profilepic/${this.currentuser}.jpg`).getDownloadURL()
      .then((url) => {

        this.myPhoto = url;

      }
      ).catch((error) => {

      }).then(()=>{
        this.afs.collection<any>(`Bahrain/Translators/Professionals`).valueChanges()
        .subscribe((all)=>{
          all.forEach((each)=>{
            if(each.uid==this.currentuser){
              this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}`).update({
                userphoto: this.myPhoto
              })
            }
          })
        })
      })
  }

  async showSuccesfulUploadAlert() {
    let alert = await this.alertCtrl.create({
      message: 'Uploaded!',
      subHeader: 'Profile Picture Changed',
      buttons: ['OK']
    });
    alert.present();
    // clear the previous photo data in the variable

    this.captureDataUrl = "";
  }
  async signout() {
    await this.signoutLoading();
    this.authser.logoutUser()
      .then(() => {

        this.router.navigate(['login'])
      })


  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait. . .',
      duration: 5000
    });
    return await loading.present();
  }
  async signoutLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Signing out. . .',
      duration: 1000
    });
    return await loading.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          this.capture();
        }
      }, {
        text: 'Gallery',
        icon: 'image-outline',
        handler: () => {
          this.selectPhoto();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



}
