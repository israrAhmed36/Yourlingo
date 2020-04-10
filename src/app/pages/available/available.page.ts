import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-available',
  templateUrl: './available.page.html',
  styleUrls: ['./available.page.scss'],
})
export class AvailablePage implements OnInit {
currentuser;

sunday=[];
monday=[];
tuesday=[];
wednesday=[];
thursday=[];
friday=[];
saturday=[];

mondayadd:boolean=false;
sundayadd:boolean=false;
tuesdayadd:boolean=false;
wednesdayadd:boolean=false;
fridayadd:boolean=false;
saturdayadd:boolean=false;
thursdayadd:boolean=false;
  constructor(public router:Router,public afs:AngularFirestore,public af:AngularFireAuth) { 
      
    

  }
 
 
  ngOnInit() {
    this.currentuser= this.af.auth.currentUser.uid;
    //Sunday
    this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/Sunday`).valueChanges().subscribe((sunday)=>{
      this.sunday=[];
      sunday.forEach((sun)=>{
       this.sunday.push({
         start:sun.startsAt,
         end:sun.endsAt
       })

      });
      if( this.sunday.length >= 1 ){
        
     this.sundayadd=true;
      }else{   
       this.sundayadd=false;
      }
    });

    //Monday
    this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/Monday`).valueChanges().subscribe((monday)=>{
  this.monday=[];
      monday.forEach((sun)=>{
       this.monday.push({
         start:sun.startsAt,
         end:sun.endsAt
       })
      })
      if(this.monday.length >= 1)
      {
        
        this.mondayadd=true;
      }else{
     
        this.mondayadd=false;
      }
     
    });
    //Tuesday
    this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/Tuesday`).valueChanges().subscribe((tuesday)=>{
  this.tuesday=[];
      tuesday.forEach((tue)=>{
       this.tuesday.push({
         start:tue.startsAt,
         end:tue.endsAt
       })
      })
      if(this.tuesday.length >= 1)
      {
       
        this.tuesdayadd=true;
      }else{
       
        this.tuesdayadd=false;
      }
     
    });

    //wednesday
    this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/Wednesday`).valueChanges().subscribe((wednesday)=>{
  this.wednesday=[];
      wednesday.forEach((wed)=>{
       this.wednesday.push({
         start:wed.startsAt,
         end:wed.endsAt
       })
      })
      if(this.wednesday.length >= 1)
      {
       
        this.wednesdayadd=true;
      }else{
        
        this.wednesdayadd=false;
      }
     
    });

    //Thursday
    this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/Thursday`).valueChanges().subscribe((thursday)=>{
    this.thursday=[];
      thursday.forEach((thur)=>{
       this.thursday.push({
         start:thur.startsAt,
         end:thur.endsAt
       })
      })
      if(this.thursday.length >= 1)
      {
       
        this.thursdayadd=true;
      }else{
        
        this.thursdayadd=false;
      }
     
    });

    //Friday
    this.afs.collection<any>(`Bahrain/Translators/Schedule/${this.currentuser}/Friday`).valueChanges().subscribe((friday)=>{
  this.friday=[];
      friday.forEach((fri)=>{
       this.friday.push({
         start:fri.startsAt,
         end:fri.endsAt
       })
      })
      if(this.friday.length >= 1)
      {
        
        this.fridayadd=true;
      }else{
       
        this.fridayadd=false;
      }
     
    });
   
  }
 
  editSunday(){
    const value="Sunday";
    this.router.navigate(['/editschedule',{id:value}])
  }

  editFriday(){
    const value="Friday";
    this.router.navigate(['/editschedule',{id:value}])
  }

  editThursday(){
    const value="Thursday";
    this.router.navigate(['/editschedule',{id:value}])
  }

  editWednesday(){
    const value="Wednesday";
    this.router.navigate(['/editschedule',{id:value}])
  }

  editTuesday(){
    const value="Tuesday";
    this.router.navigate(['/editschedule',{id:value}])
  }

  editMonday(){
    const value="Monday";
    this.router.navigate(['/editschedule',{id:value}])
  }

}
