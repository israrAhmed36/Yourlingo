import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

import { UserdetailService } from 'src/app/services/userdetail.service';
import { IonSlides, AlertController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Mydata } from '../Interface/Mydata';
import { finalize, tap } from 'rxjs/operators';

export class User {
  email: string;
  password: string;
}



@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})

export class UserdetailPage implements OnInit {

  @ViewChild(IonSlides,{static: true}) theSlides: IonSlides;

  public user:User = new User();
slide:IonSlides;
collref;
 getvalue;
//
services;
fname;
lname;
gender;
phoneNum;
Education;
NoTranslation;
currentuser;
//
 public languagelist;
 language:any []=[];
 //
 
  //Status check 
  public slideOneForm: FormGroup;
	public slideTwoForm: FormGroup;

	public submitAttempt: boolean = false;
//
  constructor(public service: UserdetailService,
    public route:ActivatedRoute,
    public formBuilder:FormBuilder,
    public authserv: AuthService,
    public router:Router,
    public afs:AngularFirestore,
    public af:AngularFireAuth,
    public NavCtrl : NavController,
    private storage: AngularFireStorage,
    public loadingController:LoadingController,
    public alertController:AlertController)
     {
    
     
     this.getvalue=this.route.snapshot.paramMap.get('value');

    

     }

  

  ngOnInit() {
    
  // 
  this.languagelist=this.service.getLanguage().valueChanges();
  }









add(value,event){
 const checked= event.target.checked;
 if(checked){
  this.language.push(value);
 }else{
   const index = this.language.findIndex(list=>list.value == value);
   this.language.splice(index,1);
 }

 console.log(this.language);

}





  async tryRegister(){
    
    try {
      var r = await this.af.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully registered!");
         if(this.getvalue==='CanHelp' && this.services==='Professional'){
          const userID= this.af.auth.currentUser.uid;
        
          this.afs.collection<any>(`Bahrain/Translators/Professionals`).doc(`${userID}`).set({
            uid:userID,
            fname:this.fname,
            lname:this.lname,
            Gender:this.gender,
            PhoneNumber:this.phoneNum,
            Email:this.user.email,
            Education:this.Education,
            Languages: this.language,
            ServiceType: this.services,
            JoinedAt:new Date,
            NoTranslation:0
  
  
          })
          
        }else if(this.getvalue==='CanHelp' && this.services==='NonProfessional'){
          const userID= this.af.auth.currentUser.uid;

          this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`).doc(`${userID}`).set({
            uid:userID,
            fname:this.fname,
            lname:this.lname,
            Gender:this.gender,
            PhoneNumber:this.phoneNum,
            Email:this.user.email,
            Education:this.Education,
            Languages: this.language,
            ServiceType: this.services,
               JoinedAt: new Date,
               NoTranslation:0
  
          })

        }
        
        else if(this.getvalue==='NeedHelp'){
          const userID= this.af.auth.currentUser.uid;
          this.afs.collection<any>(`Bahrain/Users/NeedHelp`).doc(`${userID}`).set({
            uid:userID,
            fname: this.fname,
             lname:this.lname,
             Gender:this.gender,
             PhoneNumber:this.phoneNum,     
             Email:this.user.email,
             JoinedAt: new Date,
            
        
           });
        }
        
      }
      
    } catch (err) {
      console.error(err);
    }
  this.presentLoading();
  }
    
  //
  swipeNext(theslides){
    theslides.slideNext();

  }
  prev(){
    this.theSlides.slidePrev();
}

 
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Almost Done!',
    message: 'Just few steps more and we are done',
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          this.router.navigate(['/upload'])
        }
      }
    ]
  });

  await alert.present();
}

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait. . .',
    duration: 1000
  });
  return await loading.present()
  .then(()=>{
    this.AlertConfirm();
  })
}


async AlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Registered!',
    message: 'Account registered Successfully',
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          this.router.navigate(['/login'])
        }
      }
    ]
  });

  await alert.present();
}
  //alertcontrol

}
