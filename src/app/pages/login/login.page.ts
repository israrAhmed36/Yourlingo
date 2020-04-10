import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';



export class User {
  email: string;
  password: string;
} 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user:User = new User();
  constructor(public formBuilder:FormBuilder,
    public authserv :AuthService,
     public router:Router,
     public navCtrl: NavController,
     public af:AngularFireAuth) { }

  ngOnInit() {
   
  }

  


//login
async loginUser(){
  try {
    var r = await this.af.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    );
    if (r) {
      console.log("Successfully logged in!");
      this.router.navigate(['/tabs/tab1'])
    }
  } catch (err) {
    console.error(err);
  }
}


register(){
  this.router.navigate(['/usertype'])
}
}
