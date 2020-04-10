import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdetailService } from 'src/app/services/userdetail.service';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfService } from 'src/app/services/prof.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-translatorset',
  templateUrl: './translatorset.page.html',
  styleUrls: ['./translatorset.page.scss'],
})
export class TranslatorsetPage implements OnInit {
  getvalue;
  currentuser;
Prof:boolean=false;
NonProf:boolean=false;
languagelist;
  constructor(
    public route:ActivatedRoute,
    public service:UserdetailService,
     public alertController:AlertController,
     public prof:ProfService,
     public afs:AngularFirestore,
     public router:Router,
     public af:AngularFireAuth
     ) 
     { 
     this.currentuser= this.af.auth.currentUser.uid
      this.getvalue=this.route.snapshot.paramMap.get('value');

 this.afs.collection<any>(`Bahrain/Translators/Professionals`).valueChanges().subscribe((all)=>{
   all.forEach((each)=>{
     if(each.uid== this.currentuser){
          this.Prof=true; 
          return; 
     }
   });
 });

 this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`).valueChanges().subscribe((all)=>{
  all.forEach((each)=>{
    if(each.data().uid== this.currentuser){
         this.NonProf=true; 
         return; 
    }
  });
});



    
     }

  ngOnInit() {
   
         
  }
  available(){
    this.router.navigate(['/available'])
  }

opendoc(){
this.router.navigate(['/documents'])
}


myrates(){
  this.router.navigate(['myrates'])
}

languages(){
  this.router.navigate(['chatlist'])
}
}

