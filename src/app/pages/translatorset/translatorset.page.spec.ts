import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranslatorsetPage } from './translatorset.page';

describe('TranslatorsetPage', () => {
  let component: TranslatorsetPage;
  let fixture: ComponentFixture<TranslatorsetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorsetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranslatorsetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
