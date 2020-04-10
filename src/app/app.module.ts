import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import{ AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { NgCalendarModule } from 'ionic2-calendar';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { File } from '@ionic-native/File/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [
   
  ],
  imports: [BrowserModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicModule.forRoot(), AppRoutingModule,
    AngularFirestoreModule,
  NgCalendarModule,
  AngularFireStorageModule,
  AngularFirestoreModule,
   HttpClientModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
   AuthService,
  FirebaseX,
   HttpClientModule,
   HttpClient,
   ImagePicker,
   File,
   FileChooser,
    { provide: RouteReuseStrategy,useClass: IonicRouteStrategy},
    
   
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
