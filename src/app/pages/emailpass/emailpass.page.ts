import { Component, OnInit } from '@angular/core';

import { UserdetailService } from 'src/app/services/userdetail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ProfService } from 'src/app/services/prof.service';

@Component({
  selector: 'app-emailpass',
  templateUrl: './emailpass.page.html',
  styleUrls: ['./emailpass.page.scss'],
})
export class EmailpassPage implements OnInit {
  getvalue;
nonpro='nonprof';
proff='prof';
  
  constructor(public service:UserdetailService,public router:Router,
    public route:ActivatedRoute,
    public prof:ProfService
    ,public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getvalue=this.prof.getvalue();
    

  }
  Nonprofessional(){
    this.prof.settype(this.nonpro);
 
  this.router.navigate(['/translatorlist'])
  }
  Professional(){
    this.prof.settype(this.proff);
  
  this.router.navigate(['/translatorlist'])
  }
  
}
