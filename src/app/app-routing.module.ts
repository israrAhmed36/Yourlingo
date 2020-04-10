import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'emailpass',
    loadChildren: () => import('./pages/emailpass/emailpass.module').then( m => m.EmailpassPageModule)
  },
  {
    path: 'usertype',
    loadChildren: () => import('./pages/usertype/usertype.module').then( m => m.UsertypePageModule)
  },
  {
    path: 'userdetail',
    loadChildren: () => import('./pages/userdetail/userdetail.module').then( m => m.UserdetailPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'translatorlist',
    loadChildren: () => import('./pages/translatorlist/translatorlist.module').then( m => m.TranslatorlistPageModule)
  },
  {
    path: 'translatordetail',
    loadChildren: () => import('./pages/translatordetail/translatordetail.module').then( m => m.TranslatordetailPageModule)
  },

 
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'translatorset',
    loadChildren: () => import('./pages/translatorset/translatorset.module').then( m => m.TranslatorsetPageModule)
  },
  {
    path: 'translatrserv/:id',
    loadChildren: () => import('./pages/translatrserv/translatrserv.module').then( m => m.TranslatrservPageModule)
  },
  {
    path: 'available',
    loadChildren: () => import('./pages/available/available.module').then( m => m.AvailablePageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'editschedule',
    loadChildren: () => import('./pages/editschedule/editschedule.module').then( m => m.EditschedulePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chatlist',
    loadChildren: () => import('./pages/chatlist/chatlist.module').then( m => m.ChatlistPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./pages/myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./pages/upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'docdetail',
    loadChildren: () => import('./pages/docdetail/docdetail.module').then( m => m.DocdetailPageModule)
  },
  {
    path: 'translate-doc',
    loadChildren: () => import('./pages/translate-doc/translate-doc.module').then( m => m.TranslateDocPageModule)
  },
  {
    path: 'set-document/:id',
    loadChildren: () => import('./pages/set-document/set-document.module').then( m => m.SetDocumentPageModule)
  },
  {
    path: 'mycv',
    loadChildren: () => import('./pages/mycv/mycv.module').then( m => m.MycvPageModule)
  },
  {
    path: 'myrates',
    loadChildren: () => import('./pages/myrates/myrates.module').then( m => m.MyratesPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
