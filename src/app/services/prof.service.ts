import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
public value=[];
public type=[];
public name=[];
  constructor() { }
  setvalue(value){
    this.value=value;
  }
  getvalue(){
    return this.value;
  }
  settype(type){
    this.type=type;
  }
  gettype(){
    return this.type;
  }

  setname(name){
this.name=name;
  }
  getname(){
    return this.name;
  }
}
