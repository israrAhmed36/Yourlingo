import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { language } from '../interfaces/language';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {
  languageList:[];

  constructor(private afs:AngularFirestore) { 
// this.afs.collection(`Bahrain/BH/Languages`).get().subscribe((snapshot)=>{
//   snapshot.forEach((value)=>{
//     this.languageList.push({
//       language:value.data().Language,
//       Trans:value.data().Translator
//     })
//   })
// })
  
  }
  
  getLanguage(): AngularFirestoreCollection<language>{
    return this.afs.collection(`Bahrain/BH/Languages`);
  }

  
}
