import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsertypePage } from './usertype.page';

describe('UsertypePage', () => {
  let component: UsertypePage;
  let fixture: ComponentFixture<UsertypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsertypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
