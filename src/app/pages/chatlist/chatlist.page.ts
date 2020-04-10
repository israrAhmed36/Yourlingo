import { Component, OnInit } from '@angular/core';
import { UserdetailService } from 'src/app/services/userdetail.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
  languagelist;
  alllang=[];
  notselected=[];
  currentuser;
  constructor( public service:UserdetailService,public af:AngularFireAuth,public afs:AngularFirestore) { }

  ngOnInit() {
    this.languagelist=this.service.getLanguage().valueChanges();
  this.currentuser=this.af.auth.currentUser.uid;
  
    this.afs.collection<any>(`Bahrain/BH/Languages`).valueChanges().subscribe((all)=>{
      all.forEach((each)=>{        
         this.alllang= each.lang      
      })
      this.afs.collection<any>(`Bahrain/Translators/Professionals`).get().subscribe((all)=>{
        all.forEach((each)=>{
          if(each.data().uid == this.currentuser){
            this.afs.doc<any>(`Bahrain/Translators/Professionals/${this.currentuser}`).get().subscribe((curr)=>{
              if(!this.alllang.includes(curr.data().Languages)){
                this.notselected.push({
                  lang:curr.data().Languages
                });
              }
            });
          }
        });
      });
    });

  }

}
