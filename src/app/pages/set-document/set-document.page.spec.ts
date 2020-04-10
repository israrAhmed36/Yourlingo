import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetDocumentPage } from './set-document.page';

describe('SetDocumentPage', () => {
  let component: SetDocumentPage;
  let fixture: ComponentFixture<SetDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
