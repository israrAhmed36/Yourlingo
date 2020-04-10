import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranslatorlistPage } from './translatorlist.page';

describe('TranslatorlistPage', () => {
  let component: TranslatorlistPage;
  let fixture: ComponentFixture<TranslatorlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranslatorlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
