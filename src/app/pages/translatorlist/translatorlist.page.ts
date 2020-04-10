import { Component, OnInit } from '@angular/core';
import { UserdetailService } from 'src/app/services/userdetail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfService } from 'src/app/services/prof.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-translatorlist',
  templateUrl: './translatorlist.page.html',
  styleUrls: ['./translatorlist.page.scss'],
})
export class TranslatorlistPage implements OnInit {
  getvalue;
  value;
  type;
  hour
   lang:any[]=[];
  constructor(public service:UserdetailService,public router:Router,
    public afs: AngularFirestore,public route:ActivatedRoute,
    public prof:ProfService) { 
      this.type=this.prof.gettype();
      this.value=this.prof.getvalue()
    
  }

  ngOnInit() {
   if(this.type==='nonprof'){
    this.lang=[]
     this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`,
     ref=>(ref.where("Languages","array-contains",this.value))).get().subscribe((Users)=>{
      this.lang=[]
       Users.forEach((user)=>{  
        this.lang.push({
          userid: user.data().uid,
          fname:user.data().fname,
          lname:user.data().lname,
          number:user.data().PhoneNumber,
          gender:user.data().Gender,
          NoTranslation:user.data().NoTranslation,
          userimage:user.data().userphoto
        })

      })
        })
        
   }else if(this.type==='prof'){
    this.lang=[]
    this.afs.collection<any>(`Bahrain/Translators/Professionals`,
    ref=>(ref.where("Languages","array-contains",this.value))).get().subscribe((Users)=>{
     this.lang=[]
      Users.forEach((user)=>{  
       this.lang.push({
         userid: user.data().uid,
         fname:user.data().fname,
         lname:user.data().lname,
         number:user.data().PhoneNumber,
         gender:user.data().Gender,
         userimage:user.data().userphoto
       })

     })
       })
   }

  
    
  }
  detail(uid){ 
  
    this.router.navigate(['/translatordetail',{uid}])
  }
  
}
