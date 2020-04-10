import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailpassPage } from './emailpass.page';

describe('EmailpassPage', () => {
  let component: EmailpassPage;
  let fixture: ComponentFixture<EmailpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailpassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
