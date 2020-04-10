import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.page.html',
  styleUrls: ['./usertype.page.scss'],
})
export class UsertypePage implements OnInit {
  value:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onRegister(value){
    console.log(value)
    this.router.navigate(['/userdetail',{value}]);
  }
}
