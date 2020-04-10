import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-translatordetail',
  templateUrl: './translatordetail.page.html',
  styleUrls: ['./translatordetail.page.scss'],
})
export class TranslatordetailPage implements OnInit {
 getvalue:string;
  mydetail=[];
  type;
  about=[];
  document=[];
  exist:boolean=false;
  prof:boolean=false;
  Nonprof:boolean=false;
hour="Not set";
current;
  constructor(public route:ActivatedRoute, 
    public router:Router,
    public af:AngularFireAuth,
    public afs :AngularFirestore) 
    {
    this.getvalue=this.route.snapshot.paramMap.get('uid');
this.current=this.af.auth.currentUser.uid;
    this.type="Languages";
if(this.getvalue == this.current){
this.exist=true;
}
    
  }

  ngOnInit() {
    
   //Professional Detail 
    this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((detail)=>{
      detail.forEach((det)=>{
        if(det.data().uid == this.getvalue){
          this.prof=true;
          this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.getvalue}`).get().subscribe((user)=>{
            this.mydetail.push({
              fname:user.data().fname,
              lname:user.data().lname,
              Education:user.data().Education,
              Gender:user.data().Gender,
              JoinedAt:user.data().JoinedAt.toDate(),
              Languages:user.data().Languages,
              ServiceType:user.data().ServiceType,
              userimage:user.data().userphoto
            });
          });
        }
      });
    });

    this.afs.collection<any>(`Bahrain/Translators/Professionals`).snapshotChanges().subscribe((detail)=>{
      detail.forEach((det)=>{
        if(det.payload.doc.data().uid==this.getvalue){
          this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.getvalue}/MyData/${this.getvalue}`).get()
          .subscribe((ab)=>{
             this.about.push({
about:ab.data().aboutme
             });
             
          });
        }
      });
    });

//Non professional detail
    this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`).get().subscribe((detail)=>{
      detail.forEach((det)=>{
        if(det.data().uid == this.getvalue){
          this.Nonprof=true;
          this.afs.doc<any>(`Bahrain/Translators/NonProfessionals/${this.getvalue}`).get().subscribe((user)=>{
            this.mydetail.push({
              fname:user.data().fname,
              lname:user.data().lname,
              Education:user.data().Education,
              Gender:user.data().Gender,
              JoinedAt:user.data().JoinedAt.toDate(),
              Languages:user.data().Languages,
              ServiceType:user.data().ServiceType,
              Translations:user.data().NoTranslation,
              userimage:user.data().userphoto
            });
          });
        }
      });
    });

    this.afs.collection<any>(`Bahrain/Translators/NonProfessionals`).snapshotChanges().subscribe((detail)=>{
      detail.forEach((det)=>{
        if(det.payload.doc.data().uid==this.getvalue){
          this.afs.doc<any>(`Bahrain/Translators/NonProfessionals/${this.getvalue}/MyData/${this.getvalue}`).get()
          .subscribe((ab)=>{
             this.about.push({
about:ab.data().aboutme
             });
             
          });
        }
      });
    });

this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((all)=>{
  all.forEach((each)=>{
    if(each.data().uid == this.getvalue)
    {
      this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.getvalue}/Myrates/${this.getvalue}`)
      .get().subscribe((rate)=>{
        this.hour=rate.data().Hourrate
      })
     
    }
  })
})

  

this.documents();
  }

  chatwith(){
    
this.router.navigate(['/chat',{uid:this.getvalue}])
  }
  

  documents(){
  
    this.afs.collection<any>(`Bahrain/Translators/Professionals/${this.getvalue}/MyService`)
    .get().subscribe((doc)=>{
      doc.forEach((d)=>{
      
 this.document.push({
   name:d.data().Document,
   price:d.data().Price
 })
      })
    })
  }

  doc(name,price){
    this.router.navigate(['set-document/'+name+'#'+this.getvalue+'#'+price]);


  }
}
