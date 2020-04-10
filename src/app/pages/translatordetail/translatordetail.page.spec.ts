import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranslatordetailPage } from './translatordetail.page';

describe('TranslatordetailPage', () => {
  let component: TranslatordetailPage;
  let fixture: ComponentFixture<TranslatordetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatordetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranslatordetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
