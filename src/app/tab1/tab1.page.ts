import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserdetailService } from '../services/userdetail.service';
import { Router } from '@angular/router';
import { ProfService } from '../services/prof.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  languagelist
  constructor(public afs:AngularFirestore,
    public router:Router,
    public prof: ProfService,
    public service:UserdetailService) {

    this.languagelist=this.service.getLanguage().valueChanges();
  }
  nextpage(value){
    this.prof.setvalue(value);
 this.router.navigate(['/emailpass'])
  }
}
